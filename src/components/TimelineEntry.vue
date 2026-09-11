<template>
    <article
        class="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-6 dark:border-line-dark">
        <span
            class="font-mono text-[11.5px] leading-relaxed text-primary dark:text-primary-light md:col-span-3"
            v-text="entry.period" />

        <div class="md:col-span-9">
            <h3 class="text-[15px] font-semibold">
                {{ entry.title }}
                <span class="font-normal text-ink-400 dark:text-term-dim">
                    — {{ entry.place }}
                </span>
            </h3>

            <ul v-if="entry.points?.length" class="mt-2 space-y-1.5">
                <li
                    v-for="pt in entry.points"
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
            <p
                v-else-if="entry.note"
                class="mt-1.5 flex gap-2.5 text-[14px] leading-relaxed text-ink-400 dark:text-term-dim">
                <span
                    class="mt-px font-mono text-accent dark:text-accent-light"
                    aria-hidden="true">
                    ›
                </span>
                {{ entry.note }}
            </p>
        </div>
    </article>
</template>

<script setup lang="ts">
    import type { CareerEntry } from '@/types/content';

    defineProps<{
        entry: CareerEntry;
    }>();
</script>
