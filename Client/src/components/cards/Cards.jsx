//import styled from "styled-components";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
  /* const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, calc(var(--s) + 2 * var(--mh))) calc(
        var(--s) / 2 + var(--mh)
      );
    justify-content: center;
    --s: 100px;
    --m: 6px;
    --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  `;

  const Container = styled.div`
    font-size: 0;
  `;
const StyledBefore = styled.div`
content: "";
width: calc(var(--s) / 2 + var(--m));
float: left;
height: 120%;
shape-outside: repeating-linear-gradient(
  #0000 0 calc(var(--f) - 3px),
  #000 0 var(--f)
);
`; */
  return (
    <div className={styles.main}>
    <div className={styles.container}>
    {characters.map((character) => (
          <Card character={character} key={character.id} onClose={onClose} />
        ))}
    </div>
  </div>);
}
/* <MainContainer>
      <Container>
        {characters.map((character) => (
          <Card character={character} key={character.id} onClose={onClose} />
        ))}
        
      </Container>
      <StyledBefore/>
    </MainContainer> */
  
/*       <div>
         <UlCards>
            {characters.map(character => (
               <Card
                  character={character}
                  key={character.id}
                  onClose={onClose}
               />))}
         </UlCards>
    </div>
 */
