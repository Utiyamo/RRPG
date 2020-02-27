import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './Components/Header';
import Store from  './Store';

class App extends Component{
  render(){
     return(
        <Provider store={Store}>
            <BrowserRouter>
                <Header/>
                <Routes/>
            </BrowserRouter>
        </Provider>
     );
 }
}

export default App;
