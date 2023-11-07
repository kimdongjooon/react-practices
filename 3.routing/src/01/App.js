import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState("/");
    useEffect(()=>{
        window.addEventListener('hashchange', handlerHasgChange);

        return () =>{
            window.removeEventListener('hashchange', handlerHasgChange);
        }
    },[])
    
    const handlerHasgChange = () => {
        console.log(window.location.hash.substring(1));
        setRoute(window.location.hash.substring(1));
    }
    // http://localhost:9090/#/gallery 이런식으로 씀.
    return (() => {
        switch (route) {
            case '/':
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;

            default:
                return null;
        }
    })(); // ()을 실행시키는 의미.

}