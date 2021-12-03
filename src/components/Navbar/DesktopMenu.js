import React from 'react';
import { Link } from 'react-router-dom';
import './desktop.css';

const DesktopMenu = () => (
    <nav className="nav_container">

    <h1>
        Math Magicians
    </h1>

    <ul className="ul_menu_container">
    <li key="/">
            <Link to="/">Home</Link>
          </li>
    <li key="/about">
            <Link to="/calculator">Calculator</Link>
          </li>
    <li key="/quote" className="lastChildList">
            <Link to="/quote">Quote</Link>
          </li>

    </ul>
    </nav>
);

export default DesktopMenu;