import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {Routes, Route} from 'react-router';
import { useRoutes } from 'react-router';

import Main from "./component/Main";
import {Gallery} from "./component/gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import {Login, Join, Settings} from "./component/user"; // 폴더를 경로로 지정했을때, index.js 로 접근해서 사용가능 


import Error404 from "./component/error/Error404";


import './assets/scss/App.scss'

export default function App() {
    useRoutes([
        
    ]);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='gallery' element={<Gallery />}/>
                <Route path='guestbook' element={<Guestbook />}/>
                <Route path='about' element={<About />}/>
                <Route path='/user/join' element={<Join />}/>
                <Route path='/user/login' element={<Login />}/>
                <Route path='/user/settings' element={<Settings />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </Router>
    );
}