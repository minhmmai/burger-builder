import React from 'react';
import Aux from '../../../hoc/Auxillary';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
                </li>)
        });
    return (
        < Aux >
            <h3>Your Order</h3>
            <p>Burger with: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux >
    )
};

export default OrderSummary;