import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/types.jsx";

const initialState = {
    myFavorites: [], // Lo que se renderiza
    allCharactersFav: [] // Todos los favoritos

}
// Guarda [{Objeto},{},...]

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            // cambio por express
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            };
        //anterior
        /*  return {
             ...state,
             myFavorites: [...state.allCharactersFav, payload],
             allCharactersFav: [...state.allCharactersFav, payload]
         } */
        case REMOVE_FAV:
            let updateFavs = state.allCharactersFav.filter(fav => fav.id !== Number(payload));
            //cambio por express
            return { 
                ...state, 
                myFavorites: payload 
            };
        // anterior
        /* return {
            ...state,
            myFavorites: updateFavs,
            allCharactersFav: updateFavs
        } */
        case FILTER:
            if (payload === "ALL") return {
                ...state,
                myFavorites: state.allCharactersFav
            }
            const allCharactersFavCopy = [...state.allCharactersFav];
            let filteredCharacter = allCharactersFavCopy.filter(
                character => character.gender === payload);
            return {
                ...state,
                myFavorites: filteredCharacter,
            }
        case ORDER:
            let orderedCharacter = [...state.myFavorites];
            if (payload === "A") {
                orderedCharacter = state.myFavorites.sort((a, b) => (a.id - b.id))
            } else if (payload === "D") {
                orderedCharacter = state.myFavorites.sort((a, b) => (b.id - a.id))
            }
            return {
                ...state,
                myFavorites: orderedCharacter
            }

        default:
            return { ...state }
    }
}
export default reducer;