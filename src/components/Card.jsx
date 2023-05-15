export default function Card(props) {
    const card= props.character; 
   return (
      <div>
         <button onClick={() => window.alert('Emulamos que se cierra la card')}>X</button>
         <h2>{card.name}</h2>
         <h2>{card.status}</h2>
         <h2>{card.species}</h2>
         <h2>{card.gender}</h2>
         <h2>{card.origin.name}</h2>
         <img src={card.image} alt=''/> 
      </div>
   );
}
