// Données de la collection
const collectionData = [
  {
    id: 1,
    title: "Drapeau Vaudou « La Sirène », signé AZOR",
    description: "Haïti, fin XIXème - début XXIème. Perles de verre et sequins brodés sur tissu. Pièce emblématique de l'art rituel haïtien, représentant La Sirène (Mami Wata), esprit des eaux.",
    price: "1 000 €",
    numericPrice: 1000,
    details: "Origine : Haïti<br>Dimensions : 43 × 34 cm (hors cadre)",
    category: "art-vaudou",
    image: "image_objet/drapeau_la_sirene.png",
    featured: true
  },
  {
    id: 2,
    title: "« Champs de blé avec cyprès », d'après Vincent van Gogh",
    description: "Huile sur toile – 96 × 75 cm (reproduction peinte à la main). Reproduction soignée de l'un des paysages provençaux les plus emblématiques de Van Gogh.",
    price: "800 €",
    numericPrice: 800,
    details: "Technique : Huile sur toile<br>Dimensions : 96 × 75 cm",
    category: "peinture",
    image: "image_objet/champs_de_ble_vangogh.png",
    featured: true
  },
  {
    id: 3,
    title: "Cheval Chinois en Bois et Os",
    description: "Magnifique sculpture traditionnelle chinoise du XXème siècle, alliant le savoir-faire ancestral du travail du bois et de l'os. Une pièce d'une élégance remarquable.",
    price: "650 €",
    numericPrice: 650,
    details: "Origine : Chine, XXème siècle<br>Dimensions : H 65cm × L 56cm",
    category: "sculpture",
    image: "./image_objet/IMG_cheval.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Fauteuil « Voltaire » - Entièrement Restauré",
    description: "Élégant fauteuil Voltaire au dossier haut et courbes généreuses, restauré dans les règles de l'art. Velours jaune lumineux, soulignée par un fin galuchat de clous tapissier.",
    price: "500 €",
    numericPrice: 500,
    details: "Style : Voltaire<br>Dimensions : 108×36×51 cm",
    category: "mobilier",
    image: "./image_objet/IMG_1916.jpg",
    featured: true
  },
  {
    id: 5,
    title: "« Amandier en fleurs », d'après Vincent van Gogh",
    description: "Huile sur toile – 93 × 75 cm (reproduction peinte à la main). Reproduction soignée du célèbre motif aux branches d'amandier sur ciel azur.",
    price: "600 €",
    numericPrice: 600,
    details: "Technique : Huile sur toile<br>Dimensions : 93 × 75 cm",
    category: "peinture",
    image: "image_objet/amandier_en_fleurs.png"
  },
  {
    id: 6,
    title: "Service à Liqueur en Cristal de Bohême",
    description: "Raffinée garniture à liqueur en cristal de Bohême rouge « doublé » sur cristal clair, au décor gravé à motifs paysagers et rinceaux. Carafe sphérique avec huit verres assortis.",
    price: "450 €",
    numericPrice: 450,
    details: "Origine : Bohême, fin XIXème siècle<br>Matériau : Cristal doublé rouge",
    category: "cristal",
    image: "./image_objet/IMG_2033.jpg"
  },
  {
    id: 7,
    title: "Buste Africain en Bois Sculpté",
    description: "Sculpture traditionnelle du Bénin ornée de coquillages et de bronze, représentant l'art tribal dans toute sa splendeur. Coiffe traditionnelle avec perles et ornements.",
    price: "720 €",
    numericPrice: 720,
    details: "Origine : Bénin, XXème siècle<br>Dimensions : H 60cm × L 27cm",
    category: "art-africain",
    image: "./image_objet/IMG_busteafricain.jpg"
  },
  {
    id: 8,
    title: "Marcel CORTICCHIATO – Paysage des Baux, 1983",
    description: "Palette vive et contrastée, construction géométrisée des plans, horizon bleu-rose : un paysage synthétique très caractéristique de la production de l'artiste dans les années 80.",
    price: "500 €",
    numericPrice: 500,
    details: "Peinture sur papier, signée et datée en bas (1983).",
    category: "peinture",
    image: "image_objet/marcel_corticchiato.png",
    featured: true
  },
  {
    id: 9,
    title: "Service de 12 verres en cristal – Bohemia",
    description: "Élégant service de 12 verres à pied en cristal taillé Bohemia (République Tchèque), dans leurs boîtes d'origine avec pastilles d'authenticité.",
    price: "280 €",
    numericPrice: 280,
    details: "Cristal au plomb > 24% PbO – Neuf avec boîtes d'origine",
    category: "cristal",
    image: "image_objet/service_en_cristal_bohemia.png",
    featured: true
  },
  {
    id: 10,
    title: "Miroir Soleil à miroir bombé – Bois doré",
    description: "Icône décorative des années 1950–60, ce miroir « œil-de-sorcière » présente une monture rayonnante en bois doré à la feuille. Le miroir bombé crée un bel effet convexe et apporte profondeur et éclat à un mur.",
    price: "380 €",
    numericPrice: 380,
    details: "Origine : France, milieu XXᵉ siècle<br>Matériaux : Bois sculpté et doré, miroir bombé (convexe)<br>Dimensions : Ø env. 45 cm (total) – miroir env. 15 cm<br>État : Très bon état décoratif, petites usures de dorure d'usage",
    category: "miroir",
    image: "image_objet/IMG_miroirsoleil.jpg",
    featured: true
  },
  {
    id: 11,
    title: "Paire de lampes champignon en verre – Bleu & blanc Murano",
    description: "Charmantes lampes de chevet en verre soufflé au décor tourbillonné bleu et blanc. Silhouette « champignon » emblématique, lumière douce et diffuse idéale pour une ambiance chaleureuse.",
    price: "420 €",
    numericPrice: 420,
    details: "Origine : Italie (attrib.) / fin XXᵉ siècle<br>Matériau : Verre soufflé, décor tourbillonné bleu & blanc<br>Dimensions : H ~22 cm – Ø abat-jour ~16 cm (chaque lampe)<br>Électricité : Cordon avec interrupteur, douille E14 (ampoules non fournies)<br>État : Très bon état, micro-traces d'usage – vendues en paire",
    category: "luminaire",
    image: "image_objet/lampe_murano.png",
    featured: true
  },
  {
    id: 12,
    title: "Commode galbée marquetée, dessus marbre – style Louis XV",
    description: "Élégante commode à deux tiroirs, façade et côtés galbés, marqueterie florale et garnitures en bronze ciselé. Dessus en marbre veiné, lignes raffinées et esprit XVIIIᵉ pour un intérieur chic.",
    price: "1 200 €",
    numericPrice: 1200,
    details: "Origine : France, XXᵉ siècle (travail d'inspiration Louis XV)<br>Matériaux : Placage de bois marqueté, bronzes, dessus marbre<br>Dimensions : L ~85 cm × H ~77 cm × P ~44 cm<br>État : Très bon état général, infimes marques d'usage",
    category: "mobilier",
    image: "image_objet/IMG_2074.jpg",
    featured: true
  },
  {
    id: 13,
    title: "Bas-relief mésoaméricain en malachite – Profil de dignitaire",
    description: "Panneau mural orné d'un bas-relief en malachite représentant un dignitaire mésoaméricain en profil. Encadrement sculpté de motifs géométriques, pièce décorative et inspirée de l'art précolombien.",
    price: "620 €",
    numericPrice: 620,
    details: "Origine : Amérique centrale, XXᵉ siècle (d'après l'art précolombien)<br>Matériaux : Malachite et panneau bois<br>Dimensions : env. 55 × 35 cm<br>État : Très bon état décoratif",
    category: "art-precolombien",
    image: "image_objet/plaque_aztec.png",
    featured: true
  },
  {
    id: 14,
    title: "Paire de plaques murales dorées – Scènes pastorales",
    description: "Deux plaques rondes à décor en léger relief et médaillons peints de scènes champêtres. Bordures florales ciselées, charme décoratif d'inspiration XIXᵉ.",
    price: "190 €",
    numericPrice: 190,
    details: "Origine : Europe, XXᵉ siècle<br>Matériaux : Alliage doré, peinture sous verre/médaillon<br>Dimensions : Ø env. 28 cm (chaque)<br>État : Très bon état, petites traces d'usage",
    category: "deco",
    image: "image_objet/IMG_2163.jpg",
    featured: false
  },
  {
    id: 15,
    title: "Paire de coqs décoratifs en métal – Michel Jarry",
    description: "Sculptures stylisées de coqs par le sculpteur Michel Jarry, en métal découpé et serti. Les plumes superposées créent un jeu de volumes et une belle patine argentée. Pièces signées, idéales pour une décoration raffinée.",
    price: "1200 €",
    numericPrice: 1200,
    details: "Artiste : Michel Jarry<br>Origine : France, fin XXᵉ siècle<br>Matériau : Métal découpé et formé<br>Dimensions : H env. 28–32 cm (selon coq)<br>État : Très bon état",
    category: "sculpture",
    image: "image_objet/IMG_2165.jpg",
    featured: true
  },
  {
    id: 16,
    title: "Drapeau vaudou perlé – Figure stylisée",
    description: "Drapeau vaudou composé de sequins et perles formant une figure frontale, encadré sous verre. Belle brillance et palette colorée, œuvre rituelle typique de l'art haïtien.",
    price: "500 €",
    numericPrice: 500,
    details: "Origine : Haïti, XXᵉ–XXIᵉ siècle<br>Technique : Sequins et perles sur tissu, encadrement sous verre<br>Dimensions (cadre) : env. 42 × 32 cm<br>État : Excellent, prêt à accrocher",
    category: "art-vaudou",
    image: "image_objet/drapeau_vaudou.png",
    featured: true
  },
  {
    id: 17,
    title: "Lucien Henry – Paysage à la rivière, huile sur toile",
    description: "Superbe paysage de campagne signé Lucien Henry, représentant une rivière bordée d'arbres sous un ciel nuageux. Une œuvre d'une grande finesse, témoignage du talent de ce peintre de la fin XIXᵉ siècle.",
    price: "2 400 €",
    numericPrice: 2400,
    details: "Artiste : Lucien Henry (1850–1896)<br>Origine : France, fin XIXᵉ siècle<br>Technique : Huile sur toile<br>Cadre : Bois sculpté et doré à décor rocaille<br>Dimensions : cadre env. 70 × 90 cm (à vue env. 50 × 70 cm)<br>État : Très bon état ancien, toile nettoyée, cadre avec patine d'usage",
    category: "peinture",
    image: "image_objet/tab_lucien_henry.png",
    featured: true
  },
  {
    id: 18,
    title: "Drapeau vaudou perlé – Figure rituelle encadrée",
    description: "Drapeau vaudou orné de sequins et perles formant une figure stylisée, monté dans un encadrement sobre. Pièce brillante et colorée, typique de l'art rituel haïtien.",
    price: "500 €",
    numericPrice: 500,
    details: "Origine : Haïti, XXᵉ–XXIᵉ siècle<br>Technique : Sequins & perles sur tissu, sous verre<br>Dimensions (cadre) : env. 42 × 32 cm<br>État : Excellent, prêt à accrocher",
    category: "art-vaudou",
    image: "image_objet/drapeau_sirene.png",
    featured: true
  },
  {
    id: 19,
    title: "Paire de plaques murales dorées – Paysages villageois",
    description: "Deux plaques rondes à décor en léger relief, médaillons peints de scènes de village et chemins de campagne. Bordures fleuries ciselées.",
    price: "210 €",
    numericPrice: 210,
    details: "Origine : Europe, XXᵉ siècle<br>Matériaux : Alliage doré, peinture sous médaillon<br>Dimensions : Ø env. 28 cm (chaque)<br>État : Très bon état, infimes traces d'usage",
    category: "deco",
    image: "image_objet/IMG_2169.jpg",
    featured: false
  },
  {
    id: 20,
    title: "Chevalet de table Art Nouveau – Métal ajouré doré",
    description: "Élégant chevalet de présentation à décor floral stylisé, lignes sinueuses typiques de l'Art Nouveau. Idéal pour poser un cadre, une assiette décorative ou un livre.",
    price: "120 €",
    numericPrice: 120,
    details: "Origine : Europe, début XXᵉ siècle (style Art Nouveau)<br>Matériau : Métal moulé, finition dorée et rehauts verts<br>Dimensions : H env. 32 cm × L env. 20 cm<br>État : Très bon état, légère patine décorative",
    category: "deco",
    image: "image_objet/IMG_2167.jpg",
    featured: false
  },
  {
    id: 21,
    title: "André Demay & Georges Boitard – La Dame à la Licorne (La Vue), tapisserie EA",
    description: "Grande tapisserie murale d'après la célèbre tenture médiévale « La Dame à la Licorne » (panneau de la Vue) : la dame tenant un miroir, le lion et la licorne sur fond mille-fleurs. Belle pièce décorative au format spectaculaire, réalisée en épreuve d'artiste par André Demay et Georges Boitard.",
    price: "1400 €",
    numericPrice: 1400,
    details: "Artistes : André Demay & Georges Boitard<br>Origine : France, XXᵉ siècle<br>Technique : Tapisserie murale tissée (épreuve d'artiste)<br>Sujet : d'après « La Dame à la Licorne – La Vue »<br>Édition : 200 exemplaires, cette EA porte le n° 47<br>Dimensions : env. 215 × 245 cm<br>État : Très bon état d'usage, quelques plis d'accrochage et menues traces liées à la manipulation ; couleurs fraîches",
    category: "tapisserie",
    image: "image_objet/tapisserie_andre_demay.png",
    featured: true
  },
  {
  id: 22,
  title: "Michel Jarry – Femmes algériennes",
  description: "Huile sur toile représentant deux femmes berbères en habits traditionnels, ornées de bijoux et de tatouages au henné. Scène empreinte de douceur et d’authenticité, typique du style orientaliste de Michel Jarry.",
  price: "1700 €",
  numericPrice: 1700,
  details: "Artiste : Michel Jarry<br>Origine : France, XXᵉ siècle<br>Technique : Huile sur toile<br>Sujet : Scène de genre orientaliste<br>Dimensions : 70 × 61 cm (avec cadre)<br>Signature : en bas à droite<br>Certificat d’authenticité : oui<br>État : Excellent état, cadre d’origine en bois doré",
  category: "peinture",
  image: "image_objet/femmes_algeriennes_jarry.png",
  featured: true
},
{
  id: 23,
  title: "Émile Morel – Le Port du Havre",
  description: "Élégante marine représentant le port du Havre animé de voiliers et de navires au mouillage. Lumière douce et ciel vaporeux typiques de la peinture maritime impressionniste.",
  price: "950 €",
  numericPrice: 950,
  details: "Artiste : Émile Morel<br>Origine : France, XXᵉ siècle<br>Technique : Huile sur toile<br>Sujet : Marine, port du Havre<br>Dimensions : 69 × 61 cm (avec cadre)<br>Signature : en bas à droite<br>Certificat d’authenticité : oui<br>État : Très bon état, cadre doré en excellent état",
  category: "peinture",
  image: "image_objet/tab_emile_morel.png",
  featured: true
},
{
  id: 24,
  title: "Monika Meunier – Sous le Soleil",
  description: "Grande toile contemporaine aux couleurs éclatantes, représentant un paysage méditerranéen ensoleillé. Une œuvre joyeuse et expressive, typique de la touche de Monika Meunier.",
  price: "1200 €",
  numericPrice: 1200,
  details: "Artiste : Monika Meunier<br>Origine : France, XXIᵉ siècle<br>Technique : Acrylique sur toile<br>Sujet : Paysage méditerranéen<br>Dimensions : 96 × 96 cm<br>Signature : en bas à droite<br>Certificat d’authenticité : oui<br>État : Excellent état, toile récente",
  category: "peinture contemporaine",
  image: "image_objet/sous_le_soleil_meunier.png",
  featured: true
},
{
  id: 25,
  title: "Michel Jarry – Port de Villefranche",
  description: "Charmante huile sur toile représentant le port de Villefranche-sur-Mer, baigné de lumière. Les tons chauds et les détails architecturaux confèrent à la scène un caractère typiquement méditerranéen.",
  price: "650 €",
  numericPrice: 650,
  details: "Artiste : Michel Jarry<br>Origine : France, XXᵉ siècle<br>Technique : Huile sur toile<br>Sujet : Port de Villefranche-sur-Mer<br>Dimensions : 50 × 70 cm<br>Signature : en bas à droite<br>Certificat d’authenticité : oui<br>État : Très bon état général",
  category: "peinture",
  image: "image_objet/villefranche-Photoroom.png",
  featured: true
},
{
  id: 26,
  title: "Michel Jarry – Sculpture féminine stylisée en bronze doré",
  description: "Élégante sculpture moderniste représentant une femme stylisée au port gracieux. Pièce rare au galbe harmonieux et à la finition dorée éclatante, typique du travail de Michel Jarry.",
  price: "1 100 €",
  numericPrice: 1100,
  details: "Artiste : Michel Jarry<br>Origine : France, XXᵉ siècle<br>Technique : Sculpture en bronze doré sur socle en pierre<br>Sujet : Figure féminine stylisée<br>Hauteur : env. 55 cm<br>Signature : sur la base<br>Certificat d’authenticité : oui<br>État : Excellent état",
  category: "sculpture",
  image: "image_objet/statue_jarry.png",
  featured: true
},
{
  id: 27,
  title: "Michel Jarry – Vue sur Minaret",
  description: "Huile sur toile représentant une scène de vie orientale animée au pied d’un minaret entouré de palmiers. Composition lumineuse et détaillée, typique du style orientaliste de Michel Jarry.",
  price: "700 €",
  numericPrice: 700,
  details: "Artiste : Michel Jarry<br>Origine : France, XXᵉ siècle<br>Technique : Huile sur toile<br>Sujet : Scène orientale, architecture et personnages<br>Dimensions : 64 × 53 cm (avec cadre)<br>Signature : en bas à droite<br>Certificat d’authenticité : oui<br>État : Excellent état, cadre doré d’origine",
  category: "peinture",
  image: "image_objet/vue_sur_minaret.png",
  featured: true
}
];

// Variables globales pour le catalogue
let currentItems = [];
let filteredItems = [];
let itemsPerPage = 6;
let currentPage = 1;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupScrollEffects();
  loadCatalogueItems();
  console.log('Catalogue Selennia Boutique - Initialisé avec succès');
}

function setupNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
          if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) span.style.opacity = '0';
          if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          span.style.transform = '';
          span.style.opacity = '';
        }
      });
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = '';
          span.style.opacity = '';
        });
      });
    });
  }
}

function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
}

function generatePlaceholderImage(itemId, title) {
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#d4af37');
  gradient.addColorStop(0.5, '#f4e4bc');
  gradient.addColorStop(1, '#2c3e2d');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 18px Inter';
  ctx.textAlign = 'center';
  ctx.fillText('SELENNIA BOUTIQUE', canvas.width / 2, canvas.height / 2 - 20);
  
  ctx.font = '14px Inter';
  ctx.fillText(`Pièce N°${itemId}`, canvas.width / 2, canvas.height / 2 + 10);
  
  ctx.font = '12px Inter';
  ctx.fillText('Collection d\'Art Ancien', canvas.width / 2, canvas.height / 2 + 35);
  
  return canvas.toDataURL();
}

function loadCatalogueItems() {
  currentItems = [...collectionData];
  filteredItems = [...collectionData];
  displayCatalogueItems();
  setupPagination();
  updateStats();
}

function displayCatalogueItems() {
  const grid = document.getElementById('catalogue-grid');
  if (!grid) return;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = filteredItems.slice(startIndex, endIndex);

  if (itemsToShow.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>Aucun résultat trouvé</h3>
        <p>Essayez de modifier vos critères de recherche</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';
  
  itemsToShow.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'catalogue-item';
    
    const imageSrc = item.image || generatePlaceholderImage(item.id, item.title);
    
    article.innerHTML = `
      <div class="item-image">
        <img src="${imageSrc}" alt="${item.title}" loading="lazy" onerror="this.src='${generatePlaceholderImage(item.id, item.title)}'">
        <div class="item-overlay">
          <button class="view-btn" onclick="showItemDetails(${item.id})">
            <i class="fas fa-eye"></i> Voir détails
          </button>
        </div>
      </div>
      <div class="item-content">
        <h3 class="item-title">${item.title}</h3>
        <p class="item-description">${item.description}</p>
        <div class="item-price">${item.price}</div>
        <span class="item-category">${getCategoryName(item.category)}</span>
        <div class="item-details">${item.details}</div>
      </div>
    `;

    grid.appendChild(article);
  });
}

function getCategoryName(category) {
  const categories = {
    'art-vaudou': 'Art Vaudou',
    'peinture': 'Peinture',
    'sculpture': 'Sculpture',
    'mobilier': 'Mobilier',
    'luminaire': 'Luminaire',
    'art-africain': 'Art Africain',
    'cristal': 'Cristal',
    'art-precolombien': 'Art Précolombien',
    'arts-de-la-table': 'Arts de la Table',
    'miroir': 'Miroir',
    'tableau': 'Tableau',
    'deco': 'Décoration',
    'tapisserie': 'Tapisserie'
  };
  return categories[category] || category;
}

function updateStats() {
  const statsElement = document.getElementById('results-count');
  if (statsElement) {
    const count = filteredItems.length;
    statsElement.textContent = `${count} résultat${count > 1 ? 's' : ''}`;
  }
}

function setupPagination() {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let paginationHTML = '';
  
  // Bouton précédent
  paginationHTML += `
    <button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" 
            onclick="changePage(${currentPage - 1})" 
            ${currentPage === 1 ? 'disabled' : ''}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `;

  // Pages
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationHTML += `
        <button class="page-btn ${i === currentPage ? 'active' : ''}" 
                onclick="changePage(${i})">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationHTML += `<span style="display: flex; align-items: center; color: var(--text-light);">...</span>`;
    }
  }

  // Bouton suivant
  paginationHTML += `
    <button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" 
            onclick="changePage(${currentPage + 1})" 
            ${currentPage === totalPages ? 'disabled' : ''}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  
  currentPage = page;
  displayCatalogueItems();
  setupPagination();
  
  // Scroll vers le haut de la grille
  document.getElementById('catalogue-grid').scrollIntoView({ behavior: 'smooth' });
}

function applyFilters() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const category = document.getElementById('category-filter').value;
  const priceFilter = document.getElementById('price-filter').value;
  const sortFilter = document.getElementById('sort-filter').value;

  filteredItems = collectionData.filter(item => {
    const matchesSearch = !searchTerm || 
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm);
    
    const matchesCategory = !category || item.category === category;
    
    let matchesPrice = true;
    if (priceFilter) {
      const price = item.numericPrice;
      if (priceFilter === '500') matchesPrice = price <= 500;
      else if (priceFilter === '1000') matchesPrice = price <= 1000;
      else if (priceFilter === '1500') matchesPrice = price <= 1500;
      else if (priceFilter === '2000') matchesPrice = price > 1500;
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Tri
  if (sortFilter) {
    if (sortFilter === 'price-asc') {
      filteredItems.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (sortFilter === 'price-desc') {
      filteredItems.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (sortFilter === 'name') {
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  currentPage = 1;
  displayCatalogueItems();
  setupPagination();
  updateStats();
}

function resetFilters() {
  document.getElementById('search-input').value = '';
  document.getElementById('category-filter').value = '';
  document.getElementById('price-filter').value = '';
  document.getElementById('sort-filter').value = '';
  
  filteredItems = [...collectionData];
  currentPage = 1;
  displayCatalogueItems();
  setupPagination();
  updateStats();
}

function showItemDetails(itemId) {
  const item = collectionData.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('item-modal');
  const modalBody = document.getElementById('modal-body');
  
  const imageSrc = item.image || generatePlaceholderImage(item.id, item.title);
  
  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-image">
        <img src="${imageSrc}" alt="${item.title}" onerror="this.src='${generatePlaceholderImage(item.id, item.title)}'">
      </div>
      <div class="modal-details">
        <h2>${item.title}</h2>
        <div class="modal-category">
          ${getCategoryName(item.category)}
        </div>
        <p class="modal-description">${item.description}</p>
        <div class="modal-info">${item.details}</div>
        <div class="modal-price">${item.price}</div>
        <div class="modal-actions">
          <a href="tel:+33601581118" class="modal-btn btn-primary">
            <i class="fas fa-phone"></i> Appeler
          </a>
          <a href="mailto:selennia.boutique@gmail.com?subject=Demande pour ${item.title}" class="modal-btn btn-secondary">
            <i class="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('show');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeItemModal() {
  const modal = document.getElementById('item-modal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
}

// Fermer modal au clic en dehors
document.addEventListener('click', function(e) {
  const modal = document.getElementById('item-modal');
  if (e.target === modal) {
    closeItemModal();
  }
});

// Fermer modal avec Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeItemModal();
  }
});

 // Affichage du catalogue
  grid.innerHTML = produits
    .map(
      (p) => `
      <div class="catalogue-item">
        <div class="item-image">
          <img src="${p.image}" alt="${p.titre}" class="zoomable-image" data-full="${p.image}">
          <div class="item-overlay">
            <button class="view-btn"><i class="fas fa-search-plus"></i> Voir</button>
          </div>
        </div>
        <div class="item-content">
          <div class="item-category">${p.categorie}</div>
          <h3 class="item-title">${p.titre}</h3>
          <p class="item-description">${p.description}</p>
          <div class="item-price">${p.prix}</div>
        </div>
      </div>
    `
    )
    .join("");

  resultsCount.textContent = `${produits.length} résultats`;

  // ================================
  // GESTION DE LA LIGHTBOX
  // ================================

  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-lightbox");

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("show");
  }

  function closeLightbox() {
    lightbox.classList.remove("show");
    lightboxImg.src = "";
  }

  // Ouvrir au clic sur une image ou bouton "voir"
  document.querySelectorAll(".zoomable-image, .view-btn").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const img =
        el.classList.contains("zoomable-image")
          ? el.getAttribute("data-full")
          : el.closest(".item-image").querySelector("img").getAttribute("data-full");
      openLightbox(img);
    });
  });

  // Fermer sur clic de la croix ou en dehors de l’image
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
 


   

  

