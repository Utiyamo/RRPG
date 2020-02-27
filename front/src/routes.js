import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Login' component={Login} />
        </Switch>
    );
}

export default Routes;