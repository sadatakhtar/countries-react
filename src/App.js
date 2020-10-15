import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import Flag from './components/Flag';
import './App.css';
import SearchBox from './components/SearchBox';



function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch]= useState("");
  const [filteredData, setFilteredData] = useState([]);
  
  

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      setError(true);
      setLoader(true);
      setFetchedData(data);
    })
    .catch(err => {
      console.error(err);
      console.log(err);
    });

  }, []);

  const handleSearch = (event) => {
    let searchString = event.target.value;
    setFetchedData(fetchedData.filter(({name, capital}) => {
      return (name.toLowerCase().includes(searchString) || capital.toLowerCase().includes(searchString));
    }));

   
}


  return loader ? (
    <div className="App">
      <Title />
      <SearchBox search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      <Flag fetchedData={fetchedData} filteredData={filteredData}/>
     
    </div>
  ) : (
    <p className="loader">Loading Data....</p>
  )
}

export default App;
