import React from 'react';

export default function GridItem(props) {
 return (
   <div className={props.id}>
       <a href='' className='card'>
           <div className='thumb' className={props.img}></div>
           <acticle>
               <h1>{props.titulo}</h1>
               <span>{props.autor}</span>
           </acticle>
       </a>
   </div>
 );
}