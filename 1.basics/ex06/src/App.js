import React from 'react';

function App() {
    // const App = React.createElement('div',null,'basic.ex06 - Hello World');
    // return App;

    return (
        <div>
            basic.ex05 - Hello World
            <ul>
                {
                    ['1st','2nd'].map((e) => {
                        return <li>${e}</li>
                    })
                }
            </ul>
        </div>
    );
}

export{App};