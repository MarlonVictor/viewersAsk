import { useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

import { NotFoundContainer } from './styles';


export function NotFound() {
    const history = useHistory()

    function goToHome() {
        history.push('/')
    }

    function goBack() {
        history.goBack()
    }

    return (
        <NotFoundContainer>
            <Helmet>
                <title>404 | ViewersAsk</title>
            </Helmet>
            <div className="top">
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
            <div className="container">
                <div className="ghost-copy">
                    <div className="one" />
                    <div className="two" />
                    <div className="three" />
                    <div className="four" />
                </div>
                <div className="ghost">
                    <div className="face">
                        <div className="eye" />
                        <div className="eye-right" />
                        <div className="mouth" />
                    </div>
                </div>
                <div className="shadow" />
            </div>
            <div className="bottom">
                <p>Parece que não conseguimos encontrar a página que você estava procurando!</p>
                <div className="buttons">
                    <button onClick={goBack}>Back</button>
                    <button onClick={goToHome}>Home</button>
                </div>
            </div>
        </NotFoundContainer>
    )
}