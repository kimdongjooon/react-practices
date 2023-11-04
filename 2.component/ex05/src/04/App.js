import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [state, setState] = useState('');
    const now = new Date();

    useEffect( () => {
    
        const _interval = setInterval(() => {
            
            setTicks((ticks) => ticks+1);
            setState((state) => 
                
                state.hours = now.getHours(),
                state.minutes = now.getMinutes(),
                state.seconds = now.getSeconds()
            );
            
        }, 1000);
        return () => clearInterval(_interval)
    },[]);
    
    // useEffect(() => {
    //     setState({
    //         hours : now.getHours(),
    //         minutes : now.getMinutes(),
    //         seconds : now.getSeconds()
    //     });
    // });
    
   

    return (
        <>  
            <span>{ticks}</span>
            <Clock
            message={'ex05: useEffect Hook example '+ticks}
            hours={state.hours} // state.hours
            minutes={state.minutes<10 ? ('0'+state.minutes).substr(0,2): state.minutes}
            seconds={state.seconds<10 ? ('0'+state.seconds).substr(0,2): state.seconds}/>
        </>
        
    );
}