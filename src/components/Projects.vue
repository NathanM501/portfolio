<template>
    <section
        id="projects"
        data-section
        class="scroll-mt-20 border-y border-line bg-mist-300/50 py-20 dark:border-line-dark dark:bg-ink-800/25 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    path="projets/"
                    title="Projets"
                    note="4 dossiers" />
            </Reveal>

            <div>
                <Reveal v-for="p in projects" :key="p.id">
                    <article
                        class="group border-t border-line py-7 dark:border-line-dark">
                        <div
                            class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <span
                                class="font-mono text-[12px] text-accent dark:text-accent-light"
                                aria-hidden="true">
                                ●
                            </span>
                            <span
                                class="font-mono text-[12px] text-primary dark:text-primary-light">
                                {{ hashOf(p.title) }}
                            </span>
                            <h3
                                class="text-lg font-semibold transition-colors group-hover:text-primary dark:group-hover:text-primary-light">
                                {{ p.title }}
                            </h3>
                            <span
                                class="ml-auto font-mono text-[11px] text-ink-400 dark:text-term-dim">
                                {{ p.period }}
                            </span>
                        </div>
                        <p
                            class="mt-2.5 max-w-3xl text-[14.5px] leading-relaxed text-ink-400 dark:text-term-dim">
                            {{ p.desc }}
                        </p>
                        <div class="mt-3.5 flex flex-wrap items-center gap-2">
                            <span
                                v-for="t in p.tech"
                                :key="t"
                                class="rounded-md border border-line px-2 py-0.5 font-mono text-[10.5px] text-ink-400 dark:border-line-dark dark:text-term-dim">
                                {{ t }}
                            </span>
                            <span
                                class="ml-auto font-mono text-[11px] text-ink-400/70 dark:text-term-dim/60">
                                {{ p.client }}
                            </span>
                        </div>
                    </article>
                </Reveal>
                <div class="border-t border-line dark:border-line-dark" />
            </div>

            <p
                class="mt-8 font-mono text-[11px] text-ink-400/70 dark:text-term-dim/60">
                # projets clients — captures confidentielles (NDA)
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { projects } from '../data/profile';

    const hashOf = (s: string): string => {
        let h = 2166136261;

        for (let i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }

        return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7);
    };
</script>
