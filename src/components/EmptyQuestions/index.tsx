import emptyQuestionsImg from '../../assets/empty-questions.svg';

import { EmptyContainer } from './styles';


export function EmptyQuestions() {
    return (
        <EmptyContainer>
            <img 
                src={emptyQuestionsImg} 
                alt="Sem perguntas"
            />

            <strong>Nenhuma pergunta por aqui...</strong>

            <p>Compartilhe o código desta sala e comece a responder perguntas!</p>
        </EmptyContainer>
    )
}