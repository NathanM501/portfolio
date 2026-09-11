<template>
    <section id="services" data-section class="scroll-mt-20 py-20 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    path="services/"
                    title="Ce que je fais"
                    note="4 services" />
            </Reveal>

            <div>
                <Reveal
                    v-for="(s, i) in services"
                    :key="s.path"
                    :delay="i * 60">
                    <article
                        class="-mx-3 grid gap-x-6 gap-y-3 rounded-lg border-t border-line px-3 py-7 transition-colors hover:bg-mist-300/70 dark:border-line-dark dark:hover:bg-ink-800/40 md:grid-cols-12 md:gap-y-0">
                        <div class="md:col-span-4">
                            <p
                                class="font-mono text-[12px] text-primary dark:text-primary-light">
                                {{ s.path }}
                            </p>
                            <h3
                                class="mt-2.5 text-lg font-semibold leading-snug">
                                {{ s.title }}
                            </h3>
                        </div>
                        <p
                            class="text-[14.5px] leading-relaxed text-ink-400 dark:text-term-dim md:col-span-6">
                            {{ s.desc }}
                        </p>
                        <p
                            class="font-mono text-[11px] text-ink-400/70 dark:text-term-dim/60 md:col-span-2 md:text-right">
                            {{ s.stack }}
                        </p>
                    </article>
                </Reveal>
                <div class="border-t border-line dark:border-line-dark" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { services } from '../data/profile';
</script>
