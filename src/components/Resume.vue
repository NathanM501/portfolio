<template>
    <section id="resume" data-section class="scroll-mt-20 py-20 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    path="parcours/"
                    title="Parcours"
                    note="2021 → 2026" />
            </Reveal>

            <Reveal>
                <p
                    class="mb-2 font-mono text-[11.5px] text-primary dark:text-primary-light">
                    experience/
                </p>
                <div>
                    <Reveal
                        v-for="(e, i) in experience"
                        :key="i"
                        :delay="i * 50">
                        <article
                            class="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-6 dark:border-line-dark">
                            <span
                                class="font-mono text-[11.5px] leading-relaxed text-primary dark:text-primary-light md:col-span-3">
                                {{ e.period }}
                            </span>
                            <div class="md:col-span-9">
                                <h3 class="text-[15px] font-semibold">
                                    {{ e.title }}
                                    <span
                                        class="font-normal text-ink-400 dark:text-term-dim">
                                        — {{ e.place }}
                                    </span>
                                </h3>
                                <ul class="mt-2 space-y-1.5">
                                    <li
                                        v-for="pt in e.points"
                                        :key="pt"
                                        class="flex gap-2.5 text-[14px] leading-relaxed text-ink-400 dark:text-term-dim">
                                        <span
                                            class="mt-px font-mono text-accent dark:text-accent-light"
                                            aria-hidden="true">
                                            ›
                                        </span>
                                        {{ pt }}
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </Reveal>
                    <div class="border-t border-line dark:border-line-dark" />
                </div>
            </Reveal>

            <div class="mt-12">
                <Reveal>
                    <p
                        class="mb-2 font-mono text-[11.5px] text-primary dark:text-primary-light">
                        formation/
                    </p>
                    <div>
                        <Reveal
                            v-for="(e, i) in education"
                            :key="i"
                            :delay="i * 50">
                            <article
                                class="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-6 dark:border-line-dark">
                                <span
                                    class="font-mono text-[11.5px] leading-relaxed text-primary dark:text-primary-light md:col-span-3">
                                    {{ e.period }}
                                </span>
                                <div class="md:col-span-9">
                                    <h3 class="text-[15px] font-semibold">
                                        {{ e.title }}
                                        <span
                                            class="font-normal text-ink-400 dark:text-term-dim">
                                            — {{ e.place }}
                                        </span>
                                    </h3>
                                    <p
                                        class="mt-1.5 flex gap-2.5 text-[14px] leading-relaxed text-ink-400 dark:text-term-dim">
                                        <span
                                            class="mt-px font-mono text-accent dark:text-accent-light"
                                            aria-hidden="true">
                                            ›
                                        </span>
                                        {{ e.note }}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                        <div
                            class="border-t border-line dark:border-line-dark" />
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { experience, education } from '../data/profile';
</script>
