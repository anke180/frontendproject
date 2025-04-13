import React from "react";
import Card from "./Card";
import "../css/Feed.scss";
import { Link } from "react-router-dom";

//de lijst van de pokemons op de home pagina
const Feed = ( { pokemons } ) => {
    return (
        <section className="pokemon-feed">
            {pokemons?.map((pokemon)=>(
            <Link to={`/${pokemon.name}`} key={pokemon.name}>
                <Card data={pokemon} />
            </Link>
            ))}
        </section>
    )
}

export default Feed;