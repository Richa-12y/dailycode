import React from 'react'
//  cardImg,seriesType,reting,castName

const MovieCard = ({cardImg,seriesType,reting,castName}) => {
    return (
        <>
        <div>
        <img src={cardImg} alt="moiveName"/>
        <h1> {seriesType}</h1>
        <p>{reting}</p>
        <p>{castName}</p>
        </div>  
            
        </>
    )
}

export default MovieCard
