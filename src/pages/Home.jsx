import React, { useState, useEffect} from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(()=> {
        const storeOffSet = sessionStorage.getItem("offset");
        return storeOffSet ? parseInt(storeOffSet, 10) : 0;
    });

    function handleNextPage() {
        const newOffSet = offSet + 20;
        setOffSet(newOffSet);
        sessionStorage.setItem("offset", newOffSet.toString
        ());
    }

    function handlePreviousPage() {
        const newOffSet = offSet <= 20 ? 0 : offSet - 20;
        setOffSet(newOffSet);
        sessionStorage.setItem("offset", newOffSet.toString
        ());
    }

    useEffect(() => {
        async function fetchPokemon() {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon?
            limit=50&offset=${offSet}`;

            const res = await fetch(apiUrl);
            const data = await res.json();

            setPokemons(data.results);
        }
        fetchPokemon();
    }, [offSet]);

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