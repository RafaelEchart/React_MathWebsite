import React from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const HamburgerButton = (props) => (
    <button onClick={props.handleToggle}>
        {props.navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '30px', height: '30px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '30px', height: '30px' }} />
        )}
      </button>
);

export default HamburgerButton;