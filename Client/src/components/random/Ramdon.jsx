

export default function Ramdon({onSearch}) {
   
   function getRandomInt() {
    return Math.floor(Math.random() * 820);
  }
   return (
      <div> 
            <button onClick={()=>onSearch(getRandomInt())}>Ramdon</button>
      </div>
   );
}
