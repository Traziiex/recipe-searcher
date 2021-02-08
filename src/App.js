import React, { useState } from 'react';

import Recipe from './components/Recipe';

import './components/Navbar.css';
import './App.css';
import './components/Display.css';

import Food from './components/food.svg';
import Search from './components/search.svg';

function App() {

  const [ingredient, setIngredient] = useState('none');
  const [recipes, setRecipes] = useState([]);

    const key = 'a5cc238333cee8ed7741a1302e34865a';
    const id = '4b353692';

    const getRecipe = async (e) => {
        e.preventDefault();
        console.log(ingredient);
        const response = await fetch(`https://api.edamam.com/search?q=${ingredient}&app_id=${id}&app_key=${key}`);
        const data = await response.json();
        const hits = data.hits;
        setRecipes(hits);
        console.log(hits);
    }

    const changeIngredient = (e) => {
        setIngredient(e.target.value);
    }

  return (
    <div className="App">
    <nav>
      <div className="nav-container">
          <form onSubmit={getRecipe}>
            <input type="text" onChange={changeIngredient}></input>
            <img className="search-btn" src={Search} alt='Search' onClick={getRecipe}></img>
          </form>                 
      </div>
    </nav>

    <main>
      <div className='disp-container'>
        {recipes.map(recipe => (
          <Recipe recipe={recipe}/>
        ))}
      </div>
    </main>
    </div>
  );
}

export default App;
