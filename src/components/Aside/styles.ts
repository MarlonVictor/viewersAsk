import styled from 'styled-components';


export const AsideContainer = styled.aside`
    flex: 7;
    display: flex;
    justify-content: center;

    height: 100vh;
    padding: 110px 32px;
    position: relative;

    background: var(--gray-800);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

    .slider-controller {
        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 10px;

        button {
            width: 15px;
            height: 15px;

            border: 0;
            border-radius: 50%;

            background: var(--gray-600);

            cursor: pointer;
            transition: filter 0.3s;
            transform: translateY(-60px);

            &:hover {
                filter: brightness(0.9);
            }

            &.active {
                border: 3px solid var(--purple-twitch);
            }
        }
    } 

    @media(max-width: 1024px) {
        flex: 8;
    }
    
    @media(max-width: 890px) {
        display: none;
    }
`

export const SliderContent = styled.section`
    width: 100%;
    height: 100%;
    position: relative;

    .slide {
        display: flex;
        flex-direction: column;
        justify-content: center;

        position: absolute;
        height: 100%;

        opacity: 0;
        transition: opacity 0.5s ease;
        
        img {
            max-width: 320px;
            height: 380px;
            margin: 0 auto 2rem;

            transform: scale(1.2);
        }

        strong {
            margin-top: 1rem;

            font: 700 2.2rem 'Poppins', sans-serif;
            line-height: 2.5rem;
        }

        p {
            margin-top: 1rem;
            
            font-size: 1.1rem;
            line-height: 2rem;
            color: var(--gray-300);
        }

        &.active {
            opacity: 1;
            transition: opacity 0.5s ease;
        }

        @media(max-width: 1024px) {
            img {
                max-width: 220px;
                height: 300px;
            }

            strong {
                font-size: 1.5rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }
`