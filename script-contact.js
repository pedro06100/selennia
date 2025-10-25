// Navigation et fonctionnalités de base
document.addEventListener('DOMContentLoaded', function() {
  setupNavigation();
  setupScrollEffects();
  setupContactForm();
  setupSmoothScrolling();
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

  // Fade in animation
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

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
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
    const originalContent = submitBtn.innerHTML;
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