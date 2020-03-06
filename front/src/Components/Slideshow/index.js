import React from 'react';

export default function Slideshow(props) {
 return (
    <div className='slideshows'>
        <div className='slideshow slideshow--hero'>
            <div className='slides'>
                <div className='slide slide1'></div>
                <div className='slide slide2'></div>
                <div className='slide slide3'></div>
            </div>
        </div>
        <div className='slideshow slideshow--contrast slideshow--contrast--before'>
            <div className='slides'>
                <div className='slide slide1'></div>
                <div className='slide slide2'></div>
                <div className='slide slide3'></div>
            </div>
        </div>
        <div className='slideshow slideshow--contrast slideshow--contrast--after'>
            <div className='slides'>
                <div className='slide slide1'></div>
                <div className='slide slide2'></div>
                <div className='slide slide3'></div>
            </div>
        </div>
    </div>
 );
}