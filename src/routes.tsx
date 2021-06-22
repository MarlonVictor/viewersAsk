import { BrowserRouter, Route } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { NewRoom } from './pages/NewRoom';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Auth} />
            <Route path="/rooms/new" component={NewRoom} />
        </BrowserRouter>
    )
}

export default Routes;