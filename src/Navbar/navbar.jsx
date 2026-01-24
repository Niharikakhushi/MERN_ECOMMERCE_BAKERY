import React from "react";
import { Link } from "react-router-dom";  
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
    const count = useSelector((state) => state.counter.value);
  
  return (
 <>
 
 
 <header className="bakery-header">
        <div className="logo">SweetCrust</div>
        <nav className="nav">
{count}

          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
         {/* <Link to="/fetch">Fetch</Link> */}
          {/* <Link to="/fetchbyaxios">Fetchbyaxios</Link> */}
        </nav>
      </header>
       </>
       );
};
export default Navbar;