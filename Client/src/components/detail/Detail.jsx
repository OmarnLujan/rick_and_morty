import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heading,
  Body,
  Wrap,
  Col,
  ColOne,
  ColTwo,
  Card,
  CardTitle,
  CardImage,
  CardDetail,
  ScifiBg,
} from "./components";

export default function Deatil(props) {
  const { id } = useParams();
  
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);


  return (
    <Body>
      <h1>Detail</h1>
      <Wrap>
        <ColOne>
          <Card>
            <CardTitle>Status</CardTitle>

            <CardTitle>{character.status}</CardTitle>
          </Card>
          <Heading />
          <Card>
            <CardImage src={character.image} alt="Card Image" />
          </Card>
        </ColOne>
        <ColTwo>
          <Card>
            <CardTitle>{character.name}</CardTitle>
          </Card>
          <Heading />
          <Card>
            <CardDetail>Species: {character.species}</CardDetail>
          </Card>
          <Heading />
          <Card>
            <CardDetail>Gender: {character.gender}</CardDetail>
          </Card>
          <Heading />
          <Card>
            <CardDetail>Origin: {character.origin?.name}</CardDetail>
          </Card>
          
        </ColTwo>
      </Wrap>
    </Body>
  );
}

/* <div style={{backgroundColor: "pink"}}>
         <h2>{character.name}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin?.name}</h2>
         <img src={character.image}></img> 
      </div> */
