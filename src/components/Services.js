import React from 'react';
import { Element } from 'react-scroll';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const Services = () => {
  return (
    <Element name="services">
      <Controller>
        <Scene triggerHook="onLeave" duration={5000} pin>
          {progress => (
            <div className="pin-container">
              <Timeline totalProgress={progress} paused>
                <Tween from={{ x: '0%' }} to={{ x: '-75%' }}>
                  <div className="slide-container my-services">
                    <div className="services-title">
                      <h2>
                        Services<span>.</span>
                      </h2>
                      <div className="line right" />
                    </div>
                    <div className="services">
                      <div className="service">
                        <div className="line strait" />
                        <div
                          className="service-card"
                          style={{ background: 'url(/img/service-1.jpg)' }}
                        >
                          <h3>Weddings</h3>
                        </div>
                      </div>
                      <div className="service">
                        <div className="line strait" />
                        <div
                          className="service-card"
                          style={{ background: 'url(/img/service-2.jpg)' }}
                        >
                          <h3>Graduations</h3>
                        </div>
                      </div>
                      <div className="service">
                        <div className="line strait" />
                        <div
                          className="service-card"
                          style={{ background: 'url(/img/service-3.jpg)' }}
                        >
                          <h3>Family Photos</h3>
                        </div>
                      </div>
                      <div className="service">
                        <div className="line strait" />
                        <div
                          className="service-card"
                          style={{ background: 'url(/img/service-4.jpg)' }}
                        >
                          <h3>Recitals</h3>
                        </div>
                      </div>
                      <div className="services-title">
                        <div className="more">
                          And More<span>.</span>
                        </div>
                        <div className="line left" />
                      </div>
                    </div>
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
export default Services;
