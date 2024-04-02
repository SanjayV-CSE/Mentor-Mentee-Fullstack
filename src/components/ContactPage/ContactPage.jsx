// ContactPage.js
import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Have any questions or need assistance? Feel free to reach out to us
          using the form below.
        </p>
        <form action="#">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
