/* ============================================================================
   Selennia Boutique – Bannière “Nouvelles acquisitions”
   Calcule automatiquement le nombre d’articles ajoutés cette semaine
   à partir de la propriété dateAdded dans collectionData
   ============================================================================ */
(function() {
  async function getCollectionData() {
    // Si le catalogue est déjà globalement chargé
    if (Array.isArray(window.collectionData)) return window.collectionData;

    // Sinon, fallback (chargement direct du fichier catalogue)
    try {
      const res = await fetch("script-catalogue.js", { cache: "no-store" });
      const js = await res.text();
      const m = js.match(/const\\s+collectionData\\s*=\\s*(\\[[\\s\\S]*?\\]);/);
      if (!m) return [];
      const data = (new Function("return " + m[1]))();
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error("[Selennia Banner] Erreur chargement catalogue :", e);
      return [];
    }
  }

  function countNewItems(data) {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
    return data.filter(it => {
      if (!it.dateAdded) return false;
      const date = new Date(it.dateAdded);
      return !isNaN(date) && date >= weekAgo;
    }).length;
  }

  async function initBanner() {
    const data = await getCollectionData();
    if (!data.length) return;

    const newItems = countNewItems(data);
    const countEl = document.getElementById("new-count");
    if (countEl) countEl.textContent = newItems;

    const bannerText = document.querySelector("#new-items-count strong");
    if (bannerText && newItems > 0) {
      bannerText.textContent = "Nouvelles acquisitions !";
    } else if (bannerText) {
      bannerText.textContent = "Aucune nouvelle pièce cette semaine";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBanner);
  } else {
    initBanner();
  }
})();
