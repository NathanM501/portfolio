import { content } from './content';

export const { profile, services, projects, career, skills, ui, seo } = content;

export const skillRows = skills.rows;

export const fullName = `${profile.firstName} ${profile.lastName}`;

export const nameSlug = fullName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const availabilityLower = profile.availability.toLowerCase();
