import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});



    const handleLinkClick = (e) => {
        e.preventDefault();
        console.log(e.target.href); // 전체 경로
        const url = e.target.href.substring(e.target.href.lastIndexOf('/')); // one depth .. 
        console.log(url); // 제일 끝의 경로. 하나만 지정.
        window.history.pushState({page: url}, e.target.text, url);
        setRoute({page: url});
    }

    const router = function () {
        let component = null;
        switch (route.page) {
            case '/':
                component = <Main/>;
                break;
            case '/gallery':
                component = <Gallery/>;
                break;
            case '/guestbook':
                component = <Guestbook/>;
                break;
        }

        return component;
    };

    return (
        <div>
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
            {
                (() => {
                    switch (route.page) {
                        case '/':
                            return <Main />;
                        case '/guestbook':
                            return <Guestbook />;
                        case '/gallery':
                            return <Gallery />;
            
                        default:
                            return null;
                    }
                })()
            }
        </div>
    )
}