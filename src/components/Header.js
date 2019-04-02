import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

export default ()=>{
    return(
        <div class="header">
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/about">About</NavLink>
            </div>
            <div>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}