<template>
    <section id="accueil" data-section class="scroll-mt-20">
        <div
            class="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-32">
            <div class="lg:col-span-9">
                <h1 class="leading-[0.98] tracking-tight">
                    <span
                        class="block text-5xl font-light sm:text-7xl xl:text-[5.5rem]">
                        Eugène Jonathan
                    </span>
                    <span
                        class="block text-5xl font-bold text-primary dark:text-primary-light sm:text-7xl xl:text-[5.5rem]">
                        MANGUITHRE
                        <span class="text-accent dark:text-accent-light">
                            .
                        </span>
                    </span>
                </h1>

                <p
                    class="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-400 dark:text-term-dim"
                    v-text="profile.pitch" />

                <div
                    class="term mt-9 max-w-2xl"
                    title="Cliquer pour sauter l'intro"
                    @click="tw.skip()">
                    <div
                        class="flex items-center gap-2 border-b border-term-line px-4 py-2.5">
                        <span class="h-2.5 w-2.5 rounded-full bg-primary" />
                        <span class="h-2.5 w-2.5 rounded-full bg-accent" />
                        <span class="h-2.5 w-2.5 rounded-full bg-term-line" />
                        <span class="ml-3 font-mono text-[11px] text-term-dim">
                            developer.ts
                        </span>
                        <span
                            class="ml-auto hidden font-mono text-[10px] text-term-dim/60 sm:inline">
                            typescript
                        </span>
                    </div>

                    <p class="sr-only">
                        Eugène Jonathan Manguithre — Développeur Full Stack,
                        Laravel et Vue.js. Stack : Laravel, Vue 3, TypeScript,
                        Tailwind. 2 ans d'expérience, Toamasina, Madagascar
                        (UTC+3). Disponible — télétravail francophone, ouvert
                        aux opportunités sur site.
                    </p>

                    <div
                        aria-hidden="true"
                        class="min-h-[232px] overflow-x-auto px-5 py-4 font-mono text-[13px] leading-[1.9] text-term-text sm:px-6">
                        <p
                            v-for="(l, i) in tw.linesState.value"
                            :key="i"
                            v-show="l.count > 0 || l.active">
                            <span
                                v-for="(tok, j) in l.tokens"
                                :key="j"
                                :class="tok.c ?? 'text-term-text'"
                                v-text="part(l, j)" />

                            <span
                                v-if="l.active && l.count < lineLen(l)"
                                class="blink text-accent-light">
                                ▮
                            </span>
                        </p>

                        <p v-if="tw.finished.value" class="text-term-dim">
                            <span class="blink text-accent-light">▮</span>
                        </p>
                    </div>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-3">
                    <a href="#contact" class="btn-cmd btn-cmd-solid">
                        Me contacter
                        <span aria-hidden="true">→</span>
                    </a>
                    <a
                        :href="profile.cvUrl"
                        target="_blank"
                        rel="noopener"
                        class="btn-cmd btn-cmd-outline">
                        resume.pdf
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>

            <aside class="hidden lg:col-span-3 lg:block">
                <div
                    class="border-l-2 border-primary/30 pl-5 font-mono text-[11.5px] leading-[2.4] text-ink-400 dark:border-primary-light/30 dark:text-term-dim">
                    <p>
                        <span class="opacity-60">
                            base&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span class="text-ink-900 dark:text-mist-100">
                            toamasina / mg
                        </span>
                    </p>
                    <p>
                        <span class="opacity-60">fuseau&nbsp;&nbsp;</span>
                        <span
                            class="tabular-nums text-ink-900 dark:text-mist-100">
                            {{ time }} · utc+3
                        </span>
                    </p>
                    <p>
                        <span class="opacity-60">
                            xp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span class="text-ink-900 dark:text-mist-100">
                            2 ans d'expérience
                        </span>
                    </p>
                    <p>
                        <span class="opacity-60">stack&nbsp;&nbsp;&nbsp;</span>
                        <span class="text-ink-900 dark:text-mist-100">
                            laravel · vue 3 · ts
                        </span>
                    </p>
                    <p>
                        <span class="opacity-60">statut&nbsp;&nbsp;</span>
                        <span class="text-primary dark:text-primary-light">
                            ● disponible
                        </span>
                    </p>
                </div>
            </aside>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { profile } from '../data/profile';

    const { time } = useClock();

    const KW = 'text-primary-light';
    const STR = 'text-accent-light';
    const DIM = 'text-term-dim';

    const CODE = [
        [{ t: 'const ', c: KW }, { t: 'developer' }, { t: ' = {', c: DIM }],
        [
            { t: '    nom', c: KW },
            { t: ': ', c: DIM },
            { t: "'Eugène Jonathan Manguithre'", c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    role', c: KW },
            { t: ': ', c: DIM },
            { t: "'Développeur Full Stack — Laravel & Vue.js'", c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    stack', c: KW },
            { t: ': [', c: DIM },
            { t: "'Laravel', 'Vue 3', 'TypeScript', 'Tailwind'", c: STR },
            { t: '],', c: DIM },
        ],
        [
            { t: '    experience', c: KW },
            { t: ': ', c: DIM },
            { t: "'2 ans'", c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    base', c: KW },
            { t: ': ', c: DIM },
            { t: "'Toamasina — Madagascar (UTC+3)'", c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    dispo', c: KW },
            { t: ': ', c: DIM },
            { t: "'télétravail francophone · ouvert sur site'", c: STR },
        ],
        [{ t: '}', c: DIM }],
    ];

    const tw = useTypewriter(CODE);

    interface LineLike {
        tokens: { t: string; c?: string }[];
        count: number;
    }

    const lineLen = (l: LineLike): number => {
        return l.tokens.reduce((s, t) => s + t.t.length, 0);
    };

    const part = (l: LineLike, j: number): string => {
        let offset = 0;

        for (let k = 0; k < j; k++) offset += l.tokens[k].t.length;

        const visible = Math.max(
            0,
            Math.min(l.count - offset, l.tokens[j].t.length),
        );

        return l.tokens[j].t.slice(0, visible);
    };

    onMounted(() => tw.start());
</script>
