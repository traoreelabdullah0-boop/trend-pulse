export interface TranslationKeys {
  brand: string;
  tagline: string;
  navHome: string;
  navTrends: string;
  navAdvice: string;
  navVideos: string;
  navBlog: string;
  searchPlaceholder: string;
  all: string;
  nutrition: string;
  sleep: string;
  fitness: string;
  mental: string;
  authorBy: string;
  readTime: string;
  likes: string;
  downloadEbook: string;
  readEbookOnline: string;
  ebookTitle1: string;
  ebookTitle2: string;
  newsletterTitle: string;
  newsletterSub: string;
  subscribeBtn: string;
  calculatorTitle: string;
  weightKg: string;
  heightCm: string;
  activity: string;
  actSed: string;
  actMod: string;
  actHigh: string;
  calculateBtn: string;
  imcResult: string;
  waterResult: string;
  litersPerDay: string;
  footerCopyright: string;
  footerDisclaimer: string;
}

export const i18nTranslations: Record<"fr" | "en", TranslationKeys> = {
  fr: {
    brand: "Trend Pulse",
    tagline: "Votre boussole santé, nutrition et biohacking d'expert.",
    navHome: "Accueil",
    navTrends: "Tendances",
    navAdvice: "Conseils & Calculateurs",
    navVideos: "Vidéos",
    navBlog: "Articles",
    searchPlaceholder: "Rechercher un article d'expert...",
    all: "Tous",
    nutrition: "Nutrition",
    sleep: "Sommeil",
    fitness: "Fitness",
    mental: "Santé Mentale",
    authorBy: "Par",
    readTime: "Lecture",
    likes: "J'aime",
    downloadEbook: "Télécharger",
    readEbookOnline: "Lire en ligne",
    ebookTitle1: "Guide Détox de Printemps & Recettes Vertes",
    ebookTitle2: "Le Guide Pratique du Sommeil Réparateur",
    newsletterTitle: "Rejoignez plus de 15 000 passionnés de santé",
    newsletterSub: "Recevez chaque lundi un condensé rigoureux des dernières recherches scientifiques en nutrition et longévité.",
    subscribeBtn: "S'abonner gratuitement",
    calculatorTitle: "Calculateur de Bien-être Intelligent",
    weightKg: "Poids (kg)",
    heightCm: "Taille (cm)",
    activity: "Niveau d'activité physique",
    actSed: "Sédentaire (Bureau / Travail assis)",
    actMod: "Modérément actif (3 à 4 séances par semaine)",
    actHigh: "Très actif (Entraînement quotidien soutenu)",
    calculateBtn: "Calculer mes besoins",
    imcResult: "Votre IMC",
    waterResult: "Besoin en eau estimé",
    litersPerDay: "litres par jour",
    footerCopyright: "© 2026 Trend Pulse — Healthy Lifestyle. Tous droits réservés. Contenu relu et validé par un comité scientifique indépendant.",
    footerDisclaimer: "Avertissement de santé publique : Les informations et outils présentés sur ce site internet ont un but informatif et préventif. Ils ne remplacent sous aucun prétexte un diagnostic, un traitement ou l'avis d'un médecin généraliste ou d'un spécialiste compétent."
  },
  en: {
    brand: "Trend Pulse",
    tagline: "Your expert compass for health, nutrition, and biohacking.",
    navHome: "Home",
    navTrends: "Trends",
    navAdvice: "Advice & Calculators",
    navVideos: "Videos",
    navBlog: "Articles",
    searchPlaceholder: "Search expert articles...",
    all: "All",
    nutrition: "Nutrition",
    sleep: "Sleep",
    fitness: "Fitness",
    mental: "Mental Health",
    authorBy: "By",
    readTime: "Read",
    likes: "Likes",
    downloadEbook: "Download",
    readEbookOnline: "Read Online",
    ebookTitle1: "Spring Detox Guide & Green Recipes",
    ebookTitle2: "Practical Guide to Restorative Sleep",
    newsletterTitle: "Join 15,000+ Health Enthusiasts",
    newsletterSub: "Every Monday, receive a rigorous digest of the latest scientific research on nutrition and longevity.",
    subscribeBtn: "Subscribe for free",
    calculatorTitle: "Smart Wellness Calculator",
    weightKg: "Weight (kg)",
    heightCm: "Height (cm)",
    activity: "Physical Activity Level",
    actSed: "Sedentary (Desk/Sedentary Job)",
    actMod: "Moderately Active (3-4 sessions per week)",
    actHigh: "Very Active (Sustained Daily Workouts)",
    calculateBtn: "Calculate my needs",
    imcResult: "Your BMI",
    waterResult: "Estimated water need",
    litersPerDay: "liters per day",
    footerCopyright: "© 2026 Trend Pulse — Healthy Lifestyle. All rights reserved. Content reviewed and validated by an independent scientific committee.",
    footerDisclaimer: "Public Health Disclaimer: The information and tools presented on this website serve informative and preventive purposes only. They under no circumstances replace diagnostic advice, treatment plans, or professional consultations with a certified physician or specialist."
  }
};
