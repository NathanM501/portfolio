<template>
    <section id="services" data-section class="scroll-mt-20 py-20 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    :path="section.path"
                    :title="section.title"
                    :note="section.note" />
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
                                class="font-mono text-[12px] text-primary dark:text-primary-light"
                                v-text="s.path" />

                            <h3
                                class="mt-2.5 text-lg font-semibold leading-snug"
                                v-text="s.title" />
                        </div>
                        <p
                            class="text-[14.5px] leading-relaxed text-ink-400 dark:text-term-dim md:col-span-6"
                            v-text="s.desc" />
                        <p
                            class="font-mono text-[11px] text-ink-400/70 dark:text-term-dim/60 md:col-span-2 md:text-right"
                            v-text="s.stack" />
                    </article>
                </Reveal>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { services } from '@/data';

    const section = useSection('services');
</script>
