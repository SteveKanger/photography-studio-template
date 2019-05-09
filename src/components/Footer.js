import React from 'react';

const Footer = () => (
  <footer>
    <p>
      &copy; Capture Studios {new Date().getFullYear()}
      <span>
        Design by <a href="/">Steve Kanger</a>
      </span>
    </p>
  </footer>
);

export default Footer;
