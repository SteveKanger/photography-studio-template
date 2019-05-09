import React, { useState } from 'react';

const HomeSection = props => {
  const [state] = useState({
    sections: [
      { img: 'homebg-1.jpg' },
      { img: 'homebg-2.jpg' },
      { img: 'homebg-3.jpg' },
      { img: 'homebg-4.jpg' }
    ]
  });
  return (
    <section id="home-section">
      {state.sections.map(section => (
        <div
          style={{ background: 'url(/img/' + section.img + ')' }}
          key={section.img}
        />
      ))}
      <h1>
        Capture Studios<span>.</span>
      </h1>
    </section>
  );
};
export default HomeSection;
