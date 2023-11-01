import React from 'react';
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import data from './assets/json/data';

function App() {
    console.log(data);
    return (
        <div id={'App'}>
            <RegisterForm />
            <Searchbar />
            <Emaillist emails={data}/>

        </div>
            
    );
}

export{App};