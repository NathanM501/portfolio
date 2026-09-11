import { sectionIds } from '@/utils/sections';

export const useActiveSection = (): { current: Ref<string> } => {
    const current = ref<string>('accueil');

    onMounted((): void => {
        nextTick((): void => {
            const els = sectionIds
                .map((id) => document.getElementById(id))
                .filter((el): el is HTMLElement => !!el);

            useIntersectionObserver(
                els,
                (entries: IntersectionObserverEntry[]): void => {
                    for (const e of entries) {
                        if (e.isIntersecting)
                            current.value = (e.target as HTMLElement).id;
                    }
                },
                { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
            );
        });
    });

    return { current };
};
