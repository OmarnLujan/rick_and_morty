import { connect, useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";
import Card from "../Card/Card.jsx";
import styled from "styled-components";

function Favorites({ onClose }) {

    const [aux, setAux] = useState(false);

    const { myFavorites } = useSelector((state) => {
        return state;
    });

    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        aux ? setAux(false) : setAux(true);
    };
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };
    const UlCards = styled.ul`
        flex-wrap: wrap; /*nowrap |  wrap | wrap-reverse */
        display: flex;
        justify-content: space-around;
   `;
    return (
        <div>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option value={"A"}>Ascendent</option>
                    <option value={"B"}>Desendent</option>
                </select>
            </div>
            <select name="filter" onChange={handleFilter}>
                <option value="ALL">ALL</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>

            </select>

            <div >
                <UlCards>
                    {myFavorites.map(character => (<Card character={character} key={character.id} onClose={onClose} />))}
                </UlCards>
            </div>
        </div>
    );
};

export default Favorites;