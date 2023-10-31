import React from 'react';

const str = 'Hello World';
function App() {
    // const App = React.createElement('div',null,'basic.ex06 - Hello World');
    // return App;

    return (
        <div>
            <h1>01</h1>
            <p>특징1: HTML과의 차이점.</p>
            
            {/* 
                1. 속성은 Camel Case를 사용.
            */}
            <input type='text' maxLength='10'/>

            {/* 
                2. Element는 꼭 닫는다.
            */}
            <br/>
            <hr/>
            <img src=''/>

            {/* 
                3. JSX Element의 속성 이름은 DOM API와 일치한다.
                <h4 id='title' class='header'>타이틀</h4>
                document.getElementById('title').className = 'header';
            */}
            <h4 id='title' className='header'>타이틀</h4>

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