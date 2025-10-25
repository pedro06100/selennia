/* ============================================================================
   Selennia – Carrousel Nouveautés (autonome, non intrusif)
   - Affiche les 5 derniers produits du catalogue
   - Défilement auto + flèches navigation
   - Clic = lien vers catalogue.html#item-{id}
   - Style injecté et SCOPÉ (n’écrase pas tes CSS)
   - Fonctionne si collectionData est global OU en fallback via fetch du script
   ============================================================================ */
(function () {
  const CONFIG = {
    maxSlides: 5,
    autoplayMs: 4000,
    sectionTitle: "", // Laisse vide pour design épuré (image + titre + prix)
  };

  // 1) Injecter styles (scopés avec préfixe .sc-selennia-)
  function injectStyles() {
    if (document.getElementById("selennia-carousel-styles")) return;
    const css = `
      .sc-selennia-carousel { 
        background: linear-gradient(180deg, #fdf6e3 0%, #f6e9c5 100%);
        padding: 2.2rem 0; border-top: 1px solid #d4af37; border-bottom: 1px solid #d4af37;
      }
      .sc-selennia-wrap { position: relative; max-width: 1100px; margin: 0 auto; overflow: hidden; }
      .sc-selennia-track { display:flex; transition: transform .6s ease-in-out; width: 100%; }
      .sc-selennia-item { min-width:100%; flex:0 0 100%; text-align:center; padding: 0.75rem 0; box-sizing:border-box; }
      .sc-selennia-link { display:inline-block; text-decoration:none; color:inherit; }
      .sc-selennia-img { width: 340px; height: 260px; object-fit: cover; border-radius: 12px; border: 2px solid #e0c97a;
                         box-shadow: 0 4px 12px rgba(212,175,55,.25); transition: transform .35s ease, box-shadow .35s ease; }
      .sc-selennia-img:hover { transform: scale(1.04); box-shadow: 0 6px 18px rgba(212,175,55,.4); }
      .sc-selennia-title { font-family: 'Playfair Display', serif; font-weight: 600; font-size: 1.1rem; margin: 0.9rem 0 0.35rem; color:#2e2411; }
      .sc-selennia-price { color:#b19127; font-weight:600; font-size:1.05rem; }
      .sc-selennia-btn { position:absolute; top:50%; transform:translateY(-50%); background: rgba(255,248,230,.65);
                         border:1px solid #d4af37; color:#d4af37; font-size:1.35rem; cursor:pointer; border-radius:50%;
                         padding:.45rem .6rem; transition: background .25s, color .25s; z-index:2; }
      .sc-selennia-btn:hover { background:#d4af37; color:#fff; }
      .sc-selennia-prev { left: 2%; } .sc-selennia-next { right: 2%; }
      @media (max-width: 768px) {
        .sc-selennia-img { width: 80%; height: auto; }
        .sc-selennia-title { font-size: 1rem; }
        .sc-selennia-price { font-size: 1rem; }
        .sc-selennia-btn { font-size:1.1rem; padding:.35rem .5rem; }
      }
    `;
    const style = document.createElement("style");
    style.id = "selennia-carousel-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 2) Trouver ou créer le conteneur sous la bannière d’urgence
  function ensureContainer() {
    let section = document.querySelector(".sc-selennia-carousel");
    if (section) return section;

    // Placer juste après la section .urgency-banner si présente, sinon après le hero
    const after = document.querySelector(".urgency-banner") || document.querySelector(".hero") || document.body;
    section = document.createElement("section");
    section.className = "sc-selennia-carousel";
    section.innerHTML = `
      <div class="sc-selennia-wrap">
        <div class="sc-selennia-track" id="sc-selennia-track"></div>
        <button class="sc-selennia-btn sc-selennia-prev" id="sc-selennia-prev" aria-label="Précédent">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="sc-selennia-btn sc-selennia-next" id="sc-selennia-next" aria-label="Suivant">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    `;
    after.insertAdjacentElement("afterend", section);
    return section;
  }

  // 3) Récupérer les données
  async function getCollectionData() {
    // a) Si collectionData est déjà global → l’utiliser
    if (Array.isArray(window.collectionData)) return window.collectionData;

    // b) Sinon fallback : charger le fichier et extraire
    try {
      const res = await fetch("script-catalogue.js", { cache: "no-store" });
      const js = await res.text();
      const m = js.match(/const\s+collectionData\s*=\s*(\[[\s\S]*?\]);/);
      if (!m) return [];
      // Parse en sandbox
      const data = (new Function("return " + m[1]))();
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error("[Selennia Carousel] Impossible de charger le catalogue :", e);
      return [];
    }
  }

  // 4) Normaliser une date (crée une date si absente pour pouvoir trier)
  function normalizeDates(data) {
    const now = new Date();
    return data.map((item, i, arr) => {
      if (item.dateAdded) return item;
      // Inférer une date linéaire basée sur l’ordre (dernier = le plus récent)
      const daysAgo = (arr.length - 1) - i;
      const d = new Date(now.getTime() - daysAgo * 24 * 3600 * 1000);
      return { ...item, dateAdded: d.toISOString().slice(0, 10) };
    });
  }

  // 5) Construire slides
  function buildSlides(items) {
    const track = document.getElementById("sc-selennia-track");
    if (!track) return;

    track.innerHTML = "";
    items.forEach((it) => {
      const div = document.createElement("div");
      div.className = "sc-selennia-item";
      const href = `catalogue.html#item-${it.id}`;
      const safeImg = it.image || "";
      div.innerHTML = `
        <a class="sc-selennia-link" href="${href}">
          <img class="sc-selennia-img" src="${safeImg}" alt="${escapeHtml(it.title || "")}">
          <h3 class="sc-selennia-title">${escapeHtml(it.title || "")}</h3>
          <p class="sc-selennia-price">${escapeHtml(it.price || "")}</p>
        </a>
      `;
      track.appendChild(div);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]));
  }

  // 6) Initialiser navigation + autoplay
  function initCarouselBehavior() {
    const track = document.getElementById("sc-selennia-track");
    const prevBtn = document.getElementById("sc-selennia-prev");
    const nextBtn = document.getElementById("sc-selennia-next");
    if (!track || !prevBtn || !nextBtn) return;

    const slides = track.querySelectorAll(".sc-selennia-item");
    if (!slides.length) return;

    let index = 0;
    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
    });
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      update();
    });

    // Autoplay
    let timer = setInterval(() => {
      index = (index + 1) % slides.length;
      update();
    }, CONFIG.autoplayMs);

    // Pause au survol (optionnel pour UX)
    track.addEventListener("mouseenter", () => clearInterval(timer));
    track.addEventListener("mouseleave", () => {
      clearInterval(timer);
      timer = setInterval(() => {
        index = (index + 1) % slides.length;
        update();
      }, CONFIG.autoplayMs);
    });
  }

  // 7) Démarrage
  async function start() {
    injectStyles();
    ensureContainer();
    const data = await getCollectionData();
    if (!data.length) return;

    // Ordonner par date la plus récente et prendre les 5 premiers
    const normalized = normalizeDates(data)
      .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
      .slice(0, CONFIG.maxSlides);

    buildSlides(normalized);
    initCarouselBehavior();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
