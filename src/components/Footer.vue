<template>
    <footer class="border-t border-line dark:border-line-dark">
        <div
            class="mx-auto flex max-w-6xl justify-center px-4 py-8 pb-14 font-mono text-[11px] text-ink-400 dark:text-term-dim sm:px-6">
            <span>
                © {{ year }}
                <a
                    :href="profile.github.url"
                    target="_blank"
                    rel="noopener"
                    class="text-ink-400 transition-colors hover:text-primary dark:text-term-dim dark:hover:text-primary-light">
                    {{ profile.github.display }}
                    <span aria-hidden="true">↗</span>
                </a>
            </span>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { profile } from '@/data';

    const year = new Date().getFullYear();
</script>
