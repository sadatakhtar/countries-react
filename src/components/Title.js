import React from 'react';


function Title({mode, setMode}){
    

    const handleMode = () => {
        if(mode === true){
            setMode(false);
        }else{
            setMode(true);
        }
    }

    return (
        <div className="title_container">
            <h1 className="title">Countries</h1>
            <div className="btn_container">
               <button className={mode ? "btnDay" : "btnNight"} onClick={handleMode}>Day/Night</button>
            </div>
        </div>
    )
}

export default Title;