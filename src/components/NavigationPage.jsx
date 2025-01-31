import React from 'react';
import { NavLink } from 'react-router';
import hachBackground from '../images/hach_loveland_R&D.png';
import hachLogo from '../images/HACH-LOGO-Blue.svg';
import '../styles/nav-page.css';

export default function NavigationPage() {
    return(
        <div id='navPageDiv'>
            <h1 id='navPageTitle' className='pageTitle'>SMT Line Tracker</h1>
            <img id='navPageLogo' className='titleLogo' src={hachLogo} />
            <div id='backgroundDiv'>
                <img id='navPageBackground' src={hachBackground} />
            </div>
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