import React, {useEffect, useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './blackpdf.module.css';

const REPO = 'https://github.com/TheBlackRobotsFoundation/BlackPDF';
const RELEASES = `${REPO}/releases/latest`;
const API = 'https://api.github.com/repos/TheBlackRobotsFoundation/BlackPDF/releases/latest';

type Lang = 'es' | 'en' | 'pt' | 'fr';
const LANGS: {code: Lang; label: string}[] = [
  {code: 'es', label: 'ES'},
  {code: 'en', label: 'EN'},
  {code: 'pt', label: 'PT'},
  {code: 'fr', label: 'FR'},
];

type Feature = {title: string; text: string};
type Texts = {
  tagline: string;
  intro: string;
  windows: string;
  linux: string;
  deb: string;
  allVersions: string;
  meta: string;
  privacyTitle: string;
  privacy: string[];
  featuresTitle: string;
  features: Feature[];
  threeDTitle: string;
  threeD: string;
  installTitle: string;
  installWindows: string;
  installLinux: string;
  openTitle: string;
  open: string;
  source: string;
  bugs: string;
  languages: string;
};

const T: Record<Lang, Texts> = {
  es: {
    tagline: 'Visor y editor de PDF libre, gratuito y sin conexión.',
    intro:
      'Todo lo que ofrecen los servicios web de PDF, pero en tu equipo: unir, dividir, comprimir, convertir, anotar, firmar, proteger y reconocer texto. Tus documentos nunca salen de tu ordenador.',
    windows: 'Descargar para Windows',
    linux: 'Descargar para Linux',
    deb: 'Paquete .deb',
    allVersions: 'Todas las versiones',
    meta: 'Windows 10/11 y Linux · Español, inglés, portugués y francés · Software libre (AGPL-3.0)',
    privacyTitle: 'Privado de verdad',
    privacy: ['Sin conexión: nada se sube a internet', 'Sin cuentas ni anuncios', 'Sin telemetría', 'Código abierto'],
    featuresTitle: 'Todo en una sola aplicación',
    features: [
      {title: 'Visor rápido', text: 'Pestañas, miniaturas, índice, búsqueda, modo noche y vista dividida para comparar documentos.'},
      {title: 'Organizar páginas', text: 'Arrastra para reordenar, gira, duplica, elimina o inserta páginas de otros PDF.'},
      {title: 'Herramientas PDF', text: 'Unir, dividir, alternar, extraer, comprimir, marca de agua, números de página, recortar y cambiar tamaño.'},
      {title: 'Convertir', text: 'PDF a PNG o JPG e imágenes a PDF. Abre también XPS y EPUB.'},
      {title: 'Anotar y comentar', text: 'Lápiz, resaltador, formas, notas y comentarios con respuestas, compatibles con Acrobat.'},
      {title: 'Firma digital', text: 'Firma con tu certificado (.pfx/.p12) con sello visible y sello de tiempo. Verifica las firmas de cualquier PDF.'},
      {title: 'OCR integrado', text: 'Convierte escaneos en texto que se puede buscar y copiar, en cuatro idiomas, sin instalar nada más.'},
      {title: 'Seguridad', text: 'Protege con AES de 256 bits, quita contraseñas y censura información de forma definitiva.'},
    ],
    threeDTitle: 'Modelos 3D en PDF',
    threeD:
      'Abre los PDF con modelos U3D y PRC de Acrobat, programas CAD y LaTeX (Asymptote): gira, corta, aísla piezas y cambia el modo de visualización.',
    installTitle: 'Instalación',
    installWindows:
      'Windows: ejecuta el instalador; no pide permisos de administrador y añade BlackPDF a «Abrir con». Si Windows SmartScreen muestra un aviso, pulsa «Más información» y «Ejecutar de todas formas».',
    installLinux:
      'Linux: da permiso de ejecución al AppImage (chmod +x) y ábrelo, o instala el paquete .deb en Debian, Ubuntu o Mint.',
    openTitle: 'Software libre',
    open: 'BlackPDF es software libre con licencia AGPL-3.0. Puedes usarlo, estudiarlo, compartirlo y mejorarlo.',
    source: 'Código fuente',
    bugs: 'Informar de un fallo',
    languages: 'Idioma',
  },
  en: {
    tagline: 'A free and open PDF viewer and editor that works offline.',
    intro:
      'Everything online PDF services do, but on your computer: merge, split, compress, convert, annotate, sign, protect and recognize text. Your documents never leave your computer.',
    windows: 'Download for Windows',
    linux: 'Download for Linux',
    deb: '.deb package',
    allVersions: 'All versions',
    meta: 'Windows 10/11 and Linux · English, Spanish, Portuguese and French · Free software (AGPL-3.0)',
    privacyTitle: 'Truly private',
    privacy: ['Offline: nothing is uploaded', 'No accounts, no ads', 'No telemetry', 'Open source'],
    featuresTitle: 'Everything in one application',
    features: [
      {title: 'Fast viewer', text: 'Tabs, thumbnails, outline, search, night mode and split view to compare documents.'},
      {title: 'Organize pages', text: 'Drag to reorder, rotate, duplicate, delete or insert pages from other PDFs.'},
      {title: 'PDF tools', text: 'Merge, split, alternate, extract, compress, watermark, page numbers, crop and resize.'},
      {title: 'Convert', text: 'PDF to PNG or JPG and images to PDF. Also opens XPS and EPUB.'},
      {title: 'Annotate and comment', text: 'Pen, highlighter, shapes, notes and threaded comments, compatible with Acrobat.'},
      {title: 'Digital signature', text: 'Sign with your certificate (.pfx/.p12) with a visible stamp and timestamp. Verify the signatures of any PDF.'},
      {title: 'Built-in OCR', text: 'Turns scans into searchable, copyable text in four languages, with nothing else to install.'},
      {title: 'Security', text: 'Protect with 256-bit AES, remove passwords and permanently redact information.'},
    ],
    threeDTitle: '3D models in PDF',
    threeD:
      'Opens PDFs with U3D and PRC models from Acrobat, CAD software and LaTeX (Asymptote): rotate, cut, isolate parts and switch display modes.',
    installTitle: 'Installation',
    installWindows:
      'Windows: run the installer; it does not need administrator rights and adds BlackPDF to "Open with". If Windows SmartScreen shows a warning, click "More info" and "Run anyway".',
    installLinux:
      'Linux: make the AppImage executable (chmod +x) and open it, or install the .deb package on Debian, Ubuntu or Mint.',
    openTitle: 'Free software',
    open: 'BlackPDF is free software under the AGPL-3.0 license. You can use, study, share and improve it.',
    source: 'Source code',
    bugs: 'Report a bug',
    languages: 'Language',
  },
  pt: {
    tagline: 'Visualizador e editor de PDF livre, gratuito e sem conexão.',
    intro:
      'Tudo o que os serviços de PDF on-line oferecem, mas no seu computador: juntar, dividir, comprimir, converter, anotar, assinar, proteger e reconhecer texto. Seus documentos nunca saem do seu computador.',
    windows: 'Baixar para Windows',
    linux: 'Baixar para Linux',
    deb: 'Pacote .deb',
    allVersions: 'Todas as versões',
    meta: 'Windows 10/11 e Linux · Português, inglês, espanhol e francês · Software livre (AGPL-3.0)',
    privacyTitle: 'Privado de verdade',
    privacy: ['Sem conexão: nada é enviado', 'Sem contas nem anúncios', 'Sem telemetria', 'Código aberto'],
    featuresTitle: 'Tudo em um só aplicativo',
    features: [
      {title: 'Visualizador rápido', text: 'Abas, miniaturas, sumário, pesquisa, modo noturno e vista dividida para comparar documentos.'},
      {title: 'Organizar páginas', text: 'Arraste para reordenar, gire, duplique, exclua ou insira páginas de outros PDFs.'},
      {title: 'Ferramentas PDF', text: 'Juntar, dividir, alternar, extrair, comprimir, marca d\'água, números de página, cortar e redimensionar.'},
      {title: 'Converter', text: 'PDF para PNG ou JPG e imagens para PDF. Também abre XPS e EPUB.'},
      {title: 'Anotar e comentar', text: 'Lápis, marca-texto, formas, notas e comentários com respostas, compatíveis com o Acrobat.'},
      {title: 'Assinatura digital', text: 'Assine com seu certificado (.pfx/.p12) com carimbo visível e carimbo de tempo. Verifique as assinaturas de qualquer PDF.'},
      {title: 'OCR integrado', text: 'Transforma digitalizações em texto pesquisável e copiável em quatro idiomas, sem instalar mais nada.'},
      {title: 'Segurança', text: 'Proteja com AES de 256 bits, remova senhas e censure informações de forma definitiva.'},
    ],
    threeDTitle: 'Modelos 3D em PDF',
    threeD:
      'Abre PDFs com modelos U3D e PRC do Acrobat, de programas CAD e do LaTeX (Asymptote): gire, corte, isole peças e mude o modo de exibição.',
    installTitle: 'Instalação',
    installWindows:
      'Windows: execute o instalador; ele não pede permissões de administrador e adiciona o BlackPDF a "Abrir com". Se o Windows SmartScreen mostrar um aviso, clique em "Mais informações" e "Executar assim mesmo".',
    installLinux:
      'Linux: dê permissão de execução ao AppImage (chmod +x) e abra-o, ou instale o pacote .deb no Debian, Ubuntu ou Mint.',
    openTitle: 'Software livre',
    open: 'O BlackPDF é software livre com licença AGPL-3.0. Você pode usá-lo, estudá-lo, compartilhá-lo e melhorá-lo.',
    source: 'Código-fonte',
    bugs: 'Relatar um problema',
    languages: 'Idioma',
  },
  fr: {
    tagline: 'Visionneuse et éditeur PDF libre, gratuit et hors ligne.',
    intro:
      'Tout ce que font les services PDF en ligne, mais sur votre ordinateur : fusionner, diviser, compresser, convertir, annoter, signer, protéger et reconnaître le texte. Vos documents ne quittent jamais votre ordinateur.',
    windows: 'Télécharger pour Windows',
    linux: 'Télécharger pour Linux',
    deb: 'Paquet .deb',
    allVersions: 'Toutes les versions',
    meta: 'Windows 10/11 et Linux · Français, anglais, espagnol et portugais · Logiciel libre (AGPL-3.0)',
    privacyTitle: 'Vraiment privé',
    privacy: ['Hors ligne : rien n\'est envoyé', 'Sans compte ni publicité', 'Sans télémétrie', 'Code source ouvert'],
    featuresTitle: 'Tout dans une seule application',
    features: [
      {title: 'Visionneuse rapide', text: 'Onglets, miniatures, table des matières, recherche, mode nuit et vue partagée pour comparer des documents.'},
      {title: 'Organiser les pages', text: 'Faites glisser pour réordonner, pivotez, dupliquez, supprimez ou insérez des pages d\'autres PDF.'},
      {title: 'Outils PDF', text: 'Fusionner, diviser, alterner, extraire, compresser, filigrane, numéros de page, rogner et redimensionner.'},
      {title: 'Convertir', text: 'PDF en PNG ou JPG et images en PDF. Ouvre aussi les XPS et les EPUB.'},
      {title: 'Annoter et commenter', text: 'Crayon, surligneur, formes, notes et commentaires avec réponses, compatibles avec Acrobat.'},
      {title: 'Signature numérique', text: 'Signez avec votre certificat (.pfx/.p12) avec cachet visible et horodatage. Vérifiez les signatures de n\'importe quel PDF.'},
      {title: 'OCR intégré', text: 'Transforme les numérisations en texte consultable et copiable dans quatre langues, sans rien installer d\'autre.'},
      {title: 'Sécurité', text: 'Protégez en AES 256 bits, supprimez les mots de passe et caviardez définitivement des informations.'},
    ],
    threeDTitle: 'Modèles 3D dans les PDF',
    threeD:
      'Ouvre les PDF avec des modèles U3D et PRC d\'Acrobat, des logiciels de CAO et de LaTeX (Asymptote) : faites pivoter, coupez, isolez des pièces et changez de mode d\'affichage.',
    installTitle: 'Installation',
    installWindows:
      'Windows : lancez le programme d\'installation ; il ne demande pas de droits d\'administrateur et ajoute BlackPDF à « Ouvrir avec ». Si Windows SmartScreen affiche un avertissement, cliquez sur « Informations complémentaires » puis « Exécuter quand même ».',
    installLinux:
      'Linux : rendez l\'AppImage exécutable (chmod +x) et ouvrez-la, ou installez le paquet .deb sur Debian, Ubuntu ou Mint.',
    openTitle: 'Logiciel libre',
    open: 'BlackPDF est un logiciel libre sous licence AGPL-3.0. Vous pouvez l\'utiliser, l\'étudier, le partager et l\'améliorer.',
    source: 'Code source',
    bugs: 'Signaler un problème',
    languages: 'Langue',
  },
};

type Downloads = {windows: string; appimage: string; deb: string; version: string};

function detectLanguage(): Lang {
  try {
    const saved = window.localStorage.getItem('blackpdf-lang');
    if (saved && saved in T) return saved as Lang;
  } catch {
    // almacenamiento no disponible
  }
  for (const name of navigator.languages || [navigator.language]) {
    const code = name.slice(0, 2).toLowerCase();
    if (code in T) return code as Lang;
  }
  return 'en';
}

export default function BlackPDF(): ReactNode {
  const [lang, setLang] = useState<Lang>('es');
  const [linux, setLinux] = useState(false);
  const [downloads, setDownloads] = useState<Downloads>({
    windows: RELEASES,
    appimage: RELEASES,
    deb: RELEASES,
    version: '',
  });
  const t = T[lang];
  const shots = {
    document: useBaseUrl('/img/blackpdf/document.webp'),
    viewer3d: useBaseUrl('/img/blackpdf/viewer3d.webp'),
    home: useBaseUrl('/img/blackpdf/home.webp'),
  };
  const logo = useBaseUrl('/img/blackpdf/logo.svg');

  useEffect(() => {
    setLang(detectLanguage());
    setLinux(/linux|x11/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent));
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
  }, []);

  const choose = (code: Lang) => {
    setLang(code);
    try {
      window.localStorage.setItem('blackpdf-lang', code);
    } catch {
      // almacenamiento no disponible
    }
  };

  const primary = linux
    ? {label: t.linux, href: downloads.appimage}
    : {label: t.windows, href: downloads.windows};
  const secondary = linux
    ? [{label: t.windows, href: downloads.windows}, {label: t.deb, href: downloads.deb}]
    : [{label: t.linux, href: downloads.appimage}, {label: t.deb, href: downloads.deb}];

  return (
    <Layout title="BlackPDF" description={T.en.tagline}>
      <Head>
        <meta property="og:title" content="BlackPDF" />
        <meta property="og:description" content={t.tagline} />
        <meta property="og:image" content={`https://blackrobots.org${shots.document}`} />
        <html lang={lang} />
      </Head>
      <main className={styles.page}>
        <div className={styles.languages} aria-label={t.languages}>
          {LANGS.map(({code, label}) => (
            <button
              key={code}
              type="button"
              className={code === lang ? styles.languageActive : styles.language}
              onClick={() => choose(code)}
              aria-pressed={code === lang}>
              {label}
            </button>
          ))}
        </div>

        <header className={styles.hero}>
          <img src={logo} alt="" className={styles.logo} width={112} height={112} />
          <p className={styles.suite}>BlackSuite</p>
          <h1 className={styles.title}>BlackPDF</h1>
          <p className={styles.tagline}>{t.tagline}</p>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a className="button button--primary button--lg" href={primary.href}>
              {primary.label}
            </a>
            {secondary.map((item) => (
              <a key={item.label} className="button button--secondary button--lg" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <p className={styles.meta}>
            {downloads.version ? `v${downloads.version} · ` : ''}
            {t.meta} · <a href={RELEASES}>{t.allVersions}</a>
          </p>
        </header>

        <section className={styles.shot}>
          <img src={shots.document} alt="BlackPDF" loading="eager" width={1920} height={1200} />
        </section>

        <section className={styles.privacy}>
          <h2>{t.privacyTitle}</h2>
          <ul>
            {t.privacy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t.featuresTitle}</h2>
          <div className={styles.grid}>
            {t.features.map((feature) => (
              <article key={feature.title} className={styles.card}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.split}>
          <div>
            <h2>{t.threeDTitle}</h2>
            <p>{t.threeD}</p>
          </div>
          <img src={shots.viewer3d} alt="" loading="lazy" width={1920} height={1200} />
        </section>

        <section className={styles.splitReverse}>
          <img src={shots.home} alt="" loading="lazy" width={1920} height={1200} />
          <div>
            <h2>{t.installTitle}</h2>
            <p>{t.installWindows}</p>
            <p>{t.installLinux}</p>
          </div>
        </section>

        <section className={styles.open}>
          <h2>{t.openTitle}</h2>
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
