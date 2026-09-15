<template>
    <section id="resume" data-section class="scroll-mt-20 py-20 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    :path="section.path"
                    :title="section.title"
                    :note="section.note" />
            </Reveal>

            <Reveal>
                <p
                    class="mb-2 font-mono text-[11.5px] text-primary dark:text-primary-light">
                    experience/
                </p>
                <div>
                    <Reveal
                        v-for="(e, i) in career.experience"
                        :key="e.id"
                        :delay="i * 50">
                        <TimelineEntry :entry="e" />
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
                            v-for="(e, i) in career.education"
                            :key="e.id"
                            :delay="i * 50">
                            <TimelineEntry :entry="e" />
                        </Reveal>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { career } from '@/data';

    const section = useSection('resume');
</script>
