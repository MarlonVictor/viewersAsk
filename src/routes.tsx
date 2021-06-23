import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/rooms/new" component={NewRoom} />
                <Route path="/rooms/:id" component={Room} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;