import { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import toast from 'react-hot-toast';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { Loading } from '../../components/Loading';
import { Modal } from '../../components/Modal';
import { EmptyQuestions } from '../../components/EmptyQuestions';

import logoImg from '../../assets/logo.svg';
import exitImg from '../../assets/exit.svg';
import googleIconImg from '../../assets/google-icon.svg';
import facebookIconImg from '../../assets/facebook-icon.svg';

import { RoomContainer, MainContent, FormContainer } from './styles';


interface RoomParams {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>()
    const roomId = params.id

    const history = useHistory()
    const { user, signInWithGoogle, signInWithFacebook, signOut } = useAuth()
    const { title, questions } = useRoom(roomId)

    const orderedQuestions = questions.sort((a, b) => b.likeCount - a.likeCount)

    const [newQuestion, setNewQuestion] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (title !== '') {
            setLoading(false)
        }
    }, [title, user, history])

    async function handleSendQuestion(e: FormEvent) {
        e.preventDefault()

        if (newQuestion.trim().length < 20) {
            toast.error('Mínimo de 20 caracteres')
            return
        }

        if (newQuestion.trim().length > 1000) {
            toast.error('Máximo de 1000 caracteres')
            return
        }

        if (!user) {
            throw new Error('You must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar
            },
            isHighlighted: false,
            isAnswered: false
        }

        await database.ref(`rooms/${roomId}/questions`).push(question)

        setNewQuestion('')
    }

    async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
        if (user) {
            if (likeId) {
                await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
                
            } else {
                await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
                    authorId: user?.id
                })
            }
        } else {
            setModalIsOpen(true)
            return
        }
    }

    async function handleSignIn(type: string) {
        if (type === "Google") {
            await signInWithGoogle()

        } else if (type === "Facebook") {
            await signInWithFacebook()
        }

        setModalIsOpen(false)
    }

    async function handleSignOut() {
        await signOut()
        history.push('/')
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <RoomContainer>
            <Helmet>
                <title>{title} | ViewersAsk</title>
            </Helmet>
            <header>
                <div>
                    <img src={logoImg} alt="ViewerAsk" />
                    <div>
                        <RoomCode code={roomId} />
                        {user && (
                            <button 
                                className="exit-button"
                                onClick={handleSignOut}
                                aria-label="Sair da conta"
                            >   
                                <img src={exitImg} alt="Sair da conta" />
                                Sair
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <MainContent>
                <div>
                    <h1>Sala: {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <FormContainer onSubmit={handleSendQuestion}>
                    <textarea 
                        placeholder="O que você deseja perguntar?" 
                        onChange={e => setNewQuestion(e.target.value)}
                        value={newQuestion}
                    />

                    <div>
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>
                                Para enviar uma pergunta, 
                                <button onClick={() => setModalIsOpen(true)} type="reset">
                                    Faça seu login
                                </button>.
                            </span>
                        )}

                        <Button type="submit" className="send-message" disabled={!user}>
                            Enviar Pergunta
                        </Button>
                    </div>
                </FormContainer>

                <section>
                    {questions.length > 0 
                        ? (
                            orderedQuestions.map(q => {
                                return (
                                    <Question 
                                        key={q.id}
                                        content={q.content}
                                        author={q.author}
                                        isAnswered={q.isAnswered}
                                        isHighlighted={q.isHighlighted}
                                    >
                                        {!q.isAnswered && (
                                            <button 
                                                type="button"
                                                className={`like-button ${q.likeId && 'liked'}`} 
                                                aria-label="Marcar como gostei"
                                                onClick={() => handleLikeQuestion(q.id, q.likeId)}
                                            >
                                                {q.likeCount > 0 && <span>{q.likeCount}</span>}
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                        )}
                                    </Question>
                                )
                            })
                        )
                        : <EmptyQuestions />
                    }
                </section>
            </MainContent>

            <Modal 
                isOpen={modalIsOpen} 
                closeModal={() => setModalIsOpen(false)}
            >
                <h2>Fazer login com:</h2>

                <div>
                    <Button className="login-with-google" onClick={() => handleSignIn("Google")}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Google
                    </Button>
                    <Button className="login-with-facebook" onClick={() => handleSignIn("Facebook")}>
                        <img src={facebookIconImg} alt="Logo do Facebook" />
                        Facebook
                    </Button>
                </div>
            </Modal>
        </RoomContainer>
    )
}