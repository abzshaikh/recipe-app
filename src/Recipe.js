import React from "react";
import style from "./recipe.module.css";

const Recipe = ( {title, calorie, img, ingredients} ) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.food+Math.random() * 1000} >{ingredient.text}</li>
                ))}
            </ul>
            <p>{Math.floor(calorie)}</p>
            <img src={img} alt="" className={style.image} />
        </div>
    )
}

export default Recipe;