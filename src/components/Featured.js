import React from 'react';
import { Element } from 'react-scroll';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import data from '../fakeBackend.json';

const FeaturedImages = () => {
  const tweenPercentage = 100 - 100 / data.featuredImages.length;
  return (
    <Element name="featured">
      <Controller>
        <Scene triggerHook="onLeave" duration={5000} pin>
          {progress => (
            <div className="pin-container">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ x: '0%' }}
                  to={{ x: '-' + tweenPercentage + '%' }}
                >
                  <div className="slide-container">
                    {data.featuredImages.map(img => (
                      <div className="panel" key={img.id}>
                        <div
                          className="featured-img"
                          style={{ background: 'url(/img/' + img.src + ')' }}
                        />
                      </div>
                    ))}
                  </div>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
    </Element>
  );
};
export default FeaturedImages;
