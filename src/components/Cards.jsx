import Card from './Card';

export default function Cards(props) {
   let array =[];
   const characters= props.characters;
   let filterText = props.filterText;
   /* let ultimo = null; */
   characters.forEach((character) => {
       if (character.id.toString().indexOf(filterText.toString())){
         return;} 
      array.push(<Card
         character={character}
         key={character.id}
         />)
   });     
   
   
   return (
   
      <div>
         <ul>
            {array}
         </ul>
      </div>
      );
}
