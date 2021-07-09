import styled from 'styled-components';


export const RoomsContainer = styled.div`
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
        }
    }

    main {
        display: flex;
        gap: 2rem;

        margin: 0 auto;
        padding: 0 2rem;

        max-width: 1024px;

        @media(max-width: 1024px) {
            flex-direction: column-reverse;
            padding: 0 3rem;
        }

        @media(max-width: 375px) {
            padding: 1rem 24px;
        }

        section {
            margin: 1rem 0;
        }
    }
`

export const LeftContent = styled.section`
    flex: 1;

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        margin-bottom: 1.5rem;

        h1 {
            font-size: 2rem;
        }
    }

    .rooms {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;

        @media(max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
`

export const RightContent = styled.aside`
    padding-top: 2rem;

    .cards {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        position: sticky;
        top: 1em;

        @media(max-width: 1024px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        @media(max-width: 540px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

export const Card = styled.span`
    width: 10rem;
    padding: 1.4rem;

    color: var(--gray-100);
    font-family: 'Poppins';

    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    cursor: default;

    @media(max-width: 1024px) {
        width: 100%;
    }

    @media(max-width: 540px) {
        &.closed-rooms {
            grid-column-end: span 2;
        }
    }

    h3 {
        font-size: 1.8rem;
    }
    
    h4 {
        font-size: 1.2rem;
    }

    &.rooms-length {
        background: linear-gradient(160deg, rgba(24,119,242,1) 22%, rgba(134,67,234,1) 100%);
    }

    &.open-rooms {
        background: var(--purple-twitch);
    }

    &.closed-rooms {
        border: 2px solid var(--gray-800);
    }
`