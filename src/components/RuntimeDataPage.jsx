import React from 'react';
import Chart from 'chart.js/auto';
import RuntimeBarGraph from './charts/runtimeBarGraph.jsx';
import hachLogo from '../images/HACH-LOGO-Blue.svg';
import '../styles/runtime-data.css';

export default function RuntimeDataPage() {

    return (
        <div id='runtimeDataDiv'>
            <h1 id='dataTitle' className='pageTitle'>SMT Runtime Data</h1>
            <img id='dataPageLogo' className='titleLogo' src={hachLogo} />
            <div id='runtimeBarGraphDiv'>
                <RuntimeBarGraph />
            </div>
        </div>
    )
}