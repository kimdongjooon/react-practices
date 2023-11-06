import React, {useEffect} from 'react';
import SevenSegmentLED from "./SevenSegmentLED";
import SessionAmPm from "./SessionAmPm";
import './assets/scss/Clock.scss';

export default function Clock({message, hours, minutes, seconds}) {

    useEffect(() => {
        console.log("clock: componentDidMount");
        return () => {
            console.log("clock: componentWillMount");
        }
    });

    return (
        <div className={'clock-display'}>
            <h2>{message}</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={(hours>12 ? hours-12: hours)<10 ? ('0'+hours).slice(-2):hours} colon={true}/>
                <SevenSegmentLED number={minutes<10 ? ('0'+minutes).slice(-2): minutes} colon={true}/>
                <SevenSegmentLED number={seconds<10 ? ('0'+seconds).slice(-2): seconds} colon={false}/>
                <SessionAmPm session={hours > 12 ? 'pm' : 'am'}/>
            </div>
        </div>
    );
}