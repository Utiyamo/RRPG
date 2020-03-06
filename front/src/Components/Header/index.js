import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

import NotLogon from './notLogon';
import AreLogon from './areLogon';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            params: {
                logon: true
            }
        };
    }
    render(){
        return(
            <div className='header'>
                {this.state.params.logon === true &&
                    <AreLogon />
                }
                {this.state.params.logon === false &&
                    <NotLogon />
                }
            </div>
        );
    }
}

export default Header;