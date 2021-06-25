import styled from 'styled-components';


export const AuthContainer = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;

    main {
        flex: 8;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 32px;

        div {
            display: flex;
            flex-direction: column;
            align-items: stretch;

            width: 100%;
            max-width: 375px;
            
            text-align: center;

            > img {
                align-self: center;

                @media(max-width: 375px) {
                    width: 150px;
                }
            }
        }
    }
`

export const SeparatorSpan = styled.span`
    font-size: 0.9rem;
    color: var(--gray-300);

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        margin-right: 1rem;
        height: 1px;

        background: var(--gray-300);
    }

    &::after {
        content: '';
        flex: 1;
        margin-left: 1rem;
        height: 1px;

        background: var(--gray-300);
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