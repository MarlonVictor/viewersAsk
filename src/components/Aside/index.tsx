import illustrationImg from '../../assets/illustration.svg';

import { AsideContainer } from './styles';


export function Aside() {
    return (
        <AsideContainer>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />

            <strong>Crie salas de perguntas e respostas ao vivo</strong>
            <p>Tire a dúvida da sua audiência em tempo real.</p>
        </AsideContainer>
    )
}