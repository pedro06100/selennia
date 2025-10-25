// Variables globales
let selectedPhotos = [];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  setupNavigation();
  setupScrollEffects();
  setupPhotoUpload();
  setupEstimationForm();
});

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

function setupEstimationForm() {
  const form = document.getElementById('estimation-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('est-name').value.trim();
    const email = document.getElementById('est-email').value.trim();
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
    const originalContent = submitBtn.innerHTML;
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
      submitBtn.innerHTML = originalContent;
      submitBtn.disabled = false;
    }
  });
}

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