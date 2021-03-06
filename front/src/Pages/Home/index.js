import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './style.scss';

import Slideshow from '../../Components/Slideshow';
import HomeGrid from '../../Components/HomeGrid';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            params: '',
            grids: []
        }
    }

    componentDidMount(){
        axios.defaults.baseURL = this.state.params.baseurl;
        axios.defaults.headers.post['Content-Type']='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        let url = `${this.state.params.baseurl}/home/feed`;
        axios.get(url).then(response => response.data).then((data) => {
            this.setState({grids: data});
            console.log(this.state.grids);
        });
    }

    render(){
        return(
            <div>
                <div className='wrapper'>
                    <Slideshow />
                    <Letreiro />
                </div>
                <HomeGrid lista={this.state.grids}/>
            </div>
        );
    }
}

const Letreiro = (props) => {
    return(
        <div className='home-letreiro'>
            <h1>Bem vindo ao Chaos<span>Board</span></h1>
        </div>
    );
}

export default Home;