import React from 'react';

import GridItem from './GridItem';

export default function HomeGrid(props) {
 return (
   <div className='band'>
       {
           props.lista.map((item) => {
               return(
                   <GridItem estilocard={item.estilocard} img={item.img} titulo={item.titulo} autor={item.autor} />
               )
           })
       }
   </div>
 );
}