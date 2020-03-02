import React from 'react';

export default function Games() {
 return (
    <li className='dropdown'><a href='/Contact' className='trigger-drop'>Contacts<i className='arrow'></i></a>
        <ul>
            <li><a href='/Contact/Apoiase'>APOIA se</a></li>
            <li><a href='/Contact/Pickpay'>PICKPAY</a></li>
            <li><a href='/Contact/Social'>SOCIAL MEDIA</a></li>
        </ul>
    </li>
 );
}