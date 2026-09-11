<template>
    <button
        type="button"
        class="fixed bottom-12 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-mist-300/90 font-mono text-sm backdrop-blur transition-all duration-300 hover:border-primary hover:text-primary dark:border-line-dark dark:bg-ink-800/90 dark:hover:border-primary-light dark:hover:text-primary-light sm:right-6"
        :class="
            show
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-3 opacity-0'
        "
        aria-label="Retour en haut"
        @click="toTop">
        ↑
    </button>
</template>

<script setup lang="ts">
    const { y } = useScroll(window);
    const show = computed<boolean>(() => y.value > 600);

    const toTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
