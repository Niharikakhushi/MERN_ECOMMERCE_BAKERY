import react from 'react';
import { useState , useEffect } from 'react';


const UsestateComponent  = () => {


const [variableName , setvariableName]= useState(0);
const [secondvariable , setsecondvariable]= useState(10);

const sum=()=>{
  setvariableName(variableName + 1);
}

useEffect(()=>{
 console.log("use effect called");
},[sum])

return (

<>


<button onClick={sum}>plus</button>
<p>{variableName}</p>

<p>{secondvariable}</p>


</>


)

}

export default UsestateComponent ;