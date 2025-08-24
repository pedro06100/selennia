// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let autoplayInterval;

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateCarousel();
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 6000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Event listeners pour le carousel
if (prevBtn && nextBtn && slides.length > 0) {
  prevBtn.addEventListener('click', () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });

  // Pause autoplay au hover
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  // Démarrer l'autoplay
  startAutoplay();
}

// Mobile touch support pour le carousel
let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  stopAutoplay();
});

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
});

track.addEventListener('touchend', (e) => {
  if (!isDragging) return;
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  isDragging = false;
  startAutoplay();
});

// Smooth scrolling pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.style.display = 'block';
  setTimeout(() => lightbox.classList.add('active'), 10);
  document.body.style.overflow = 'hidden';
  
  // Pause carousel autoplay when lightbox is open
  stopAutoplay();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  setTimeout(() => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Resume carousel autoplay when lightbox is closed
    startAutoplay();
  }, 300);
}

// Event listeners pour la lightbox - Catalogue items
document.querySelectorAll('.lightbox-trigger').forEach(img => {
  img.addEventListener('click', () => {
    openLightbox(img.src, img.alt);
  });
});

// Event listeners pour la lightbox - Carousel images
document.querySelectorAll('.carousel-slide img').forEach(img => {
  img.addEventListener('click', () => {
    openLightbox(img.src, img.alt);
  });
  
  // Add cursor pointer to indicate clickable
  img.style.cursor = 'pointer';
  
  // Add hover effect for carousel images
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.02)';
    img.style.transition = 'transform 0.3s ease';
  });
  
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Fermer la lightbox avec la touche Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target); // Stop observing once revealed
    }
  });
}, observerOptions);

// Observer tous les éléments avec la classe scroll-reveal
document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});

// Header scroll effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const currentScrollY = window.scrollY;
  
  // Change header background based on scroll position
  if (currentScrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.backdropFilter = 'blur(15px)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  }
  
  // Hide/show header on scroll direction change
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollY = currentScrollY;
});

// Form validation et amélioration UX
const form = document.querySelector('.contact-form');
const inputs = form.querySelectorAll('.form-input, .form-textarea');

// Animation focus sur les inputs
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.transform = 'scale(1.02)';
    input.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)';
  });
  
  input.addEventListener('blur', () => {
    input.style.transform = 'scale(1)';
    input.style.boxShadow = 'none';
  });
});

// Validation du formulaire
form.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  let isValid = true;
  let errorMessage = '';
  
  if (!name) {
    isValid = false;
    errorMessage += 'Le nom est requis.\n';
  }
  
  if (!email) {
    isValid = false;
    errorMessage += 'L\'email est requis.\n';
  } else if (!isValidEmail(email)) {
    isValid = false;
    errorMessage += 'Veuillez entrer une adresse email valide.\n';
  }
  
  if (!message) {
    isValid = false;
    errorMessage += 'Le message est requis.\n';
  } else if (message.length < 10) {
    isValid = false;
    errorMessage += 'Le message doit contenir au moins 10 caractères.\n';
  }
  
  if (!isValid) {
    e.preventDefault();
    showNotification(errorMessage, 'error');
  } else {
    showNotification('Message envoyé avec succès !', 'success');
  }
});

// Fonction de validation email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Système de notifications
function showNotification(message, type = 'info') {
  // Supprimer les notifications existantes
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notif => notif.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
      <span class="notification-message">${message}</span>
    </div>
  `;
  
  // Styles pour la notification
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
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
  
  // Auto-remove après 5 secondes
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Amélioration de l'accessibilité
document.addEventListener('keydown', (e) => {
  // Navigation au clavier pour le carousel
  if (e.target.closest('.carousel-container')) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stopAutoplay();
      prevSlide();
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      stopAutoplay();
      nextSlide();
      startAutoplay();
    }
  }
});

// Initialisation des tooltips pour l'accessibilité
document.querySelectorAll('[title]').forEach(element => {
  element.setAttribute('aria-label', element.getAttribute('title'));
});

// Performance: Lazy loading pour les images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));

// Debug: Log des erreurs JavaScript
window.addEventListener('error', (e) => {
  console.error('Erreur JavaScript:', e.error);
});

// Initialisation complète au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('Selennia Boutique - Site initialisé avec succès');
  
  // Vérifier si tous les éléments critiques sont présents
  const criticalElements = ['.carousel-track', '.lightbox', '.contact-form'];
  criticalElements.forEach(selector => {
    if (!document.querySelector(selector)) {
      console.warn(`Élément critique manquant: ${selector}`);
    }
  });
});