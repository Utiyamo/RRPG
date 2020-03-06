import React, { Component } from 'react';

import Games from '../Menus/Games';
import Contact from '../Menus/Contact';


class notLogon extends Component{
    render(){
        return(
            <nav className='navigation-logon'>
                <a href='#' className='logo'>Chaos<span>Board</span></a>
                <ul className='links'>
                    <li><a href='/About'>About</a></li>
                    <Games />
                    <Contact />
                    <li><a href='/Login'>Login</a></li>
                </ul>
            </nav>
        );
    }
}

export default notLogon;