import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import "../css/Favorites.scss";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (!saved) {
      setLoading(false);
      return;
    }

    const favList = JSON.parse(saved);
    if (favList.length === 0) {
      setLoading(false);
      return;
    }

    // Fetch full Pokémon data
    Promise.all(
      favList.map(fav =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${fav.name}`)
          .then(res => res.json())
          .catch(err => {
            console.error("Failed to fetch", fav.name, err);
            return null;
          })
      )
    ).then(results => {
      const validResults = results.filter(Boolean);
      setFavorites(validResults);
      setLoading(false);
    });
  }, []);

  return (
    <div className="favorites-page">
      <Link className="btn" to="/">
        <Button Label="Back" />
      </Link>
      <h2>Your Favorite Pokémon</h2>

      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map(pokemon => (
            <Link
              key={pokemon.id}
              to={`/${pokemon.name}`}
              className="favorites-test" >
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="fav-pokemon-img" />
               <img
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                className="fav-pokemon-img" />
              <h4 className="fav-name">
                {pokemon.name}
              </h4>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;