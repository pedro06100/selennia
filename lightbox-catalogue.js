// Lightbox Catalogue - Selennia Boutique
// Fonctionne avec contenu dynamique (MutationObserver + délégation)

(function () {
  const grid = document.getElementById('catalogue-grid');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');

  if (!grid || !lightbox || !lightboxImg || !closeBtn) return;

  // Ouvre la lightbox avec une source donnée
  function openLightbox(src, alt) {
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden'; // anti-scroll arrière-plan
  }

  // Ferme la lightbox
  function closeLightbox() {
    lightbox.classList.remove('show');
    lightboxImg.src = '';
    lightboxImg.alt = '';
    document.body.style.overflow = '';
  }

  // Délégation de clics sur la grille (img ou bouton "Voir")
  grid.addEventListener('click', (e) => {
    const target = e.target;

    // 1) Clic sur une IMG
    if (target && target.tagName === 'IMG') {
      // supporte data-full si présent, sinon src
      const full = target.getAttribute('data-full') || target.getAttribute('src');
      openLightbox(full, target.getAttribute('alt') || '');
      e.stopPropagation();
      return;
    }

    // 2) Clic sur un bouton .view-btn (si overlay présent)
    const viewBtn = target.closest && target.closest('.view-btn');
    if (viewBtn) {
      const img = viewBtn.closest('.item-image')?.querySelector('img');
      if (img) {
        const full = img.getAttribute('data-full') || img.getAttribute('src');
        openLightbox(full, img.getAttribute('alt') || '');
      }
      e.stopPropagation();
    }
  });

  // Fermeture : croix, clic hors image, touche Échap
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Ajoute un curseur zoom sur les images injectées
  function enhanceImages(scope = document) {
    scope.querySelectorAll('#catalogue-grid img').forEach((img) => {
      img.style.cursor = 'zoom-in';
      // si pas de data-full, on laisse tel quel (src sera utilisé)
      // si l'image haute définition existe côté intégration, mets-la en data-full.
    });
  }

  // Une première passe si du contenu est déjà présent
  enhanceImages();

  // Surveille les changements dynamiques dans la grille
  const mo = new MutationObserver((mutations) => {
    let needEnhance = false;
    mutations.forEach((m) => {
      if (m.addedNodes && m.addedNodes.length) needEnhance = true;
    });
    if (needEnhance) enhanceImages(grid);
  });
  mo.observe(grid, { childList: true, subtree: true });
})();
