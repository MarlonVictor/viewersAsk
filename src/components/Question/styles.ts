import styled from 'styled-components';


export const QuestionContent = styled.div`
    padding: 24px;
    border-radius: 8px;

    color: var(--gray-100);
    background: var(--gray-800);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

    &.answered {
        filter: brightness(0.7);
        color: var(--gray-600);

        footer .user-info span {
            color: var(--gray-600);
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
                font-size: 0.9rem;
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