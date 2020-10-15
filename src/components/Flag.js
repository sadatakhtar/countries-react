import React from 'react';



function Flag({fetchedData}){

    

    return  (
        <div className='cardContainer'>
             <div className="cardPoster">
                    {fetchedData.map((element, index) => {
                        return (
                            <div>
                                <img src={element.flag} alt="flag" className="card"></img>
                                <p>{element.name}</p>
                                <p>Population: {element.population}</p>
                                <p>Region: {element.region}</p>
                                <p>Capital: {element.capital}</p>
                            </div>
                        )
                    })}
                 </div>
        </div>
    )  

 }

  


export default Flag;