export interface Profile {
    firstName: string;
    lastName: string;
    role: string;
    tagline: string;
    pitch: string;
    location: string;
    timezone: string;
    tzDisplay: string;
    experienceYears: number;
    stack: string[];
    availability: string;
    availabilityShort: string;
    email: string;
    phone: string;
    phoneHref: string;
    whatsapp: {
        url: string;
        display: string;
    };
    cvUrl: string;
    github: {
        url: string;
        display: string;
    };
}

export interface Section {
    id: string;
    label: string;
    path: string;
    title: string;
    note?: string;
    showInNavbar: boolean;
    showInPalette: boolean;
}

export interface Service {
    path: string;
    title: string;
    stack: string;
    desc: string;
}

export interface Project {
    id: number;
    title: string;
    client: string;
    period: string;
    desc: string;
    tags: string[];
    tech: string[];
}

export interface CareerEntry {
    id: string;
    period: string;
    title: string;
    place: string;
    points?: string[];
    note?: string;
}

export interface SkillRow {
    group: string;
    items: { name: string; level: number }[];
}

export interface Ui {
    contactHeading: string;
    contactIntro: string;
    contactBadge: string;
    contactBadgeNote: string;
    contactNote: string;
    projectsNote: string;
    skillsDescription: string;
    skillsDependencies: string;
    footerTechnologies: string;
}

export interface JsonLd {
    '@context': string;
    '@type': string;
    name: string;
    jobTitle: string;
    knowsAbout: string[];
    email: string;
    url: string;
    sameAs: string[];
    address: {
        '@type': string;
        addressLocality: string;
        addressCountry: string;
    };
}

export interface OpenGraph {
    type: 'website' | 'article';
    url: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
}

export interface Twitter {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image: string;
    imageAlt: string;
}

export interface Seo {
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
    author: string;
    themeColor: string;
    canonicalPath: string;
    openGraph: OpenGraph;
    twitter: Twitter;
    jsonLd: JsonLd;
}

export interface Content {
    profile: Profile;
    sections: Section[];
    services: Service[];
    projects: Project[];
    career: { experience: CareerEntry[]; education: CareerEntry[] };
    skills: { rows: SkillRow[] };
    ui: Ui;
    seo: Seo;
}
