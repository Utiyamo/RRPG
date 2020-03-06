import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Games from '../Menus/Games';
import Contact from '../Menus/Contact';
import Login from '../Menus/Login';

class notLogon extends Component{
    render(){
        return(
            <nav id='navigation-notlogon'>
                <a href='#' className='logo'>Chaos<span>Board</span></a>
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

export default notLogon;