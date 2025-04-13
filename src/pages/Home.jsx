import React, { useState, useEffect} from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Axios from 'axios';

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(()=> {
        const storeOffSet = sessionStorage.getItem("offset");
        //gets the items and turns it into int's
        return storeOffSet ? parseInt(storeOffSet, 10) : 0;
    });

    //de next button haalt de volgende 50 pokemons op
    function handleNextPage() {
        const newOffSet = offSet + 50;
        setOffSet(newOffSet);
        sessionStorage.setItem("offset", newOffSet.toString
        ());
    }

    //de previous button, haalt de vorige 50 pokemons op als het kan
    function handlePreviousPage() {
        const newOffSet = offSet <= 50 ? 0 : offSet - 50;
        setOffSet(newOffSet);
        sessionStorage.setItem("offset", newOffSet.toString
        ());
    }

    //fetched alle pokemons via de api en de axios
    useEffect(() => {
        async function fetchPokemon() {
            //de max op 1 pagina is 50 pokemons (als je meer/minder wil verander de 50)
            const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offSet}`);
            setPokemons(response.data.results); 
        }
        fetchPokemon();
    }, [offSet]);


    //returns de navigatie en de pokemons en de onderste twee buttons
    return (
        <div className='Home maxWidth'>
            <Header />
            <Feed pokemons={pokemons}/>
            <div className="pagination">
                <button onClick={handlePreviousPage} className='btn'>Previous</button>
                <button onClick={handleNextPage} className='btn'>Next</button>
            </div>
        </div>
    );
};

export default Home;