export const SECTION_IDS: string[] = [
    'accueil',
    'services',
    'projects',
    'resume',
    'skills',
    'contact',
];

export const useActiveSection = (): { current: Ref<string> } => {
    const current = ref<string>('accueil');

    onMounted((): void => {
        nextTick((): void => {
            const els = SECTION_IDS.map((id) =>
                document.getElementById(id),
            ).filter((el): el is HTMLElement => !!el);

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
