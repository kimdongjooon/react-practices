import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';

import {SiteLayout} from './layout'
import Main from "./component/Main";
import {Gallery} from "./component/gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import {Login, Join, Settings} from "./component/user"; // 폴더를 경로로 지정했을때, index.js 로 접근해서 사용가능 

import Error from "./component/error/Error";
import Error404 from "./component/error/Error404";


import './assets/scss/App.scss'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SiteLayout />}>
                    <Route index path='' element={<Main />}/>
                    <Route path='gallery' element={<Gallery />}/>
                    <Route path='guestbook' element={<Guestbook />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='/user/join' element={<Join />}/>
                    <Route path='/user/login' element={<Login />}/>
                    <Route path='user/settings' element={<Settings />}/>
                    <Route path='error' element={<Error />}/>
                    <Route path='*' element={<Error404 />}/>
                </Route>
            </Routes>
        </Router>
    );
}