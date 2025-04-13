import React from "react";
import Stat from "./Stat";

//All de stats dat op de details pagina staat
const Stats = ( { stats }) => {
    return (
        <div className="stats">
            <Stat parameter={"ID"} value={stats.id} />
            <Stat parameter={"Height"} value={stats.height} units={"m"}/>
            <Stat parameter={"Weight"} value={stats.weight} units={"kg"}/>
            <Stat parameter={"Base Exp"} value={stats.exp} />
            <Stat parameter={"HP"} value={stats.hp} />
            <Stat parameter={"Attack"} value={stats.attack} />
            <Stat parameter={"Defence"} value={stats.defence} />
            <Stat parameter={"Spl Attack"} value={stats.splAttack} />
            <Stat parameter={"Spl Defence"} value={stats.splDefence} />
            <Stat parameter={"Speed"} value={stats.speed} />
            <Stat parameter={"Ability 1"} value={stats.abilityOne} />
            <Stat parameter={"Ability 2"} value={stats.abilityTwo} />
        </div>
    )
}

export default Stats;