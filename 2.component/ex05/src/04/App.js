import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        return{
            hours : ('0'+(hours > 12 ? hours -12 : hours)).slice(-2),
            minutes : ('0'+minutes).slice(-2),
            seconds : ('0'+seconds).slice(-2),
            session : hours > 12 ? 'pm' : 'am'
        }
    }

    const [currentTime, setCurrentTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);

    // 한번만 실행되고 
    useEffect( () => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentClockTime());
            setTicks((ticks) => ticks+1);
            // setTicks(function(x){
            //     return x+1;
            // })
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    },[]);
    
    // useEffect(() => {
    //     setCurrentTime({
    //         hours : now.getHours(),
    //         minutes : now.getMinutes(),
    //         seconds : now.getSeconds()
    //     });
    // });
    
   

    return (
        <>  
            
            <Clock
            message={`ex05: useEffect Hook example ${ticks}`}
            hours={currentTime.hours} // state.hours
            minutes={currentTime.minutes<10 ? ('0'+currentTime.minutes).slice(-2): currentTime.minutes}
            seconds={currentTime.seconds<10 ? ('0'+currentTime.seconds).slice(-2): currentTime.seconds}/>
        </>
        
    );
}