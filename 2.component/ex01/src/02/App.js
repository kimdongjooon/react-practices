import React from 'react';
import FoodList from './FoodList';

function App() {
    const foods = [
        {no:1, name: 'Bread', count:'11'},
        {no:2, name: 'Egg', count:'22'},
        {no:3, name: 'Milk', count:'33'}
        
    ];

    return (
        <div id={'App'}>
            <FoodList foods = {foods} />
        </div>
            
    );
}

export{App};