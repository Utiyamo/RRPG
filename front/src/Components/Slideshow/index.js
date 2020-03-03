import React from 'react';

export default function Slideshow(props) {
 return (
    <div className='slideshows'>
        <div className='slideshow slideshow--hero'>
            <div className='slides'>
                { props.lista.map((item) => {
                    return(
                        <div className={item.css}></div>
                    );
                }) 
                }
            </div>
        </div>
        <div className='slideshow slideshow--contrast slideshow--contrast--before'>
            <div className='slides'>
                {
                    props.lista.map((item) => {
                        return(
                            <div className={item.css}></div>
                        );
                    })
                }
            </div>
        </div>
        <div className='slideshow slideshow--contrast slideshow--contrast--after'>
            <div className='slides'>
                {
                    props.lista.map((item) => {
                        return(
                            <div className={item.css}></div>
                        );
                    })
                }
            </div>
        </div>
    </div>
 );
}