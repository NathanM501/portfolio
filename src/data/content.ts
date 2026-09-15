import type { Content } from '@/types/content';

const siteUrl = 'https://eugene-manguithre.vercel.app/';

const githubUrl = 'https://github.com/NathanM501/portfolio';

export const content = {
    profile: {
        firstName: 'Eugène Jonathan',
        lastName: 'MANGUITHRE',
        role: 'Développeur Full Stack',
        tagline: 'Laravel & Vue.js',
        pitch: "Je conçois des applications web de bout en bout pour mes clients — back-end Laravel, front-end Vue.js/Nuxt. Autodidacte et rigoureux, je m'implique à chaque étape du développement, de l'architecture à l'intégration. Full remote pour Espace Filtre depuis plus de 3 ans, j'accompagne des clients freelance et je suis ouvert à un poste à plein temps — en télétravail ou sur site à Madagascar.",
        location: 'Toamasina, Madagascar',
        timezone: 'Indian/Antananarivo',
        tzDisplay: 'UTC+3',
        experienceYears: 3.5,
        stack: [
            'Laravel',
            'Vue 3',
            'Inertia.js',
            'Nuxt',
            'TypeScript',
            'Tailwind CSS',
            'Pest',
        ],
        availability:
            'Disponible immédiatement — missions freelance ou poste à plein temps',
        availabilityShort: 'dispo immédiate',
        email: 'eugene.manguithre@gmail.com',
        phone: '+261 34 06 938 23',
        phoneHref: 'tel:+261340693823',
        whatsapp: {
            url: 'https://wa.me/261340693823?text=' +
                encodeURIComponent(
                    "Bonjour Eugène, j'ai un projet et j'aimerais en discuter avec vous.",
                ),
            display: 'WhatsApp',
        },
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
            desc: "Conception d'APIs REST sécurisées, intégration d'APIs tierces, stockage de fichiers avec Spatie et Cloudinary, emails transactionnels via Resend et les notifications Laravel.",
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
            period: 'Mai — Août 2026',
            desc: 'Application de gestion RH pour campagnes agricoles : pointage biométrique (terminaux Hikvision), calcul de paie, contrats et bulletins de paie en PDF, suivi de présence en temps réel.',
            tags: ['Full Stack', 'Back-end'],
            tech: ['Laravel 13', 'Inertia.js', 'Vue 3', 'PrimeVue v4'],
        },
        {
            id: 2,
            title: 'App Mariage — plateforme de mariage',
            client: 'SANDLAND · Toamasina',
            period: 'Oct. 2024 — Avr. 2026',
            desc: "Plateforme de mariage multi-sites avec partage d'hébergement entre sites parent-enfant.",
            tags: ['Full Stack'],
            tech: ['Laravel 11', 'Inertia.js', 'Vue 3', 'PrimeVue'],
        },
        {
            id: 3,
            title: 'Logiko — application de livraison',
            client: 'Espace Filtre · Toamasina',
            period: 'Juin 2025 — Mars 2026',
            desc: 'Application web de livraison/transport : le client fait une demande de transport, avec système de géolocalisation GPS. Réalisée en parallèle de la refonte Espace Filtre, admin en Laravel/Vue et interface client en Nuxt.',
            tags: ['Full Stack'],
            tech: ['Laravel 12', 'Vue 3', 'Nuxt 3'],
        },
        {
            id: 4,
            title: 'Lokonaka — upgrade site de peinture',
            client: 'Espace Filtre · Toamasina',
            period: 'Juil. 2024',
            desc: "Migration d'un site de peinture (choix de couleur appliqué automatiquement sur l'aperçu d'une maison) de Vue 2/Laravel 5-6 vers Laravel 10 et Vue.js 3, avec ajout d'un backoffice CRUD pour la gestion des couleurs. Projet réalisé en solo.",
            tags: ['Full Stack', 'Back-end'],
            tech: ['Laravel 10', 'Vue 3'],
        },
        {
            id: 5,
            title: 'Refonte applicative Espace Filtre',
            client: 'Espace Filtre · Toamasina',
            period: 'Depuis mars 2024',
            desc: "Refonte complète de l'application interne de l'entreprise : back-end Laravel et front-end Vue.js 3, puis évolution vers une plateforme e-commerce B2B multi-pays en Nuxt côté client (depuis mai 2026).",
            tags: ['Full Stack', 'Back-end'],
            tech: ['Laravel 10', 'Vue 3', 'Nuxt 4'],
        },
        {
            id: 6,
            title: 'Mitao Forecast',
            client: 'Espace Filtre · Stage',
            period: 'Sept. 2023 — Juin 2024',
            desc: "Application web de prévision météo destinée aux pêcheurs : API météo, prévisions et conseils de navigation, développée avec l'équipe de dev d'Espace Filtre en Laravel 10 et Vue.js 3.",
            tags: ['Back-end', 'Front-end'],
            tech: ['Laravel 10', 'Vue 3', 'API REST'],
        },
        {
            id: 7,
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
                id: 'espace-filtre',
                period: "Avr. 2023 — Aujourd'hui",
                title: 'Développeur Full Stack (Laravel & Vue.js)',
                place: 'Espace Filtre · Toamasina, MG',
                points: [
                    'Collaboration à distance débutée en stage (avr. 2023), poursuivie en full remote',
                    "Refonte complète de l'application interne (Laravel + Vue.js 3), évoluée vers une plateforme e-commerce B2B multi-pays en Nuxt",
                    'Logiko : application de livraison avec géolocalisation GPS',
                    "Lokonaka : upgrade solo d'un site de peinture (Vue 2/Laravel 5-6 → Laravel 10/Vue 3) avec ajout d'un backoffice",
                    'Mitao Forecast : application de prévision météo pour pêcheurs',
                    'Gestion de stock & paiements avec factures PDF',
                ],
            },
            {
                id: 'sandland',
                period: 'Oct. 2024 — Août 2026',
                title: 'Développeur — missions freelance',
                place: 'SANDLAND · Toamasina, MG',
                points: [
                    "Missions freelance menées en parallèle du poste chez Espace Filtre, sans rupture d'activité",
                    'App Mariage : plateforme de mariage multi-sites (oct. 2024 — avr. 2026)',
                    'RHManager : gestion RH pour campagnes agricoles, pointage biométrique et paie (mai — août 2026)',
                ],
            },
        ],
        education: [
            {
                id: 'licence-info',
                period: '2023 — 2024',
                title: 'Licence en Informatique — Niveau L3',
                place: 'Université Privée Hay Antananarivo',
            },
            {
                id: 'dts-info',
                period: '2021 — 2023',
                title: 'DTS Informatique — Niveau validé, mémoire non soutenu',
                place: 'Université Privée Hay Antananarivo',
            },
        ],
    },

    skills: {
        rows: [
            {
                group: 'backend/',
                items: [
                    { name: 'Laravel', level: 92 },
                    { name: 'API REST', level: 88 },
                    { name: 'MySQL · PostgreSQL', level: 78 },
                    { name: 'Pest', level: 75 },
                ],
            },
            {
                group: 'frontend/',
                items: [
                    { name: 'Vue 3 — Composition API', level: 90 },
                    { name: 'Inertia.js · Nuxt', level: 82 },
                    { name: 'TypeScript', level: 80 },
                    { name: 'Tailwind CSS · PrimeVue', level: 80 },
                    { name: 'Pinia · Vue Router', level: 78 },
                ],
            },
            {
                group: 'autres/',
                items: [
                    {
                        name: 'Spatie (Permission, ActivityLog, MediaLibrary)',
                        level: 70,
                    },
                    { name: 'DomPDF · Cloudinary · Resend', level: 68 },
                    { name: 'Cypress · ESLint', level: 60 },
                ],
            },
        ],
    },

    ui: {
        contactHeading: 'Un projet, une idée,\nune question ?',
        contactIntro:
            "Décris-moi ton besoin — je réponds vite, avec un devis clair.",
        contactBadge: 'Dispo immédiate',
        contactBadgeNote: 'missions freelance ou poste à plein temps',
        contactNote: 'réponse en moins de 24 h',
        projectsNote: '# projets clients — captures confidentielles (NDA)',
        skillsDescription: 'full stack — laravel & vue 3',
        skillsDependencies:
            'laravel ^13 · vue ^3.5 · typescript ^5 · tailwind ^4',
        footerTechnologies: 'vue 3 · vite · tailwind 4',
    },

    seo: {
        siteUrl,
        title: 'Eugène Jonathan MANGUITHRE | Développeur Full Stack Laravel & Vue.js',
        description:
            "Eugène Jonathan MANGUITHRE est un développeur full stack spécialisé dans le développement d'applications web avec Laravel et Vue.js. Basé à Toamasina (Madagascar), disponible immédiatement pour des missions freelance ou un poste, en full remote ou sur site.",
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
