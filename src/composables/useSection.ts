import { getSection, type ResolvedSection } from '@/utils/sections';

export const useSection = (id: string): ResolvedSection => getSection(id);
