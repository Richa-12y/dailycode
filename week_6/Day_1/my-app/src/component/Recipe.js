import React from 'react'

const Recipe = ({regionName,cardImg, counteryName,recipeName,recipeDetails
}) => {
    return (
        <>
        <div>
        <img src={cardImg} alt="png"/>
        <h1>Recipe {regionName}</h1>
        <button>{counteryName}</button>
        <p>{recipeName}</p>
        <p>{recipeDetails}</p>
        </div>
  
        </>
    )
}

export default Recipe
