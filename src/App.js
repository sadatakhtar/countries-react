import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import Flag from './components/Flag';
import './App.css';




function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [mode, setMode] = useState(true);
  const [regionalValue, setRegionalValue] = useState("");
  
  

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => {
      return response.json();
    })
    .then(data => {
      //console.log(data);
      setLoader(true);
      setFetchedData(data);
    })
    .catch(err => {
      console.error(err);
      console.log(err);
    });

  }, []);

  function refreshPage(){
    window.location.reload();
  }

  const handleRegionalSearch = (event) => {
    let { value } = event.target;
    setRegionalValue(value)
    console.log(regionalValue);

    if(regionalValue === "All"){
      setRegionalValue("");
      refreshPage();
    
    }else {
      setFetchedData(fetchedData.filter(({region}) => {
        return (region.includes(value));
      }));
      setRegionalValue("");
      
    }
  }
  const handleBack = () => {
    refreshPage();
  }

  const handleSearch = (event) => {
    let searchString = event.target.value;
    searchString.length < 1 ? refreshPage() : (
      setFetchedData(fetchedData.filter(({name, capital}) => {
        return (name.toLowerCase().includes(searchString) || 
        capital.toLowerCase().includes(searchString));
      })) 
    ) 
}

  return loader ? (
    <div className={mode ?  " App btnDay" : "btnNight App"}>
      <Title 
        mode={mode} 
        setMode={setMode} 
        handleRegionalSearch={handleRegionalSearch}
        handleBack={handleBack}
        handleSearch={handleSearch}
      />
      
      <Flag fetchedData={fetchedData} />
    </div>
  ) : (
    <p className="loader">Loading Data....</p>
  )
}

export default App;
