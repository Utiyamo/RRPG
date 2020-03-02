import React from 'react';

export default function Contact() {
 return (
    <li className='dropdown'><a href='/Games' className='trigger-drop'>Games<i className='arrow'></i></a>
        <ul className='drop'>
            <li><a href='/Games/Muchikin'>Muchikin</a></li>
            <li><a href='/Games/Pokemon'>Pokemon</a></li>
            <li><a href='/Games/Dutch_Blitz'>Blitz</a></li>
            <li><a href='/Games/Super_Trunfo'>Super Trunfo</a></li>
        </ul>
    </li>
 );
}