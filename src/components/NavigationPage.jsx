import React from 'react';
import { NavLink } from 'react-router';
import hachBackground from '../images/hach_water1.jpg';
import '../styles/nav-page.css';

export default function NavigationPage() {
    return(
        <div id='navPageDiv'>
            <img id='navPageBackground' src={hachBackground} />
            <h1 id='navPageTitle'>SMT Line Tracker</h1>
            <div id='navButtonsDiv'>
                <NavLink to='/runtimeData'>
                    <button id='navPageDataButton' className='navPageButtons'>Runtime Data</button>
                </NavLink>
                <NavLink to='/newRunForm'>
                    <button id='navPageNewRunButton' className='navPageButtons'>New Run</button>
                </NavLink>
            </div>
        </div>
    )
}