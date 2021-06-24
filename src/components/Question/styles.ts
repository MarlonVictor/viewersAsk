import styled from 'styled-components';


export const QuestionContent = styled.div`
    padding: 24px;
    border-radius: 8px;

    color: var(--gray-100);
    background: var(--gray-800);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

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
                margin-left: 8px;
                
                color: var(--gray-300);
                font-size: 0.9rem;
            }
        }
    }
`