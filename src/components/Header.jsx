import React, { useState } from 'react';
import Button from "./Button";
import "../css/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    const [query, setQuery] = useState("");

    return (
        <header>
            <nav>
                <div className="namewebsite">
                    Pokedex Anke
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Search by name or id" 
                    value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <Link to={`/${query}`}>
                        <Button Label={"Search"} />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;