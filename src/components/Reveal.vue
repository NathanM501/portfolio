<template>
    <div
        ref="el"
        :class="['reveal', visible && 'revealed']"
        :style="{ transitionDelay: `${props.delay}ms` }">
        <slot />
    </div>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 });

    const el = ref<HTMLElement | null>(null);
    const visible = ref(false);

    onMounted(() => {
        // VueUse : observer auto-détruit au démontage du composant.
        const observer = useIntersectionObserver(
            el,
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible.value = true;
                    observer.stop();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );
    });
</script>
