import styled from 'styled-components';


export const RoomCodeButton = styled.button`
    display: flex;
    height: 40px;

    border: 1px solid var(--blue-facebook);
    border-radius: 8px;
    
    background: transparent;
    color: var(--gray-100);

    cursor: pointer;
    overflow: hidden;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.9);
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0 0.7rem;
        height: 100%;

        background: var(--blue-facebook);
    }

    span {
        flex: 1;
        display: block;
        align-self: center;

        padding: 0 1rem 0;

        font-size: 0.8rem;
        font-weight: 500;
    }

    &.default span {
        @media(min-width: 768px) {
            &.small-screen {
                display: none;
            }
        }

        @media(max-width: 767px) {
            &.wide-screen {
                display: none;
            }
        }
        @media(max-width: 425px) {
            &.small-screen {
                display: none;
            }
        }
    }

    &.rooms-page .small-screen {
        display: none;
    }
`