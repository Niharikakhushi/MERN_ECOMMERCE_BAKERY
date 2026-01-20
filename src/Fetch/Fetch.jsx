// https://jsonplaceholder.typicode.com/users 
import react from "react";
import { useState } from "react";
const Fetchcomponent=(props)=>{


const [data , setdata]= useState([]);


  const fetchname= async()=>{
    const url="https://jsonplaceholder.typicode.com/users";
    const response= await fetch(url);
    const result=await response.json();
    setdata(result);
    return result;

  };



  return(
    <>
    <div>Fetch Component</div>



    <button onClick={()=>fetchname().then(data=>console.log(data))}>Fetch {props.name}</button>
    
    <button onClick={fetchname}>fetch by khushi</button>
    
<p>{data.map((item)=>{return(<div key={item.id}>{item.name}</div>)})}</p>
    
    </>
  );
};
export default Fetchcomponent;















  