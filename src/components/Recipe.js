import React from 'react'
import './Recipe.css';


function Recipe(props) {

    return (
        <>
          <div className="recipe-container">
            <h1>
              {props.recipe.recipe.label}
            </h1>
            <img src={props.recipe.recipe.image}></img>
          </div>
        </>
    )
}

export default Recipe;
