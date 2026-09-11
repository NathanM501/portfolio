<template>
    <div class="mb-10 sm:mb-12">
        <p class="font-mono text-[12px] text-ink-400 dark:text-term-dim">
            {{ path }}
        </p>
        <div
            class="mt-3 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2
                class="text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-tight">
                {{ title }}
            </h2>
            <p
                v-if="note"
                class="font-mono text-[11px] text-ink-400 dark:text-term-dim">
                {{ note }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        /** Chemin affiché en mono au-dessus du titre (ex: `services/`) */
        path: string;
        title: string;
        note?: string;
    }>();
</script>
