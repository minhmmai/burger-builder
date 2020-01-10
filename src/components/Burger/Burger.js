import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredients/Ingredient';

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            return <Ingredient key={ingredientKey + index} type={ingredientKey}/>;
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [])
    if(ingredients.length === 0) {
        ingredients = <p>Please add ingredient!</p>
    }

    return(
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {ingredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;