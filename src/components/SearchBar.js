import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [inputCity, setInputCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputCity.trim() !== '') {
            onSearch(inputCity);
            setInputCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
