import React from 'react';


const BackButton = ({handleBack, mode}) => {
    return (
        <button className="backBtn" onClick={handleBack}>Back</button>
    )
}


export default BackButton;