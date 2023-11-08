import React from 'react';
import styles from '../assets/scss/component/About.scss';
import { useNavigate } from 'react-router';

export default function About() {
    const navigate = useNavigate();
    
    setTimeout(() => {
        // window.location.href='/error'; // 리프레쉬 되는 페이징 전환. 페이징 전환이 되지만 새로고침됨! 의도에 맞지 않음. 
        navigate('/error');
    }, 3000);
    return (
        <div className={styles.About}>
            <h2>kickscar 입니다.</h2>
        </div>
    );
}