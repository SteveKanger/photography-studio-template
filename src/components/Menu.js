import React from 'react';
import { scroller, animateScroll as scroll } from 'react-scroll';

const Menu = () => {
  const scrollTo = el => {
    scroller.scrollTo(el, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
    document.body.classList.toggle('menu-open');
  };

  const scrollTop = () => {
    scroll.scrollToTop();
    document.body.classList.toggle('menu-open');
  };

  return (
    <>
      <div
        className="menu-overlay"
        onClick={() => document.body.classList.toggle('menu-open')}
      />
      <div className="menu">
        <nav className="main-menu">
          <ul>
            <li onClick={() => scrollTop()}>Home</li>
            <li onClick={() => scrollTo('featured')}>Featured</li>
            <li onClick={() => scrollTo('gallery')}>Gallery</li>
            <li onClick={() => scrollTo('services')}>Services</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
