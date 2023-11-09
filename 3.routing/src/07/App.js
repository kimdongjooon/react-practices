import React from 'react';
import { useRoutes } from 'react-router';

import Main from "./component/Main";
import {Gallery} from "./component/gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import {Login, Join, Settings} from "./component/user"; // 폴더를 경로로 지정했을때, index.js 로 접근해서 사용가능 


import Error404 from "./component/error/Error404";


import './assets/scss/App.scss'

export default function App() {
    return(
        useRoutes([
            {path:'/', element:<Main />},
            {path:'/gallery', element:<Gallery />},
            {path:'/guestbook', element:<Guestbook />},
            {path:'/about', element:<About />},
            {path:'/user/join', element:<Join />},
            {path:'/user/login', element:<Login />},
            {path:'/user/settings', element:<Settings />},
            {path:'/*', element:<Error404 />}
        ])
    )

}