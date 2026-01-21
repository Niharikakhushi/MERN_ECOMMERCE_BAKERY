import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Baking happiness, one loaf at a time</p>
      </section>

      {/* About Content */}
      <section className="about-section">
        <div className="about-text">
          <span className="tagline">Who We Are</span>
          <h2>Crafting Memories Through Baking</h2>
          <p>
            Founded in 2015, SweetCrust Bakery began with a simple idea — create
            baked goods that feel homemade yet taste extraordinary.
          </p>

          <p>
            Every item we bake is crafted using premium ingredients, traditional
            methods, and a whole lot of love. Our goal is to make every bite feel
            special.
          </p>

          <Link to="/products">
            <button className="about-btn">Explore Our Products</button>
          </Link>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
            alt="Bakery kitchen"
          />
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Fresh Ingredients</h3>
            <p>Only the finest, locally sourced ingredients make it to our oven.</p>
          </div>

          <div className="value-card">
            <h3>Handcrafted</h3>
            <p>Every product is baked fresh daily with artisan techniques.</p>
          </div>

          <div className="value-card">
            <h3>Customer First</h3>
            <p>Your smile is our biggest reward.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Experience the SweetCrust Difference</h2>
        <p>Freshly baked happiness delivered to your doorstep</p>
        <Link to="/contact">
          <button className="about-btn">Contact Us</button>
        </Link>
      </section>

    </div>
  );
};

export default AboutPage;
