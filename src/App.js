import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionContainer, SectionWrapper } from './App.styles';
import BlockchainSection from './components/sections/BlockchainSection';
import ChartSection from './components/sections/ChartSection';
import ContactSection from './components/sections/ContactSection';
import IframeSection from './components/sections/IframeSection';
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
                <div className="App">
                    <button type="button" onClick={toggleTheme}>
                        {isDarkTheme
                            ? <span aria-label="Light mode" role="img">🌞</span>
                            : <span aria-label="Dark mode" role="img">🌜</span>}
                    </button>
                    <IntroSection />
                    <IframeSection />
                    <SectionContainer className="SectionContainer in App.js">
                        <SectionWrapper className="SectionWrapper in App.js">
                            <BlockchainSection />
                            <ChartSection />
                        </SectionWrapper>
                    </SectionContainer>
                    <ContactSection />
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
