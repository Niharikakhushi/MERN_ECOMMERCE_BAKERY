import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const ContactPage = (props) => {
  return (
    <div className="contact-page">
     
      
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us </h1>
        <p>We’d love to hear from you</p>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have a question, custom order, or feedback? Reach out to us anytime.
          </p>

          <ul>
            <li><strong>📍 Address:</strong> 21 Baker Street, New Delhi</li>
            <li><strong>📞 Phone:</strong> +91 98765 43210</li>
            <li><strong>📧 Email:</strong> hello@sweetcrust.com</li>
            <li><strong>⏰ Hours:</strong> Mon–Sun: 8 AM – 9 PM</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </section>

      
    </div>
  );
};

export default ContactPage;
