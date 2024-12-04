import React from "react";
import { NavLink } from "react-router";

export default function NavigationPage() {
    return(
        <div id='navPageDiv'>
            <NavLink to='/runtimeData'>
                <button id='navPageDataButton' className='navPageButtons'>Runtime Data</button>
            </NavLink>
            <NavLink to='/newRunForm'>
                <button id='navPageNewRunButton' className='navPageButtons'>New Run</button>
            </NavLink>
        </div>
    )
}