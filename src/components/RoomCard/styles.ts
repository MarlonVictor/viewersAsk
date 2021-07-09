import styled from "styled-components";


export const RoomCardContent = styled.div`
    position: relative;
    min-height: 180px;
    padding: 2rem;

    background: var(--gray-800);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border-radius: 8px;

    a {
        color: var(--gray-100);
        text-decoration: none;

        transition: color .3s;

            &:hover {
                color: var(--purple-twitch);
            } 
    }
    
    h3 {
        font-weight: 500;
    }

    footer {
        position: absolute;
        bottom: 2rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 2.4rem;
    }
`

export const ClosedRoomCard  = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 240px;

    font-weight: 500;
    letter-spacing: .3px;
    background-color: #E95671;

    border-radius: 8px;
    cursor: default;

    @media(max-width: 425px) {
        width: 200px;
    }
`