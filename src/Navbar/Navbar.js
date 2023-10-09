import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav className='main-nav'>
        <a href='index.html' className='logo'>
        <svg id="logo-72" width="30" height="44" viewBox="0 -2 55 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" class="ccustom" fill="#FFFFFF"></path></svg>
        </a>

        <div className={`menu-link ${hamburger ? 'mobile' : ''}`}>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Project</a>
            </li>
            <li>
              <a href='#'>Certificate</a>
            </li>
          </ul>
        </div>

        <div className='search'>
            <input type="search"/>
            <button type="submit">Search</button>
        </div>

        <div className='hamburger-menu' onClick={toggleHamburger}>
          {hamburger ? <ImCross color={'white'} /> : <GiHamburgerMenu color={'white'} />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
