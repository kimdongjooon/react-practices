import React from 'react';

function App() {
    return (
        <div id={'App'}>
            <h1
                onClick={function(){
                    console.log('click');
                }}>
                1. Inline Handler
            </h1>
        </div>
            
    );
}

export{App};