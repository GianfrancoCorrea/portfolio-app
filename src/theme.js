import { createGlobalStyle, css } from 'styled-components';
import { Title, Description } from './App.styles';

const useTypingTextStyles = css`
.word {
  display: block;
}

.word span {
  color: #fd82aa;
  position: relative;
}

.word span::after {
  content: "";
  width: 2px;
  height: 100%;
  background: white;
  display: block;
  position: absolute;
  right: -4px;
  top: 0;
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
  }
  section {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s ease-in, color 0.2s ease-in;
  }
  ${Title} {
    color: ${({ theme }) => theme.text};
  }
  ${Description} {
    color: ${({ theme }) => theme.text};
  }
 ${useTypingTextStyles}
`;
export const lightTheme = {
    body         : '#FAFAFA',
    text         : '#363537',
    toggleBorder : '#FFF',
    background   : '#363537',
};
export const darkTheme = {
    body         : '#363537',
    text         : '#FAFAFA',
    toggleBorder : '#6B8096',
    background   : '#999',
};
