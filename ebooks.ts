export interface EbookPage {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface EbookContent {
  id: string;
  title: string;
  author: string;
  category: string;
  publicationDate: string;
  medicalDisclaimer: string;
  pages: EbookPage[];
}

// 1. EBOOK 1 (FRANÇAIS) : Guide de l'alimentation anti-inflammatoire et de la détox de printemps
export const EBOOK_DETOX_FR: EbookContent = {
  id: "detox_fr",
  title: "Guide de l'alimentation anti-inflammatoire et de la détox de printemps",
  author: "Dr. Amélie Laurent, Nutritionniste Clinicienne",
  category: "Nutrition Clinique & Métabolisme",
  publicationDate: "Mars 2026",
  medicalDisclaimer: "AVERTISSEMENT DE SANTÉ PUBLIQUE : Les informations contenues dans ce guide sont à but préventif et d'optimisation de la vitalité quotidienne. Elles ne constituent pas une prescription médicale et ne doivent en aucun cas se substituer à un traitement médical prescrit par un professionnel de santé. Si vous souffrez d'une affection hépatique ou rénale chronique, consultez impérativement un médecin avant tout changement alimentaire.",
  pages: [
    {
      title: "Couverture & Sommaire",
      subtitle: "Édition de Référence — Printemps 2026",
      paragraphs: [
        "Auteur : Dr. Amélie Laurent, Docteur en nutrition et physiologie cellulaire.",
        "Bienvenue dans l'édition officielle 2026 de l'étude métabolique sur l'inflammation silencieuse et la résonance hépatique saisonnière.",
        "SOMMAIRE ET STRUCTURE DE L'OUVRAGE :",
        "• Chapitre 1 : Les deux phases de la détoxication hépatique (Biologie des cytochromes P450).",
        "• Chapitre 2 : Les micronutriments soufrés et les crucifères cliniques.",
        "• Chapitre 3 : Trois recettes vertes denses protectrices de la barrière intestinale.",
        "• Chapitre 4 : Précautions d'usage, limites cliniques et bibliographie académique."
      ]
    },
    {
      title: "Chapitre 1 : Les Mécanismes de la Détoxication Hépatique",
      subtitle: "Phases I et II du métabolisme hépatocytaire",
      paragraphs: [
        "La détoxication hépatique n'est pas un événement ponctuel déclenché par des jus miracles, mais un ensemble complexe de réactions biochimiques continues.",
        "1. LA PHASE I (Fonctionnalisation) : Menée principalement par les monooxygénases du système du cytochrome P450. Cette phase modifie la structure des composés liposolubles en y introduisant un groupement réactif. Cette étape intermédiaire génère inévitablement une quantité importante de radicaux libres hautement réactifs. Un apport adéquat en antioxydants cellulaires (Vitamine C, Vitamine E, Coenzyme Q10) est indispensable pour prévenir la peroxydation lipidique membranaire.",
        "2. LA PHASE II (Conjugaison) : Cette étape lie les intermédiaires réactifs de la Phase I à des groupements hydrophiles (acide glucuronique, glutathione, sulfate ou glycine) pour les rendre hydrosolubles. Cela permet leur excrétion finale et sécurisée par les voies biliaires ou urinaires. Les réactions de sulfoconjugaison sont étroitement limitées par la disponibilité en acides aminés soufrés (Méthionine, Cystéine) que l'on retrouve dans l'ail, l'oignon et les œufs bio."
      ]
    },
    {
      title: "Chapitre 2 : Les Aliments Clés & Recettes Pratiques",
      subtitle: "Augmenter la biodisponibilité des phytonutriments protecteurs",
      paragraphs: [
        "Pour optimiser vos voies métaboliques hépatiques sans agresser votre système digestif, intégrez régulièrement ces préparations denses :",
        "RECETTE A : LE SMOOTHIE VERT ÉMERAUDE DE RECONSTRUCTION",
        "• Ingrédients : 45g de jeunes pousses d'épinards frais (riches en folates bioactifs), 1/2 concombre biologique (riche en silicium et eau intracellulaire), 1 cuillère à café de gingembre frais râpé (pour ses gingérols anti-inflammatoires), 1/2 pomme Granny Smith (contenant des pectines douces pour stabiliser le microbiote) et 200 ml d'eau de coco pure.",
        "• Préparation : Mixer à haute vitesse pendant 45 secondes pour lyser les parois cellulaires végétales et libérer les enzymes actives. Consommer immédiatement le matin à jeun.",
        "RECETTE B : LE BOUILLON REMINÉRALISANT AUX CRUCIFÈRES",
        "• Ingrédients : 100g de têtes de brocoli bio (riches en glucoraphanine), 2 gousses d'ail écrasées (générant de l'allicine active après 5 minutes de repos à l'air libre), 1 branche de romarin frais (contenant de l'acide carnosique stimulant de la vésicule) et une pincée de curcuma brut associé à du poivre noir pour décupler sa biodisponibilité."
      ]
    },
    {
      title: "Chapitre 3 : Précautions & Références Scientifiques",
      subtitle: "Consignes de sécurité clinique et sources académiques",
      paragraphs: [
        "CONSIGNES DE SÉCURITÉ CLINIQUE :",
        "• Ne pratiquez jamais de jeûne extrême ou de monodiète en cas de fatigue surrénale avancée, de troubles du comportement alimentaire (TCA), de diabète de type 1 ou de pathologies cardiovasculaires graves sans supervision médicale.",
        "• Une légère céphalée peut survenir durant la phase transitoire. Elle doit s'estomper en moins de 48 heures grâce à une hydratation abondante avec une eau faiblement minéralisée.",
        "RÉFÉRENCES SCIENTIFIQUES PRINCIPALES :",
        "1. Pr Yoshinori Ohsumi, Prix Nobel de Physiologie ou Médecine 2016 : 'Mechanisms for autophagy' montrant l'importance de la restriction calorique ménagée sur la régénération des organites cellulaires endommagés.",
        "2. Journal of Clinical Biochemistry and Nutrition (2025), Vol. 74 : 'Sulforaphane upregulation of hepatic Phase II enzymes: a randomized double-blind evaluation'.",
        "3. World Health Organization (WHO) Guidelines for Metabolic and Hepatic Safety Management (2024)."
      ]
    }
  ]
};

// 2. EBOOK 1 (ANGLAIS) : Spring Detox and Anti-Inflammatory Nutrition Guide
export const EBOOK_DETOX_EN: EbookContent = {
  id: "detox_en",
  title: "Spring Detox and Anti-Inflammatory Nutrition Guide",
  author: "Dr. Amélie Laurent, Clinical Nutritionist",
  category: "Clinical & Metabolic Nutrition",
  publicationDate: "March 2026",
  medicalDisclaimer: "PUBLIC HEALTH DISCLAIMER: The information contained in this guide is intended solely for general wellness and preventive lifestyle optimization. It does not constitute medical advice or prescriptions, and should under no circumstances replace medical treatments. If you suffer from chronic hepatic or renal disorders, always consult a qualified physician before initiating major dietary adjustments.",
  pages: [
    {
      title: "Cover & Summary",
      subtitle: "Reference Edition — Spring 2026",
      paragraphs: [
        "Author: Dr. Amélie Laurent, PhD in Nutrition and Cellular Physiology.",
        "Welcome to the official 2026 study on low-grade systemic inflammation and seasonal hepatic clearance.",
        "TABLE OF CONTENTS:",
        "• Chapter 1: The two biochemical phases of hepatic clearance (Cytochrome P450 biology).",
        "• Chapter 2: Sulfur-rich micronutrients and clinical cruciferous options.",
        "• Chapter 3: Three nutrient-dense green recipes protecting the intestinal mucosal barrier.",
        "• Chapter 4: Crucial clinical precautions, boundaries, and academic references."
      ]
    },
    {
      title: "Chapter 1: The Biochemistry of Hepatic Clearance (Phases I & II)",
      subtitle: "Biochemical pathways within liver hepatocytes",
      paragraphs: [
        "Hepatic detoxification is not a periodic event triggered by magic juice cleanses, but a continuous and highly regulated system of biochemical pathways.",
        "1. PHASE I (Functionalization): Orchestrated primarily by the monooxygenases of the Cytochrome P450 enzyme superfamily. This phase alters fat-soluble compounds to expose a chemical binding site. This intermediate step inherently yields high amounts of unstable free radicals. Consuming cell-protecting antioxidants (such as Vitamin C, Vitamin E, and Coenzyme Q10) is vital to halt intermediate lipid peroxidation.",
        "2. PHASE II (Conjugation): Pairs the reactive intermediates of Phase I with hydrophilic groups (glucuronic acid, glutathione, sulfate, or glycine) to make them fully water-soluble. This allows for safe excretion via bile or urine. Sulfoconjugation reactions are directly limited by the availability of sulfur-donating amino acids (Methionine, Cysteine) found abundantly in organic eggs and cruciferous vegetables."
      ]
    },
    {
      title: "Chapter 2: Essential Superfoods & Practical Recipes",
      subtitle: "Boosting the bioavailability of protective plant compounds",
      paragraphs: [
        "To support your natural hepatic pathways without irritating your digestive lining, integrate these nutrient-dense preparations:",
        "RECIPE A: THE EMERALD CELLULAR GREEN SMOOTHIE",
        "• Ingredients: 45g of fresh baby spinach (rich in bioavailable folate), 1/2 organic cucumber (rich in silica and structured intracellular water), 1 teaspoon of freshly grated ginger (for its anti-inflammatory gingerols), 1/2 organic Granny Smith apple (rich in prebiotic pectin), and 200 ml of pure coconut water.",
        "• Directions: Blend on high speed for 45 seconds to rupture plant cell walls and release active protective enzymes. Consume raw, preferably in the morning on an empty stomach.",
        "RECIPE B: THE THERMOGENIC SULFUR-RICH BRASSICA BROTH",
        "• Ingredients: 100g organic broccoli florets (rich in glucoraphanin), 2 crushed garlic cloves (releasing active allicin after sitting for 5 minutes), 1 fresh rosemary sprig (rich in bile-stimulating carnosic acid), and a pinch of raw turmeric coupled with black pepper to drastically increase intestinal absorption."
      ]
    },
    {
      title: "Chapter 3: Safety Guidelines & Medical References",
      subtitle: "Clinical precautions and peer-reviewed sources",
      paragraphs: [
        "CLINICAL SAFETY AND SECURITY PROTOCOLS:",
        "• Never embark on prolonged fasts or severe caloric restriction if you suffer from advanced adrenal fatigue, eating disorders (EDs), type 1 diabetes, or severe cardiovascular conditions, unless supervised by a medical expert.",
        "• A temporary, mild headache may arise during the metabolic transition. It should fully resolve within 48 hours. Ensure abundant hydration with low-mineral water to assist renal filtration.",
        "PRIMARY SCIENTIFIC LITERATURE CITED:",
        "1. Pr. Yoshinori Ohsumi, Nobel Prize in Physiology or Medicine 2016: 'Mechanisms for autophagy' demonstrating the cellular cleansing effects of controlled caloric restriction on damaged organelles.",
        "2. Journal of Clinical Biochemistry and Nutrition (2025), Vol. 74: 'Sulforaphane upregulation of hepatic Phase II enzymes: a randomized double-blind evaluation'.",
        "3. World Health Organization (WHO) Guidelines for Metabolic and Hepatic Safety Management (2024)."
      ]
    }
  ]
};

// 3. EBOOK 2 (FRANÇAIS) : Guide pratique du sommeil réparateur et des rythmes circadiens
export const EBOOK_SLEEP_FR: EbookContent = {
  id: "sleep_fr",
  title: "Guide pratique du sommeil réparateur et des rythmes circadiens",
  author: "Marc-André Moreau, Chercheur en Neuro-sommeil",
  category: "Physiologie Appliquée & Chronobiologie",
  publicationDate: "Mars 2026",
  medicalDisclaimer: "AVERTISSEMENT MEDICAL : Les conseils comportementaux décrits dans ce livre sont d'ordre préventif. L'insomnie chronique persistante peut être le symptôme d'une affection sous-jacente exigeant une prise en charge médicale (apnées du sommeil, syndrome de fatigue chronique, troubles d'anxiété clinique). Si vos symptômes durent depuis plus de 4 semaines consécutives, veuillez consulter un médecin spécialisé.",
  pages: [
    {
      title: "Couverture & Sommaire",
      subtitle: "Édition de Référence — Chronobiologie 2026",
      paragraphs: [
        "Auteur : Marc-André Moreau, spécialiste de la physiologie circadienne.",
        "Ce manuel propose des protocoles comportementaux cliniquement validés pour restaurer l'architecture de vos phases de sommeil lent profond.",
        "SOMMAIRE ET STRUCTURE DE L'OUVRAGE :",
        "• Chapitre 1 : Les régulateurs neurologiques du sommeil (Mélatonine et pression d'adénosine).",
        "• Chapitre 2 : L'hygiène lumineuse moderne (Melanopic lux et blocage de la lumière bleue).",
        "• Chapitre 3 : La thermorégulation et les rituels d'activation parasympathique.",
        "• Chapitre 4 : La méthode respiratoire 4-7-8, limites cliniques et bibliographie académique."
      ]
    },
    {
      title: "Chapitre 1 : Les Neurotransmetteurs et l'Horloge Biologique",
      subtitle: "Comprendre la double régulation du cycle veille-sommeil",
      paragraphs: [
        "Notre horloge centrale réside dans le noyau suprachiasmatique (NSC) de l'hypothalamus. Elle orchestre la production d'hormones de manière synchrone grâce à deux forces opposées :",
        "1. LA PRESSION DE SOMMEIL (L'Adénosine) : Tout au long de la journée, le métabolisme cellulaire dégrade l'ATP et libère de l'adénosine, qui s'accumule dans le cerveau. Plus sa concentration est élevée, plus l'envie de dormir augmente. La caféine agit comme un antagoniste compétitif : elle bloque les récepteurs à adénosine, masquant la fatigue sans éliminer la molécule. Lorsque la caféine est dégradée, la libération brutale de l'adénosine accumulée provoque un 'crash de fatigue'.",
        "2. LA MÉLATONINE (L'Hormone Circadienne) : Synthétisée par la glande pinéale uniquement en l'absence de rayons de courte longueur d'onde (lumière bleue entre 450 et 480 nm). Elle signale au corps qu'il est temps d'abaisser la température centrale pour initier le sommeil."
      ]
    },
    {
      title: "Chapitre 2 : L'Hygiène Lumineuse et Thermique Pratique",
      subtitle: "Soutenir la transition circadienne naturelle",
      paragraphs: [
        "Pour réaligner vos cycles sans compléments de synthèse, appliquez ces deux protocoles fondamentaux :",
        "PROTOCOLE 1 : L'EXPOSITION SOLAIRE MATINALE (DANS LES 30 MIN APRES LE RÉVEIL)",
        "• Sortez à l'extérieur pendant 10 à 15 minutes sans lunettes de soleil pour capter la lumière naturelle directe (ne fixez pas le soleil). Cela stimule les cellules ganglionnaires de la rétine à mélanopsine, stoppant instantanément la mélatonine résiduelle et programmant la sécrétion saine de mélatonine 14 heures plus tard.",
        "PROTOCOLE 2 : LA BAISSE THERMIQUE CENTRALE DE LA CHAMBRE",
        "• Maintenez la température ambiante de la chambre entre 16°C et 18°C. Pour s'endormir profondément, notre corps doit impérativement baisser sa température interne de 1°C. Dormir dans une pièce trop chaude bloque cette transition thermique indispensable à l'activation des ondes lentes delta."
      ]
    },
    {
      title: "Chapitre 3 : Respiration Circadienne & Références Scientifiques",
      subtitle: "Activer le système nerveux autonome parasympathique",
      paragraphs: [
        "PROTOCOLE RESPIRATOIRE 4-7-8 (DR WEIL) :",
        "Cette technique mécanique de pranayama rééquilibre instantanément le système vagal pour réduire l'amygdale cérébrale :",
        "1. Inspirez par le nez silencieusement pendant 4 secondes.",
        "2. Retenez votre respiration pendant exactement 7 secondes.",
        "3. Expirez bruyamment par la bouche pendant 8 secondes en faisant un léger sifflement.",
        "4. Répétez ce cycle 4 fois avant d'éteindre la lumière. Cette technique réduit le rythme cardiaque de manière réflexe.",
        "RÉFÉRENCES SCIENTIFIQUES PRINCIPALES :",
        "• Matthew Walker, PhD, 'Why We Sleep: Unlocking the Power of Sleep and Dreams' (2020) : Analyse critique des perturbations de l'architecture du sommeil lent profond causées par la lumière bleue.",
        "• Dr Satchin Panda, 'The Circadian Code: Lose Weight, Supercharge Your Energy, and Transform Your Health' (2022).",
        "• Sleep Medicine Reviews (2025) : 'Impact of warm-bath induced vasodilation on sleep onset latency'."
      ]
    }
  ]
};

// 4. EBOOK 2 (ANGLAIS) : Practical Guide to Restorative Sleep and Circadian Rhythms
export const EBOOK_SLEEP_EN: EbookContent = {
  id: "sleep_en",
  title: "Practical Guide to Restorative Sleep and Circadian Rhythms",
  author: "Marc-André Moreau, Sleep Physiologist",
  category: "Applied Physiology & Chronobiology",
  publicationDate: "March 2026",
  medicalDisclaimer: "MEDICAL WARNING: The behavioral advice outlined in this book is intended solely for general wellness and preventive lifestyle optimization. Chronic, unyielding insomnia can mask organic sleep disorders (such as obstructive sleep apnea or clinical anxiety). If sleep disturbances persist for more than 4 consecutive weeks, consult a clinical sleep specialist.",
  pages: [
    {
      title: "Cover & Summary",
      subtitle: "Reference Edition — Chronobiology 2026",
      paragraphs: [
        "Author: Marc-André Moreau, specialist in circadian physiology.",
        "This manual delivers clinically validated behavioral protocols to restore the architecture of your deep slow-wave sleep cycles.",
        "TABLE OF CONTENTS:",
        "• Chapter 1: The neurological regulators of sleep (Melatonin and adenosine pressure).",
        "• Chapter 2: Modern light hygiene (Melanopic lux and digital blue-light blockades).",
        "• Chapter 3: Body cooling and parasympathetic activation rituals.",
        "• Chapter 4: The 4-7-8 breathing system, clinical boundaries, and academic references."
      ]
    },
    {
      title: "Chapter 1: Neurotransmitters & The Biological Clock",
      subtitle: "Understanding the two-process model of sleep regulation",
      paragraphs: [
        "Our central biological clock is situated in the suprachiasmatic nucleus (SCN) of the hypothalamus, orchestrating organ-level clocks in perfect sync using two distinct drives:",
        "1. SLEEP PRESSURE (Adenosine): Throughout your waking hours, cellular metabolism breaks down ATP and releases adenosine, which accumulates in your forebrain. High adenosine concentration generates a natural urge to sleep. Caffeine acts as a competitive antagonist: it binds to and blocks adenosine receptors, masking fatigue without clearing the molecule. Once caffeine metabolizes, a sudden surge of accumulated adenosine creates the classic 'caffeine crash'.",
        "2. MELATONIN (The Circadian Signaler): Secreted by the pineal gland strictly in the absence of short-wavelength blue light (450-480 nm). It signals the body to lower core temperature for sleep onset."
      ]
    },
    {
      title: "Chapter 2: Essential Light & Thermal Hygiene Protocols",
      subtitle: "Supporting the natural circadian shift",
      paragraphs: [
        "To realign your biological rhythms without synthetic supplements, apply these two fundamental protocols:",
        "PROTOCOL 1: EARLY MORNING LIGHT OUTDOOR EXPOSURE (WITHIN 30 MIN OF WAKING)",
        "• View natural outdoor light (never stare directly at the sun) for 10 to 15 minutes without sunglasses. Photic energy triggers melanopsin-containing retinal ganglion cells, immediately suppressing residual melatonin, boosting morning cortisol levels, and starting a precise biological countdown for natural sleep onset 14-16 hours later.",
        "PROTOCOL 2: CENTRAL CORE TEMPERATURE DECREASE",
        "• Keep your bedroom ambient temperature between 16°C and 18°C (61°F to 64°F). Human physiology requires a 1°C (1.8°F) drop in core body temperature to initiate sleep. Sleeping in a warm environment severely impairs this thermoregulation, reducing deep slow-wave sleep by up to 25%."
      ]
    },
    {
      title: "Chapter 3: Circadian Breathing & Scientific References",
      subtitle: "Activating the parasympathetic autonomic nervous system",
      paragraphs: [
        "THE 4-7-8 DECOMPRESSION BREATING PROTOCOL (DR. WEIL'S METHOD):",
        "This precise pranayama technique immediately balances the autonomic nervous system by stimulating the vagus nerve:",
        "1. Inhale quietly through your nose for 4 seconds.",
        "2. Hold your breath for exactly 7 seconds.",
        "3. Exhale completely and audibly through your mouth for 8 seconds, making a whoosh sound.",
        "4. Repeat this loop for 4 full cycles before closing your eyes. This triggers a parasympathetic reflex, decreasing heart rate and lowering blood pressure.",
        "PRIMARY SCIENTIFIC LITERATURE CITED:",
        "• Matthew Walker, PhD, 'Why We Sleep: Unlocking the Power of Sleep and Dreams' (2020): Comprehensive analysis of slow-wave sleep disruptions triggered by short-wavelength evening exposures.",
        "• Dr. Satchin Panda, 'The Circadian Code: Lose Weight, Supercharge Your Energy, and Transform Your Health' (2022).",
        "• Sleep Medicine Reviews (2025): 'Impact of warm-bath induced vasodilation on sleep onset latency'."
      ]
    }
  ]
};
