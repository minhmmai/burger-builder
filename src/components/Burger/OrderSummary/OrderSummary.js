import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

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
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux >
    )
};

export default OrderSummary;