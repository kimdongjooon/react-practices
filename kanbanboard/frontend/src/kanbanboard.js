import React from "react";
import data from './assets/json/data';

function Kanbanboard(props){

    const cardsTodo1 = data.filter(card => card.status === 'ToDo');
    const cardsTodo = data.filter(function(card){
        card.status === 'ToDo';
    })
    console.log("1"+cardsTodo1);
    console.log("2"+cardsTodo);
    return(
        <div>
            {/* <CardList cards={[]}/> */}
        </div>
        
        
    );
}
export default Kanbanboard;