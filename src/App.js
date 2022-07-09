import { useEffect, useState } from 'react';
import { PortfolioIntro } from '@gianjsx/component-library';
import { ThemeProvider } from 'styled-components';
import BlockchainSection from './components/sections/BlockchainSection';
import ChartSection from './components/sections/ChartSection';
import ContactSection from './components/sections/ContactSection';
import IframeSection from './components/sections/IframeSection';
import './App.less';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

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
                <div className="App">
                    <div>
                        <button type="button" onClick={toggleTheme}>
                            {isDarkTheme
                                ? <span aria-label="Light mode" role="img">🌞</span>
                                : <span aria-label="Dark mode" role="img">🌜</span>}
                        </button>
                    </div>
                    <PortfolioIntro />
                    <IframeSection />
                    <BlockchainSection />
                    <ChartSection />
                    <ContactSection />
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
