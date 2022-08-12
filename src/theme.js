import { createGlobalStyle, css } from 'styled-components';
import { ContactSectionContainer, ComponentsLibraryContainer } from './App.styles';

const useTypingTextStyles = css`
.word span {
  color: ${({ theme }) => theme.accentColor};
  position: relative;
}

.word span::after {
  content: "";
  width: 2px;
  height: 80%;
  background: white;
  display: block;
  position: absolute;
  right: -4px;
  top: 10%;
  animation: blink 1s infinite alternate;
}

@keyframes blink {
  50%, 100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
}
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in, color 0.2s ease-in;
    margin: 0;
    padding: 0;
  }
  ${ComponentsLibraryContainer},
  ${ContactSectionContainer} {
    background-color: ${({ theme }) => theme.bodyInverted};
    color: ${({ theme }) => theme.textInverted};
  }
  ${useTypingTextStyles}
`;
export const lightTheme = {
    body         : '#f4f4f4',
    text         : '#222222',
    bodyInverted : '#222222',
    textInverted : '#ffffff',
    accentColor  : '#38FF58',
};
export const darkTheme = {
    body         : '#222222',
    text         : '#ffffff',
    bodyInverted : '#f4f4f4',
    textInverted : '#222222',
    accentColor  : '#38FF58',
};
