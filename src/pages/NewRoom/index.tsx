import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import logoImg from '../../assets/logo.svg';

import { NewRoomContainer, MainContent, FormContainer } from './styles';


export function NewRoom() {
    const { user } = useAuth()

    return (
        <NewRoomContainer>
            <Aside />

            <main>
                <MainContent>
                    <img src={logoImg} alt="ViewerAsk" />

                    <h2>Criar uma nova sala</h2>

                    <FormContainer>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
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