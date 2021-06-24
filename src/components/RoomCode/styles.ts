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
        width: 215px;

        font-size: 0.8rem;
        font-weight: 500;
    }
`