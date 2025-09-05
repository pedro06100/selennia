// Images intégrées - Fonction pour générer des placeholders élégants
function getImageForItem(itemId) {
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  
  // Gradient élégant avec les couleurs de Selennia
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#d4af37');
  gradient.addColorStop(0.5, '#f4e4bc');
  gradient.addColorStop(1, '#2c3e2d');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Cadre décoratif
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
  // Texte principal
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px Inter';
  ctx.textAlign = 'center';
  ctx.fillText('SELENNIA BOUTIQUE', canvas.width / 2, canvas.height / 2 - 20);
  
  ctx.font = '16px Inter';
  ctx.fillText(`Pièce N°${itemId}`, canvas.width / 2, canvas.height / 2 + 10);
  
  ctx.font = '14px Inter';
  ctx.fillText('Collection d\'Art Ancien', canvas.width / 2, canvas.height / 2 + 35);
  
  return canvas.toDataURL();
}

// Données de la collection avec toutes les images
const collectionData = [
  {
    id: 1,
    title: "Drapeau Vaudou « La Sirène », signé AZOR",
    description: "Haïti, fin XIXème - début XXIème. Perles de verre et sequins brodés sur tissu. Pièce emblématique de l'art rituel haïtien, représentant La Sirène (Mami Wata), esprit des eaux.",
    price: "1 000 €",
    details: "Origine : Haïti<br>Dimensions : 43 × 34 cm (hors cadre)",
    category: "art-vaudou",
    image: "./image_objet/IMG_2173.jpg",
    featured: true
  },
  {
    id: 2,
    title: "« Champs de blé avec cyprès », d'après Vincent van Gogh",
    description: "Huile sur toile — 96 × 75 cm (reproduction peinte à la main). Reproduction soignée de l'un des paysages provençaux les plus emblématiques de Van Gogh.",
    price: "800 €",
    details: "Technique : Huile sur toile<br>Dimensions : 96 × 75 cm",
    category: "peinture",
    image: "./image_objet/IMG_1913.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Cheval Chinois en Bois et Os",
    description: "Magnifique sculpture traditionnelle chinoise du XXème siècle, alliant le savoir-faire ancestral du travail du bois et de l'os. Une pièce d'une élégance remarquable.",
    price: "650 €",
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
    details: "Style : Voltaire<br>Dimensions : 108×36×51 cm",
    category: "mobilier",
    image: "./image_objet/IMG_1916.jpg",
    featured: true
  },
  {
    id: 5,
    title: "« Amandier en fleurs », d'après Vincent van Gogh",
    description: "Huile sur toile — 93 × 75 cm (reproduction peinte à la main). Reproduction soignée du célèbre motif aux branches d'amandier sur ciel azur.",
    price: "600 €",
    details: "Technique : Huile sur toile<br>Dimensions : 93 × 75 cm",
    category: "peinture",
    image: "./image_objet/IMG_1917.jpg"
  },
  {
    id: 6,
    title: "Commode Galbée Marquetée - Bois de Rose",
    description: "Élégante commode à deux tiroirs de style Louis XV/Transition, au bâti galbé et aux côtés mouvementés. Placage en bois de rose en frises à chevrons avec marqueterie florale.",
    price: "1 200 €",
    details: "Estampillée « MARQUANT », Paris<br>Dimensions : L 76 × H 75 × P 40 cm",
    category: "mobilier",
    image: "./image_objet/IMG_2074.jpg"
  },
  {
    id: 7,
    title: "Paire de Lampes « Murano » en Opaline Bleue",
    description: "Élégante paire de lampes de table en verre opalin soufflé, aux volutes bleu cobalt sur fond laiteux. Silhouette « champignon » emblématique des productions muranaises des années 70/80.",
    price: "350 €",
    details: "Origine : Style Murano<br>Époque : années 70/80",
    category: "luminaire",
    image: "./image_objet/IMG_2027.jpg"
  },
  {
    id: 8,
    title: "Plaque Murale Vintage - Style Maya/Aztèque",
    description: "Plaque murale vintage en bois avec décor en malachite. Bas-relief représentant une figure rituelle encadrée d'une frise géométrique, dans le style maya/aztèque.",
    price: "420 €",
    details: "Origine : Mexique<br>Dimensions : 42 × 65 cm",
    category: "art-precolombien",
    image: "./image_objet/IMG_2031.JPG"
  },
  {
    id: 9,
    title: "Service à Liqueur en Cristal de Bohême",
    description: "Raffinée garniture à liqueur en cristal de Bohême rouge « doublé » sur cristal clair, au décor gravé à motifs paysagers et rinceaux. Carafe sphérique avec huit verres assortis.",
    price: "450 €",
    details: "Origine : Bohême, fin XIXème siècle<br>Matériau : Cristal doublé rouge",
    category: "arts-de-la-table",
    image: "./image_objet/IMG_2033.jpg"
  },
  {
    id: 10,
    title: "Buste Africain en Bois Sculpté",
    description: "Sculpture traditionnelle du Bénin ornée de coquillages et de bronze, représentant l'art tribal dans toute sa splendeur. Coiffe traditionnelle avec perles et ornements.",
    price: "720 €",
    details: "Origine : Bénin, XXème siècle<br>Dimensions : H 60cm × L 27cm",
    category: "art-africain",
    image: "./image_objet/IMG_busteafricain.jpg"
  },
  {
    id: 11,
    title: "Miroir Soleil Œil de Sorcière",
    description: "Exceptionnel miroir convexe en bois doré du XXème siècle, au design solaire raffiné. Ce type de miroir était très prisé dans les intérieurs bourgeois de l'époque.",
    price: "450 €",
    details: "Époque : XXème siècle<br>Diamètre : 61 cm",
    category: "miroir",
    image: "./image_objet/IMG_miroirsoleil.JPG"
  },
  {
    id: 12,
    title: "Lucien Henry — Paysage animé au bord de l’eau",
    description: "Huile sur toile, signée en bas  – Cadre doré d’époque .Élégant paysage animé aux tonalités vert et ocre, traité dans une touche souple et lumineuse. La composition s’ouvre sur une berge arborée, un plan d’eau central et un lointain bleuté, créant une profondeur atmosphérique harmonieuse. L’œuvre est présentée dans un cadre doré mouluré à décor de rinceaux, en bel état, qui souligne son caractère décoratif.",
    price: "1900 €",
    details: "Cadre doré sculpté, époque fin XIXᵉ / début XXᵉ",
    category: "tableau",
    image: "image_objet/IMG_2164.jpg"
  },
  {
    id: 13,
    title: "Michel Jarry — Paire de coqs",
    description: "Magnifique duo de coqs aux plumages stylisés, réalisés en fines lamelles de métal découpé puis assemblées en volume. Le travail des plumes, en superpositions et volutes, capte la lumière et donne un mouvement très vivant à l’ensemble. Pièces décoratives fortes, idéales sur console, cheminée ou comptoir.",
    price: "1200 €",
    details: "michel jarry, sculpture métal, coq, art contemporain, laiton, acier, décoration, paire de sculptures.",
    category: "sculpture",
    image: "image_objet/IMG_2165.jpg"
  },
  {
   id: 14,
    title: "Drapeau vaudou — perles & sequins brodés",
    description: "Pièce rituelle brodée de perles et sequins aux couleurs profondes, représentant une figure stylisée sur fond rouge. Le travail présente une belle densité de broderie et un graphisme puissant, typique des ateliers haïtiens. Présenté avec passe-partout et cadre noir contemporain, prêt à accrocher.",
    price: "500 €",
    details: " Haïti, 36 × 28 cm",
    category: "tableau",
    image: "image_objet/IMG_2170.jpg"
  },
   {
   id: 15,
    title: "Drapeau vaudou — perles & sequins brodés",
    description: "Pièce rituelle brodée de perles et sequins aux couleurs profondes, représentant une figure stylisée sur fond rouge. Le travail présente une belle densité de broderie et un graphisme puissant, typique des ateliers haïtiens. Présenté avec passe-partout et cadre noir contemporain, prêt à accrocher.",
    price: "500 €",
    details: " Haïti, 36 × 28 cm",
    category: "tableau",
    image: "image_objet/IMG_2168.jpg"
  },
    {
   id: 16,
    title: "Paire d’assiettes murales en laiton – Décor paysager peint",
    description: "Travail décoratif, vers 1950–1970. Laiton repoussé à motif floral, centre peint représentant des scènes rurales. Très bel effet décoratif, idéale en accrochage mural.",
    price: "200 €",
    category: "deco",
    image: "image_objet/IMG_2163.jpg"
  },
   
    
    {
   id: 17,
    title: "Paire d’assiettes murales en laiton – Décor paysager peint",
    description: "Travail décoratif, vers 1950–1970. Laiton repoussé à motif floral, centre peint représentant des scènes rurales. Très bel effet décoratif, idéale en accrochage mural.",
    price: "200 €",
    category: "deco",
    image: "image_objet/IMG_2169.jpg"
  },
  
];

// Variables globales
let currentItems = [];
let itemsPerPage = 6;
let currentPage = 0;
let allItemsLoaded = false;

// Fonction d'initialisation
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupSmoothScrolling();
  setupScrollEffects();
  setupLightbox();
  loadGalleryItems();
  setupFormValidation();
  console.log('Selennia Boutique - Site initialisé avec succès');
}

// Navigation mobile
function setupNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animation du hamburger
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

    // Fermer le menu au clic sur un lien
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

// Smooth scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Effets de scroll
function setupScrollEffects() {
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScrollY = window.scrollY;
    
    // Effet de fond sur le header
    if (currentScrollY > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  });

  // Intersection Observer pour les animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animation spéciale pour les éléments de galerie
        if (entry.target.classList.contains('gallery-item')) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Math.random() * 300); // Délai aléatoire pour effet de cascade
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec animation
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Chargement des éléments de galerie
function loadGalleryItems() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  // Fonction pour créer un élément HTML avec les vraies images
  function createGalleryItem(item, index) {
    const article = document.createElement('article');
    article.className = 'gallery-item';
    article.style.animationDelay = `${index * 0.1}s`;
    
    // Utiliser l'image de l'item ou un placeholder si pas d'image
    const imageSrc = item.image || getImageForItem(item.id);
    
    article.innerHTML = `
      <div class="item-image">
        <img src="${imageSrc}" alt="${item.title}" loading="lazy" onerror="this.src=getImageForItem(${item.id})">
        <div class="item-overlay">
          <button class="view-btn" onclick="openLightboxFromData(${item.id})">
            <i class="fas fa-eye"></i> Voir
          </button>
        </div>
      </div>
      <div class="item-content">
        <h3 class="item-title">${item.title}</h3>
        <p class="item-description">${item.description}</p>
        <div class="item-price">${item.price}</div>
        <div class="item-details">${item.details}</div>
      </div>
    `;

    return article;
  }

  // Charger les éléments par pages
  function loadNextPage() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, collectionData.length);
    const itemsToLoad = collectionData.slice(startIndex, endIndex);

    itemsToLoad.forEach((item, index) => {
      const galleryItem = createGalleryItem(item, startIndex + index);
      galleryGrid.appendChild(galleryItem);
      
      // Observer pour animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(galleryItem);
    });

    currentPage++;
    
    // Vérifier s'il reste des éléments
    if (endIndex >= collectionData.length) {
      allItemsLoaded = true;
      const loadMoreBtn = document.getElementById('load-more-btn');
      if (loadMoreBtn) {
        loadMoreBtn.classList.add('hidden');
      }
    } else {
      createLoadMoreButton();
    }
  }

  // Créer le bouton "Voir plus"
  function createLoadMoreButton() {
    let loadMoreBtn = document.getElementById('load-more-btn');
    let loadMoreContainer = document.querySelector('.load-more-container');
    
    if (!loadMoreContainer) {
      loadMoreContainer = document.createElement('div');
      loadMoreContainer.className = 'load-more-container';
      galleryGrid.parentNode.appendChild(loadMoreContainer);
    }

    if (!loadMoreBtn) {
      loadMoreBtn = document.createElement('button');
      loadMoreBtn.id = 'load-more-btn';
      loadMoreBtn.className = 'load-more-btn';
      loadMoreBtn.innerHTML = `
        <span>Voir plus d'œuvres</span>
        <i class="fas fa-chevron-down"></i>
      `;
      
      loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.innerHTML = `
          <span>Chargement...</span>
          <div class="loading"></div>
        `;
        
        setTimeout(() => {
          loadNextPage();
          loadMoreBtn.innerHTML = `
            <span>Voir plus d'œuvres</span>
            <i class="fas fa-chevron-down"></i>
          `;
        }, 800);
      });
      
      loadMoreContainer.appendChild(loadMoreBtn);
    }
  }

  // Charger la première page
  loadNextPage();
}

// Lightbox
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

function openLightboxFromData(itemId) {
  const item = collectionData.find(i => i.id === itemId);
  if (item && item.image) {
    openLightbox(item.image, item.title);
  } else {
    // Fallback vers placeholder
    openLightbox(getImageForItem(itemId), item ? item.title : `Pièce ${itemId}`);
  }
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.style.display = 'block';
    setTimeout(() => lightbox.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

// Validation de formulaire + envoi AJAX vers FormSubmit
function setupFormValidation() {
  const form = document.getElementById('contact-form'); // <— id ajouté
  if (!form) return;

  const inputs = form.querySelectorAll('.form-input, .form-textarea');
  const statusEl = document.getElementById('form-status');

  // Effets visuels sur les inputs (inchangé)
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.transform = 'scale(1.02)';
      input.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.2)';
    });
    input.addEventListener('blur', () => {
      input.style.transform = 'scale(1)';
      input.style.boxShadow = '';
    });
  });

  form.addEventListener('submit', async function(e) {
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    let isValid = true;
    let errors = [];

    if (!name) { isValid = false; errors.push('Le nom est requis'); }
    if (!email) {
      isValid = false; errors.push("L'email est requis");
    } else if (!isValidEmail(email)) {
      isValid = false; errors.push("Format d'email invalide");
    }
    if (!message) {
      isValid = false; errors.push('Le message est requis');
    } else if (message.length < 10) {
      isValid = false; errors.push('Message trop court (minimum 10 caractères)');
    }

    if (!isValid) {
      e.preventDefault();
      showNotification(errors.join('<br>'), 'error');
      return;
    }

    // Envoi AJAX (POST) — évite l'erreur "Form should POST"
    e.preventDefault();
    const submitBtn = form.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.innerHTML = '<div class="loading"></div> Envoi en cours...';
      submitBtn.disabled = true;
    }

    try {
      const data = new FormData(form);
      const resp = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (resp.ok) {
        form.reset();
        showNotification('Votre message a été envoyé. Merci !', 'success');
      } else {
        showNotification(
          "Une erreur est survenue lors de l'envoi. Réessayez, ou écrivez-nous à selennia.boutique@gmail.com.",
          'error'
        );
      }
    } catch (err) {
      showNotification(
        "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
        'error'
      );
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
        submitBtn.disabled = false;
      }
    }
  });

  function showNotification(message, type) {
    if (!statusEl) return;
    statusEl.innerHTML = message;
    statusEl.classList.remove('form-error', 'form-success');
    statusEl.classList.add(type === 'success' ? 'form-success' : 'form-error');
    statusEl.style.display = 'block';
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Active la validation une fois le DOM prêt
document.addEventListener('DOMContentLoaded', setupFormValidation);


// Système de notifications
function showNotification(message, type = 'info') {
  // Supprimer les notifications existantes
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notif => notif.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  const icon = type === 'success' ? 'fas fa-check-circle' : 
               type === 'error' ? 'fas fa-exclamation-triangle' : 
               'fas fa-info-circle';
  
  notification.innerHTML = `
    <div class="notification-content">
      <i class="${icon}"></i>
      <div class="notification-message">${message}</div>
    </div>
  `;
  
  // Styles
  const colors = {
    success: { bg: '#10b981', text: '#ffffff' },
    error: { bg: '#ef4444', text: '#ffffff' },
    info: { bg: '#3b82f6', text: '#ffffff' }
  };
  
  const color = colors[type] || colors.info;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${color.bg};
    color: ${color.text};
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow-medium);
    z-index: 3000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
    font-family: 'Inter', sans-serif;
  `;
  
  document.body.appendChild(notification);
  
  // Animation d'entrée
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto-remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Fonctions utilitaires
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Gestion des erreurs
window.addEventListener('error', (e) => {
  console.error('Erreur JavaScript:', e.error);
});

// Performance monitoring
window.addEventListener('load', () => {
  if ('performance' in window) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Site chargé en ${loadTime}ms`);
  }
});

// Export pour tests (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    collectionData,
    openLightbox,
    closeLightbox,
    isValidEmail,
    showNotification
  };
}