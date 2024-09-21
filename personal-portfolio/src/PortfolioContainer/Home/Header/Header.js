import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/AboutMe',
    text: 'About',
  },
  {
    id: 3,
    url: '/Resume',
    text: 'Resume',
  },
  {
    id: 4,
    url: '/Projects',
    text: 'Projects',
  },
  {
    id:5,
    url: '/Testimonial',
    text: 'Testimonial',
  },
  {
    id: 6,
    url: '/ContactMe',
    text: 'Contact',
  },
]

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1 className="logo">Creative Power Dev</h1>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul  className='links' ref={linksRef} >
            {links.map((link) => {
              const { id,url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;