// ==============================
// Selennia Boutique - Langue FR/EN (version complète corrigée)
// ==============================

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.catalogue": "Catalogue",
    "nav.estimate": "Estimation",
    "nav.contact": "Contact",

    // Home Page
    "home.meta_title": "Selennia Boutique - Objets d'Art Anciens",
    "home.banner.title": "Estimation Gratuite",
    "home.banner.subtitle": "Faites évaluer vos objets d'art gratuitement",
    "home.banner.cta": "Estimer maintenant",
    "home.hero.title": "Objets d'Art Anciens & de Collection",
    "home.hero.subtitle": "Découvrez des pièces uniques, authentiques et intemporelles sélectionnées avec passion par nos experts en art ancien.",
    "home.trust.items_sold": "Objets vendus",
    "home.trust.experience": "Ans d'expérience",
    "home.trust.authenticated": "Authentifiés",
    "home.hero.cta_discover": "Découvrir nos Trésors",
    "home.hero.cta_estimate": "Faire Estimer",
    "home.badge.authenticity": "Authenticité garantie",
    "home.badge.delivery": "Livraison sécurisée",
    "home.badge.payment": "Paiement sécurisé",
    "home.urgency.text": "🔥 <strong>Nouvelles acquisitions !</strong> 5 pièces exceptionnelles ajoutées cette semaine",
    "home.urgency.cta": "Voir maintenant",
    "home.expertise.title": "Notre Expertise",
    "home.expertise.subtitle": "Plus de 20 ans d'expérience dans l'art ancien et les antiquités",
    "home.expertise.authenticity.title": "Authenticité Garantie",
    "home.expertise.authenticity.text": "Chaque pièce est expertisée et authentifiée selon les standards les plus rigoureux.",
    "home.expertise.world.title": "Art du Monde",
    "home.expertise.world.text": "Collection variée d'objets d'art asiatique, africain, européen et des Amériques.",
    "home.expertise.history.title": "Pièces d'Histoire",
    "home.expertise.history.text": "Mobilier d'époque, sculptures traditionnelles et objets décoratifs chargés d'histoire.",
    "home.estimate_cta.title": "Vous possédez un objet d'art ancien ?",
    "home.estimate_cta.text": "Faites-le évaluer par nos experts. Service professionnel et confidentiel.",
    "home.estimate_cta.price": "<span class='price-highlight'>Estimation gratuite</span>",
    "home.estimate_cta.button": "Demander une estimation",
    "home.estimate_cta.note": "Réponse sous 48h",

    // Catalogue
    "catalog.meta_title": "Catalogue - Selennia Boutique",
    "catalog.title": "Notre Catalogue",
    "catalog.subtitle": "Explorez notre collection exclusive d'objets d'art anciens et d'antiquités soigneusement sélectionnés.",
    "catalog.badge.authenticated": "100% Authentifiés",
    "catalog.badge.unique": "Pièces Uniques",
    "catalog.badge.delivery": "Livraison Sécurisée",
    "catalog.urgency": "🔥 Nouveautés ! 5 pièces exceptionnelles ajoutées cette semaine - Stock limité",
    "catalog.filters.search": "Recherche par nom",
    "catalog.filters.placeholder_search": "Tapez votre recherche...",
    "catalog.filters.category": "Catégorie",
    "catalog.filters.all_categories": "Toutes les catégories",
    "catalog.filters.price": "Prix maximum",
    "catalog.filters.all_prices": "Tous les prix",
    "catalog.filters.price_500": "Jusqu'à 500€",
    "catalog.filters.price_1000": "Jusqu'à 1000€",
    "catalog.filters.price_1500": "Jusqu'à 1500€",
    "catalog.filters.price_2000": "Plus de 1500€",
    "catalog.filters.sort": "Trier par",
    "catalog.sort.relevance": "Pertinence",
    "catalog.sort.price_asc": "Prix croissant",
    "catalog.sort.price_desc": "Prix décroissant",
    "catalog.sort.name": "Nom A-Z",
    "catalog.actions.search": "Rechercher",
    "catalog.actions.reset": "Réinitialiser",
    "catalog.call": "Appelez pour réserver",
    "catalog.estimate": "Faire estimer un objet",
    "catalog.results": "0 résultats",
    "catalog.cta.title": "Vous possédez un objet similaire ?",
    "catalog.cta.text": "Faites-le évaluer par nos experts. Service professionnel et confidentiel.",
    "catalog.cta.price": "<span class='price-highlight'>Estimation gratuite</span>",
    "catalog.cta.button": "Demander une estimation",
    "catalog.cta.note": "Réponse sous 48h",

    // Estimation
    "estimate.meta_title": "Estimation - Selennia Boutique",
    "estimate.title": "Faire estimer votre objet",
    "estimate.subtitle": "Remplissez le formulaire ci-dessous et recevez une estimation gratuite sous 48h.",
    "estimate.form.title": "Demande d'Estimation",
    "estimate.form.description": "Notre équipe d'experts analysera vos informations et photos pour vous fournir une estimation gratuite et détaillée.",
    "estimate.form.price_note": "<span class='price-highlight'>Estimation gratuite</span>",
    "estimate.form.name": "Nom complet",
    "estimate.form.email": "Adresse email",
    "estimate.form.phone": "Téléphone",
    "estimate.form.city": "Ville",
    "estimate.form.object_name": "Nom de l'objet",
    "estimate.form.description": "Description de l'objet",
    "estimate.form.photos": "Photos de l'objet",
    "estimate.form.upload_text": "Cliquez ou déposez vos photos ici",
    "estimate.form.upload_info": "Formats acceptés : JPG, PNG (max 10 Mo)",
    "estimate.form.submit": "Envoyer la demande",

    // Contact
    "contact.meta_title": "Contact - Selennia Boutique",
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Vous souhaitez obtenir plus d’informations ? Notre équipe est à votre écoute.",
    "contact.info.title": "Nos coordonnées",
    "contact.info.text": "Nous sommes disponibles pour répondre à toutes vos questions concernant nos objets d’art, estimations ou ventes.",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",
    "contact.info.instagram": "Instagram",
    "contact.info.location": "Localisation",
    "contact.info.hours": "Horaires d’ouverture",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.subtitle": "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Adresse email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",

    // Jours
    "days.monday": "Lundi",
    "days.tuesday": "Mardi",
    "days.wednesday": "Mercredi",
    "days.thursday": "Jeudi",
    "days.friday": "Vendredi",
    "days.saturday": "Samedi",
    "days.sunday": "Dimanche",

    // Footer
    "footer.about": "Spécialiste en objets d'art anciens et antiquités. Chaque pièce raconte une histoire unique et apporte une touche d'élégance intemporelle à votre intérieur.",
    "footer.contact.title": "Contact",
    "footer.specialties.title": "Nos Spécialités",
    "footer.specialties.art": "Objets d'art anciens",
    "footer.specialties.furniture": "Mobilier d'époque",
    "footer.specialties.sculpture": "Sculptures traditionnelles",
    "footer.specialties.asian": "Art asiatique",
    "footer.specialties.estimate": "Estimation d'objets",
    "footer.rights": "Tous droits réservés."
  },

  // English
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.catalogue": "Catalogue",
    "nav.estimate": "Estimate",
    "nav.contact": "Contact",

    // Home Page
    "home.meta_title": "Selennia Boutique - Ancient Art Objects",
    "home.banner.title": "Free Estimate",
    "home.banner.subtitle": "Have your art objects evaluated for free",
    "home.banner.cta": "Estimate now",
    "home.hero.title": "Ancient & Collectible Art Objects",
    "home.hero.subtitle": "Discover unique, authentic, and timeless pieces carefully selected by our antique art experts.",
    "home.trust.items_sold": "Items Sold",
    "home.trust.experience": "Years of Experience",
    "home.trust.authenticated": "Authenticated",
    "home.hero.cta_discover": "Explore our Treasures",
    "home.hero.cta_estimate": "Get an Estimation",
    "home.badge.authenticity": "Guaranteed Authenticity",
    "home.badge.delivery": "Secure Delivery",
    "home.badge.payment": "Secure Payment",
    "home.urgency.text": "🔥 <strong>New Arrivals!</strong> 5 exceptional pieces added this week",
    "home.urgency.cta": "See now",
    "home.expertise.title": "Our Expertise",
    "home.expertise.subtitle": "Over 20 years of experience in antique and art trading",
    "home.expertise.authenticity.title": "Guaranteed Authenticity",
    "home.expertise.authenticity.text": "Each item is appraised and authenticated to the highest standards.",
    "home.expertise.world.title": "World Art",
    "home.expertise.world.text": "A diverse collection of Asian, African, European, and American art.",
    "home.expertise.history.title": "Historical Pieces",
    "home.expertise.history.text": "Period furniture, traditional sculptures, and decorative items with history.",
    "home.estimate_cta.title": "Own an Antique Art Object?",
    "home.estimate_cta.text": "Have it appraised by our experts. Professional and confidential service.",
    "home.estimate_cta.price": "<span class='price-highlight'>Free estimation</span>",
    "home.estimate_cta.button": "Request an estimation",
    "home.estimate_cta.note": "Response within 48h",

    // Catalogue
    "catalog.meta_title": "Catalogue - Selennia Boutique",
    "catalog.title": "Our Catalogue",
    "catalog.subtitle": "Explore our exclusive collection of carefully selected antique art and collectibles.",
    "catalog.badge.authenticated": "100% Authenticated",
    "catalog.badge.unique": "Unique Pieces",
    "catalog.badge.delivery": "Secure Delivery",
    "catalog.urgency": "🔥 New arrivals! 5 exceptional pieces added this week - Limited stock",
    "catalog.filters.search": "Search by name", 
    "catalog.filters.placeholder_search": "Type your search", 
    "catalog.filters.category": "Category", 
    "catalog.filters.all_categories": "all categories", 
    "catalog.filters.price": "Price", // TODO: translate
    "catalog.filters.all_prices": "all the prices", // TODO: translate
    "catalog.filters.price_500": "Until 500 €", // TODO: translate
    "catalog.filters.price_1000": "Until 1000 €", // TODO: translate
    "catalog.filters.price_1500": "Until 1500 €", // TODO: translate
    "catalog.filters.price_2000": "Until 2000 €", // TODO: translate
    "catalog.filters.sort": "all categories", // TODO: translate
    "catalog.sort.relevance": "", // TODO: translate
    "catalog.sort.price_asc": "", // TODO: translate
    "catalog.sort.price_desc": "", // TODO: translate
    "catalog.sort.name": "", // TODO: translate
    "catalog.actions.search": "search", // TODO: translate
    "catalog.actions.reset": "reset", // TODO: translate
    "catalog.call": "Call us to book", // TODO: translate
    "catalog.estimate": "estimate your item", // TODO: translate
    "catalog.results": "", // TODO: translate
    "catalog.cta.title": "Do you own a similar object ?", // TODO: translate
    "catalog.cta.text": "", // TODO: translate
    "catalog.cta.price": "<span class='price-highlight'>Free estimation</span>",
    "catalog.cta.button": "call us", // TODO: translate
    "catalog.cta.note": "", // TODO: translate

    // Estimation
    "estimate.meta_title": "Estimation - Selennia Boutique",
    "estimate.title": "Get your item appraised",
    "estimate.subtitle": "Fill out the form below and receive a free estimation within 48h.",
    "estimate.form.title": "Estimation Request",
    "estimate.form.description": "Our experts will analyze your information and photos to provide a detailed free estimation.",
    "estimate.form.price_note": "<span class='price-highlight'>Free estimation</span>",
    "estimate.form.name": "Full Name",
    "estimate.form.email": "Email Address",
    "estimate.form.phone": "Phone",
    "estimate.form.city": "City",
    "estimate.form.object_name": "Object Name",
    "estimate.form.description": "Object Description",
    "estimate.form.photos": "Photos of the object",
    "estimate.form.upload_text": "Click or drop your photos here",
    "estimate.form.upload_info": "Accepted formats: JPG, PNG (max 10 MB)",
    "estimate.form.submit": "Send Request",

    // Contact
    "contact.meta_title": "Contact - Selennia Boutique",
    "contact.title": "Contact Us",
    "contact.subtitle": "Need more information? Our team is here to help.",
    "contact.info.title": "Our Contact Details",
    "contact.info.text": "We are available to answer all your questions about our art objects, estimations, or sales.",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.instagram": "Instagram",
    "contact.info.location": "Location",
    "contact.info.hours": "Opening Hours",
    "contact.form.title": "Send us a Message",
    "contact.form.subtitle": "Fill out the form below, and we will get back to you shortly.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // Days
    "days.monday": "Monday",
    "days.tuesday": "Tuesday",
    "days.wednesday": "Wednesday",
    "days.thursday": "Thursday",
    "days.friday": "Friday",
    "days.saturday": "Saturday",
    "days.sunday": "Sunday",

    // Footer
    "footer.about": "Specialists in antique and collectible art. Each piece tells a unique story and adds timeless elegance to your home.",
    "footer.contact.title": "Contact",
    "footer.specialties.title": "Our Specialties",
    "footer.specialties.art": "Antique Art Objects",
    "footer.specialties.furniture": "Period Furniture",
    "footer.specialties.sculpture": "Traditional Sculptures",
    "footer.specialties.asian": "Asian Art",
    "footer.specialties.estimate": "Object Estimation",
    "footer.rights": "All rights reserved."
  }
};

// ===============================
// Application des traductions
// ===============================
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

const savedLang = localStorage.getItem("lang") || "fr";
document.documentElement.lang = savedLang;
applyTranslations(savedLang);
