<template>
    <section
        id="contact"
        data-section
        class="scroll-mt-20 border-t border-line bg-mist-300/50 py-20 dark:border-line-dark dark:bg-ink-800/25 lg:py-24">
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <SectionHeading
                    :path="section.path"
                    :title="section.title"
                    :note="section.note" />
            </Reveal>

            <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
                <div class="lg:col-span-7">
                    <Reveal>
                        <h3
                            class="whitespace-pre-line text-2xl font-light leading-snug sm:text-4xl sm:leading-snug"
                            v-text="ui.contactHeading" />
                        <p
                            class="mt-5 max-w-md text-[15px] leading-relaxed text-ink-400 dark:text-term-dim"
                            v-text="ui.contactIntro" />

                        <a
                            :href="`mailto:${profile.email}`"
                            class="mt-7 inline-block break-all font-mono text-xl font-medium text-primary transition-colors hover:text-primary-deep dark:text-primary-light dark:hover:text-mist-100 sm:text-3xl">
                            {{ profile.email }}
                            <span class="blink" aria-hidden="true">▌</span>
                        </a>

                        <div class="mt-7 flex flex-wrap gap-3">
                            <a
                                :href="`mailto:${profile.email}`"
                                class="btn-cmd btn-cmd-solid">
                                Me contacter
                            </a>
                            <button
                                type="button"
                                class="btn-cmd btn-cmd-outline"
                                @click="copyEmail">
                                {{ copied ? 'copié ✓' : "copier l'email" }}
                            </button>
                        </div>
                    </Reveal>
                </div>

                <aside class="lg:col-span-5">
                    <Reveal :delay="120">
                        <div class="term">
                            <div
                                class="flex items-center gap-2 border-b border-term-line px-4 py-2.5">
                                <span
                                    class="h-2.5 w-2.5 rounded-full bg-primary" />
                                <span
                                    class="h-2.5 w-2.5 rounded-full bg-accent" />
                                <span
                                    class="h-2.5 w-2.5 rounded-full bg-term-line" />
                                <span
                                    class="ml-3 font-mono text-[11px] text-term-dim">
                                    contact.json
                                </span>
                            </div>
                            <dl
                                class="px-5 py-4 font-mono text-[12.5px] leading-[2.3] text-term-text">
                                <div class="grid grid-cols-[92px_1fr] gap-x-3">
                                    <dt class="text-term-dim">email</dt>
                                    <dd
                                        class="break-all text-primary-light"
                                        v-text="profile.email" />
                                </div>
                                <div class="grid grid-cols-[92px_1fr] gap-x-3">
                                    <dt class="text-term-dim">phone</dt>
                                    <dd v-text="profile.phone" />
                                </div>
                                <div class="grid grid-cols-[92px_1fr] gap-x-3">
                                    <dt class="text-term-dim">location</dt>
                                    <dd
                                        v-text="
                                            profile.location.toLowerCase()
                                        " />
                                </div>
                                <div class="grid grid-cols-[92px_1fr] gap-x-3">
                                    <dt class="text-term-dim">dispo</dt>
                                    <dd>
                                        <span class="text-accent-light">●</span>
                                        {{ availabilityLower }}
                                    </dd>
                                </div>
                                <div class="grid grid-cols-[92px_1fr] gap-x-3">
                                    <dt class="text-term-dim">cv</dt>
                                    <dd>
                                        <a
                                            :href="profile.cvUrl"
                                            target="_blank"
                                            rel="noopener"
                                            class="text-primary-light underline decoration-primary-light/40 underline-offset-4 hover:decoration-primary-light">
                                            resume.pdf
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </Reveal>
                </aside>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { profile, availabilityLower, ui } from '@/data';

    const section = useSection('contact');
    const { copy } = useClipboard();

    const copied = ref<boolean>(false);
    const resetDelay = ref<number>(1600);

    const reset = useTimeoutFn(
        (): void => {
            copied.value = false;
        },
        resetDelay,
        { immediate: false },
    );

    const copyEmail = async (): Promise<void> => {
        let ok = false;

        try {
            await copy(profile.email);

            ok = true;
        } catch {
            const ta = document.createElement('textarea');

            ta.value = profile.email;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();

            try {
                document.execCommand('copy');
                ok = true;
            } catch {}

            ta.remove();
        }

        if (ok) {
            copied.value = true;
            reset.start();
        }
    };
</script>
