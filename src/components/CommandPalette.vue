<template>
    <Teleport to="body">
        <div
            v-if="open"
            class="fixed inset-0 z-[80] bg-ink-900/50 backdrop-blur-[2px]"
            @click.self="close">
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Palette de commandes"
                class="term mx-auto mt-[12vh] w-[calc(100%-2rem)] max-w-lg overflow-hidden">
                <div
                    class="flex items-center gap-2.5 border-b border-term-line px-4 py-3">
                    <span
                        class="font-mono text-[14px] text-primary-light"
                        aria-hidden="true">
                        ›
                    </span>
                    <input
                        ref="input"
                        v-model="q"
                        type="text"
                        class="flex-1 bg-transparent font-mono text-[13px] text-term-text placeholder:text-term-dim focus:outline-none"
                        placeholder="rechercher une commande…"
                        aria-label="Rechercher une commande" />
                    <kbd class="font-mono text-[10px] text-term-dim">esc</kbd>
                </div>

                <ul class="max-h-72 overflow-y-auto py-1.5">
                    <li
                        v-for="(c, i) in shown"
                        :key="c.id"
                        class="flex cursor-pointer items-center gap-3 px-4 py-2 font-mono text-[12.5px]"
                        :class="
                            i === sel
                                ? 'bg-primary/20 text-term-text'
                                : 'text-term-dim'
                        "
                        @click="run(i)"
                        @mouseenter="sel = i">
                        <span
                            class="w-16 shrink-0 truncate text-[10.5px] opacity-60"
                            v-text="c.hint" />
                        <span class="flex-1 truncate" v-text="c.label" />
                        <span
                            v-if="i === sel"
                            class="text-primary-light"
                            aria-hidden="true">
                            →
                        </span>
                    </li>
                    <li
                        v-if="!shown.length"
                        class="px-4 py-3 font-mono text-[12px] text-term-dim">
                        0 résultat
                    </li>
                </ul>

                <div
                    class="flex gap-4 border-t border-term-line px-4 py-2 font-mono text-[10px] text-term-dim">
                    <span>↑↓ naviguer</span>
                    <span>↵ exécuter</span>
                    <span class="ml-auto">Ctrl+K ouvrir / fermer</span>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
    import { profile } from '../data/profile';

    const { toggle } = useTheme();
    const { copy } = useClipboard();

    const open = ref<boolean>(false);
    const q = ref<string>('');
    const sel = ref<number>(0);
    const input = ref<HTMLInputElement | null>(null);

    const nav = (id: string): void => {
        close();

        window.location.hash = `#${id}`;
    };

    const commands = [
        {
            id: 'accueil',
            label: 'Aller à — accueil',
            hint: '~',
            run: (): void => nav('accueil'),
        },
        {
            id: 'services',
            label: 'Aller à — services',
            hint: 'services/',
            run: (): void => nav('services'),
        },
        {
            id: 'projects',
            label: 'Aller à — projets',
            hint: 'projets/',
            run: (): void => nav('projects'),
        },
        {
            id: 'resume',
            label: 'Aller à — parcours',
            hint: 'parcours/',
            run: (): void => nav('resume'),
        },
        {
            id: 'skills',
            label: 'Aller à — stack',
            hint: 'stack/',
            run: (): void => nav('skills'),
        },
        {
            id: 'contact',
            label: 'Aller à — contact',
            hint: 'contact/',
            run: (): void => nav('contact'),
        },
        {
            id: 'theme',
            label: 'Basculer le thème dark / light',
            hint: 'thème',
            run: (): void => {
                toggle();
                close();
            },
        },
        {
            id: 'cv',
            label: 'Télécharger le CV (resume.pdf)',
            hint: 'resume.pdf',
            run: (): void => {
                window.open(profile.cvUrl, '_blank');
                close();
            },
        },
        {
            id: 'email',
            label: "Copier l'email",
            hint: 'copier',
            run: (): void => {
                void copy(profile.email);
                close();
            },
        },
    ];

    const shown = computed(() =>
        commands.filter((c) =>
            c.label.toLowerCase().includes(q.value.toLowerCase()),
        ),
    );

    watch(q, () => (sel.value = 0));
    watch(open, (v) => {
        if (v) nextTick(() => input.value?.focus());
    });

    const isTypingTarget = (t: EventTarget | null): boolean => {
        const el = t as HTMLElement | null;

        return (
            !!el &&
            (el.tagName === 'INPUT' ||
                el.tagName === 'TEXTAREA' ||
                el.isContentEditable)
        );
    };

    const doOpen = (): void => {
        open.value = true;
        q.value = '';
        sel.value = 0;
    };

    const close = (): void => {
        open.value = false;
    };

    const run = (i: number): void => {
        const c = shown.value[i];

        if (!c) return;

        c.run();
    };

    const onKey = (e: KeyboardEvent): void => {
        if (!open.value) {
            if (
                (e.key === 'k' && (e.metaKey || e.ctrlKey)) ||
                (e.key === '/' && !isTypingTarget(e.target))
            ) {
                e.preventDefault();
                doOpen();
            }

            return;
        }

        if (e.key === 'Escape') {
            close();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            sel.value = Math.min(sel.value + 1, shown.value.length - 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            sel.value = Math.max(sel.value - 1, 0);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            run(sel.value);
        }
    };

    useEventListener(window, 'keydown', onKey);
</script>
