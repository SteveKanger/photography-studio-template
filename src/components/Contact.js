import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact = () => {
  const [state, setState] = useState({
    modalIn: false
  });

  const toggleModal = () => {
    setState({
      modalIn: !state.modalIn
    });
  };

  return (
    <Element name="contact">
      <>
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>
                  Let's Work Together<span>.</span>
                </h2>
                <hr />
                <p>
                  The best way to start a relationship is with a little bit of
                  conversation.
                </p>
                <div className="social">
                  <a href="/">
                    <FaFacebook />
                  </a>
                  <a href="/">
                    <FaInstagram />
                  </a>
                  <a href="/">
                    <FaTwitter />
                  </a>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                </div>
                <button onClick={toggleModal}>Send A Message</button>
              </div>
            </div>
          </div>
        </div>
        {state.modalIn && <ContactForm toggleModal={toggleModal} />}
      </>
    </Element>
  );
};
export default Contact;
