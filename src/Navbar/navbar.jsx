import React from "react";
import { Link } from "react-router-dom";  

const Navbar = () => {
  return (
 <>
 
 
 <header className="bakery-header">
        <div className="logo">SweetCrust</div>
        <nav className="nav">


          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
         {/* <Link to="/fetch">Fetch</Link> */}
          {/* <Link to="/fetchbyaxios">Fetchbyaxios</Link> */}
        </nav>
      </header>
       </>
       );
};
export default Navbar;