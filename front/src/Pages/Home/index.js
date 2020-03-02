import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import './style.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            logon: useSelector(state => state.params)
        }
    }

    

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default Home;