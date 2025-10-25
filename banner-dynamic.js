/* ============================================================================
   Selennia Boutique - Bannière dynamique “Nouvelles acquisitions”
   Lit la propriété dateAdded du catalogue pour compter les ajouts récents.
   ============================================================================ */

(async function() {
  async function getCollectionData() {
    if (Array.isArray(window.collectionData)) return window.collectionData;

    // Fallback : charger le script catalogue s’il n’est pas global
    try {
      const res = await fetch("script-catalogue.js", { cache: "no-store" });
      const js = await res.text();
      const match = js.match(/const\s+collectionData\s*=\s*(\[[\s\S]*?\]);/);
      if (!match) return [];
      return (new Function("return " + match[1]))();
    } catch (err) {
      console.error("[Selennia Banner] Impossible de charger le catalogue :", err);
      return [];
    }
  }

  function countItemsAddedThisWeek(data) {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return data.filter(item => {
      if (!item.dateAdded) return false;
      const date = new Date(item.dateAdded);
      return !isNaN(date) && date >= weekAgo;
    }).length;
  }

  async function updateBanner() {
    const data = await getCollectionData();
    if (!data.length) return;

    const newCount = countItemsAddedThisWeek(data);
    const bannerTitle = document.getElementById("banner-title");
    const bannerCountText = document.getElementById("banner-count-text");

    if (newCount > 0) {
      bannerTitle.textContent = "Nouvelles acquisitions !";
      bannerCountText.textContent = ` ${newCount} ${newCount > 1 ? "pièces ajoutées" : "pièce ajoutée"} cette semaine`;
    } else {
      bannerTitle.textContent = "Aucune nouveauté cette semaine";
      bannerCountText.textContent = "";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateBanner);
  } else {
    updateBanner();
  }
})();
