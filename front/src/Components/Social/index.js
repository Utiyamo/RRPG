import React from 'react';
import './style.scss';

export default function Social() {
 return (
   <div className='social-container'>
       <ul className='social-icons'>
            <li>
                <a href=''>
                    <i className='fa fa-steam' aria-hidden='true'></i>
                </a>
            </li>
            <li>
                <a href=''>
                    <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
            </li>
            <li>
                <a href=''>
                    <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
            </li>
            <li>
                <a href=''>
                    <i className='fa fa-reddit' aria-hidden='true'></i>
                </a>
            </li>
            <li>
                <a href=''>
                    <i className='fa fa-youtube' aria-hidden='true'></i>
                </a>
            </li>
       </ul>
   </div>
 );
}