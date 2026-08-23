export type Lang = 'fr' | 'en'

export const copy = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      why: 'À propos',
      areas: 'Secteurs',
      contact: 'Contact',
    },
    hero: {
      caption: 'Votre partenaire de confiance.',
      cta: 'Demandez votre soumission gratuite',
    },
    services: {
      title: 'Nos services',
      more: 'En savoir plus',
      items: [
        {
          title: 'Revêtement',
          text: 'Façades durables et soignées qui protègent et embellissent votre maison.',
        },
        {
          title: 'Portes et fenêtres',
          text: 'Confort, efficacité énergétique et finitions nettes, du choix à l’installation.',
        },
        {
          title: 'Sous-sol',
          text: 'Transformer votre sous-sol en espace habitable, chaleureux et fonctionnel.',
        },
        {
          title: 'Cuisine',
          text: 'Une cuisine pensée pour votre quotidien, avec un suivi clair du début à la fin.',
        },
        {
          title: 'Salle de bain',
          text: 'Rénovation complète ou partielle, avec un souci du détail à chaque étape.',
        },
      ],
    },
    why: {
      title: 'Pourquoi choisir',
      brand: 'Norgesco',
      lead: 'Peu importe le projet — revêtement, portes et fenêtres, sous-sol, cuisine ou salle de bain — on veut l’entendre. Une équipe de confiance pour votre rénovation résidentielle.',
      circles: ['Expertise', 'Qualité', 'Fiabilité', 'Proximité'],
    },
    areas: {
      title: 'Secteurs desservis',
      lead: 'Nous desservons Laval, Laurentides et Lanaudière.',
      items: ['Laval', 'Laurentides', 'Lanaudière'],
    },
    quiz: {
      title: 'Contactez-nous',
      lead: 'Répondez à 3 questions rapides et recevez une réponse personnalisée.',
      stepOf: 'Question',
      of: 'sur',
      back: 'Retour',
      next: 'Continuer',
      submit: 'Demandez votre soumission gratuite',
      success: 'Merci — nous vous reviendrons avec une réponse personnalisée sous peu.',
      questions: [
        {
          id: 'project',
          prompt: 'Quel est votre type de projet ?',
          options: [
            'Revêtement',
            'Portes et fenêtres',
            'Sous-sol',
            'Cuisine',
            'Salle de bain',
            'Autre / plusieurs',
          ],
        },
        {
          id: 'sector',
          prompt: 'Où se situe le projet ?',
          options: ['Laval', 'Laurentides', 'Lanaudière', 'Ailleurs'],
        },
        {
          id: 'timing',
          prompt: 'Quand souhaitez-vous démarrer ?',
          options: [
            'Dès que possible',
            'Dans 1 à 3 mois',
            'Dans 3 à 6 mois',
            'Je explore mes options',
          ],
        },
      ],
      contactTitle: 'Recevez votre réponse personnalisée',
      name: 'Nom',
      email: 'Courriel',
      phone: 'Téléphone',
      message: 'Précisions (optionnel)',
      note: 'Soumission gratuite · réponse personnalisée rapide',
      infoTitle: 'Coordonnées',
      infoAreas: 'Laval · Laurentides · Lanaudière',
      infoHours: 'Lun–Ven : sur rendez-vous',
    },
    footer: {
      tagline: 'construction — gestion — rénovation',
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      why: 'About',
      areas: 'Areas',
      contact: 'Contact',
    },
    hero: {
      caption: 'Your trusted partner.',
      cta: 'Request your free quote',
    },
    services: {
      title: 'Our services',
      more: 'Learn more',
      items: [
        {
          title: 'Siding',
          text: 'Durable, carefully finished exteriors that protect and elevate your home.',
        },
        {
          title: 'Doors & windows',
          text: 'Comfort, energy efficiency, and clean installation from selection to fit.',
        },
        {
          title: 'Basement',
          text: 'Turn your basement into a warm, livable, and useful space.',
        },
        {
          title: 'Kitchen',
          text: 'A kitchen built around daily life, with clear guidance start to finish.',
        },
        {
          title: 'Bathroom',
          text: 'Full or partial renovations with attention to detail at every step.',
        },
      ],
    },
    why: {
      title: 'Why choose',
      brand: 'Norgesco',
      lead: 'Whatever the project — siding, doors and windows, basement, kitchen, or bathroom — we want to hear about it. A trusted team for your residential renovation.',
      circles: ['Expertise', 'Quality', 'Reliability', 'Local'],
    },
    areas: {
      title: 'Areas we serve',
      lead: 'We serve Laval, the Laurentians, and Lanaudière.',
      items: ['Laval', 'Laurentians', 'Lanaudière'],
    },
    quiz: {
      title: 'Contact us',
      lead: 'Answer 3 quick questions and get a personalized response.',
      stepOf: 'Question',
      of: 'of',
      back: 'Back',
      next: 'Continue',
      submit: 'Request your free quote',
      success: 'Thank you — we’ll get back to you shortly with a personalized response.',
      questions: [
        {
          id: 'project',
          prompt: 'What type of project is it?',
          options: [
            'Siding',
            'Doors & windows',
            'Basement',
            'Kitchen',
            'Bathroom',
            'Other / multiple',
          ],
        },
        {
          id: 'sector',
          prompt: 'Where is the project located?',
          options: ['Laval', 'Laurentians', 'Lanaudière', 'Elsewhere'],
        },
        {
          id: 'timing',
          prompt: 'When would you like to start?',
          options: [
            'As soon as possible',
            'In 1 to 3 months',
            'In 3 to 6 months',
            'I’m exploring options',
          ],
        },
      ],
      contactTitle: 'Get your personalized response',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Details (optional)',
      note: 'Free quote · fast personalized reply',
      infoTitle: 'Get in touch',
      infoAreas: 'Laval · Laurentians · Lanaudière',
      infoHours: 'Mon–Fri: by appointment',
    },
    footer: {
      tagline: 'construction — management — renovation',
      rights: 'All rights reserved.',
    },
  },
} as const

export type Copy = (typeof copy)[Lang]
