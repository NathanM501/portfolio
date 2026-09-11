<template>
    <header
        class="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
        :class="
            scrolled
                ? 'border-line bg-mist-300/90 backdrop-blur-md dark:border-line-dark dark:bg-ink-900/85'
                : 'border-transparent bg-transparent'
        ">
        <div
            class="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
            <a
                href="#accueil"
                class="font-mono text-[13px] tracking-tight"
                aria-label="Retour en haut">
                <span class="text-ink-400 dark:text-term-dim">
                    eugene.manguithre
                </span>
                <span class="blink text-primary dark:text-primary-light">
                    ▮
                </span>
            </a>

            <nav
                class="ml-auto hidden items-center gap-5 md:flex"
                aria-label="Navigation principale">
                <a
                    v-for="l in links"
                    :key="l.id"
                    :href="`#${l.id}`"
                    class="font-mono text-[12.5px] transition-colors"
                    :class="
                        current === l.id
                            ? 'text-primary dark:text-primary-light'
                            : 'text-ink-400 hover:text-ink-900 dark:text-term-dim dark:hover:text-mist-100'
                    ">
                    <span v-if="current === l.id" class="mr-1">▸</span>
                    {{ l.label }}
                </a>
            </nav>

            <span
                class="hidden font-mono text-[12px] tabular-nums text-ink-400 dark:text-term-dim xl:inline">
                {{ time }} · UTC+3
            </span>

            <button
                type="button"
                class="font-mono text-[12px] text-ink-400 transition-colors hover:text-ink-900 dark:text-term-dim dark:hover:text-mist-100"
                :aria-label="
                    dark ? 'Passer en mode clair' : 'Passer en mode sombre'
                "
                @click="toggle">
                [ {{ dark ? 'dark' : 'light' }} ]
            </button>

            <a
                href="#contact"
                class="hidden rounded-lg border border-primary/50 px-3.5 py-1.5 font-mono text-[12.5px] text-primary transition-colors hover:bg-primary hover:text-white dark:border-primary-light/60 dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-ink-900 sm:inline-block">
                Me recruter
            </a>

            <button
                type="button"
                class="ml-auto font-mono text-lg leading-none md:hidden"
                aria-label="Menu"
                aria-expanded="false"
                @click="open = !open">
                {{ open ? '×' : '≡' }}
            </button>
        </div>

        <div
            v-if="open"
            class="border-t border-line bg-mist-300 dark:border-line-dark dark:bg-ink-900 md:hidden">
            <nav
                class="mx-auto max-w-6xl space-y-1 px-4 py-3"
                aria-label="Navigation mobile">
                <a
                    v-for="l in links"
                    :key="l.id"
                    :href="`#${l.id}`"
                    class="block rounded-md px-2 py-2 font-mono text-[13px] text-ink-400 transition-colors hover:text-ink-900 dark:text-term-dim dark:hover:text-mist-100"
                    :class="
                        current === l.id
                            ? 'text-primary dark:text-primary-light'
                            : ''
                    "
                    @click="open = false">
                    → {{ l.label }}
                </a>
                <a
                    href="#contact"
                    class="block rounded-md px-2 py-2 font-mono text-[13px] text-primary dark:text-primary-light"
                    @click="open = false">
                    → Me recruter
                </a>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
    const { dark, toggle } = useTheme();
    const { time } = useClock();
    const { current } = useActiveSection();
    const { y } = useScroll(window);

    const open = ref<boolean>(false);
    const scrolled = computed<boolean>(() => y.value > 12);

    const links = [
        { id: 'services', label: 'services' },
        { id: 'projects', label: 'projets' },
        { id: 'resume', label: 'parcours' },
        { id: 'skills', label: 'stack' },
        { id: 'contact', label: 'contact' },
    ];
</script>
