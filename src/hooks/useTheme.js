import { useEffect, useState } from 'react';

function useTheme() {
    const [theme, setTheme] = useState('dark');
    const isDarkTheme = theme === 'dark';
    const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia
          && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme('dark');
        }
    }, []);

    return {
        isDarkTheme,
        toggleTheme,
    };
}

export default useTheme;
