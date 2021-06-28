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

    .logo-image {
        align-self: center;

        @media(max-width: 375px) {
            width: 150px;
        }
    }

    .user-avatar {
        width: 100px;
        margin-top: 48px;
        align-self: center;

        border-radius: 8px;

        @media(max-width: 375px) {
            width: 80px;
        }
    }

    h2 {
        margin: 18px 0 48px;

        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    }

    p {
        margin-top: 1.2rem;

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

        border: 0;
        border-radius: 8px;
        
        color: #FFF;
        background: var(--gray-800);
    }

    button, input {
        width: 100%;
    }

    button {
        margin-top: 1rem;
    }
`