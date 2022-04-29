import { createGlobalStyle, css } from 'styled-components';

export const fontFaces = css`
  @font-face {
    font-family: 'Inter';
    src: url('./assets/fonts/Inter-Regular.ttf') format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter Medium';
    src: url('./assets/fonts/Inter-Medium.ttf') format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter SemiBold';
    src: url('./assets/fonts/Inter-SemiBold.ttf') format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter Bold';
    src: url('./assets/fonts/Inter-Bold.ttf') format('ttf');
    font-style: normal;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  :root {
    --back-light: #F9F9F9;
    --back-dark: #0F0606;

    --purple: #8522E7;
    --red: #E72422;

    --purple-light: #F9F2FF;
    
    --light-green: #466A4A;
    --light-blue: #F6F8FE;
    --back-light-green: #EFF5F0;

    --dark-green: #2F8938;
    --dark-blue: #040810;
    --back-dark-green: #2F8938;

    --text-light: rgba(0, 0, 0, 0.85);
    --text-light-nav: rgba(0, 0, 0, 0.75);
    --text-light-half: rgba(0, 0, 0, 0.5);

    --text-dark: rgba(255, 255, 255, 0.85);
    --text-dark-nav: rgba(255, 255, 255, 0.75);
    --text-dark-half: rgba(255, 255, 255, 0.5);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.05rem;
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
`;