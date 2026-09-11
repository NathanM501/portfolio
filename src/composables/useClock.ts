import { profile } from '@/data';

const TZ = profile.timezone;

const OFFSET_HOURS = 3;

let useIntl = true;

try {
    new Intl.DateTimeFormat('en-US', { timeZone: TZ });
} catch {
    useIntl = false;
}

const formatWithIntl = (d: Date, withSeconds: boolean): string =>
    new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        ...(withSeconds ? { second: '2-digit' as const } : {}),
        timeZone: TZ,
    }).format(d);

const formatManual = (d: Date, withSeconds: boolean): string => {
    const shifted = new Date(d.getTime() + OFFSET_HOURS * 3600000);

    const hh = String(shifted.getUTCHours()).padStart(2, '0');

    const mm = String(shifted.getUTCMinutes()).padStart(2, '0');

    const ss = String(shifted.getUTCSeconds()).padStart(2, '0');

    return withSeconds ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
};

export const useClock = (
    withSeconds = false,
): { time: ComputedRef<string> } => {
    const now = useNow({ interval: 1000 });

    const time = computed(() => {
        try {
            return useIntl
                ? formatWithIntl(now.value, withSeconds)
                : formatManual(now.value, withSeconds);
        } catch {
            return formatManual(now.value, withSeconds);
        }
    });

    return { time };
};
