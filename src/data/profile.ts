// ===================================================================
// Contenu du portfolio — tout est centralisé ici (issu du CV).
// Modifie ce fichier pour mettre à jour le site, sans toucher aux composants.
// ===================================================================

export const profile = {
    firstName: 'Eugène Jonathan',
    lastName: 'MANGUITHRE',
    shortName: 'Eugène Jonathan',
    role: 'Développeur Full Stack',
    tagline: 'Laravel & Vue.js',
    pitch: "Je développe des applications web de bout en bout — back-end Laravel, front-end Vue.js — pour des entreprises de Toamasina. Autodidacte, je suis passé par le stage, le contrat, la mission. Aujourd'hui je cherche un poste en remote, idéalement en France.",
    location: 'Toamasina, Madagascar',
    availability: 'Télétravail francophone · Ouvert aux opportunités sur site',
    email: 'eugene.manguithre@gmail.com',
    phone: '+261 34 06 938 23',
    cvUrl: '/resume.pdf',
};

// `cmd` = nom de commande affiché en mono au-dessus du titre.
export const services = [
    {
        title: 'Développement back-end',
        path: 'backend/',
        stack: 'php · laravel · pgsql',
        desc: 'Laravel en profondeur : Eloquent, middleware, events & queues, authentification multi-rôles avec Sanctum/Passport et OAuth, PostgreSQL et MySQL, tests PHPUnit et Pest.',
    },
    {
        title: 'Développement front-end',
        path: 'frontend/',
        stack: 'vue 3 · ts · tailwind',
        desc: 'Vue.js 3 en Composition API avec Vue Router et Pinia, TypeScript pour un code qui tient dans le temps, Tailwind CSS, tests Cypress.',
    },
    {
        title: 'Intégrations & API',
        path: 'api/',
        stack: 'rest · oauth · spatie',
        desc: "Conception d'APIs REST sécurisées, intégration d'APIs tierces, stockage de fichiers avec Spatie et Cloudinary, emails transactionnels via Resend et Larael.",
    },
    {
        title: 'Qualité & mise en production',
        path: 'qualite/',
        stack: 'pest · cypress · gh-actions',
        desc: 'Tests automatiques, revue de code, CI/CD avec GitHub Actions et optimisation des performances — de la première ligne de code au deploy.',
    },
];

// Projets clients = confidentiels : pas de captures (NDA).
// Si un jour tu as le droit de montrer une capture, ajoute `img: '/imgs/projects/pX.png'`.
export const projects = [
    {
        id: 1,
        title: 'Application web Sénland',
        client: 'SENland · Toamasina',
        period: 'Depuis oct. 2024',
        desc: "Développement et intégration de nouvelles fonctionnalités, intégration d'APIs tierces et optimisation du backend, de la conception à la mise en production.",
        tags: ['Full Stack'],
        tech: ['Laravel', 'Vue 3', 'TypeScript'],
    },
    {
        id: 2,
        title: 'Refonte applicative Espace Filtre',
        client: 'Espace Filtre · Toamasina',
        period: 'Depuis nov. 2023',
        desc: "Refonte complète de l'application interne de l'entreprise : développement back-end Laravel 10 et front-end Vue.js 3, en collaboration étroite avec l'équipe.",
        tags: ['Full Stack', 'Back-end'],
        tech: ['Laravel 10', 'Vue 3'],
    },
    {
        id: 3,
        title: 'Météo pour pêcheurs',
        client: 'Espace Filtre · Stage',
        period: 'Sept. — Nov. 2023',
        desc: 'Application web de prévision météo destinée aux pêcheurs : API météo, prévisions et conseils de navigation, développée en Laravel 10 et Vue.js 3.',
        tags: ['Back-end', 'Front-end'],
        tech: ['Laravel 10', 'Vue 3', 'API REST'],
    },
    {
        id: 4,
        title: 'Gestion de stock & paiements',
        client: 'Espace Filtre · Toamasina',
        period: 'Avr. — Juin 2023',
        desc: 'Application de gestion de stock : gestion des postes, téléchargement des factures au format PDF et système de suivi des paiements en Laravel 8 et Vue.js 3.',
        tags: ['Front-end', 'Back-end'],
        tech: ['Laravel 8', 'Vue 3', 'PDF'],
    },
];

export const education = [
    {
        period: '2023 — 2024',
        title: 'Licence en Informatique',
        place: 'Université Privée Hay Antananarivo',
        note: "Diplôme de licence en cours d'obtention",
    },
    {
        period: '2021 — 2023',
        title: 'DTS Informatique',
        place: 'Université Privée Hay Antananarivo',
        note: 'Études complétées, soutenance de mémoire en cours',
    },
];

export const experience = [
    {
        period: "Oct. 2024 — Aujourd'hui",
        title: 'Développeur Full Stack (Laravel & Vue.js)',
        place: 'SENland · Toamasina, MG',
        points: [
            'Développement et intégration de nouvelles fonctionnalités back-end et front-end',
            'Intégration d’APIs tierces et optimisation du backend',
            'Gestion complète du cycle de vie des fonctionnalités : conception, dev, tests, production',
        ],
    },
    {
        period: "Nov. 2023 — Aujourd'hui",
        title: 'Développeur Full Stack (Laravel & Vue.js)',
        place: 'Espace Filtre · Toamasina, MG',
        points: [
            "Refonte complète de l'application interne (Laravel 10 + Vue.js 3)",
            'Collaboration étroite avec l’équipe de développeurs',
        ],
    },
    {
        period: 'Sept. — Nov. 2023',
        title: 'Développeur Full Stack — Stage',
        place: 'Espace Filtre · Toamasina, MG',
        points: [
            'Application web de prévision météo destinée aux pêcheurs (Laravel 10 + Vue.js 3)',
        ],
    },
    {
        period: 'Avr. — Juin 2023',
        title: 'Développeur Full Stack (Laravel & Vue.js)',
        place: 'Espace Filtre · Toamasina, MG',
        points: [
            'Application de gestion de stock : factures PDF, suivi des paiements (Laravel 8 + Vue.js 3)',
        ],
    },
];

// Niveaux auto-évalués (sur 100) — affichés en barres segmentées.
export const skillRows = [
    {
        group: 'backend/',
        items: [
            { name: 'Laravel', level: 92 },
            { name: 'PHP 8', level: 88 },
            { name: 'API REST · Sanctum', level: 88 },
            { name: 'PostgreSQL · MySQL', level: 78 },
            { name: 'PHPUnit · Pest', level: 75 },
        ],
    },
    {
        group: 'frontend/',
        items: [
            { name: 'Vue 3 — Composition API', level: 90 },
            { name: 'Vue Router · Pinia', level: 85 },
            { name: 'Tailwind CSS', level: 84 },
            { name: 'TypeScript', level: 80 },
            { name: 'Cypress', level: 72 },
        ],
    },
    {
        group: 'outils/',
        items: [
            { name: 'Git · GitHub Actions', level: 86 },
            { name: 'Cloudinary · Spatie', level: 76 },
            { name: 'Resend · Larael', level: 70 },
        ],
    },
];
