import React from 'react';
import Chart from 'chart.js/auto';
import RuntimeBarGraph from './charts/runtimeBarGraph.jsx';
import hachLogo from '../images/HACH-LOGO-Blue.svg';
import { BsHouse } from "react-icons/bs";
import { NavLink } from "react-router";
import '../styles/runtime-data.css';

export default function RuntimeDataPage() {
        
    return (
        <div id='runtimeDataDiv'>
            <h1 id='dataTitle' className='pageTitle'>SMT Runtime Data</h1>
            <NavLink to='/'>
                <button id='dataHomeButton' className='homeButton'><BsHouse size='30'/></button>
            </NavLink>
            <img id='dataPageLogo' className='titleLogo' src={hachLogo} />
            <RuntimeBarGraph />
        </div>
    )
}