import React from "react";
import "./Project.css";

const products = [
  {
    id: 1,
    name: "Artisan Bread",
    price: "₹120",
    img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    desc: "Handcrafted sourdough with a crispy golden crust."
  },
  {
    id: 2,
    name: "Chocolate Cake",
    price: "₹650",
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f",
    desc: "Rich cocoa layers with creamy chocolate frosting."
  },
  {
    id: 3,
    name: "Butter Croissant",
    price: "₹90",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    desc: "Flaky, buttery, freshly baked every morning."
  },
  {
    id: 4,
    name: "Red Velvet Cake",
    price: "₹720",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    desc: "Soft red sponge layered with cream cheese frosting."
  },
  {
    id: 5,
    name: "Cupcakes (Box of 6)",
    price: "₹360",
    img: "https://images.unsplash.com/photo-1519869325930-281384150729",
    desc: "Assorted flavors topped with smooth whipped cream."
  },
  {
    id: 6,
    name: "French Baguette",
    price: "₹110",
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
    desc: "Classic French-style baguette with airy texture."
  }
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      {/* Header */}
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Freshly baked delights made with premium ingredients</p>
      </header>

      {/* Products Grid */}
      <section className="products-wrapper">
        {products.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="desc">{item.desc}</p>
              <div className="product-footer">
                <span className="price">{item.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;
