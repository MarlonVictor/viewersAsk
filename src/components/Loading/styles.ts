import styled from 'styled-components';


export const LoaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    background: var(--gray-900);

    position: absolute;
    top: 0;
    left: 0;

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        width: 180px;
        height: 80px;

        border-radius: 8px;
        background-color: var(--gray-800);
        box-shadow: 4px 4px 20px rgba(0,0,0,0.3);

        &:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 15px;

            border-top: 15px solid #303134;
            border-right: 20px solid transparent;
        }

        div {
            display: flex;
            position: relative;

            height: 15px;
            width: 105px;
        }
    }
`

export const Circle = styled.span`
    width: 10px;
    height: 10px;
    margin-right: 30px;

    border-radius: 50%;
    background-color: var(--gray-300);
    animation: move 500ms linear 0ms infinite;

    &:first-child {
        position: absolute;
        top:0;
        left:0;

        animation: grow 500ms linear 0ms infinite;
    }

    &:last-child {
        position: absolute;
        top: 0;
        right: 0;
        
        margin-right: 0;
        animation: grow 500ms linear 0s infinite reverse;
    }

    @keyframes grow {
        from {transform: scale(0,0); opacity: 0;}
        to {transform: scale(1,1); opacity: 1;}
    }

    @keyframes move {
        from {transform: translateX(0px)}
        to {transform: translateX(45px)}
    }
`