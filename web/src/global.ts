import { createGlobalStyle, css } from 'styled-components';
import InterRegular from './assets/fonts/Inter-Regular.ttf';
import InterMedium from './assets/fonts/Inter-Medium.ttf';
import InterSemiBold from './assets/fonts/Inter-SemiBold.ttf';
import InterBold from './assets/fonts/Inter-Bold.ttf';

interface Props {
  colorScheme: string | null;
}

export const fontFaces = css`
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter Medium';
    src: url(${InterMedium}) format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter SemiBold';
    src: url(${InterSemiBold}) format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter Bold';
    src: url(${InterBold}) format('ttf');
    font-style: normal;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  :root {
    --back-light: #F9F9F9;
    --back-dark: #060606;

    --purple: #8522E7;
    --red: #8522E7;

    --purple-light: #F9F2FF;
    --red-dark: #0e0c13;
    
    --light-green: #466A4A;
    --light-blue: #2259E7;
    --back-light-green: #EFF5F0;
    --back-light-blue: #F6F8FE;

    --dark-green: #2F8938;
    --dark-blue: #294BA3;
    --back-dark-green: #080D09;
    --back-dark-blue: #040810;

    --text-light: rgba(0, 0, 0, 0.85);
    --text-light-nav: rgba(0, 0, 0, 0.75);
    --text-light-pres: rgba(0, 0, 0, 0.65);
    --text-light-half: rgba(0, 0, 0, 0.5);

    --text-dark: rgba(255, 255, 255, 0.85);
    --text-dark-nav: rgba(255, 255, 255, 0.75);
    --text-dark-pres: rgba(255, 255, 255, 0.65);
    --text-dark-half: rgba(255, 255, 255, 0.5);

    --percentage-bar-light: rgba(0, 0 ,0, 0.08);
    --percentage-bar-dark: rgba(255, 255, 255,0.2);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    /* @media (max-width: 720px) {
      font-size: 87.5%;
    } */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: 'Inter', Arial, Heveltica, sans-serif, Times New Roman;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.0375em;
  }

  body {
    background: var(--back-light);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  h1 {
    font-family: 'Sora';
    font-weight: 500;

    span {
      font-family: 'Sora', 'Inter', 'Helvetica', 'Arial';
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    display: block;
    background: ${(props:Props) => props.colorScheme === 'light'? 'var(--back-light)' : 'rgba(0, 0, 0, 0.9)'};
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props:Props) => props.colorScheme === 'light'? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
    border-radius: 3px;
    width: 2px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props:Props) => props.colorScheme === 'light'? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
  }
`;