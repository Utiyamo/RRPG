import React, { Component } from 'react';

import Games from '../Menus/Games';
import Contact from '../Menus/Contact';
import Login from '../Menus/Login';

class areLogon extends Component{
    render(){
        return(
            <nav className='navigation-logon'>
                <a href='/Home' className='logo'>Chaos<span>Board</span></a>
                <ul className='links'>
                    <li><a href='/About'>About</a></li>
                    <Games />
                    <Contact />
                    <Login />
                </ul>
            </nav>
        );
    }
}

export default areLogon;