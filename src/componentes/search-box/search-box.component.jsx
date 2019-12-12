import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleKeyUp }) => (
    <input className="search" type='search' placeholder={placeholder} onKeyUp={handleKeyUp} />
)