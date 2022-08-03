import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import CryptosSection from './components/sections/CryptosSection';
import ContactSection from './components/sections/ContactSection';
import ComponentsLibrarySection from './components/sections/ComponentsLibrarySection';
import IntroSection from './components/sections/IntroSection';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import useTheme from './hooks/useTheme';
import useLocalization from './lang/useLocalization';

function App() {
    const { locale, setLocale, messages } = useLocalization();
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyles />
                <button type="button" onClick={toggleTheme}>
                    {isDarkTheme
                        ? <span aria-label="Light mode" role="img">🌞</span>
                        : <span aria-label="Dark mode" role="img">🌜</span>}
                </button>
                <select value={locale} onChange={(e) => setLocale(e.target.value)}>
                    <option value="en">en</option>
                    <option value="es">es</option>
                </select>
                <IntlProvider locale={locale} messages={messages}>
                    {/* <Test /> i18n test */}
                    <IntroSection />
                    <ComponentsLibrarySection />
                    <CryptosSection />
                    <ContactSection />
                </IntlProvider>
            </>
        </ThemeProvider>
    );
}

export default App;
