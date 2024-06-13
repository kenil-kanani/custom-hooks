//* Create a hook that manages dark mode state and persists it in local storage.

import { useState } from "react";

function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const setThemeOverride = (theme) => {
        if (theme === 'dark') {
            setTheme(theme);
            localStorage.setItem('theme', theme);
        }
        else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    const clearTheme = () => {
        localStorage.removeItem('theme');
        setTheme('light');
    }

    return [theme, setThemeOverride, clearTheme];
}

export default useDarkMode;