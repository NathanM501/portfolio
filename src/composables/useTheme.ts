const colorMode = useColorMode({
    storageKey: 'theme',
    initialValue: THEME.dark,
});

const toggle = (): void => {
    colorMode.value = colorMode.value === THEME.dark ? THEME.light : THEME.dark;
};

export const useTheme = (): {
    dark: ComputedRef<boolean>;
    toggle: () => void;
} => {
    const dark = computed(() => colorMode.value === THEME.dark);

    return { dark, toggle };
};
