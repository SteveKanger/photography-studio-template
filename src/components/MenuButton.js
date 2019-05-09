import React from 'react';

const MenuButton = () => (
  <button
    className="menu-button"
    onClick={() => document.body.classList.toggle('menu-open')}
  >
    <span />
    <span />
    <span />
  </button>
);

export default MenuButton;
