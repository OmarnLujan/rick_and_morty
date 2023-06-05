import styled from 'styled-components';
import Card from "../Card/Card.jsx";



export default function Cards({characters,onClose}) {
   const UlCards = styled.ul`
   flex-wrap: wrap; /*nowrap |  wrap | wrap-reverse */
   display: flex;
   justify-content: space-around;
   `
   return (

      <div>
         <UlCards>
            {characters.map(character => (
               <Card
                  character={character}
                  key={character.id}
                  onClose={onClose}
               />))}
         </UlCards>
      </div>
   );
}
