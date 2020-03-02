import React, { Component } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import Gridlitle from './Grid/Item-little';
import Gridmediun from './Grid/item-medium';
import GridHighest from './Grid/item-highest';

class ListTables extends Component{
  constructor(props){
    super(props);
    this.state = {
      itens: props.itens,
      params: useSelector(state = state.params)
    };
  }

  render(){
    return(
      <div className='grid-layout-table'>
        { this.state.itens.map((item) => {
            switch(this.state.params.tipoProcura){
              case 'RATING':
                if(item.rating < 1.5){
                  return(
                    <Gridlitle item={item}></Gridlitle>
                  );
                }
                else if(item.rating >= 1.5 && item.rating < 4){
                  return(
                    <Gridmediun item={item}></Gridmediun>
                  );
                }
                else{
                  return(
                    <GridHighest item={item}></GridHighest>
                  )
                }

              case 'POPULARITY':
                if(item.popularity < 2)
                  return(
                    <Gridlitle item={item}></Gridlitle>
                  )
                else if(item.popularity >= 2 && item.popularity < 4)
                  return(
                    <Gridmediun item={item}></Gridmediun>
                  )
                else  
                  return(
                    <GridHighest item={item}></GridHighest>
                  )
              
              case 'PLAYERS':
                if(item.players < 3)
                  return (
                    <Gridlitle item={item} />
                  )
                else if(item.players >= 3 && item.players < 6)
                  return (
                    <Gridmediun item={item} />
                  )
                else
                  return (
                    <GridHighest item={item} />
                  )
            }
        })}
      </div>
    );
  }
}