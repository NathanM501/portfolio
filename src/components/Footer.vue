<template>
    <footer class="border-t border-line dark:border-line-dark">
        <div
            class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 pb-14 font-mono text-[11px] text-ink-400 dark:text-term-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <span>
                © {{ year }} {{ nameSlug }} — {{ ui.footerTechnologies }}
            </span>
            <span>
                -- fin du fichier ·
                <a
                    href="#accueil"
                    class="text-primary hover:underline dark:text-primary-light">
                    haut de page ↑
                </a>
            </span>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { nameSlug, ui } from '@/data';

    const year = new Date().getFullYear();
</script>
