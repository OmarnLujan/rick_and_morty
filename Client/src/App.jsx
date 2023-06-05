import './App.css';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import About from "./components/about/About.jsx"
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Nav from './components/nav/Nav.jsx';
import Favorites from './components/favorite/Favorite';


4
/* import characters from "./data.jsx" */
function App() {
   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const EMAIL = "prueba@gmail.com"
   const PASSWORD = "123456"

   const navigate = useNavigate();
   /* 
     function login(userData){
        if (userData.password === PASSWORD && userData.email ===EMAIL){
           setAccess(true)
           navigate("/home")
        }
     } */
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   const onSearch = id => {
      const characterId = characters.filter(character => character.id === Number(id))
      if (characterId.length) return alert("The character already exists!!!");
      if (id < 1 || id > 826) return alert("There is no a character with the entered id!!!");
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         data.name
            ? setCharacters((oldChars) => [...oldChars, data])
            : window.alert('¡No hay personajes con este ID!');
   });
   }
   
const onClose = id => {
   setCharacters(characters.filter(character =>
      character.id !== Number(id)))
};
const location = useLocation();

return (

   <div className='App'>
      {
         location.pathname !== "/"
            ? <Nav onSearch={onSearch} />
            : null
      }
      <hr></hr>
      <Routes>
         <Route exact path="/" element={<Form login={login} />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
         <Route exact path="/detail/:id" element={<Detail />} />
         <Route path='/favorites' element={<Favorites onClose={onClose} />} />


      </Routes>
   </div>

);
}

export default App;
