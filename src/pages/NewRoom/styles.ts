import styled from 'styled-components';


export const NewRoomContainer = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;

    main {
        flex: 8;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 32px;
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    max-width: 375px;
    
    text-align: center;

    > img {
        align-self: center;
    }

    h2 {
        margin: 54px 0 24px;

        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    }

    p {
        margin-top: 1rem;

        font-size: 0.9rem;
        color: var(--gray-300);

        a {
            margin-left: 0.5rem;
            color: var(--purple-twitch);
        }
    }
`

export const FormContainer = styled.form`
    input {
        height: 50px;
        padding: 0 16px;

        border: 1px solid var(--gray-800);
        border-radius: 8px;
        background: var(--gray-750);
    }

    button, input {
        width: 100%;
    }

    button {
        margin-top: 1rem;
    }
`