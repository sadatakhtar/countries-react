import React from 'react';
import SelectMenu from './SelectMenu';
import SearchBox from './SearchBox';
import BackButton from './BackButton';


function Title({
    mode, 
    setMode, 
    handleRegionalSearch,
    handleSearch,
    setSearch,
    search,
    handleBack
}){
    

    const handleMode = () => {
        mode ? setMode(false) : setMode(true);
    }

    return (
        <div className="title_container">
            <h1 className="title">Countries</h1>
            <SearchBox value={search} setSearch={setSearch} handleSearch={handleSearch}/>
            <SelectMenu handleRegionalSearch={handleRegionalSearch}/>
            <BackButton handleBack={handleBack} mode={mode}/>
            <div className="btn_container">
               <button className={mode ? "btnDay" : "btnNight"} onClick={handleMode}>Day/Night mode</button>
            </div>
        </div>
    )
}

export default Title;