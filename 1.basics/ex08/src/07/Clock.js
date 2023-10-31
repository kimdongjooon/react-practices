import React from 'react';

function Clock02(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    let session = 'AM';
    if(hours < 12) {
        session = 'AM'
    }else{
        session = 'PM'
    }
    

return (
        /*
          comment01: jsx 밖은 Javascript 구문(주석 구문)이 가능하다.
         */

        <div
            
            /*
                omment02: JSX 앨리먼트 태크안에서도 주석이 가능.? 안되는데?(비추)
            */
            className='clock'
            title='시계'>
            {/*
                comment03: 이런방식으로 표현식에 실행되는 블록 안에서 주석을단다.(강추))
             */
            }

            {('0'+(hours > 12 ? hours-12 : hours)).slice(-2)}
            {/*
                comment04: JSX는 HTML이 아니다.
                    따리서 <!-- --> HTMl  주석은 사용할 수없다.
             */}

            {':'}

            
            {('0'+minutes).slice(-2)}
            {':'}
            {('0'+seconds).slice(-2)}
            {' '}
             {hours>12 ? "PM":"AM"}
            
            <br/>// comment05: JSX 안에서 Javascript 주석 구문(//)를 사용하면 화면에 그대로 나옴.
            <br/>/* comment05: JSX 안에서 Javascript 주석 구문(/* */)를 사용하면 화면에 그대로 나옴. */
        </div>
        
    );

}

export default Clock02;