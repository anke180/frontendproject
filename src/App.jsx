import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchedPokemon from './pages/SearchedPokemon';
import Favorites from './components/Favorites';


const App = () => {
    return (
        <div className="App">
            <Routes>
                {/* de roetes naar de home en de searched pokemon paginas */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/:pokemon"} element={<SearchedPokemon />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    );
};

export default App;