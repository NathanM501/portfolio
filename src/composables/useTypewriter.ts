export interface Tok {
    t: string;
    c?: string;
}

interface LineState {
    tokens: Tok[];
    count: number;
    active: boolean;
}

export const useTypewriter = (
    lines: Tok[][],
    opts: { startDelay?: number; speed?: number; linePause?: number } = {},
): {
    linesState: Ref<LineState[]>;
    finished: Ref<boolean>;
    start: () => void;
    skip: () => void;
} => {
    const { startDelay = 450, speed = 8, linePause = 150 } = opts;

    const linesState = ref<LineState[]>(
        lines.map((l) => ({ tokens: l, count: 0, active: false })),
    );

    const finished = ref(false);

    let idx = 0;

    let n = 0;

    const reduced =
        typeof window !== 'undefined' &&
        !!window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const delay = ref<number>(0);

    const timer = useTimeoutFn((): void => tick(), delay, { immediate: false });

    const schedule = (ms: number): void => {
        delay.value = ms;
        timer.start();
    };

    const len = (l: LineState): number => {
        return l.tokens.reduce((s, t) => s + t.t.length, 0);
    };

    const completeAll = (): void => {
        linesState.value.forEach((l) => {
            l.count = len(l);
            l.active = false;
        });

        finished.value = true;
    };

    const tick = (): void => {
        const cur = linesState.value[idx];

        if (!cur) {
            finished.value = true;
            return;
        }

        const L: number = len(cur);

        n++;
        cur.count = Math.min(n, L);

        if (n >= L) {
            cur.active = false;
            idx++;
            n = 0;

            if (idx >= linesState.value.length) {
                finished.value = true;
                return;
            }

            linesState.value[idx].active = true;

            schedule(linePause);
        } else {
            schedule(speed);
        }
    };

    const start = (): void => {
        if (reduced) {
            completeAll();
            return;
        }

        linesState.value[0].active = true;

        schedule(startDelay);
    };

    const skip = (): void => {
        timer.stop();

        completeAll();
    };

    return { linesState, finished, start, skip };
};
