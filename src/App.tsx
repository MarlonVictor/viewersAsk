import Routes from './routes';
import { AuthContextProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from './styles/global';


function App() {
    return (
        <AuthContextProvider>
            <GlobalStyle />
            <Routes />

            <Toaster 
                toastOptions={{
                    style: {
                        background: '#303134', 
                        color: '#E7E7E9'
                    },
                }}
            />
        </AuthContextProvider>
    )
}

export default App;