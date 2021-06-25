import styled from 'styled-components';


export const AdminRoomContainer = styled.div`
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

            > div {
                display: flex;
                gap: 1rem;
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
    }
`