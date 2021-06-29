import styled from 'styled-components';


export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 1rem;
    gap: 0.5rem;

    text-align: center;

    img {
        width: 9rem;
    }

    strong {
        margin-top: 1rem;

        font-size: 1.2rem;
        letter-spacing: 0.5px;
    }

    p {
        color: var(--gray-300);
        font-size: 1rem;
    }
`