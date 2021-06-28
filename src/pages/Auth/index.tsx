import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import facebookIconImg from '../../assets/facebook-icon.svg';
import googleIconImg from '../../assets/google-icon.svg';
import enterIconImg from '../../assets/enter-icon.svg';
import logoImg from '../../assets/logo.svg';

import { AuthContainer, FormContainer, SeparatorSpan } from './styles';


export function Auth() {
    const history = useHistory()
    const { user , signInWithGoogle, signInWithFacebook } = useAuth()

    const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom(type: string) {
        if (!user) {
            if (type === "Google") {
                await signInWithGoogle()

            } else if (type === "Facebook") {
                await signInWithFacebook()
            }
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom(e: FormEvent) {
        e.preventDefault()

        if (roomCode.trim() === '') {
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if (!roomRef.exists()) {
            alert('Room does not exists.')
            setRoomCode('')
            return
        }

        if (roomRef.val().closedAt) {
            alert('Room already closed.')
            setRoomCode('')
            return
        }

        history.push(`/rooms/${roomCode}`)
    }

    return (
        <AuthContainer>
            <Aside />

            <main>
                <div>
                    <img src={logoImg} alt="ViewerAsk" />

                    <Button className="create-with-google" onClick={() => handleCreateRoom("Google")}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </Button>

                    <Button className="create-with-facebook" onClick={() => handleCreateRoom("facebook")}>
                        <img src={facebookIconImg} alt="Logo do Facebook" />
                        Crie sua sala com o Facebook
                    </Button>

                    <SeparatorSpan>ou entre em uma sala</SeparatorSpan>

                    <FormContainer onSubmit={handleJoinRoom}>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={e => setRoomCode(e.target.value)}
                            value={roomCode}
                        />

                        <Button type="submit" className="enter-room">
                            <img src={enterIconImg} alt="Logo de enter" />
                            Entrar na sala
                        </Button>
                    </FormContainer>
                </div>
            </main>
        </AuthContainer>
    )
}