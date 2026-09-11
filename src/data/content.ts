import type { Content } from '@/types/content';

export const content = {
    profile: {
        firstName: 'Eugène Jonathan',
        lastName: 'MANGUITHRE',
        role: 'Développeur Full Stack',
        tagline: 'Laravel & Vue.js',
        pitch: "Je développe des applications web de bout en bout — back-end Laravel, front-end Vue.js — pour des entreprises de Toamasina. Autodidacte, je suis passé par le stage, le contrat, la mission. Aujourd'hui je cherche un poste en télétravail francophone — ou une opportunité sur site.",
        location: 'Toamasina, Madagascar',
        timezone: 'Indian/Antananarivo',
        tzDisplay: 'UTC+3',
        experienceYears: 3,
        stack: ['Laravel', 'Vue 3', 'TypeScript', 'Tailwind'],
        availability:
            'Télétravail francophone · Ouvert aux opportunités sur site',
        email: 'eugene.manguithre@gmail.com',
        phone: '+261 34 06 938 23',
        cvUrl: '/resume.pdf',

        github: {
            url: 'https://github.com/NathanM501/portfolio/blob/main/README.md',
            display: 'NathanM501/portfolio',
        },
    },

    sections: [
        {
            id: 'accueil',
            label: 'accueil',
            path: '',
            title: '',
            note: '',
            showInNavbar: false,
            showInPalette: true,
        },
        {
            id: 'services',
            label: 'services',
            path: 'services/',
            title: 'Ce que je fais',
            note: '',
            showInNavbar: true,
            showInPalette: true,
        },
        {
            id: 'projects',
            label: 'projets',
            path: 'projets/',
            title: 'Projets',
            note: '',
            showInNavbar: true,
            showInPalette: true,
        },
        {
            id: 'resume',
            label: 'parcours',
            path: 'parcours/',
            title: 'Parcours',
            note: '2021 → 2026',
            showInNavbar: true,
            showInPalette: true,
        },
        {
            id: 'skills',
            label: 'stack',
            path: 'stack/',
            title: 'Stack technique',
            note: '',
            showInNavbar: true,
            showInPalette: true,
        },
        {
            id: 'contact',
            label: 'contact',
            path: 'contact/',
            title: 'Contact',
            note: '',
            showInNavbar: true,
            showInPalette: true,
        },
    ],

    services: [
        {
            path: 'backend/',
            title: 'Développement back-end',
            stack: 'php · laravel · pgsql',
            desc: 'Laravel en profondeur : Eloquent, middleware, events & queues, authentification multi-rôles avec Sanctum/Passport et OAuth, PostgreSQL et MySQL, tests PHPUnit et Pest.',
        },
        {
            path: 'frontend/',
            title: 'Développement front-end',
            stack: 'vue 3 · ts · tailwind',
            desc: 'Vue.js 3 en Composition API avec Vue Router et Pinia, TypeScript pour un code qui tient dans le temps, Tailwind CSS, tests Cypress.',
        },
        {
            path: 'api/',
            title: 'Intégrations & API',
            stack: 'rest · oauth · spatie',
            desc: "Conception d'APIs REST sécurisées, intégration d'APIs tierces, stockage de fichiers avec Spatie et Cloudinary, emails transactionnels via Resend et Larael.",
        },
        {
            path: 'qualite/',
            title: 'Qualité & mise en production',
            stack: 'pest · cypress · gh-actions',
            desc: 'Tests automatiques, revue de code, CI/CD avec GitHub Actions et optimisation des performances — de la première ligne de code au deploy.',
        },
    ],

    // Client projects = confidential: no screenshots (NDA).
    projects: [
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
    ],

    career: {
        experience: [
            {
                id: 'senland',
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
                id: 'espace-filtre-refonte',
                period: "Nov. 2023 — Aujourd'hui",
                title: 'Développeur Full Stack (Laravel & Vue.js)',
                place: 'Espace Filtre · Toamasina, MG',
                points: [
                    "Refonte complète de l'application interne (Laravel 10 + Vue.js 3)",
                    'Collaboration étroite avec l’équipe de développeurs',
                ],
            },
            {
                id: 'espace-filtre-stage',
                period: 'Sept. — Nov. 2023',
                title: 'Développeur Full Stack — Stage',
                place: 'Espace Filtre · Toamasina, MG',
                points: [
                    'Application web de prévision météo destinée aux pêcheurs (Laravel 10 + Vue.js 3)',
                ],
            },
            {
                id: 'espace-filtre-stock',
                period: 'Avr. — Juin 2023',
                title: 'Développeur Full Stack (Laravel & Vue.js)',
                place: 'Espace Filtre · Toamasina, MG',
                points: [
                    'Application de gestion de stock : factures PDF, suivi des paiements (Laravel 8 + Vue.js 3)',
                ],
            },
        ],
        education: [
            {
                id: 'licence-info',
                period: '2023 — 2024',
                title: 'Licence en Informatique',
                place: 'Université Privée Hay Antananarivo',
                points: ["Diplôme de licence en cours d'obtention"],
            },
            {
                id: 'dts-info',
                period: '2021 — 2023',
                title: 'DTS Informatique',
                place: 'Université Privée Hay Antananarivo',
                points: ['Études complétées, soutenance de mémoire en cours'],
            },
        ],
    },

    skills: {
        rows: [
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
        ],
    },

    ui: {
        contactHeading: 'Un projet, un poste,\nune question ?',
        contactIntro:
            'Écris-moi — je réponds vite. Je cherche du télétravail francophone, et je suis ouvert aux opportunités sur site.',
        contactNote: 'réponse en moins de 24 h',
        projectsNote: '# projets clients — captures confidentielles (NDA)',
        skillsDescription: 'full stack — laravel & vue 3',
        skillsDependencies:
            'laravel ^11 · vue ^3.5 · typescript ^5 · tailwind ^4',
        footerTechnologies: 'vue 3 · vite · tailwind 4',
    },

    seo: {
        title: 'Eugène Jonathan MANGUITHRE — Développeur Full Stack (Laravel & Vue.js)',
        description:
            "Portfolio d'Eugène Jonathan MANGUITHRE, développeur Full Stack Laravel & Vue.js basé à Toamasina, Madagascar. Dispo en télétravail francophone.",
        openGraph: {
            title: 'Eugène Jonathan MANGUITHRE — Développeur Full Stack (Laravel & Vue.js)',
            description:
                "Portfolio d'Eugène Jonathan MANGUITHRE, développeur Full Stack Laravel & Vue.js. Toamasina, Madagascar — disponible en remote.",
        },
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Eugène Jonathan MANGUITHRE',
            jobTitle: 'Développeur Full Stack',
            knowsAbout: [
                'Laravel',
                'Vue.js',
                'TypeScript',
                'PostgreSQL',
                'API REST',
                'CI/CD',
            ],
            email: 'mailto:eugene.manguithre@gmail.com',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toamasina',
                addressCountry: 'MG',
            },
        },
    },
} satisfies Content;
