import React, {useState} from 'react'
import './Recipe.css';


function Recipe(props) {

  const [buttonText, setButtonText] = useState('Voir plus');
  const [buttonState, setButtonState] = useState(false);
  const [listStyle, setListStyle] = useState('none');
  const ingredients = props.recipe.recipe.ingredientLines;

  const buttonClicked = () => {
    if(buttonState){
      setButtonState(false);
      setButtonText('Voir plus');
      setListStyle('none');
    }else{
      setButtonState(true);
      setButtonText('Voir moins');
      setListStyle('inline');
    }
  }

    return (
        <>
          <div className="recipe-container">
            <h1>
              {props.recipe.recipe.label}
            </h1>
            <img src={props.recipe.recipe.image} alt='Recipe'></img>

            <ul style={{display: listStyle}}>
            {ingredients.map(ingredient => (
                <li>{ingredient}</li>
             ))}
            </ul>

            <button className='voir-plus' onClick={buttonClicked}>
              {buttonText}
            </button>
          </div>
          
        </>
    )
}

export default Recipe;
