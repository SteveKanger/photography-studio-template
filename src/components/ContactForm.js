import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ContactForm = props => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    submit: false
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({
      ...state,
      submit: true
    });
  };
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={() => props.toggleModal()} />
      <div className="modal-content">
        <div className="modal-header">
          <p>Contact Us</p>
          <button onClick={() => props.toggleModal()}>
            <FaTimes />
          </button>
        </div>

        {!state.submit && (
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="Your Name..."
                required
              />
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Your Email..."
                required
              />
              <textarea
                name="message"
                value={state.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
              />
            </div>
            <div className="modal-footer">
              <button type="submit">Submit Message</button>
            </div>
          </form>
        )}

        {state.submit && (
          <>
            <div className="modal-body">
              Thank you {state.name} for your message we get back to you as soon
              as we can.
            </div>
            <div className="modal-footer">
              <button onClick={() => props.toggleModal()}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ContactForm;
