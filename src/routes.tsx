import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { Rooms } from './pages/Rooms';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
import { NotFound } from './pages/NotFound';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/rooms" exact component={Rooms} />
                <Route path="/rooms/new" component={NewRoom} />
                <Route path="/rooms/:id" component={Room} />
                <Route path="/admin/rooms/:id" component={AdminRoom} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;