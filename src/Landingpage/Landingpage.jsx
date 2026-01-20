import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import usercontext from "../Contact/contex/contex.jsx";
const BakeryLanding = () => {
  const user=useContext(usercontext);
  return (
    <div className="bakery-container">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Freshly Baked, Every Day {user}</h1>
          <p>
            Handcrafted breads, cakes, and pastries made with love and the
            finest ingredients.
          </p>
          <button className="primary-btn">Order Now</button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <h2>Our Specialties </h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec" alt="Bread" />
            <h3>Artisan Bread</h3>
            <p>Golden crust, soft inside.</p>
          </div>

          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f" alt="Cake" />
            <h3>Chocolate Cakes</h3>
            <p>Rich, moist & indulgent.</p>
          </div>

          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff" alt="Pastry" />
            <h3>Pastries</h3>
            <p>Flaky, buttery perfection.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            SweetCrust Bakery has been serving happiness since 2015. We believe
            baking is an art, and every bite should feel special.
          </p>
        </div>
      </section>

       
    </div>
  );
};

export default BakeryLanding;
