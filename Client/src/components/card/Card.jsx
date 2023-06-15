//import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../cards/Cards.module.css";

export default function Card({ character, onClose }) {
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const { allCharactersFav } = useSelector((state) => {
    return state;
  });

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(character.id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  };
  useEffect(() => {
    allCharactersFav.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [allCharactersFav]);

  /*   const StyledDiv = styled.div`
    width: var(--s);
    margin: var(--m);
    height: calc(var(--s) * (1.1547 * 1.6));
    display: inline-block;
    font-size: initial;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin-bottom: calc(var(--m) - var(--s) * 0.0885);
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
  `; */
  /*   const StyledBefore = styled.div`
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
    <div
      className={styles["container-div"]}
      style={{ backgroundImage: `url(${character.image})` }}
      
    >
      
      
        {isFav ? (
          <button onClick={handleFavorite}className={styles.boton}>💚</button>
        ) : (
          <button onClick={handleFavorite}className={styles.boton}>🤍</button>
        )}
      

        <button onClick={() => onClose(character.id)}className={styles.boton2}>❌</button>
        <Link to={`/detail/${character.id}`}><button className={styles.boton3}></button></Link>
    </div>
  );
}

/*       <DivCard>
      <div>
            {
               isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
               )
            }
      </div>
         <Button onClick={() => onClose(character.id)} >X</Button>
         <Link to={`/detail/${character.id}`}>
            <h2>{character.name}</h2>
         </Link>
         <Img1 src={character.image} alt='300px' />
         <DivTable key={character.id}>
            <DivMonitorWrapper>
               <DivMonitor>
                  <Ptexto>{"Estado " + character.status} </Ptexto>

               /* <h2>{character.status}</h2>
                  <h2>{character.species}</h2>
                  <h2>{character.gender}</h2>
                  <h2>{character.origin.name}</h2> */
/*  </DivMonitor>
            </DivMonitorWrapper>
         </DivTable>
      </DivCard>
   );
};
 */
