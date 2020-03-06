import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Store from  './Store';

class App extends Component{
  render(){
     return(
        <Provider store={Store}>
            <BrowserRouter>
                <Header/>
                <Routes/>
                <Footer/>
            </BrowserRouter>
        </Provider>
     );
 }
}

export default App;
