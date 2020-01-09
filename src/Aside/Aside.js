import React from 'react';
import { NavLink } from 'react-router-dom';
import './Aside.css'

export default function Aside(){
    return (
        <aside>
        <div className ='contact'>
         <a
             href="mail:Legalas07@yandex.ru"
             target="_blank"
             rel="noopener noreferrer"
           >
             Send Email
           </a>
         <a
           href="https://t.me/Dev_KD"
           target="_blank"
           rel="noopener noreferrer"
         >
           Telegram
         </a>
         <a
           href="https://t.me/Dev_KD"
           target="_blank"
           rel="noopener noreferrer"
         >
           GitHab
         </a>
        </div>
        <div className='aboutMy'>
          <NavLink to='aboutMy'>About my</NavLink>
          <NavLink to='myWork'>My work</NavLink>
        </div>
       </aside>
    )
}