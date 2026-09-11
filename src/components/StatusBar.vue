<template>
    <div
        class="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-mist-300/95 backdrop-blur dark:border-line-dark dark:bg-term-bg/95">
        <div
            class="absolute left-0 top-[-1px] h-[2px] bg-primary dark:bg-primary-light"
            :style="{ width: `${progress * 100}%` }"
            aria-hidden="true" />

        <div
            class="mx-auto flex h-7 items-center gap-4 px-4 font-mono text-[10.5px] text-ink-400 dark:text-term-dim sm:px-6">
            <span class="flex items-center gap-1.5">
                <span
                    class="h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-light"
                    aria-hidden="true" />
                eugene@manguithre
            </span>
            <span class="hidden sm:inline">
                · {{ labels[current] || current }}
            </span>
            <span class="hidden md:inline">main</span>
            <span class="ml-auto tabular-nums" v-text="time" />
            <span class="hidden items-center gap-1 sm:flex">
                Ctrl+K
                <span class="opacity-60">palette</span>
            </span>
            <span class="hidden lg:inline">utf-8</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { time } = useClock(true);
    const { current } = useActiveSection();
    const { y } = useScroll(window);

    const progress = computed<number>(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;

        return max > 0 ? Math.min(1, y.value / max) : 0;
    });

    const labels: Record<string, string> = Object.fromEntries(
        sections.map((s) => [s.id, s.id === 'accueil' ? '~' : s.label]),
    );
</script>
