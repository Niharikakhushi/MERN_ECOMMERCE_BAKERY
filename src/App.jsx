import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/navbar.jsx";
import Footer from "./Footer/Footer.jsx";   
import BakeryLanding from "./Landingpage/Landingpage.jsx";
import ProductsPage  from "./Product/Project.jsx"; 
import AboutPage from "./About/About.jsx";
import Fetchcomponent from "./Fetch/Fetch.jsx";
import Fectbyaxious from "./Fetchbyaxios/fetchbyaxios.jsx";
import ContactPage from "./Contact/contact.jsx";
import Props from "./Props/Props.jsx";
import "./App.css";
import UsestateComponent from "./Usestate/Usestate.jsx";
 import usercontext from "./Contact/contex/contex.jsx";
function App() {

const name="khushi";

const user="mohit"
const studentobject={
  name:"khushi",
  age:21,
  city:"new delhi"
}





  return (
    <>
<usercontext.Provider value={user}>
 
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        {/* <Route path="/" element={<BakeryLanding />} /> */}
        <Route path="/home" element={<BakeryLanding />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage name={name}/>} />
        <Route path="/fetch" element={<Fetchcomponent name={name}/>}/> 
        <Route path="/fetchbyaxios" element={<Fectbyaxious/>}/>
         <Route path="/" element={<Props name={name}  secondprops={studentobject}/>} />
          <Route path="/mohit" element ={props=><Props name={name}  />} />
         <Route path="/" element={<UsestateComponent/>} />
      </Routes>
      <Footer />
    </BrowserRouter>


    
</usercontext.Provider>
</>
  );
}

export default App;
