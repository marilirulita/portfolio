import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

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
    {
      id: 3,
      path: '/projects',
      text: 'Projects',
    },
    {
      id: 4,
      path: '/contact',
      text: 'Contact',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="submit" onClick={handleToggle}>
        {
          navbarOpen
            ? (
              <MdClose
                style={{ color: '#fff', width: '40px', height: '40px' }}
              />
            )
            : (
              <FiMenu
                style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
              />
            )
        }
      </button>
      <div className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <Link to="/" onClick={() => closeMenu()} className="iconLogo">
        Mar Bautista
        </Link>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={() => closeMenu()}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li><a href="https://github.com/marilirulita" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/marbautista" target="_blank">Linkedin</a></li>
          <li><a href="https://twitter.com/marylirulita" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
