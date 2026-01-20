import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header */}
      

      {/* Hero */}
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Baking happiness, one loaf at a time</p>
      </section>

      {/* About Content */}
      <section className="about-section">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Founded in 2015, SweetCrust Bakery began with a simple idea — create
            baked goods that feel homemade yet taste extraordinary. Every item
            we bake is crafted using premium ingredients, traditional methods,
            and a whole lot of love.
          </p>

          <p>
            From artisan breads to indulgent cakes, our mission is to bring
            warmth, comfort, and joy to every table we serve.
          </p>
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
        <h2>Our Values</h2>

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

    
    </div>
  );
};

export default AboutPage;
