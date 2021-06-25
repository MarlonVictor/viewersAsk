import { useHistory, useParams } from 'react-router-dom';

import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

import logoImg from '../../assets/logo.svg';
import deleteImg from '../../assets/delete.svg';
import checkImg from '../../assets/check.svg';
import answerImg from '../../assets/answer.svg';

import { AdminRoomContainer, MainContent } from './styles';


interface RoomParams {
    id: string;
}

export function AdminRoom() {
    const params = useParams<RoomParams>()
    const history = useHistory()
    const roomId = params.id

    const { title, questions } = useRoom(roomId)

    async function handleEndRoom() {
        database.ref(`rooms/${roomId}`).update({
            closedAt: new Date()
        })

        history.push('/')
    }

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        })
    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true
        })
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm("Tem certeza que você deseja excluir essa pergunta?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    return (
        <AdminRoomContainer>
            <header>
                <div>
                    <img src={logoImg} alt="ViewerAsk" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button 
                            className="close-room"
                            onClick={handleEndRoom}
                        >
                            Encerrar sala
                        </Button>
                    </div>
                </div>
            </header>

            <MainContent>
                <div>
                    <h1>Sala: {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <section>
                    {questions.map(q => {
                        return (
                            <Question 
                                key={q.id}
                                content={q.content}
                                author={q.author}
                                isAnswered={q.isAnswered}
                                isHighlighted={q.isHighlighted}
                            >
                                {!q.isAnswered && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => handleCheckQuestionAsAnswered(q.id)}
                                        >
                                            <img src={checkImg} alt="Marcar pergunta como respondida" />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleHighlightQuestion(q.id)}
                                        >
                                            <img src={answerImg} alt="Destacar a pergunta" />
                                        </button>
                                    </>
                                )}

                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(q.id)}
                                >
                                    <img src={deleteImg} alt="Remover a pergunta" />
                                </button>
                            </Question>
                        )
                    })}
                </section>
            </MainContent>
        </AdminRoomContainer>
    )
}