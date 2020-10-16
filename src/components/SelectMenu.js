import React from 'react';


const SelectMenu = ({handleRegionalSearch}) => {

    return (
        <div>
            <form>
                <label for="region">Filter by region</label>
                <select 
                    name="region" 
                    id="region"
                    onClick={handleRegionalSearch}
                >
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        </div>
    )
}

export default SelectMenu;