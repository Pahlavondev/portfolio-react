import React from "react";
import "./ContactInTouch.css";

const ContactInTouch = () => {
  return (
    <div>
      <div className="container">
        <div className="contact-wrapper">
          <h2 className="contact-title">Get in touch</h2>

          <form className="contact-form">
            <div className="contact-input">
              <input
                className="contact-touch"
                type="text"
                name="firstname"
                placeholder="First name"
                autoComplete="off"
                required
              />

              <input
                className="contact-touch"
                type="text"
                name="lastname"
                placeholder="Last name"
                autoComplete="off"
                required
              />

              <input
                className="contact-touch"
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="off"
                required
              />

              <input
                className="contact-touch"
                type="tel"
                name="phone"
                placeholder="Phone number"
                autoComplete="off"
                required
              />
            </div>
            <textarea
              className="contact-textarea"
              name="message"
              rows="8"
              placeholder="Message"
            ></textarea>

            <button className="contact-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInTouch;
