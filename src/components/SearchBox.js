import React, { useEffect, useState } from 'react';
import CountriesData from '../countriesAll.json';


const SearchBox = () => {
    const [search, setSearch]= useState("");

    


    const handleSearch = (event) => {
        let searchString = event.target.value;
        console.log(searchString);
      
    }
    return (
        <div>
            <input 
            type="search" 
            placeholder="Search here..."
            onChange={handleSearch}
            />

        </div>
    )
}

export default SearchBox;