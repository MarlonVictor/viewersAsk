import styled from 'styled-components';


export const AsideContainer = styled.aside`
    flex: 6;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 110px 60px;
    background: var(--gray-800);

    img {
        max-width: 320px;
    }

    strong {
        margin-top: 1rem;

        font: 700 36px 'Poppins', sans-serif;
        line-height: 42px;
    }

    p {
        margin-top: 1rem;
        
        font-size: 1.3rem;
        line-height: 2rem;
        color: var(--gray-300);
    }
`