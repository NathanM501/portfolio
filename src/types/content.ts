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
    email: string;
    phone: string;
    cvUrl: string;
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
    contactNote: string;
    projectsNote: string;
    skillsDescription: string;
    skillsDependencies: string;
    footerTechnologies: string;
}

export interface Seo {
    title: string;
    description: string;
    openGraph: { title: string; description: string };
    jsonLd: Record<string, unknown>;
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
