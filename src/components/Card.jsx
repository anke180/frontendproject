import React from "react";

//de kaarten/namen op de home pagina
const Card = ({ data }) => {
    //data.url er word er vanuit gegaan dat data een object is dat een url heeft
    //split('/') neemt een scheidingsmethode en "splitst" de string in meerdere delen
    //voorbeeld "https:", "", "pokeapi.co", "api", "v2", "pokemon", "id", ""
    //resultaat van split word opgelagen in constate urlParts
    //de laatste kan je gebruiken
    const urlParts = data.url.split("/");
    const pokeId = urlParts[urlParts.length - 2];

    return (
        <div className="card">
                <div className="text">
                {/* de img werken niet op de home pagina en weet niet precies waarom */}
                <img src={data.sprites?.front_default} alt={data.name} />
                    <h4 className="pokemon-name">
                        <span className="pokeId">{pokeId}.</span> {data.name}
                    </h4>
            </div>
        </div>
    )
}

export default Card;