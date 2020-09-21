import React from 'react';
import CountriesData from '../countriesAll.json';


function Flag(){
    return (
        <div className="card">
            {CountriesData.map((element, index) => {
                return (
                    <div>
                        <img src={element.flag} alt="flag"></img>
                        <p>{element.name}</p>
                        <p>Population: {element.population}</p>
                        <p>Region: {element.region}</p>
                        <p>Capital: {element.capital}</p>
                    </div>
                )
            })}

            
        </div>
    )
}

export default Flag;