import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
import axios from "axios";

// funcion vieja 
/* export function addFav(character) {
    return {
        type: ADD_FAV,
        payload: character
    }
} */
//funcion con express
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });

        } catch (error) {
            console.log(error.message)
        }
    }
};
// funcion para express
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            //if(!data.length) throw Error("Vacio")
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch {
            console.log(error.message)
        }
    };
};
// funcion anterior
/* export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
} */
// Ordena por genero "Male","Female"....
export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}
//ordena por tipo de ordenamiento "A-Z","Z-A"...
export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}

