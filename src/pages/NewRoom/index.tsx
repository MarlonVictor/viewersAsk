import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import logoImg from '../../assets/logo.svg';

import { NewRoomContainer, MainContent, FormContainer } from './styles';


export function NewRoom() {
    const history = useHistory()
    const { user } = useAuth()

    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(e: FormEvent) {
        e.preventDefault()
        
        if (newRoom.trim() === '') {
            return
        }

        const roomRef = database.ref('rooms')

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <NewRoomContainer>
            <Aside />

            <main>
                <MainContent>
                    <img src={logoImg} alt="ViewerAsk" />

                    <h2>Criar uma nova sala</h2>

                    <FormContainer onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                            onChange={e => setNewRoom(e.target.value)}
                            value={newRoom}
                        />

                        <Button type="submit" className="enter-room">
                            Criar sala
                        </Button>
                    </FormContainer>

                    <p>
                        Quer entrar em uma sala existente?
                        <Link to='/'>Clique aqui</Link>    
                    </p>
                </MainContent>
            </main>
        </NewRoomContainer>
    )
}