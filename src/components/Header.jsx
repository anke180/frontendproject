import React, { useState } from 'react';
import Button from "./Button";
import "../css/Header.scss";
import { Link } from "react-router-dom";

//de header op de home pagina
const Header = () => {
    const [name, setName] = useState("");

    return (
        <header>
            <nav>
                {/* de naam van de website */}
                <div className="namewebsite">
                    Pokedex Anke
                </div>
                {/* de search bar in de navigatie */}
                <div className="searchbar">
                    <input type="text" placeholder="Search by name or id" 
                    value={name} onChange={(e) => setName(e.target.value)}/>
                    <Link to={`/${name}`}>
                        <Button Label={"Search"} />
                    </Link>

                    <Link to={`/favorites`}>
                        <Button Label={"favorites"} />            
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;