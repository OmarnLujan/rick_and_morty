import React from "react";

import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const DivNav = styled.div`
   justify-content:space-between;
   display: flex;
`;

export default function Nav({onSearch }) {
    return (
        <DivNav style={{ textAlign: "center" }}>
            <NavLink to="/home">
                <button>
                    Home
                </button>
            </NavLink>
            <NavLink to="/favorites">
                <button>
                    Favorites
                </button>
            </NavLink>
            <NavLink to="/about">
                <button>
                    About
                </button>
            </NavLink>
            <SearchBar onSearch={onSearch} />
        </DivNav>
    )
}