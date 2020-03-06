import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'

class MenuLogin extends Component{
    constructor(props){
        super(props);

        this.state = {
            params: ''
        }

        this.disconect = this.disconect.bind(this);
    }

    disconect(){
        let logon = false
        useDispatch({
            type: 'ALTER_LOGON',
            logon
        });

        window.location.replace('#');
    }

    render(){
        return (
            <li className='dropdown'><a href='/Profile' className='trigger-drop'>Games<i className='arrow'></i></a>
                <ul className='drop'>
                    <li><a href='/Profile/MyGames'>My Games</a></li>
                    <li><a href='/Profile/Groups'>Groups</a></li>
                    <li><a href='/Profile/Settings'>Settings</a></li>
                    <li><a onClick={() => this.disconect()}>Logout</a></li>
                </ul>
            </li>
         );
    }
}

export default MenuLogin;