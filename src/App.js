import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'f8417f52';
  const APP_KEY = '996dd9ca53965040ff323775326c76b5';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setquery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setquery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={Math.random() * 1000} title={recipe.recipe.label} calorie={recipe.recipe.calories} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        ))}
      </div>


    </div>
  );
}

export default App;
