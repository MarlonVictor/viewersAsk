import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import Routes from './routes';
import { AuthContextProvider } from './contexts/AuthContext';

import { GlobalStyle } from './styles/global';


function App() {
    return (
        <AuthContextProvider>
            <HelmetProvider>
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
            </HelmetProvider>
        </AuthContextProvider>
    )
}

export default App;