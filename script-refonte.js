// =====================================================
// SELENNIA BOUTIQUE - SCRIPT REFONTE AVEC MULTILINGUE
// =====================================================

// ==========================
// Navbar + Menu mobile
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Effet scroll navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Menu responsive
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // ==========================
  // Sélecteur de langue 🇫🇷 / 🇬🇧
  // ==========================
  const flagFr = document.getElementById("flag-fr");
  const flagEn = document.getElementById("flag-en");

  const applyLangStyle = (lang) => {
    if (!flagFr || !flagEn) return;
    if (lang === "fr") {
      flagFr.style.opacity = "1";
      flagFr.style.border = "2px solid #d4af37";
      flagEn.style.opacity = "0.5";
      flagEn.style.border = "2px solid transparent";
    } else {
      flagEn.style.opacity = "1";
      flagEn.style.border = "2px solid #d4af37";
      flagFr.style.opacity = "0.5";
      flagFr.style.border = "2px solid transparent";
    }
  };

  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    if (typeof applyTranslations === "function") {
      applyTranslations(lang);
    }
    applyLangStyle(lang);
  };

  // Initialisation
  const savedLang = localStorage.getItem("lang") || "fr";
  applyLangStyle(savedLang);
  if (typeof applyTranslations === "function") {
    applyTranslations(savedLang);
  }

  // Événements clic sur drapeaux
  if (flagFr) flagFr.addEventListener("click", () => changeLanguage("fr"));
  if (flagEn) flagEn.addEventListener("click", () => changeLanguage("en"));

  // ==========================
  // Bannière flottante d’estimation
  // ==========================
  const banner = document.getElementById("floating-banner");
  if (banner) {
    setTimeout(() => banner.classList.add("show"), 1500);
  }

  window.closeBanner = function () {
    if (banner) banner.classList.remove("show");
  };

  // ==========================
  // Animations "fade-in"
  // ==========================
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
});
