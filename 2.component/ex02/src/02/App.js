import React from 'react';
import './assets/css/App.css';
import logo from './assets/images/react-logo.png';

function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}>Normal CSS</h1>
            <img src={logo}/>
        </div>
            
    );
}

export{App};