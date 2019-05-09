import React from 'react';
import data from '../fakeBackend.json';
import { Element } from 'react-scroll';

const Gallery = () => (
  <Element name="gallery" className="gallery">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>
            Gallery<span>.</span>
          </h2>
        </div>
        <div className="col md-6">
          {data.Images.filter(img => img.id < 11).map(img => (
            <img src={'/img/' + img.src + ''} alt={img.title} key={img.id} />
          ))}
        </div>
        <div className="col md-6">
          {data.Images.filter(img => img.id > 10).map(img => (
            <img src={'/img/' + img.src + ''} alt={img.title} key={img.id} />
          ))}
        </div>
      </div>
    </div>
  </Element>
);

export default Gallery;
