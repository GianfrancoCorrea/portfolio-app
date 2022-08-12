import styled, { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { spaceSmall, spaceNormal } from '@gianjsx/component-library/src/styles/variables';
import CryptosSection from './components/sections/CryptosSection';
import ContactSection from './components/sections/ContactSection';
import ComponentsLibrarySection from './components/sections/ComponentsLibrarySection';
import IntroSection from './components/sections/IntroSection';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import useTheme from './hooks/useTheme';
import useLocalization from './lang/useLocalization';
import { SectionContainer, SectionWrapper } from './App.styles';

function App() {
    const { locale, setLocale, messages } = useLocalization();
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyles />
                <UserPreferencesContainer>
                    <SectionWrapper>
                        <UserPreferencesWrapper>
                            <ThemeSelector
                                type="button"
                                darkTheme={isDarkTheme}
                                onClick={toggleTheme}
                            >
                                <svg className="sun-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2ZM4.89289 4.89289C5.28342 4.50237 5.91658 4.50237 6.30711 4.89289L7.00711 5.59289C7.39763 5.98342 7.39763 6.61658 7.00711 7.00711C6.61658 7.39763 5.98342 7.39763 5.59289 7.00711L4.89289 6.30711C4.50237 5.91658 4.50237 5.28342 4.89289 4.89289ZM19.1071 4.89289C19.4976 5.28342 19.4976 5.91658 19.1071 6.30711L18.4071 7.00711C18.0166 7.39763 17.3834 7.39763 16.9929 7.00711C16.6024 6.61658 16.6024 5.98342 16.9929 5.59289L17.6929 4.89289C18.0834 4.50237 18.7166 4.50237 19.1071 4.89289ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12ZM19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12ZM7.00711 16.9929C7.39763 17.3834 7.39763 18.0166 7.00711 18.4071L6.30711 19.1071C5.91658 19.4976 5.28342 19.4976 4.89289 19.1071C4.50237 18.7166 4.50237 18.0834 4.89289 17.6929L5.59289 16.9929C5.98342 16.6024 6.61658 16.6024 7.00711 16.9929ZM16.9929 16.9929C17.3834 16.6024 18.0166 16.6024 18.4071 16.9929L19.1071 17.6929C19.4976 18.0834 19.4976 18.7166 19.1071 19.1071C18.7166 19.4976 18.0834 19.4976 17.6929 19.1071L16.9929 18.4071C16.6024 18.0166 16.6024 17.3834 16.9929 16.9929ZM12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20C11 19.4477 11.4477 19 12 19Z" fill="black" />
                                </svg>
                                <svg className="moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1585 4.2073C9.36258 4.3958 8.59673 4.70608 7.88895 5.13037C6.64681 5.87499 5.6301 6.94282 4.94726 8.21996C4.26443 9.4971 3.94108 10.9356 4.01172 12.3821C4.08236 13.8286 4.54432 15.2288 5.34835 16.4334C6.15237 17.6379 7.26828 18.6016 8.57706 19.2216C9.88583 19.8417 11.3384 20.0948 12.7797 19.9541C14.2211 19.8133 15.5972 19.2839 16.7613 18.4224C17.3303 18.0013 17.8382 17.5086 18.2736 16.9587C17.1466 17.062 16.0018 16.9399 14.9079 16.5898C13.0149 15.9842 11.3941 14.7343 10.3271 13.0575C9.26009 11.3808 8.81438 9.38312 9.06746 7.41183C9.21367 6.27291 9.58779 5.18439 10.1585 4.2073ZM12.1263 1.99994H12.393C12.8042 1.99994 13.1734 2.2516 13.3238 2.63427C13.4741 3.01694 13.3749 3.45264 13.0737 3.73251C11.9604 4.76705 11.2447 6.15904 11.0512 7.6665C10.8576 9.17396 11.1985 10.7016 12.0144 11.9838C12.8304 13.266 14.0698 14.2218 15.5174 14.685C16.9649 15.1482 18.529 15.0894 19.9377 14.519C20.3115 14.3677 20.7396 14.4557 21.0234 14.7421C21.3072 15.0285 21.3912 15.4574 21.2365 15.8297C20.5417 17.5014 19.4062 18.9531 17.9511 20.03C16.496 21.1069 14.7758 21.7687 12.9741 21.9446C11.1724 22.1205 9.35674 21.8041 7.72077 21.0291C6.0848 20.254 4.68991 19.0494 3.68488 17.5437C2.67986 16.0381 2.1024 14.2878 2.0141 12.4797C1.92581 10.6716 2.32999 8.87338 3.18353 7.27696C4.03707 5.68053 5.30796 4.34575 6.86063 3.41498C8.4133 2.48421 10.1895 1.99238 11.9998 1.99194C12.0423 1.99193 12.0846 1.99463 12.1263 1.99994Z" fill="black" />
                                </svg>
                            </ThemeSelector>
                            <LanguageSelector
                                value={locale}
                                onChange={(e) => setLocale(e.target.value)}
                            >
                                <option value="en">en</option>
                                <option value="es">es</option>
                            </LanguageSelector>
                        </UserPreferencesWrapper>
                    </SectionWrapper>
                </UserPreferencesContainer>
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

const UserPreferencesContainer = styled(SectionContainer)`
    padding-top: ${spaceNormal};
    padding-bottom: 0;
    margin-bottom: -40px;
    position: relative;
    z-index: 1;
`;

const UserPreferencesWrapper = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${spaceSmall};
`;

const userPreferencesElementsHeight = '32px';

const ThemeSelector = styled.button`
    background: ${({ theme }) => theme.accentColor};
    border: 0px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: ${userPreferencesElementsHeight};
    width: 62px;
    border-radius: 999px;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        top: 4px;
        width: 24px;
        height: 24px;
        left: ${props => (props.darkTheme ? '32px' : '6px')};
        background: #ffffff;
        opacity: ${props => (props.darkTheme ? '.8' : '.9')};
        transition: all .2s ease-in-out;
        border-radius: 50%;
    }

    svg {
        position: relative;
        z-index: 1;
        height: 18px;

        path {
            transition: fill .2s ease-in-out;
        }

        &.sun-icon path {
            fill: ${props => (props.darkTheme ? 'rgba(0, 0, 0, .3)' : '#222222')};
        }

        &.moon-icon path {
            fill: ${props => (props.darkTheme ? '#222222' : 'rgba(0, 0, 0, .3)')};
        }
        
    }

`;

const LanguageSelector = styled.select`
    height: ${userPreferencesElementsHeight};    
    appearance: none;
    padding: 0;
    border-radius: 999px;
    background: ${props => (props.darkTheme ? 'rgba(255,255,255,.4)' : 'rgba(0, 0, 0, .15)')};
    border: 0;
    text-transform: uppercase;
    color: ${props => (props.darkTheme ? '#ffffff' : '#222222')};
    width: 42px;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
`;
