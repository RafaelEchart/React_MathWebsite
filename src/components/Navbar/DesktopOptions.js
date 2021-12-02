import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopOptions = (props) => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  return (<ul className={`menuNav ${props.navbarOpen ? ' showMenu' : ''}`}>
    {links.map((link) => (
        <li key={link.id}>
          <NavLink
            activeclassname="active-link"
            to={link.path}
            onClick={() => props.closeMenu()}
          >
            {link.text}
          </NavLink>
        </li>
    ))}
  </ul>);
};

export default DesktopOptions;