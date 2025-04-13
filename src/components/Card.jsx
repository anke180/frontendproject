import React from "react";
// import Favorite  from "./Favorite";

//de kaarten/namen op de home pagina
const Card = ({ data }) => {
    const urlParts = data.url.split("/");
    const pokeId = urlParts[urlParts.length - 2];

    return (
        <div className="card">
                <div className="text">
                    <h4 className="pokemon-name">
                        <span className="pokeId">{pokeId}.</span>{data.name}
                    </h4>
                    {/* <Favorite />
                    <button className="addFav">Add to Fav</button> */}
            </div>
        </div>
    )
}

export default Card;