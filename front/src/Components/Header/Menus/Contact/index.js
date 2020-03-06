import React from 'react';

export default function Games() {
 return (
    <li className='dropdown'><a href='/Contact' className='trigger-drop'>Contacts<i className='arrow'></i></a>
        <ul className='drop'>
            <li><a href='/Contact/Apoiase'>APOIA se</a></li>
            <li><a href='/Contact/Pickpay'>PickPay</a></li>
            <li><a href='/Contact/Social'>Social Media</a></li>
        </ul>
    </li>
 );
}