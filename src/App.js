import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters/* , { Rick } */ from './data.js';
import { useState} from "react";


function App() {
   const [filterText, setFilterText] = useState('');

   return (
      <div className='App'>
         <hr></hr>

          <SearchBar
           filterText={filterText}
           onFilterTextChange={setFilterText} 
           />
         <hr></hr>
         <Cards 
         characters={characters}
         filterText={filterText}
         />
         
      </div>
   );
}

export default App;
