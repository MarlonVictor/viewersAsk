import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/logo.svg';

import { RoomContainer, MainContent, FormContainer } from './styles';


interface RoomParams {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>()
    const [newQuestion, setNewQuestion] = useState('')

    const roomId = params.id

    return (
        <RoomContainer>
            <header>
                <div>
                    <img src={logoImg} alt="ViewerAsk" />
                    <RoomCode code={roomId} />
                </div>
            </header>

            <MainContent>
                <div>
                    <h1>Live do Japonês</h1>
                    <span>4 perguntas</span>
                </div>

                <FormContainer>
                    <textarea 
                        placeholder="O que você deseja perguntar?" 
                        onChange={e => setNewQuestion(e.target.value)}
                        value={newQuestion}
                    />

                    <div>
                        <span>Para enviar uma pergunta, <button>Faça seu login</button>.</span>

                        <Button type="submit" className="send-message" disabled>
                            Enviar Pergunta
                        </Button>
                    </div>
                </FormContainer>
            </MainContent>
        </RoomContainer>
    )
}