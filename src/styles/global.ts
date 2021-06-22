import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-900: #0e0e10;
        --gray-800: #18181b;
        --gray-750: #1f1f23;
        --gray-600: #464649;
        --gray-300: #89858b;
        --gray-100: #e7e7e9;

        --gray-selected: #252f3c;

        --blue-facebook: #1877f2;
        --purple-twitch: #8643ea;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--gray-900);
        color: var(--gray-100);
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;
    }

    @media(max-width: 1440px) {
        html {
            // 15px
            font-size: 93.75%;
        }
    }
    @media(max-width: 800px) {
        html {
            // 14px
            font-size: 87.50%;
        }
    }
`