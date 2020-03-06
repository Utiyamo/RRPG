import React, { Component } from 'react';
import {} from 'react-redux';

import Social from '../../Components/Social';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){

    }

    render(){
        return(
            <section className='section-footer'>
                <div className='corp-container'>
                    <h1 className='corp-tittle'>Chaos Board</h1>
                </div>
                <div className='corp-social'>
                    <Social />
                </div>
            </section>
        );
    }
    
}

export default Footer;