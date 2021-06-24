import styled from 'styled-components';


export const RoomContainer = styled.div`
    header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--gray-600);

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            max-width: 1120px;
            margin: 0 auto;

            img {
                max-height: 3.5rem;
            }

            div {
                display: flex;
                align-items: center;

                .exit-button {
                    display: flex;
                    align-items: center;
                    margin-left: 1rem;
                    gap: 2px;

                    color: var(--gray-100);
                    background: transparent;
                    
                    border: 0;
                    cursor: pointer;
                    transition: filter 0.3s;

                    img {
                        width: 2rem;
                    }

                    &:hover {
                        filter: brightness(0.9);
                    }
                }
            }
        }
    }
`

export const MainContent = styled.main`
    max-width: 800px;
    margin: 0 auto;

    > div {
        display: flex;
        align-items: center;
        margin: 2.5rem 0 1.5rem;

        h1 {
            font: 600 1.5rem 'Poppins', sans-serif;
            letter-spacing: 0.5px;
            color: var(--gray-100);
        }

        span {
            margin-left: 16px;
            padding: 0.5rem 1rem;

            font-weight: 500;
            font-size: 14px;

            border: 2px solid var(--gray-600);
            border-radius: 900px;
        }
    }

    section {
        margin-top: 32px;

        button {
            border: 0;
            background: transparent;
            cursor: pointer;
            transition: filter 0.3s;

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: var(--gray-300);
                gap: 0.5rem;

                &.liked {
                    color: var(--purple-twitch);

                    svg path {
                        stroke: var(--purple-twitch);
                    }
                }
            }

            &:hover {
                filter: brightness(0.9);
            }
        }
    }
`

export const FormContainer = styled.form`
    textarea {
        width: 100%;
        min-height: 130px;
        padding: 16px;
        resize: vertical;

        border: 0;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

        color: var(--gray-100);
        background: var(--gray-800);
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 1rem;

        .user-info {
            display: flex;
            align-items: center;

            margin: auto 0;

            img {
                width: 2.3rem;
                height: 2.3rem;

                border-radius: 50%;
            }

            span {
                margin-left: 8px;
                
                color: var(--gray-300);
                font-weight: 500;
                font-size: 1rem;
            }
        }

        > span {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--gray-300);

            button {
                font-size: 0.9rem;
                text-decoration: underline;
                font-weight: 500;
                color: var(--blue-facebook);
                background: transparent;

                border: 0;
                cursor: pointer;
                transition: filter 0.3s;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }
`