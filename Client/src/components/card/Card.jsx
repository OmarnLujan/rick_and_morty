import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card({character,onClose}) {

   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const { allCharactersFav } = useSelector((state) => {
      return state;
   });

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(character.id))
      } else {
         setIsFav(true);
         dispatch(addFav(character))
      }
   }
   useEffect(() => {
      allCharactersFav.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [allCharactersFav]);

   const DivTable = styled.div`
      width: 300px;
      height: 70px;
      background-color:#008000;
      display:flex;
      justify-content: center;
      align-items: center
      `;

   const DivMonitorWrapper = styled.div`
      background: #050321;
      width: 290px;
      height: 60px;
      box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.30);
      margin:auto
      `;

   const DivMonitor = styled.div`
      margin: auto;
      margin-top:9px;
      width: 270px;
      height: 40px;
      background-color: #344151;
      overflow: hidden;
      white-space: nowrap;
      box-shadow: inset 0px 5px 10px 2px rgba(0,0,0,0.3);
      `;

   const Ptexto = styled.p`
      margin: auto;
      font-family: 'VT323', monospace;
      font-size: 35px;
      position: relative;
      display: inline-block;
      animation: move 20s infinite linear;
      color: 	#008000;
      margin:auto;
      @keyframes move {
      from {
       left: 800px;
      }
      to {
       left: -800px;
       }
      }`;

   const DivCard = styled.div`
    
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      color: 	#008000;
    `;
   const Button = styled.button`
      position:absolute;
      display:inline-block;
      color:#c43830;
      background-color: transparent;
      border: transparent;
   `;
   const H2Name = styled.h2`
      position:absolute;
      display:inline-block;
      text-align: center;
      background-color: whitesmoke;
      transform: translate(50%, 760%);
   `;
   const Img1 = styled.img`
      border-radius: 10px;
   `;

   return (
      <DivCard>
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
            <H2Name>{character.name}</H2Name>
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
               </DivMonitor>
            </DivMonitorWrapper>
         </DivTable>
      </DivCard>
   );
};
