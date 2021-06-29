import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-900: #202124;
        --gray-800: #303134;
        --gray-600: #464649;
        --gray-300: #89858B;
        --gray-100: #E7E7E9;

        --gray-selected: #252F3C;

        --blue-facebook: #1877F2;
        --purple-twitch: #8643EA;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        transition: .3s;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--gray-600);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background: var(--gray-800);
        border-radius: 10px;
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
    @media(max-width: 1024px) {
        html {
            // 13px
            font-size: 81,20%;
        }
    }
    @media(max-width: 425px) {
        html {
            // 12px
            font-size: 75%;
        }
    }
`