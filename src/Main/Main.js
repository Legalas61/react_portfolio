import React from 'react';
import './Main.css';
import Aside from '../Aside/Aside';

export default function Main() {
  return (
    <div className="App">
      <header>
        <span>Shahty, Russia</span>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          2019
        </a>
      </header>
      <main>
        <span>Portfolio 2020</span>
        <p>
          Dmitry Koptelov
          <ul>
            <li>Frontend developer (ReactJS)</li>
            <li>Mobile developer (ReactNavive)</li>
            <li>Backend developer (Django)</li>
            <li>GameDev (Godo)</li>
          </ul>         
        </p>
      </main>
    <Aside />
    </div>
  );
}
