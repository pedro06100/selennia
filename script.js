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
    image: "./image_objet/IMG_2173.jpg",
    featured: true
  },
  {
    id: 2,
    title: "« Champs de blé avec cyprès », d'après Vincent van Gogh",
    description: "Huile sur toile — 96 × 75 cm (reproduction peinte à la main). Reproduction soignée de l'un des paysages provençaux les plus emblématiques de Van Gogh.",
    price: "800 €",
    numericPrice: 800,
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
    description: "Huile sur toile — 93 × 75 cm (reproduction peinte à la main). Reproduction soignée du célèbre motif aux branches d'amandier sur ciel azur.",
    price: "600 €",
    numericPrice: 600,
    details: "Technique : Huile sur toile<br>Dimensions : 93 × 75 cm",
    category: "peinture",
    image: "./image_objet/IMG_1917.jpg"
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
    title: "Marcel CORTICCHIATO — Paysage des Baux, 1983",
    description: "Palette vive et contrastée, construction géométrisée des plans, horizon bleu-rose : un paysage synthétique très caractéristique de la production de l'artiste dans les années 80.",
    price: "500 €",
    numericPrice: 500,
    details: "Peinture sur papier, signée et datée en bas (1983).",
    category: "peinture",
    image: "image_objet/IMG_2252.jpg",
    featured: true
  },
  {
    id: 9,
    title: "Service de 12 verres en cristal — Bohemia",
    description: "Élégant service de 12 verres à pied en cristal taillé Bohemia (République Tchèque), dans leurs boîtes d'origine avec pastilles d'authenticité.",
    price: "280 €",
    numericPrice: 280,
    details: "Cristal au plomb > 24% PbO — Neuf avec boîtes d'origine",
    category: "cristal",
    image: "image_objet/IMG_2253.jpg",
    featured: true
  }
];

// Variables globales pour le catalogue
let currentItems = [];
let filteredItems = [];
let itemsPerPage = 6;
let currentPage = 1;
let selectedPhotos = [];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupSmoothScrolling();
  setupScrollEffects();
  loadCatalogueItems();
  setupPhotoUpload();
  setupForms();
  console.log('Selennia Boutique - Site initialisé avec succès');
}

// Navigation
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

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
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
        scrollToSection(target.id);
      }
    });
  });
}

// Effets de scroll
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

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Génération d'image placeholder
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

// Catalogue
function loadCatalogueItems() {
  currentItems = [...collectionData];
  filteredItems = [...collectionData];
  displayCatalogueItems();
  setupPagination();
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
    
    // Utiliser l'image existante ou générer un placeholder
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
    'deco': 'Décoration'
  };
  return categories[category] || category;
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
  
  // Scroll vers le catalogue
  scrollToSection('catalogue');
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
}

// Modal pour les détails d'un item
function showItemDetails(itemId) {
  const item = collectionData.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('item-modal');
  const modalBody = document.getElementById('modal-body');
  
  const imageSrc = item.image || generatePlaceholderImage(item.id, item.title);
  
  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
      <div>
        <img src="${imageSrc}" alt="${item.title}" style="width: 100%; border-radius: 15px; box-shadow: var(--shadow-medium);" onerror="this.src='${generatePlaceholderImage(item.id, item.title)}'">
      </div>
      <div>
        <h2 style="font-family: 'Playfair Display', serif; color: var(--dark-green); margin-bottom: 1rem;">${item.title}</h2>
        <div style="background: var(--primary-gold); color: white; padding: 0.5rem 1rem; border-radius: 20px; display: inline-block; margin-bottom: 1rem;">
          ${getCategoryName(item.category)}
        </div>
        <p style="color: var(--text-light); line-height: 1.6; margin-bottom: 1.5rem;">${item.description}</p>
        <div style="color: var(--text-light); margin-bottom: 2rem; line-height: 1.6;">${item.details}</div>
        <div style="font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--primary-gold); font-weight: bold; margin-bottom: 2rem;">${item.price}</div>
        <div style="display: flex; gap: 1rem;">
          <a href="tel:+33601581118" style="background: var(--primary-gold); color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; font-weight: 600;">
            <i class="fas fa-phone"></i> Appeler
          </a>
          <a href="mailto:selennia.boutique@gmail.com?subject=Demande pour ${item.title}" style="background: var(--dark-green); color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; font-weight: 600;">
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

// Upload de photos pour l'estimation
function setupPhotoUpload() {
  const uploadZone = document.getElementById('photo-upload-zone');
  const fileInput = document.getElementById('photo-input');
  const preview = document.getElementById('photos-preview');

  if (!uploadZone || !fileInput || !preview) return;

  uploadZone.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', handlePhotoSelection);

  // Drag & drop
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    handlePhotoFiles(files);
  });
}

function handlePhotoSelection(e) {
  const files = Array.from(e.target.files);
  handlePhotoFiles(files);
}

function handlePhotoFiles(files) {
  const maxFiles = 6;
  const maxSize = 5 * 1024 * 1024; // 5MB

  files.forEach(file => {
    if (selectedPhotos.length >= maxFiles) {
      showNotification('Maximum 6 photos autorisées', 'error');
      return;
    }

    if (file.size > maxSize) {
      showNotification(`Le fichier ${file.name} est trop volumineux (max 5MB)`, 'error');
      return;
    }

    if (!file.type.startsWith('image/')) {
      showNotification(`Le fichier ${file.name} n'est pas une image`, 'error');
      return;
    }

    selectedPhotos.push(file);
    displayPhotoPreview(file, selectedPhotos.length - 1);
  });
}

function displayPhotoPreview(file, index) {
  const preview = document.getElementById('photos-preview');
  const reader = new FileReader();

  reader.onload = (e) => {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo-preview';
    photoDiv.innerHTML = `
      <img src="${e.target.result}" alt="Photo ${index + 1}">
      <button class="remove-photo" onclick="removePhoto(${index})">×</button>
    `;
    preview.appendChild(photoDiv);
  };

  reader.readAsDataURL(file);
}

function removePhoto(index) {
  selectedPhotos.splice(index, 1);
  refreshPhotoPreview();
}

function refreshPhotoPreview() {
  const preview = document.getElementById('photos-preview');
  preview.innerHTML = '';
  selectedPhotos.forEach((file, index) => {
    displayPhotoPreview(file, index);
  });
}

// Configuration des formulaires
function setupForms() {
  setupEstimationForm();
  setupContactForm();
}

function setupEstimationForm() {
  const form = document.getElementById('estimation-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('est-name').value.trim();
    const email = document.getElementById('est-email').value.trim();
    const phone = document.getElementById('est-phone').value.trim();
    const objectType = document.getElementById('object-type').value;
    const description = document.getElementById('est-description').value.trim();

    // Validation
    if (!name || !email || !objectType || !description) {
      showNotification('Veuillez remplir tous les champs obligatoires', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Format d\'email invalide', 'error');
      return;
    }

    if (selectedPhotos.length === 0) {
      showNotification('Veuillez ajouter au moins une photo', 'error');
      return;
    }

    const formData = new FormData(form);
    selectedPhotos.forEach((file, index) => {
      formData.append(`photos`, file);
    });

    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.innerHTML = '<div class="loading"></div> Envoi en cours...';
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://selennia.fr/api/estimation", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        selectedPhotos = [];
        refreshPhotoPreview();
        showNotification(result.success, 'success');
      } else {
        showNotification(result.error || 'Une erreur est survenue', 'error');
      }
    } catch (error) {
      showNotification('Erreur de connexion avec le serveur', 'error');
    } finally {
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer pour estimation';
      submitBtn.disabled = false;
    }
  });
}


function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Validation
    if (!name || !email || !message) {
      showNotification('Veuillez remplir tous les champs obligatoires', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Format d\'email invalide', 'error');
      return;
    }

    const formData = new FormData(form);

    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.innerHTML = '<div class="loading"></div> Envoi en cours...';
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://selennia.fr/api/contact", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        showNotification(result.success, 'success');
      } else {
        showNotification(result.error || 'Une erreur est survenue', 'error');
      }
    } catch (error) {
      showNotification('Erreur de connexion avec le serveur', 'error');
    } finally {
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
      submitBtn.disabled = false;
    }
  });
}


// Fonctions utilitaires
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

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
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
    showItemDetails,
    closeItemModal,
    isValidEmail,
    showNotification
  };
}