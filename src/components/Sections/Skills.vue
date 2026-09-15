<template>
    <section id="skills" data-section class="scroll-mt-20 py-20 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    :path="section.path"
                    :title="section.title"
                    :note="section.note" />
            </Reveal>

            <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
                <div class="space-y-9 lg:col-span-7">
                    <Reveal v-for="g in skillRows" :key="g.group">
                        <div>
                            <p
                                class="mb-3 font-mono text-[11.5px] text-ink-400 dark:text-term-dim"
                                v-text="g.group" />

                            <div
                                class="divide-y divide-line border-y border-line dark:divide-line-dark dark:border-line-dark">
                                <div
                                    v-for="it in g.items"
                                    :key="it.name"
                                    class="grid grid-cols-[minmax(110px,1.3fr)_2fr] items-center gap-x-5 py-3 sm:grid-cols-[190px_1fr_44px]">
                                    <span
                                        class="font-mono text-[13px]"
                                        v-text="it.name" />
                                    <span
                                        class="block h-[6px] overflow-hidden rounded-full bg-line dark:bg-line-dark">
                                        <span
                                            class="meter block text-primary dark:text-primary-light"
                                            :style="{ '--w': `${it.level}%` }"
                                            :aria-label="`${it.name} : ${it.level} sur 100`" />
                                    </span>
                                    <span
                                        class="hidden font-mono text-[11px] text-ink-400 tabular-nums dark:text-term-dim sm:block sm:text-right"
                                        v-text="it.level" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

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
                                    <dd v-text="nameSlug" />
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">version</dt>
                                    <dd>
                                        {{ profile.experienceYears }}.0.0 —
                                        {{ profile.experienceYears }} ans
                                        d'expérience
                                    </dd>
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">description</dt>
                                    <dd v-text="ui.skillsDescription" />
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">dependencies</dt>
                                    <dd v-text="ui.skillsDependencies" />
                                </div>
                                <div class="grid grid-cols-[86px_1fr] gap-x-3">
                                    <dt class="text-term-dim">dispo</dt>
                                    <dd>
                                        <span class="text-accent-light">●</span>
                                        {{ profile.availabilityShort }}
                                    </dd>
                                </div>
                                <div class="grid grid-cols-[118px_1fr] gap-x-3">
                                    <dt class="text-term-dim">email</dt>
                                    <dd
                                        class="break-all text-primary-light"
                                        v-text="profile.email" />
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
    import { nameSlug, profile, skillRows, ui } from '@/data';

    const section = useSection('skills');
</script>
