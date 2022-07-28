import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CryptosSection from './components/sections/CryptosSection';
import ContactSection from './components/sections/ContactSection';
import ComponentsLibrarySection from './components/sections/ComponentsLibrarySection';
import IntroSection from './components/sections/IntroSection';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import './App.less';

function App() {
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

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyles />
                <button type="button" onClick={toggleTheme}>
                    {isDarkTheme
                        ? <span aria-label="Light mode" role="img">🌞</span>
                        : <span aria-label="Dark mode" role="img">🌜</span>}
                </button>
                <IntroSection />
                <ComponentsLibrarySection />
                <CryptosSection />
                <ContactSection />
            </>
        </ThemeProvider>
    );
}

export default App;
