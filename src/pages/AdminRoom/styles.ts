import styled from 'styled-components';


export const AdminRoomContainer = styled.div`
    header {
        padding: 1rem 32px;
        border-bottom: 1px solid var(--gray-600);

        @media(max-width: 375px) {
            padding: 1rem 24px;
        }

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            max-width: 1120px;
            margin: 0 auto;

            img {
                max-height: 3.5rem;
            }

            > div {
                display: flex;
                gap: 1rem;
            }
        }
    }
`

export const MainContent = styled.main`
    max-width: 832px;
    margin: 0 auto;
    padding: 0 32px;

    @media(max-width: 375px) {
        padding: 0 24px;
    }

    > div {
        display: flex;
        align-items: center;
        margin: 2.5rem 0 1.5rem;

        h1 {
            font: 600 1.5rem 'Poppins', sans-serif;
            color: var(--gray-100);
        }

        span {
            margin-left: 16px;
            padding: 0.5rem 0;
            min-width: 130px;

            font-weight: 500;
            font-size: 14px;
            text-align: center;

            border: 2px solid var(--gray-600);
            border-radius: 900px;
        }

        @media(max-width: 425px) {
            flex-direction: column;

            span {
                align-self: flex-start;
                margin-left: 0;
                margin-top: 1rem;
            }
        }
    }

    section {
        margin: 32px 0;
    }
`