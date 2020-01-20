import React from 'react';
import './myWork.css'
import Aside from '../Aside/Aside';

export default function Other(){
    return (
        <div className='myWork'>
            <ul>
                <li>JavaScript widgets</li>
                <li>Websites</li>
                <li>Other</li>
            </ul>
            <Aside/>
        </div> 
    )
}