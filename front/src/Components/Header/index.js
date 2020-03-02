import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

import notLogon from './notLogon';
import areLogon from './areLogon';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            params: useSelector(state => state.params)
        };
    }
    render(){
        return(
            <div className='header'>
                {this.state.params.logon === true &&
                    <areLogon />
                }
                {this.state.params.logon === false &&
                    <notLogon />
                }
            </div>
        );
    }
}

export default Header;