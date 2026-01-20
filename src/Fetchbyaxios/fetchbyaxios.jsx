 import React from "react";
 import axios from "axios"; 
 import { useState,useEffect } from "react";
const Fectbyaxious=()=>{

 const [data,setData]= useState([]);


  const fetchbyaxios=async()=>{
    const url="https://jsonplaceholder.typicode.com/users";
    const response= await axios.get(url);
    setData(response.data);

    console.log(response.data);
  }

  


  return(
    <div>
      <h1>fetch by axios</h1>
      <button onClick={()=>fetchbyaxios()}>fetch by axios</button>

      {/* {data.map((item)=>{
        return(
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </div>
        )
      })} */}

{
  data.map((a)=>{
    return(
      <div key={a.id}>
        <h2>{a.name}</h2>
        <p>{a.email}</p>
      </div>
    )
  })
}

    </div>
  )
} 


export default Fectbyaxious;