import type { Content } from '@/types/content';

const siteUrl = 'https://eugene-manguithre.vercel.app/';

const githubUrl = 'https://github.com/NathanM501/portfolio';

export const content = {
    profile: {
        firstName: 'Eugène Jonathan',
        lastName: 'MANGUITHRE',
        role: 'Développeur Full Stack',
        tagline: 'Laravel & Vue.js',
        pitch: "Je conçois des applications web de bout en bout — back-end Laravel, front-end Vue.js/Nuxt. Autodidacte et rigoureux, je m'implique à chaque étape du développement, de l'architecture à l'intégration. Je suis ouvert au télétravail ou à un poste sur site à Madagascar.",
        location: 'Toamasina, Madagascar',
        timezone: 'Indian/Antananarivo',
        tzDisplay: 'UTC+3',
        experienceYears: 3.5,
        stack: [
            'Laravel',
            'Vue 3',
            'Nuxt',
            'TypeScript',
            'Tailwind CSS',
            'Pest',
        ],
        availability:
            'Ouvert au télétravail ou à un poste sur site à Madagascar',
        email: 'eugene.manguithre@gmail.com',
        phone: '+261 34 06 938 23',
        cvUrl: '/resume.pdf',
        github: {
            url: githubUrl,
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
            desc: 'Laravel en profondeur : Eloquent, middleware, events & queues, authentification multi-rôles avec Sanctum/Passport et OAuth, PostgreSQL et MySQL, génération de PDF, tests avec Pest.',
        },
        {
            path: 'frontend/',
            title: 'Développement front-end',
            stack: 'vue 3 · inertia · tailwind',
            desc: 'Vue.js 3 en Composition API avec Vue Router et Pinia, applications full-stack avec Inertia.js, Nuxt pour les projets SSR/multi-sites, PrimeVue, Tailwind CSS, TypeScript pour un code qui tient dans le temps.',
        },
        {
            path: 'api/',
            title: 'Intégrations & API',
            stack: 'rest · oauth · spatie',
            desc: "Conception d'APIs REST sécurisées, intégration d'APIs tierces, stockage de fichiers avec Spatie et Cloudinary, emails transactionnels via Resend et Laravel.",
        },
        {
            path: 'qualite/',
            title: 'Qualité & bonnes pratiques',
            stack: 'pest · revue de code',
            desc: 'Tests automatisés avec Pest, revue de code, respect des principes SRP/DRY, code structuré et documenté pour rester maintenable dans le temps.',
        },
        {
            path: 'metier/',
            title: 'Solutions métier',
            stack: 'gestion rh · e-commerce',
            desc: 'Applications métier complexes : gestion RH avec paie et pointage biométrique, plateformes e-commerce B2B multi-pays.',
        },
    ],

    // Client projects = confidential: no screenshots (NDA).
    projects: [
        {
            id: 1,
            title: 'RHManager — gestion RH agricole',
            client: 'SANDLAND · Toamasina',
            period: 'Mai. 2026 — Juillet 2026',
            desc: 'Application de gestion RH pour campagnes agricoles : pointage biométrique (terminaux Hikvision), calcul de paie, contrats et bulletins de paie en PDF, suivi de présence en temps réel.',
            tags: ['Full Stack', 'Back-end'],
            tech: ['Laravel', 'Inertia.js', 'Vue 3', 'PrimeVue', 'Tailwind'],
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
            title: 'Mitao Forecast',
            client: 'Espace Filtre · Stage',
            period: 'Sept. — Nov. 2023',
            desc: "Application web de prévision météo destinée aux pêcheurs : API météo, prévisions et conseils de navigation, développée avec l'équipe de dev d'Espace Filtre en Laravel 10 et Vue.js 3.",
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
                id: 'sandland',
                period: 'Oct. 2024 — Août 2026',
                title: 'Développeur Full Stack (Laravel & Vue.js)',
                place: 'SANDLAND · Toamasina, MG',
                points: [
                    'Développement de RHManager : gestion RH pour campagnes agricoles',
                    'Pointage biométrique, calcul de paie, génération de contrats et bulletins PDF',
                    'Suivi de présence en temps réel via WebSockets (Laravel Reverb)',
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
                    { name: 'Pest', level: 75 },
                ],
            },
            {
                group: 'frontend/',
                items: [
                    { name: 'Vue 3 — Composition API', level: 90 },
                    { name: 'Inertia.js · Nuxt', level: 85 },
                    { name: 'Vue Router · Pinia', level: 85 },
                    { name: 'Tailwind CSS', level: 84 },
                    { name: 'TypeScript', level: 80 },
                ],
            },
            {
                group: 'outils/',
                items: [
                    { name: 'Git', level: 86 },
                    { name: 'Cloudinary · Spatie', level: 76 },
                    { name: 'Resend · Laravel', level: 70 },
                ],
            },
        ],
    },

    ui: {
        contactHeading: 'Un projet, un poste,\nune question ?',
        contactIntro:
            'Écris-moi — je réponds vite. Je suis ouvert au télétravail comme aux opportunités sur site à Madagascar.',
        contactNote: 'réponse en moins de 24 h',
        projectsNote: '# projets clients — captures confidentielles (NDA)',
        skillsDescription: 'full stack — laravel & vue 3',
        skillsDependencies:
            'laravel ^11 · vue ^3.5 · typescript ^5 · tailwind ^4',
        footerTechnologies: 'vue 3 · vite · tailwind 4',
    },

    seo: {
        siteUrl,
        title:
            'Eugène Jonathan MANGUITHRE | Développeur Full Stack Laravel & Vue.js',
        description:
            "Eugène Jonathan MANGUITHRE est un développeur full stack spécialisé dans le développement d'applications web avec Laravel et Vue.js. Basé à Toamasina (Madagascar), ouvert au télétravail et aux opportunités sur site.",
        keywords: [
            'Eugène Jonathan Manguithre',
            'développeur full stack',
            'Laravel',
            'Vue.js',
            'PHP',
            'JavaScript',
            'TypeScript',
            'Tailwind',
            'HTML',
            'CSS',
        ],
        author: 'Eugène Jonathan Manguithre',
        themeColor: '#14161b',
        canonicalPath: '',
        openGraph: {
            type: 'website',
            url: siteUrl,
            title: 'Eugène Jonathan MANGUITHRE — Développeur Full Stack',
            description:
                "Portfolio d'Eugène Jonathan MANGUITHRE — Laravel, Vue.js, TypeScript. Toamasina, Madagascar.",
            image: 'og-cover.png',
            imageAlt:
                'Portfolio d’Eugène Jonathan MANGUITHRE, développeur Full Stack Laravel et Vue.js',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Eugène Jonathan MANGUITHRE — Développeur Full Stack',
            description:
                "Portfolio d'Eugène Jonathan MANGUITHRE — Laravel, Vue.js, TypeScript. Toamasina, Madagascar.",
            image: 'og-cover.png',
            imageAlt:
                'Portfolio d’Eugène Jonathan MANGUITHRE, développeur Full Stack Laravel et Vue.js',
        },
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Eugène Jonathan MANGUITHRE',
            jobTitle: 'Développeur Full Stack',
            knowsAbout: [
                'Laravel',
                'Vue.js',
                'Inertia.js',
                'TypeScript',
                'PostgreSQL',
                'API REST',
            ],
            email: 'mailto:eugene.manguithre@gmail.com',
            url: siteUrl,
            sameAs: [githubUrl],
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toamasina',
                addressCountry: 'MG',
            },
        },
    },
} satisfies Content;
