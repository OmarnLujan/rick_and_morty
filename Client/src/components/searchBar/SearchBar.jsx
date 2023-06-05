import { useState } from "react";
// estado

export default function SearchBar({onSearch}) {
   const[id,setId]=useState("")

   const handleChange = e=>{
      setId(e.target.value);
   }

   return (
      <div> 
         <input 
            type='search'
            placeholder="Id..." 
            onChange={handleChange}/>
            <button onClick={()=>onSearch(id)}>Agregar</button>
        
      </div>
   );
}
