// Textos de la página de BlackPDF en los cuatro idiomas de la aplicación.

export type Lang = 'es' | 'en' | 'pt' | 'fr';

export const LANGS: {code: Lang; label: string; name: string; path: string; ogLocale: string}[] = [
  {code: 'es', label: 'ES', name: 'Español', path: '/blackpdf', ogLocale: 'es_ES'},
  {code: 'en', label: 'EN', name: 'English', path: '/blackpdf/en', ogLocale: 'en_US'},
  {code: 'pt', label: 'PT', name: 'Português', path: '/blackpdf/pt', ogLocale: 'pt_BR'},
  {code: 'fr', label: 'FR', name: 'Français', path: '/blackpdf/fr', ogLocale: 'fr_FR'},
];

export type Feature = {icon: string; title: string; text: string};

export type Texts = {
  pageTitle: string;
  description: string;
  tagline: string;
  intro: string;
  windows: string;
  linux: string;
  deb: string;
  allVersions: string;
  meta: string;
  macNote: string;
  mobileNote: string;
  shotAlt: string;
  viewer3dAlt: string;
  homeAlt: string;
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
  alsoIn: string;
  view: string;
  dismiss: string;
};

export const T: Record<Lang, Texts> = {
  es: {
    pageTitle: 'BlackPDF: editor de PDF libre y sin conexión',
    description:
      'BlackPDF es un visor y editor de PDF libre y gratuito para Windows y Linux. Une, divide, comprime, anota, firma y reconoce texto sin conexión: tus documentos nunca salen de tu equipo.',
    tagline: 'Visor y editor de PDF libre, gratuito y sin conexión.',
    intro:
      'Todo lo que ofrecen los servicios web de PDF, pero en tu equipo: unir, dividir, comprimir, convertir, anotar, firmar, proteger y reconocer texto. Tus documentos nunca salen de tu ordenador.',
    windows: 'Descargar para Windows',
    linux: 'Descargar para Linux',
    deb: 'Paquete .deb',
    allVersions: 'Todas las versiones',
    meta: 'Windows 10/11 y Linux · Español, inglés, portugués y francés · Software libre (AGPL-3.0)',
    macNote: 'BlackPDF está disponible para Windows y Linux. Todavía no hay versión para macOS.',
    mobileNote: 'BlackPDF es una aplicación de escritorio: descárgala desde tu ordenador (Windows o Linux).',
    shotAlt: 'BlackPDF con un informe abierto, sus comentarios en el panel de la derecha y la barra de anotación',
    viewer3dAlt: 'Visor 3D de BlackPDF con una superficie roja ondulada, una esfera y la lista de piezas',
    homeAlt: 'Pantalla de inicio de BlackPDF con las herramientas agrupadas en tarjetas',
    privacyTitle: 'Privado de verdad',
    privacy: ['Sin conexión: nada se sube a internet', 'Sin cuentas ni anuncios', 'Sin telemetría', 'Código abierto'],
    featuresTitle: 'Todo en una sola aplicación',
    features: [
      {icon: 'book-open', title: 'Visor rápido', text: 'Pestañas, miniaturas, índice, búsqueda, modo noche y vista dividida para comparar documentos.'},
      {icon: 'layout-grid', title: 'Organizar páginas', text: 'Arrastra para reordenar, gira, duplica, elimina o inserta páginas de otros PDF.'},
      {icon: 'scissors', title: 'Herramientas PDF', text: 'Unir, dividir, alternar, extraer, comprimir, marca de agua, números de página, recortar y cambiar tamaño.'},
      {icon: 'refresh-cw', title: 'Convertir', text: 'PDF a PNG o JPG, imágenes a PDF y las fotos de un PDF con su calidad original. Abre también XPS y EPUB.'},
      {icon: 'message-square', title: 'Anotar y comentar', text: 'Lápiz, resaltador, formas, notas y comentarios con respuestas, compatibles con Acrobat.'},
      {icon: 'signature', title: 'Firma digital', text: 'Firma con tu certificado (.pfx/.p12) con sello visible y sello de tiempo. Verifica las firmas de cualquier PDF y coméntalo sin estropearlas.'},
      {icon: 'scan-text', title: 'OCR integrado', text: 'Convierte escaneos en texto que se puede buscar y copiar, en cuatro idiomas, sin instalar nada más.'},
      {icon: 'lock', title: 'Seguridad', text: 'Protege con AES de 256 bits, quita contraseñas, censura información y limpia los datos ocultos antes de compartir.'},
      {icon: 'paperclip', title: 'Archivos adjuntos', text: 'Ve, abre, guarda y añade los archivos que lleva un PDF dentro, como una pieza en 3D o una hoja de cálculo.'},
      {icon: 'ruler', title: 'Medir planos', text: 'Distancias, perímetros y áreas a escala, y capas que puedes mostrar u ocultar.'},
      {icon: 'stamp', title: 'Sellos', text: 'Aprobado, Borrador, Revisado... con tu nombre y la fecha, o los que tú escribas.'},
      {icon: 'sheet', title: 'Tablas a Excel', text: 'Pasa las tablas de un PDF a Excel o CSV, con los números listos para sumar.'},
    ],
    threeDTitle: 'Modelos 3D en PDF',
    threeD:
      'Abre los PDF con modelos U3D y PRC de Acrobat, programas CAD y LaTeX (Asymptote): gira, corta, aísla piezas y cambia el modo de visualización. Mide como en un programa de CAD: reconoce esquinas, aristas, circunferencias y caras, y te da diámetros, la distancia entre centros, espesores y ángulos. Y mete tus propias piezas STEP, IGES, STL, OBJ o glTF en cualquier PDF para que todos puedan verlas en 3D.',
    installTitle: 'Instalación',
    installWindows:
      'Windows: ejecuta el instalador; no pide permisos de administrador y añade BlackPDF a «Abrir con». Si Windows SmartScreen muestra un aviso, pulsa «Más información» y «Ejecutar de todas formas».',
    installLinux:
      'Linux: da permiso de ejecución al AppImage (chmod +x) y ábrelo, o instala el paquete .deb en Debian, Ubuntu o Mint.',
    openTitle: 'Software libre',
    open: 'BlackPDF es software libre con licencia AGPL-3.0. Puedes usarlo, estudiarlo, compartirlo y mejorarlo.',
    source: 'Código fuente',
    bugs: 'Informar de un fallo',
    languages: 'Idioma de la página',
    alsoIn: 'Esta página también está en español.',
    view: 'Ver en español',
    dismiss: 'Cerrar',
  },
  en: {
    pageTitle: 'BlackPDF: free and open offline PDF editor',
    description:
      'BlackPDF is a free and open PDF viewer and editor for Windows and Linux. Merge, split, compress, annotate, sign and recognize text offline: your documents never leave your computer.',
    tagline: 'A free and open PDF viewer and editor that works offline.',
    intro:
      'Everything online PDF services do, but on your computer: merge, split, compress, convert, annotate, sign, protect and recognize text. Your documents never leave your computer.',
    windows: 'Download for Windows',
    linux: 'Download for Linux',
    deb: '.deb package',
    allVersions: 'All versions',
    meta: 'Windows 10/11 and Linux · English, Spanish, Portuguese and French · Free software (AGPL-3.0)',
    macNote: 'BlackPDF is available for Windows and Linux. There is no macOS version yet.',
    mobileNote: 'BlackPDF is a desktop application: download it from your computer (Windows or Linux).',
    shotAlt: 'BlackPDF with a report open, its comments in the right-hand panel and the annotation bar',
    viewer3dAlt: 'BlackPDF 3D viewer with a wavy red surface, a sphere and the parts list',
    homeAlt: 'BlackPDF home screen with the tools grouped in cards',
    privacyTitle: 'Truly private',
    privacy: ['Offline: nothing is uploaded', 'No accounts, no ads', 'No telemetry', 'Open source'],
    featuresTitle: 'Everything in one application',
    features: [
      {icon: 'book-open', title: 'Fast viewer', text: 'Tabs, thumbnails, outline, search, night mode and split view to compare documents.'},
      {icon: 'layout-grid', title: 'Organize pages', text: 'Drag to reorder, rotate, duplicate, delete or insert pages from other PDFs.'},
      {icon: 'scissors', title: 'PDF tools', text: 'Merge, split, alternate, extract, compress, watermark, page numbers, crop and resize.'},
      {icon: 'refresh-cw', title: 'Convert', text: "PDF to PNG or JPG, images to PDF, and a PDF's pictures at their original quality. Also opens XPS and EPUB."},
      {icon: 'message-square', title: 'Annotate and comment', text: 'Pen, highlighter, shapes, notes and threaded comments, compatible with Acrobat.'},
      {icon: 'signature', title: 'Digital signature', text: 'Sign with your certificate (.pfx/.p12) with a visible stamp and timestamp. Verify the signatures of any PDF and comment on it without breaking them.'},
      {icon: 'scan-text', title: 'Built-in OCR', text: 'Turns scans into searchable, copyable text in four languages, with nothing else to install.'},
      {icon: 'lock', title: 'Security', text: 'Protect with 256-bit AES, remove passwords, permanently redact information and remove hidden data before sharing.'},
      {icon: 'paperclip', title: 'Attachments', text: 'See, open, save and add the files a PDF carries inside, such as a 3D part or a spreadsheet.'},
      {icon: 'ruler', title: 'Measure drawings', text: 'Distances, perimeters and areas to scale, and layers you can show or hide.'},
      {icon: 'stamp', title: 'Stamps', text: 'Approved, Draft, Reviewed... with your name and the date, or your own.'},
      {icon: 'sheet', title: 'Tables to Excel', text: "Turn a PDF's tables into Excel or CSV, with the numbers ready to add up."},
    ],
    threeDTitle: '3D models in PDF',
    threeD:
      'Opens PDFs with U3D and PRC models from Acrobat, CAD software and LaTeX (Asymptote): rotate, cut, isolate parts and switch display modes. Measure like in a CAD program: it recognises corners, edges, circles and faces, and gives you diameters, distances between centres, thicknesses and angles. And put your own STEP, IGES, STL, OBJ or glTF parts into any PDF so everyone can see them in 3D.',
    installTitle: 'Installation',
    installWindows:
      'Windows: run the installer; it does not need administrator rights and adds BlackPDF to "Open with". If Windows SmartScreen shows a warning, click "More info" and "Run anyway".',
    installLinux:
      'Linux: make the AppImage executable (chmod +x) and open it, or install the .deb package on Debian, Ubuntu or Mint.',
    openTitle: 'Free software',
    open: 'BlackPDF is free software under the AGPL-3.0 license. You can use, study, share and improve it.',
    source: 'Source code',
    bugs: 'Report a bug',
    languages: 'Page language',
    alsoIn: 'This page is also available in English.',
    view: 'View in English',
    dismiss: 'Close',
  },
  pt: {
    pageTitle: 'BlackPDF: editor de PDF livre e sem conexão',
    description:
      'O BlackPDF é um visualizador e editor de PDF livre e gratuito para Windows e Linux. Junte, divida, comprima, anote, assine e reconheça texto sem conexão: seus documentos nunca saem do seu computador.',
    tagline: 'Visualizador e editor de PDF livre, gratuito e sem conexão.',
    intro:
      'Tudo o que os serviços de PDF on-line oferecem, mas no seu computador: juntar, dividir, comprimir, converter, anotar, assinar, proteger e reconhecer texto. Seus documentos nunca saem do seu computador.',
    windows: 'Baixar para Windows',
    linux: 'Baixar para Linux',
    deb: 'Pacote .deb',
    allVersions: 'Todas as versões',
    meta: 'Windows 10/11 e Linux · Português, inglês, espanhol e francês · Software livre (AGPL-3.0)',
    macNote: 'O BlackPDF está disponível para Windows e Linux. Ainda não há versão para macOS.',
    mobileNote: 'O BlackPDF é um aplicativo para computador: baixe-o no seu computador (Windows ou Linux).',
    shotAlt: 'BlackPDF com um relatório aberto, seus comentários no painel à direita e a barra de anotação',
    viewer3dAlt: 'Visualizador 3D do BlackPDF com uma superfície vermelha ondulada, uma esfera e a lista de peças',
    homeAlt: 'Tela inicial do BlackPDF com as ferramentas agrupadas em cartões',
    privacyTitle: 'Privado de verdade',
    privacy: ['Sem conexão: nada é enviado', 'Sem contas nem anúncios', 'Sem telemetria', 'Código aberto'],
    featuresTitle: 'Tudo em um só aplicativo',
    features: [
      {icon: 'book-open', title: 'Visualizador rápido', text: 'Abas, miniaturas, sumário, pesquisa, modo noturno e vista dividida para comparar documentos.'},
      {icon: 'layout-grid', title: 'Organizar páginas', text: 'Arraste para reordenar, gire, duplique, exclua ou insira páginas de outros PDFs.'},
      {icon: 'scissors', title: 'Ferramentas PDF', text: "Juntar, dividir, alternar, extrair, comprimir, marca d'água, números de página, cortar e redimensionar."},
      {icon: 'refresh-cw', title: 'Converter', text: 'PDF para PNG ou JPG, imagens para PDF e as fotos de um PDF com a qualidade original. Também abre XPS e EPUB.'},
      {icon: 'message-square', title: 'Anotar e comentar', text: 'Lápis, marca-texto, formas, notas e comentários com respostas, compatíveis com o Acrobat.'},
      {icon: 'signature', title: 'Assinatura digital', text: 'Assine com seu certificado (.pfx/.p12) com carimbo visível e carimbo de tempo. Verifique as assinaturas de qualquer PDF e comente-o sem invalidá-las.'},
      {icon: 'scan-text', title: 'OCR integrado', text: 'Transforma digitalizações em texto pesquisável e copiável em quatro idiomas, sem instalar mais nada.'},
      {icon: 'lock', title: 'Segurança', text: 'Proteja com AES de 256 bits, remova senhas, censure informações e limpe os dados ocultos antes de compartilhar.'},
      {icon: 'paperclip', title: 'Anexos', text: 'Veja, abra, salve e adicione os arquivos que um PDF leva dentro, como uma peça 3D ou uma planilha.'},
      {icon: 'ruler', title: 'Medir plantas', text: 'Distâncias, perímetros e áreas em escala, e camadas que você pode mostrar ou ocultar.'},
      {icon: 'stamp', title: 'Carimbos', text: 'Aprovado, Rascunho, Revisado... com seu nome e a data, ou os que você escrever.'},
      {icon: 'sheet', title: 'Tabelas para Excel', text: 'Passe as tabelas de um PDF para Excel ou CSV, com os números prontos para somar.'},
    ],
    threeDTitle: 'Modelos 3D em PDF',
    threeD:
      'Abre PDFs com modelos U3D e PRC do Acrobat, de programas CAD e do LaTeX (Asymptote): gire, corte, isole peças e mude o modo de exibição. Meça como em um programa CAD: ele reconhece cantos, arestas, circunferências e faces, e mostra diâmetros, a distância entre centros, espessuras e ângulos. E coloque suas próprias peças STEP, IGES, STL, OBJ ou glTF em qualquer PDF para que todos possam vê-las em 3D.',
    installTitle: 'Instalação',
    installWindows:
      'Windows: execute o instalador; ele não pede permissões de administrador e adiciona o BlackPDF a "Abrir com". Se o Windows SmartScreen mostrar um aviso, clique em "Mais informações" e "Executar assim mesmo".',
    installLinux:
      'Linux: dê permissão de execução ao AppImage (chmod +x) e abra-o, ou instale o pacote .deb no Debian, Ubuntu ou Mint.',
    openTitle: 'Software livre',
    open: 'O BlackPDF é software livre com licença AGPL-3.0. Você pode usá-lo, estudá-lo, compartilhá-lo e melhorá-lo.',
    source: 'Código-fonte',
    bugs: 'Relatar um problema',
    languages: 'Idioma da página',
    alsoIn: 'Esta página também está em português.',
    view: 'Ver em português',
    dismiss: 'Fechar',
  },
  fr: {
    pageTitle: 'BlackPDF : éditeur PDF libre et hors ligne',
    description:
      'BlackPDF est une visionneuse et un éditeur PDF libres et gratuits pour Windows et Linux. Fusionnez, divisez, compressez, annotez, signez et reconnaissez le texte hors ligne : vos documents ne quittent jamais votre ordinateur.',
    tagline: 'Visionneuse et éditeur PDF libre, gratuit et hors ligne.',
    intro:
      'Tout ce que font les services PDF en ligne, mais sur votre ordinateur : fusionner, diviser, compresser, convertir, annoter, signer, protéger et reconnaître le texte. Vos documents ne quittent jamais votre ordinateur.',
    windows: 'Télécharger pour Windows',
    linux: 'Télécharger pour Linux',
    deb: 'Paquet .deb',
    allVersions: 'Toutes les versions',
    meta: 'Windows 10/11 et Linux · Français, anglais, espagnol et portugais · Logiciel libre (AGPL-3.0)',
    macNote: "BlackPDF est disponible pour Windows et Linux. Il n'existe pas encore de version pour macOS.",
    mobileNote: 'BlackPDF est une application de bureau : téléchargez-la depuis votre ordinateur (Windows ou Linux).',
    shotAlt: 'BlackPDF avec un rapport ouvert, ses commentaires dans le panneau de droite et la barre d’annotation',
    viewer3dAlt: 'Visionneuse 3D de BlackPDF avec une surface rouge ondulée, une sphère et la liste des pièces',
    homeAlt: 'Écran d’accueil de BlackPDF avec les outils regroupés en cartes',
    privacyTitle: 'Vraiment privé',
    privacy: ["Hors ligne : rien n'est envoyé", 'Sans compte ni publicité', 'Sans télémétrie', 'Code source ouvert'],
    featuresTitle: 'Tout dans une seule application',
    features: [
      {icon: 'book-open', title: 'Visionneuse rapide', text: 'Onglets, miniatures, table des matières, recherche, mode nuit et vue partagée pour comparer des documents.'},
      {icon: 'layout-grid', title: 'Organiser les pages', text: "Faites glisser pour réordonner, pivotez, dupliquez, supprimez ou insérez des pages d'autres PDF."},
      {icon: 'scissors', title: 'Outils PDF', text: 'Fusionner, diviser, alterner, extraire, compresser, filigrane, numéros de page, rogner et redimensionner.'},
      {icon: 'refresh-cw', title: 'Convertir', text: "PDF en PNG ou JPG, images en PDF et les photos d'un PDF dans leur qualité d'origine. Ouvre aussi les XPS et les EPUB."},
      {icon: 'message-square', title: 'Annoter et commenter', text: 'Crayon, surligneur, formes, notes et commentaires avec réponses, compatibles avec Acrobat.'},
      {icon: 'signature', title: 'Signature numérique', text: "Signez avec votre certificat (.pfx/.p12) avec cachet visible et horodatage. Vérifiez les signatures de n'importe quel PDF et commentez-le sans les invalider."},
      {icon: 'scan-text', title: 'OCR intégré', text: "Transforme les numérisations en texte consultable et copiable dans quatre langues, sans rien installer d'autre."},
      {icon: 'lock', title: 'Sécurité', text: 'Protégez en AES 256 bits, supprimez les mots de passe, caviardez définitivement des informations et supprimez les données cachées avant de partager.'},
      {icon: 'paperclip', title: 'Pièces jointes', text: "Consultez, ouvrez, enregistrez et ajoutez les fichiers qu'un PDF contient, comme une pièce 3D ou un tableur."},
      {icon: 'ruler', title: 'Mesurer des plans', text: "Distances, périmètres et surfaces à l'échelle, et des calques à afficher ou masquer."},
      {icon: 'stamp', title: 'Tampons', text: 'Approuvé, Brouillon, Révisé... avec votre nom et la date, ou les vôtres.'},
      {icon: 'sheet', title: 'Tableaux vers Excel', text: "Convertissez les tableaux d'un PDF en Excel ou CSV, avec des nombres prêts à être additionnés."},
    ],
    threeDTitle: 'Modèles 3D dans les PDF',
    threeD:
      "Ouvre les PDF avec des modèles U3D et PRC d'Acrobat, des logiciels de CAO et de LaTeX (Asymptote) : faites pivoter, coupez, isolez des pièces et changez de mode d'affichage. Mesurez comme dans un logiciel de CAO : il reconnaît les coins, les arêtes, les cercles et les faces, et vous donne les diamètres, la distance entre les centres, les épaisseurs et les angles. Et ajoutez vos propres pièces STEP, IGES, STL, OBJ ou glTF à n'importe quel PDF pour que tout le monde puisse les voir en 3D.",
    installTitle: 'Installation',
    installWindows:
      "Windows : lancez le programme d'installation ; il ne demande pas de droits d'administrateur et ajoute BlackPDF à « Ouvrir avec ». Si Windows SmartScreen affiche un avertissement, cliquez sur « Informations complémentaires » puis « Exécuter quand même ».",
    installLinux:
      "Linux : rendez l'AppImage exécutable (chmod +x) et ouvrez-la, ou installez le paquet .deb sur Debian, Ubuntu ou Mint.",
    openTitle: 'Logiciel libre',
    open: "BlackPDF est un logiciel libre sous licence AGPL-3.0. Vous pouvez l'utiliser, l'étudier, le partager et l'améliorer.",
    source: 'Code source',
    bugs: 'Signaler un problème',
    languages: 'Langue de la page',
    alsoIn: 'Cette page est aussi disponible en français.',
    view: 'Voir en français',
    dismiss: 'Fermer',
  },
};
