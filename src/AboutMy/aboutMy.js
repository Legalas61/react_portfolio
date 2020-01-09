import React from 'react';
import './aboutMy.css'
import Aside from '../Aside/Aside';
import { NavLink } from 'react-router-dom';

export default function AboutMy(){
    return(
        <div className='aboutMy'>
             <div className='leftBar'>
                <span>Portdolio 2k2</span>
                <NavLink to='/'>Go Back</NavLink>
                <h1>About My</h1>
                <p>
                    <b>Hello,</b>
                My name is Dmitry Koptelov and I am a frontend developer, mobile developer,
                 and game developer based out of Shahty, Rostovskaya obl. 
                I am graduated at South Russian State Polytechnic University (NPI) named after
                 M.I. Platova, majoring in the technical a have a master's degree. Not it
                  specialties. Worked at couple of months as at automation QA engineer (on Node.js)
                </p>
            </div>
            <main>
            <Aside/>
            <ul>
                <li>
                    <b>ShahtyToday <small>January 2020 - now</small></b>
                    <ul>
                        I am making a city portal on a Django 3 and vanilla JS stack from scratch
                    </ul>
                </li>
                <li>
                    <b>Callbox Marketplace <small>January 2019 - January 2020</small> </b>
                    <ul>
                        UI development (HTML \ CSS \ ES 6).
                        <ul>
                            <li>Creation, design and troubleshooting code (HTML, SASS, JS, Gulp).</li>
                            <li>Design and implementation of dynamic UI components and scripts (Discussion of layouts with designers, nativeJS);</li>
                            <li>Writing and supporting design and accompanying documentation as necessary.</li>
                        </ul>

                            Testing
                            <ul>
                                <li>Writing test cases.</li>
                                <li>Automation with Selenium(NodeJS).</li>
                            </ul>   

                        Team management (hiring and interacting with the developer’s backend, discussing new functionality. Compliance with deadlines, budgets).
                    </ul>
                </li>
                <li>
                    <b>2Dream <small>January 2018 - December 2018</small></b>
                    <ul>
                        UI development (HTML \ CSS \ ES 5-6).
                        <ul>
                            <li>Interactive elements (questionnaires, sliders, presentations) for sites.</li>
                            <li>Rewriting widget code from libraries on nativeJS.</li>
                            <li>Creating calculators.</li>
                            <li>Creating graphics (SVG, raster), animation of SVG elements using.</li>
                        </ul>                   
                    </ul>
                </li>
            </ul>
            </main>
        </div>  
    )
}