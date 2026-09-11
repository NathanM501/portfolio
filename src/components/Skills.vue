<template>
    <section id="skills" data-section class="scroll-mt-20 py-20 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    path="stack/"
                    title="Stack technique"
                    note="3 dossiers" />
            </Reveal>

            <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
                <!-- Barres segmentées -->
                <div class="space-y-9 lg:col-span-7">
                    <Reveal v-for="g in skillRows" :key="g.group">
                        <div>
                            <p
                                class="mb-3 font-mono text-[11.5px] text-ink-400 dark:text-term-dim">
                                {{ g.group }}
                            </p>
                            <div
                                class="divide-y divide-line border-y border-line dark:divide-line-dark dark:border-line-dark">
                                <div
                                    v-for="it in g.items"
                                    :key="it.name"
                                    class="grid grid-cols-[minmax(110px,1.3fr)_2fr] items-center gap-x-5 py-3 sm:grid-cols-[190px_1fr_44px]">
                                    <span class="font-mono text-[13px]">
                                        {{ it.name }}
                                    </span>
                                    <span
                                        class="block h-[6px] overflow-hidden rounded-full bg-line dark:bg-line-dark">
                                        <span
                                            class="meter block text-primary dark:text-primary-light"
                                            :style="{ '--w': `${it.level}%` }"
                                            :aria-label="`${it.name} : ${it.level} sur 100`" />
                                    </span>
                                    <span
                                        class="hidden font-mono text-[11px] text-ink-400 tabular-nums dark:text-term-dim sm:block sm:text-right">
                                        {{ it.level }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <!-- package.json (fenêtre d'éditeur, toujours sombre) -->
                <aside class="lg:col-span-5">
                    <Reveal :delay="120">
                        <div class="term">
                            <div
                                class="flex items-center gap-2 border-b border-term-line px-4 py-2.5">
                                <span
                                    class="h-2.5 w-2.5 rounded-full bg-primary" />
                                <span
                                    class="h-2.5 w-2.5 rounded-full bg-accent" />
                                <span
                                    class="h-2.5 w-2.5 rounded-full bg-term-line" />
                                <span
                                    class="ml-3 font-mono text-[11px] text-term-dim">
                                    package.json
                                </span>
                            </div>
                            <dl
                                class="px-5 py-4 font-mono text-[12.5px] leading-[2.3] text-term-text">
                                <div class="grid grid-cols-[86px_1fr] gap-x-3">
                                    <dt class="text-term-dim">name</dt>
                                    <dd>eugene-manguithre</dd>
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">version</dt>
                                    <dd>2.0.0 — 2 ans d'expérience</dd>
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">description</dt>
                                    <dd>full stack — laravel & vue 3</dd>
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">dependencies</dt>
                                    <dd>
                                        laravel ^11 · vue ^3.5 · typescript ^5 ·
                                        tailwind ^4
                                    </dd>
                                </div>
                                <div class="grid grid-cols-[86px_1fr] gap-x-3">
                                    <dt class="text-term-dim">dispo</dt>
                                    <dd>
                                        <span class="text-accent-light">●</span>
                                        télétravail francophone · ouvert sur
                                        site
                                    </dd>
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">email</dt>
                                    <dd class="break-all text-primary-light">
                                        {{ profile.email }}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </Reveal>
                </aside>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { profile, skillRows } from '../data/profile';
</script>
