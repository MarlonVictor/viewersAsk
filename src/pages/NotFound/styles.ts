import styled from 'styled-components';


export const NotFoundContainer = styled.div`
    .top {
        margin-top: 30px;

        h1 {
            margin: 0;

            text-align: center;
            font-size: 9em;
            color: #E7E7E9;
            text-shadow: -1px 0 #BFC0C0, 0 1px #BFC0C0, 1px 0 #BFC0C0, 0 -1px #BFC0C0;
        }
        h3 {
            margin-top: -20px;

            text-transform: uppercase;
            text-align: center;
            font-size: 2em;
            font-weight: 900;
            color: #BFC0C0;
        }
    }

    .container {
        position: relative;
        width: 250px;
        height: 250px;
        margin: 0 auto;
    }

    .ghost-copy {
        position: absolute;
        left: 26%;
        top: 10%;

        width: 50%;
        height: 53%;
        
        background: #E7E7E9;

        border-radius: 50% 50% 0 0;
        animation: float 2s ease-out infinite;
        z-index: 0;

        .one, .two, .three, .four {
            position: absolute;
            top: 85%;

            width: 25%;
            height: 23%;

            border: 1px solid #BFC0C0;
            background: #E7E7E9;
            z-index: 0;
        }

        .one {
            border-radius: 0 0 100% 30%;
            left: -1px;
        }

        .two {
            left: 23%;
            border-radius: 0 0 50% 50%;
        }

        .three {
            left: 50%;
            border-radius: 0 0 50% 50%;
        }

        .four {
            left: 74.5%;
            border-radius: 0 0 30% 100%;
        }
    }

    .ghost {
        position: absolute;
        left: 25%;
        top: 10%;

        width: 50%;
        height: 53%;

        background: #E7E7E9;
        
        border-radius: 50% 50% 0 0;
        animation: float 2s ease-out infinite;

        .face {
            position: absolute;
            top: 20%;
            width: 100%;
            height: 60%;

            .eye, .eye-right {
                position: absolute;
                top: 40%;
                width: 13px;
                height: 13px;

                border-radius: 50%;
                background: #89858B;
            }

            .eye {
                left: 25%;
            }

            .eye-right {
                right: 25%;
            }

            .mouth {
                position:absolute;
                top: 50%;
                left: 45%;

                width: 10px;
                height: 10px;

                border: 3px solid;
                border-radius: 50%;
                border-color: transparent #89858B #89858B transparent;
                transform: rotate(45deg);
            }
        }
    }

    .shadow {
        position: absolute;
        left: 35%;
        top: 80%;

        width: 30%;
        height: 7%;

        background: #BFC0C0;
        border-radius: 50%;
        animation: scale 2s infinite;
    }

    .bottom {
        margin-top: 10px;

        p {
            margin: -10px auto 10px;
            max-width: 250px;

            text-align: center;
            text-transform: uppercase;
            font-size: .6em;
            color: #89858B;
        }

        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 10px;

            button {
                padding: 15px 20px;
                margin: 5px;

                text-transform: uppercase;
                font-size: .6em;
                letter-spacing: 1px;
                color: #89858B;
                background: #E7E7E9;

                border: 0;
                cursor: pointer;

                &:hover {
                    background: #BFC0C0;
                    transition: all .4s ease-out;
                }
            }
        }
    }

    @keyframes scale {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes float {
        50% {
            transform: translateY(15px);
        }
    }
`