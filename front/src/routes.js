import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

const Routes = () => {
    return(
        <Switch>
            <Route path='/Profile' component={Profile} />
            <Route path='/Home' component={Home} />
            <Route path='/Login' component={Login} />
        </Switch>
    );
}

export default Routes;