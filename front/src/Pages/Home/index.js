import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import './style.css';

import Slideshow from '../../Components/Slideshow';
import Slides  from '../../Components/Slides';


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            logon: useSelector(state => state.params),
        }
    }

    render(){
        return(
            <div>
                <div className='wrapper'>
                    <Slideshow lista={Slides} />
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default Home;