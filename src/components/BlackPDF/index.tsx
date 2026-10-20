import React, {useEffect, useState, type ComponentType, type ReactNode, type SVGProps} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BookOpen from './icons/book-open.svg';
import LayoutGrid from './icons/layout-grid.svg';
import Lock from './icons/lock.svg';
import MessageSquare from './icons/message-square.svg';
import RefreshCw from './icons/refresh-cw.svg';
import ScanText from './icons/scan-text.svg';
import Scissors from './icons/scissors.svg';
import Signature from './icons/signature.svg';
import {LANGS, T, type Lang} from './texts';
import styles from './styles.module.css';

const REPO = 'https://github.com/TheBlackRobotsFoundation/BlackPDF';
const RELEASES = `${REPO}/releases/latest`;
const API = 'https://api.github.com/repos/TheBlackRobotsFoundation/BlackPDF/releases/latest';
const STORAGE_KEY = 'blackpdf-lang';

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  'book-open': BookOpen,
  'layout-grid': LayoutGrid,
  scissors: Scissors,
  'refresh-cw': RefreshCw,
  'message-square': MessageSquare,
  signature: Signature,
  'scan-text': ScanText,
  lock: Lock,
};

type Platform = 'windows' | 'linux' | 'mac' | 'mobile';
type Downloads = {windows: string; appimage: string; deb: string; version: string};

function detectPlatform(): Platform {
  const agent = navigator.userAgent;
  if (/android|iphone|ipad|ipod|mobile/i.test(agent)) return 'mobile';
  // El iPad se presenta como un Mac, pero tiene pantalla táctil.
  if (/macintosh|mac os x/i.test(agent)) return navigator.maxTouchPoints > 1 ? 'mobile' : 'mac';
  if (/linux|x11/i.test(agent)) return 'linux';
  return 'windows';
}

function savedLanguage(): Lang | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && saved in T) return saved as Lang;
  } catch {
    // almacenamiento no disponible
  }
  return null;
}

function saveLanguage(code: Lang): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // almacenamiento no disponible
  }
}

function browserLanguage(): Lang | null {
  for (const name of navigator.languages || [navigator.language]) {
    const code = name.slice(0, 2).toLowerCase();
    if (code in T) return code as Lang;
  }
  return null;
}

function CloseIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function BlackPDFPage({lang}: {lang: Lang}): ReactNode {
  const t = T[lang];
  const {siteConfig} = useDocusaurusContext();
  const current = LANGS.find((item) => item.code === lang)!;
  const pageUrl = `${siteConfig.url}${current.path}`;
  const [platform, setPlatform] = useState<Platform>('windows');
  const [suggested, setSuggested] = useState<Lang | null>(null);
  const [downloads, setDownloads] = useState<Downloads>({
    windows: RELEASES,
    appimage: RELEASES,
    deb: RELEASES,
    version: '',
  });
  const shots = {
    document: useBaseUrl('/img/blackpdf/document.webp'),
    viewer3d: useBaseUrl('/img/blackpdf/viewer3d.webp'),
    home: useBaseUrl('/img/blackpdf/home.webp'),
  };
  const card = `${siteConfig.url}${useBaseUrl(`/img/blackpdf/og-${lang}.png`)}`;

  useEffect(() => {
    setPlatform(detectPlatform());
    // Solo se sugiere otro idioma; nunca se redirige, para que cada dirección
    // muestre siempre el mismo contenido a los buscadores.
    const preferred = savedLanguage() ?? browserLanguage();
    setSuggested(preferred && preferred !== lang ? preferred : null);
    fetch(API)
      .then((response) => (response.ok ? response.json() : null))
      .then((release) => {
        if (!release || !Array.isArray(release.assets)) return;
        const find = (suffix: string) =>
          release.assets.find((asset: {name: string}) => asset.name.endsWith(suffix))?.browser_download_url || RELEASES;
        setDownloads({
          windows: find('.exe'),
          appimage: find('.AppImage'),
          deb: find('.deb'),
          version: String(release.tag_name || '').replace(/^v/, ''),
        });
      })
      .catch(() => undefined);
  }, [lang]);

  const all = {
    windows: {label: t.windows, href: downloads.windows},
    linux: {label: t.linux, href: downloads.appimage},
    deb: {label: t.deb, href: downloads.deb},
  };
  const primary = platform === 'windows' ? all.windows : platform === 'linux' ? all.linux : null;
  const secondary =
    platform === 'windows'
      ? [all.linux, all.deb]
      : platform === 'linux'
        ? [all.windows, all.deb]
        : [all.windows, all.linux, all.deb];
  const note = platform === 'mac' ? t.macNote : platform === 'mobile' ? t.mobileNote : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BlackPDF',
    description: t.description,
    url: pageUrl,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Windows 10, Windows 11, Linux',
    inLanguage: LANGS.map((item) => item.code),
    isAccessibleForFree: true,
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
    offers: {'@type': 'Offer', price: '0', priceCurrency: 'EUR'},
    downloadUrl: RELEASES,
    image: card,
    screenshot: `${siteConfig.url}${shots.document}`,
    sameAs: REPO,
    publisher: {'@type': 'Organization', name: 'The Black Robots Foundation', url: siteConfig.url},
  };

  return (
    <Layout title={t.pageTitle} description={t.description}>
      <Head>
        <html lang={lang} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t.pageTitle} />
        <meta property="og:locale" content={current.ogLocale} />
        {LANGS.filter((item) => item.code !== lang).map((item) => (
          <meta key={item.code} property="og:locale:alternate" content={item.ogLocale} />
        ))}
        <meta property="og:image" content={card} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`BlackPDF · ${t.tagline}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.pageTitle} />
        <meta name="twitter:description" content={t.description} />
        <meta name="twitter:image" content={card} />
        {/* Sustituyen a los que pone Docusaurus (misma dirección) con el idioma correcto. */}
        {LANGS.map((item) => (
          <link key={item.code} rel="alternate" href={`${siteConfig.url}${item.path}`} hrefLang={item.code} />
        ))}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <main className={styles.page}>
        {suggested && (
          <div className={styles.banner} lang={suggested}>
            <p>{T[suggested].alsoIn}</p>
            <Link
              to={LANGS.find((item) => item.code === suggested)!.path}
              hrefLang={suggested}
              onClick={() => saveLanguage(suggested)}>
              {T[suggested].view}
            </Link>
            <button
              type="button"
              className={styles.bannerClose}
              aria-label={T[suggested].dismiss}
              title={T[suggested].dismiss}
              onClick={() => {
                saveLanguage(lang);
                setSuggested(null);
              }}>
              <CloseIcon />
            </button>
          </div>
        )}

        <nav className={styles.languages} aria-label={t.languages}>
          {LANGS.map((item) => (
            <Link
              key={item.code}
              to={item.path}
              lang={item.code}
              hrefLang={item.code}
              aria-label={item.name}
              title={item.name}
              aria-current={item.code === lang ? 'page' : undefined}
              className={item.code === lang ? styles.languageActive : styles.language}
              onClick={() => saveLanguage(item.code)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.suite}>BlackSuite</p>
            <h1 className={styles.title}>BlackPDF</h1>
            <p className={styles.tagline}>{t.tagline}</p>
            <p className={styles.intro}>{t.intro}</p>
            {note && (
              <p className={styles.note} role="note">
                {note}
              </p>
            )}
            {primary && (
              <div className={styles.actions}>
                <a className="button button--primary button--lg" href={primary.href}>
                  {primary.label}
                </a>
              </div>
            )}
            {/* Los demás sistemas, más pequeños para que quepan en una fila. */}
            <div className={primary ? styles.downloads : styles.downloadsOnly}>
              {secondary.map((item) => (
                <a key={item.label} className="button button--secondary" href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <p className={styles.meta}>
              {downloads.version ? `v${downloads.version} · ` : ''}
              {t.meta} · <a href={RELEASES}>{t.allVersions}</a>
            </p>
          </div>
          <div className={styles.heroShot}>
            <img src={shots.document} alt={t.shotAlt} width={1920} height={1200} fetchPriority="high" />
          </div>
        </header>

        <section className={styles.privacy} aria-labelledby="privacy">
          <h2 id="privacy">{t.privacyTitle}</h2>
          <ul>
            {t.privacy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="features">
          <h2 id="features">{t.featuresTitle}</h2>
          <div className={styles.grid}>
            {t.features.map((feature) => {
              const Icon = ICONS[feature.icon];
              return (
                <article key={feature.title} className={styles.card}>
                  <span className={styles.cardIcon}>
                    <Icon aria-hidden="true" focusable="false" width={22} height={22} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.split} aria-labelledby="model3d">
          <div>
            <h2 id="model3d">{t.threeDTitle}</h2>
            <p>{t.threeD}</p>
          </div>
          <img src={shots.viewer3d} alt={t.viewer3dAlt} loading="lazy" width={1920} height={1200} />
        </section>

        <section className={styles.splitReverse} aria-labelledby="install">
          <img src={shots.home} alt={t.homeAlt} loading="lazy" width={1920} height={1200} />
          <div>
            <h2 id="install">{t.installTitle}</h2>
            <p>{t.installWindows}</p>
            <p>{t.installLinux}</p>
          </div>
        </section>

        <section className={styles.open} aria-labelledby="free-software">
          <h2 id="free-software">{t.openTitle}</h2>
          <p>{t.open}</p>
          <div className={styles.actions}>
            <a className="button button--secondary" href={REPO}>
              {t.source}
            </a>
            <a className="button button--secondary" href={`${REPO}/issues`}>
              {t.bugs}
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
