import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            
            
            {/* 
            <ul>
                <li>
                    <a href='/guestbook'>[Guestbook]</a> a 태그 쓰면안됨 페이지가 새로고쳐짐.
                    <br/>
                    <Link to={'/'}>[Main]</Link> Link 라우터를 써서사용하기.<br/>
                    <Link to={'/gallery'}>[Garlley]</Link> Link 라우터를 써서사용하기.<br/>
                    <Link to={'/guestbook'}>[Guestbook]</Link> Link 라우터를 써서사용하기.<br/>
                </li>
            </ul> 
            */}

            <ul>
                <li>
                    <NavLink to={'/'}>[Main]</NavLink> Link 라우터를 써서사용하기.<br/>
                </li>
                <li>
                    <NavLink to={'/gallery'}>[Garlley]</NavLink> Link 라우터를 써서사용하기.<br/>
                </li>
                <li>
                    <NavLink to={'/guestbook'}>[Guestbook]</NavLink> Link 라우터를 써서사용하기.<br/>
                </li>
            </ul> 
        </div>
    );
}

