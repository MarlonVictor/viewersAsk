import Routes from './routes';
import { AuthContextProvider } from './contexts/AuthContext';

import { GlobalStyle } from './styles/global';


function App() {
    return (
        <AuthContextProvider>
            <GlobalStyle />
            <Routes />
        </AuthContextProvider>
    )
}

export default App;