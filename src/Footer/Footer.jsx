import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>SweetCrust</h2>
          <p>Freshly baked happiness every day.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ sweetcrust@gmail.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>🌐</span>
            <span>📸</span>
            <span>🐦</span>
            <span>📘</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SweetCrust Bakery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
