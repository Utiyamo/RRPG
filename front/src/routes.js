import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Sett from './Pages/Settings';
import MyGames from './Pages/Profile/Games';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Profile/Settings' component={Sett} />
            <Route path='/Profile/MyGames' component={MyGames} />
            <Route path='/Home' component={Home} />
            <Route path='/Login' component={Login} />
        </Switch>
    );
}

export default Routes;