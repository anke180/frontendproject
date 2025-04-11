import React from "react";

const Card = ({ data }) => {
    //for image
    const urlParts = data.url.split("/");
    const pokeId = urlParts[urlParts.length - 2];
    //url veranderen
    const imgUrl = `https://pokeapi.co/api/v2/pokemon/${pokeId}.data.sprites.front_default`

    return (
        <div className="card">
            <img src={imgUrl} alt="pokemon" />
                <div className="text">
                    <h4 className="pokemon-name">
                        <span className="pokeId">{pokeId}.</span>{data.name}
                    </h4>
            </div>
        </div>
    )
}

export default Card;