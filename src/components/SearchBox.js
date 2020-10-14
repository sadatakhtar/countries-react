import React from 'react';

const SearchBox = ({
    search, 
    setSearch,
    handleSearch
}) => {

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