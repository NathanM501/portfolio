import { content } from '@/data/content';
import type { Section } from '@/types/content';

export type ResolvedSection = Section & { note?: string };

const computedNotes: Record<string, string> = {
    services: `${content.services.length} services`,
    projects: `${content.projects.length} dossiers`,
    skills: `${content.skills.rows.length} dossiers`,
    contact: content.ui.contactNote,
};

export const sections: ResolvedSection[] = content.sections.map(
    (s: Section): ResolvedSection => ({
        ...s,
        note: computedNotes[s.id] ?? s.note,
    }),
);

export const sectionIds = sections.map((s: Section): string => s.id);

export const navbarLinks = sections.filter(
    (s: Section): boolean => s.showInNavbar,
);

export const paletteSections = sections.filter(
    (s: Section): boolean => s.showInPalette,
);

export const getSection = (id: string): ResolvedSection =>
    sections.find((s: Section): boolean => s.id === id)!;
