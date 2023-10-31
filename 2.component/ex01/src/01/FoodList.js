import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList(props) {
    return (
        <ul>
            <FoodListItem name ={'Bread'} count={11}/>
            <FoodListItem name ={'Egg'} count={23}/>
            <FoodListItem name ={'Milk'} count={7}/>
        </ul>    
    );
}
export default FoodList;