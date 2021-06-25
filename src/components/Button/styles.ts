import styled from 'styled-components';


export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    padding: 0 2rem;
    
    border-radius: 8px;
    font-weight: 500;
    color: var(--gray-100);

    cursor: pointer;
    border: 0;

    transition: filter 0.3s;

    img {
        margin-right: 16px;
    }

    &.enter-room, &.send-message {
        color: #FFF;
        background: linear-gradient(160deg, rgba(24,119,242,1) 22%, rgba(134,67,234,1) 100%);
    }

    &.close-room {
        height: 40px;
        padding: 1rem;

        border: 1px solid var(--gray-300);
        background: transparent;

        font-size: 1rem;
    }

    &.create-with-google {
        margin-top: 54px;
        background: var(--gray-800);
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`