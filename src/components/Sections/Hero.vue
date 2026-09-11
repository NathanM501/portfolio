<template>
    <section id="accueil" data-section class="scroll-mt-20">
        <div
            class="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-32">
            <div class="lg:col-span-12">
                <h1 class="leading-[0.98] tracking-tight">
                    <span
                        class="block text-5xl font-light sm:text-7xl xl:text-[5.5rem]"
                        v-text="profile.firstName" />
                    <span
                        class="block text-5xl font-bold text-primary dark:text-primary-light sm:text-7xl xl:text-[5.5rem]">
                        {{ profile.lastName }}
                    </span>
                </h1>

                <p
                    class="mt-6 text-[15px] leading-relaxed text-ink-400 dark:text-term-dim"
                    v-text="profile.pitch" />

                <div
                    class="term mx-auto mt-9"
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
                        {{ fullName }} — {{ profile.role }},
                        {{ profile.tagline }}. Stack :
                        {{ profile.stack.join(', ') }}.
                        {{ profile.experienceYears }} ans d'expérience,
                        {{ profile.location }} ({{ profile.tzDisplay }}).
                        Disponible — {{ availabilityLower }}.
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
        </div>
    </section>
</template>

<script setup lang="ts">
    import { availabilityLower, fullName, profile } from '@/data';

    interface LineLike {
        tokens: { t: string; c?: string }[];
        count: number;
    }

    const tzLower = profile.tzDisplay.toLowerCase();

    const KW = 'text-primary-light';
    const STR = 'text-accent-light';
    const DIM = 'text-term-dim';

    const CODE = [
        [{ t: 'const ', c: KW }, { t: 'developer' }, { t: ' = {', c: DIM }],
        [
            { t: '    nom', c: KW },
            { t: ': ', c: DIM },
            { t: `'${fullName}'`, c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    role', c: KW },
            { t: ': ', c: DIM },
            { t: `'${profile.role} — ${profile.tagline}'`, c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    stack', c: KW },
            { t: ': [', c: DIM },
            { t: profile.stack.map((s) => `'${s}'`).join(', '), c: STR },
            { t: '],', c: DIM },
        ],
        [
            { t: '    experience', c: KW },
            { t: ': ', c: DIM },
            { t: `'${profile.experienceYears} ans'`, c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    base', c: KW },
            { t: ': ', c: DIM },
            { t: `'${profile.location} (${tzLower})'`, c: STR },
            { t: ',', c: DIM },
        ],
        [
            { t: '    dispo', c: KW },
            { t: ': ', c: DIM },
            { t: `'${availabilityLower}'`, c: STR },
        ],
        [{ t: '}', c: DIM }],
    ];

    const tw = useTypewriter(CODE);

    const lineLen = (l: LineLike): number =>
        l.tokens.reduce((s, t) => s + t.t.length, 0);

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
