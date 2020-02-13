import React, { Component } from 'react';
import './App.css';

import Login from './Components/Login';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      logon: false
    };

    this.SignUp = this.SignUp.bind(this);
  }

  SignUp(key){
    let state = this.state;
    state.logon = key;

    this.setState(state);
  }

  render(){
    return(
      <div>
        {this.state.logon === false &&
        <Login logon={this.SignUp} />
        }
        {this.state.logon === true &&
        <div>
        </div>
        }
      </div>
    );
  }
}

export default App;
