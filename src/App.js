import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import Flag from './components/Flag';
import './App.css';
import SearchBox from './components/SearchBox';



function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch]= useState("");
  const [reload, setReload] = useState(false);
  
  

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      setLoader(true);
      setReload(true);
      setFetchedData(data);
    })
    .catch(err => {
      console.error(err);
      console.log(err);
    });

  }, []);



  const handleSearch = (event) => {
    let searchString = event.target.value;
    console.log(searchString);
    setFetchedData(fetchedData.filter(({name, capital}) => {
      return (name.toLowerCase().includes(searchString) || capital.toLowerCase().includes(searchString));
    })); 
   
}



  return loader && reload ? (
    <div className="App">
      <Title />
      <SearchBox search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      <Flag fetchedData={fetchedData} />
     
    </div>
  ) : (
    <p className="loader">Loading Data....</p>
  )
}

export default App;
