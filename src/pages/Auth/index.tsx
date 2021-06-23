import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import googleIconImg from '../../assets/google-icon.svg';
import enterIconImg from '../../assets/enter-icon.svg';
import logoImg from '../../assets/logo.svg';

import { AuthContainer, FormContainer, SeparatorSpan } from './styles';


export function Auth() {
    const history = useHistory()
    const { user , signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new')
    }

    return (
        <AuthContainer>
            <Aside />

            <main>
                <div>
                    <img src={logoImg} alt="ViewerAsk" />

                    <Button className="create-with-google" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </Button>

                    <SeparatorSpan>ou entre em uma sala</SeparatorSpan>

                    <FormContainer>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
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