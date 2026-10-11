export interface Article {
  id: string;
  category: "nutrition" | "fitness" | "mental" | "sleep";
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  contentFr: string;
  contentEn: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  likes: number;
  scientificReferenceFr: string;
  scientificReferenceEn: string;
}

export interface Video {
  id: string;
  titleFr: string;
  titleEn: string;
  duration: string;
  category: string;
  youtubeId: string;
  views: string;
  trainer: string;
  descriptionFr: string;
  descriptionEn: string;
}

export const MAIN_ARTICLES: Article[] = [
  {
    id: "1",
    category: "nutrition",
    titleFr: "Le Pouvoir Caché du Jeûne Intermittent 16:8",
    titleEn: "The Hidden Power of 16:8 Intermittent Fasting",
    excerptFr: "Découvrez comment cette méthode améliore la sensibilité à l'insuline, l'énergie mentale et la régénération cellulaire.",
    excerptEn: "Discover how this method enhances insulin sensitivity, mental energy, and cellular rejuvenation.",
    contentFr: "Le jeûne intermittent 16:8 consiste à limiter la prise alimentaire à une fenêtre de 8 heures par jour. Des études cliniques sérieuses montrent qu'il favorise l'autophagie (le nettoyage des organites et protéines cellulaires endommagés par les lysosomes) et stabilise le taux de glycémie plasmatique. Cela offre un gain d'énergie constant, prévenant la somnolence postprandiale.",
    contentEn: "Intermittent fasting 16:8 involves restricting food intake to an 8-hour daily window. Comprehensive clinical trials demonstrate that it induces autophagy (the cellular recycling of damaged organelles and proteins via lysosomes) and stabilizes plasma glucose levels. This provides consistent metabolic energy, preventing postprandial fatigue.",
    author: "Dr. Amélie Laurent, Nutritionniste Clinicienne",
    date: "2026-03-10",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=70&w=400",
    likes: 142,
    scientificReferenceFr: "Étude publiée dans New England Journal of Medicine, 2024.",
    scientificReferenceEn: "Study published in New England Journal of Medicine, 2024."
  },
  {
    id: "2",
    category: "sleep",
    titleFr: "Biohacking du Sommeil : Maîtriser la Lumière Bleue",
    titleEn: "Sleep Biohacking: Mastering Blue Light Protection",
    excerptFr: "Pourquoi les écrans de fin de soirée bloquent la mélatonine naturelle et comment y remédier dès ce soir.",
    excerptEn: "Why late-night screen exposure blocks natural melatonin and how to fix it tonight.",
    contentFr: "La lumière bleue (spectre de 450-480 nm) émise par les smartphones supprime la sécrétion nocturne de mélatonine par la glande pinéale, retardant la phase de transition vers le sommeil paradoxal d'environ 90 minutes. L'instauration d'un filtre spectral chaud ou l'utilisation de verres filtrants à 99% améliore significativement la récupération cérébrale.",
    contentEn: "Blue wavelengths (450-480 nm spectrum) emitted by electronic screens block nocturnal melatonin secretion from the pineal gland, delaying the transition to REM sleep by approximately 90 minutes. Installing a warm spectral filter or wearing 99% blocking glasses significantly boosts neurological recovery.",
    author: "Marc-André Moreau, Chercheur en Neuro-sommeil",
    date: "2026-03-08",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1511295742364-92b9345f859c?auto=format&fit=crop&q=70&w=400",
    likes: 98,
    scientificReferenceFr: "Référence : Journal of Pineal Research, volume 76.",
    scientificReferenceEn: "Reference: Journal of Pineal Research, volume 76."
  },
  {
    id: "3",
    category: "fitness",
    titleFr: "Entraînement de Zone 2 : Le Secret de l'Endurance Mitochondriale",
    titleEn: "Zone 2 Training: The Secret to Mitochondrial Endurance",
    excerptFr: "Pourquoi courir plus lentement augmente la capacité de vos cellules à utiliser l'oxygène et à brûler les acides gras libres.",
    excerptEn: "Why running slower increases your cells' capacity to utilize oxygen and burn free fatty acids.",
    contentFr: "L'entraînement en Zone 2 maintient la fréquence cardiaque dans la plage où la concentration de lactate sanguin reste inférieure à 2.0 mM. À ce niveau d'intensité aérobie stricte, les mitochondries musculaires se multiplient pour métaboliser les lipides, évitant l'épuisement précoce du glycogène et réduisant la fatigue systémique.",
    contentEn: "Zone 2 training maintains physical effort in a heart rate range where blood lactate concentration remains below 2.0 mM. At this strict aerobic intensity, muscle mitochondria proliferate to metabolize lipids, avoiding premature glycogen depletion and lowering systemic fatigue.",
    author: "Clara Dupond, Préparatrice Physique",
    date: "2026-03-05",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=70&w=400",
    likes: 215,
    scientificReferenceFr: "Méta-analyse : Medicine & Science in Sports & Exercise, 2025.",
    scientificReferenceEn: "Meta-analysis: Medicine & Science in Sports & Exercise, 2025."
  },
  {
    id: "4",
    category: "mental",
    titleFr: "La Respiration Cohérente contre le Stress Chronique",
    titleEn: "Coherent Breathing for Chronic Stress Reduction",
    excerptFr: "La méthode scientifiquement prouvée des 6 cycles respiratoires par minute pour réguler l'activité vagale.",
    excerptEn: "The scientifically proven 6-cycles-per-minute breathing method to regulate vagal tone.",
    contentFr: "La cohérence cardiaque consiste à respirer régulièrement sur un cycle de 10 secondes (5 secondes d'inspiration nasale, 5 secondes d'expiration abdominale). Cela stimule le baroréflexe carotidien et le nerf vague, abaissant instantanément l'activité du système sympathique et réduisant le cortisol salivaire.",
    contentEn: "Heart rate coherence consists of regular breathing over a 10-second cycle (5 seconds of nasal inhalation, 5 seconds of slow abdominal exhalation). This stimulates the carotid baroreflex and the vagus nerve, immediately dampening sympathetic arousal and lowering salivary cortisol levels.",
    author: "Sonia Gauthier, Sophrologue Clinicienne",
    date: "2026-03-01",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=70&w=400",
    likes: 189,
    scientificReferenceFr: "Revue : Frontiers in Psychiatry, Neuroregulation, 2024.",
    scientificReferenceEn: "Journal: Frontiers in Psychiatry, Neuroregulation, 2024."
  }
];

export const MAIN_VIDEOS: Video[] = [
  {
    id: "v1",
    titleFr: "Routine de Yoga Matinal Énergisante — Alignement et Souplesse",
    titleEn: "Energizing Morning Yoga Flow — Alignment and Flexibility",
    duration: "15:20",
    category: "Yoga",
    youtubeId: "https://www.youtube.com/embed/sTANio_2E0Q",
    views: "12,4K",
    trainer: "Sarah Jenkins, Coach certifiée RYT-500",
    descriptionFr: "Une routine douce et progressive conçue pour réveiller la colonne vertébrale, activer la circulation lymphatique et éveiller la conscience corporelle sans forcer sur les articulations.",
    descriptionEn: "A gentle and progressive routine designed to awaken the spine, stimulate lymphatic circulation, and foster body mindfulness without stress on joint pathways."
  },
  {
    id: "v2",
    titleFr: "Séance HIIT Cardio Mitochondriale — Sans Équipement",
    titleEn: "Mitochondrial HIIT Cardio Session — Equipment-Free",
    duration: "22:15",
    category: "Cardio",
    youtubeId: "https://www.youtube.com/embed/ml6cT4AZdqI",
    views: "24,1K",
    trainer: "Alexandre Mercier, Spécialiste de la performance",
    descriptionFr: "Des intervalles courts d'intensité contrôlée pour stimuler la puissance aérobie maximale (VO2 max) et encourager la dépense calorique post-effort (EPOC).",
    descriptionEn: "Short intervals of controlled intensity designed to stimulate maximum aerobic output (VO2 max) and prompt post-exercise oxygen consumption (EPOC)."
  },
  {
    id: "v3",
    titleFr: "Méditation de Pleine Conscience : Concentration et Calme Mental",
    titleEn: "Mindfulness Meditation: Executive Focus & Mental Calm",
    duration: "10:00",
    category: "Mindfulness",
    youtubeId: "https://www.youtube.com/embed/inpok4MKVLM",
    views: "8,9K",
    trainer: "Elena Rostova, Sophrologue et instructrice MBSR",
    descriptionFr: "Un protocole de balayage corporel (body scan) et de focalisation de l'attention sur le flux d'air nasal pour réduire l'activité du réseau du mode par défaut du cerveau.",
    descriptionEn: "A body scan protocol focused on nasal airflow to suppress hyper-activity in the brain's default mode network (DMN)."
  }
];
