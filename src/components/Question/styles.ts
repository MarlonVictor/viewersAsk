import styled from 'styled-components';


export const QuestionContent = styled.div`
    padding: 24px;
    border-radius: 8px;

    color: var(--gray-100);
    background: var(--gray-800);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

    @media(max-width: 425px) {
        padding: 16px;

        p {
            font-size: 1.2rem;
        }
    }

    &.answered {
        filter: brightness(0.8);
        color: var(--gray-300);

        img {
            filter: brightness(0.5);
        }
    }

    &.highlighted {
        background: var(--gray-selected);
        

        footer .user-info span {
            color: var(--gray-100);
        }
    }

    & + & {
        margin-top: 0.5rem;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 24px;

        .user-info {
            display: flex;
            align-items: center;

            margin: auto 0;

            img {
                width: 2rem;
                height: 2rem;

                border-radius: 50%;
            }

            span {
                color: var(--gray-300);
                font-size: 1rem;
            }
        }

        > div {
            display: flex;
            gap: 1rem;

            button {
                border: 0;
                background: transparent;

                cursor: pointer;
                transition: filter 0.3s;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }
`