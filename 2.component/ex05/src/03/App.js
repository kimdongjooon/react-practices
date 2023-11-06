import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime : this._getCurrentTime()
        }
    }

    _getCurrentTime(){
        const now = new Date();
        return{
            hours : ('0'+(now.getHours() > 12 ? now.getHours() -12 : now.getHours())).slice(-2),
            minutes : ('0'+now.getMinutes()).slice(-2),
            seconds : ('0'+now.getSeconds()).slice(-2),
            session : now.getHours() > 12 ? 'pm' : 'am',
            ticks : this.state ? this.state.ticks + 1 : 0
        } 
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(
                {currentTime:this._getCurrentTime()}
            );
        }, 1000);
    }


    componentWillUnmount(){    
        clearInterval(this.intervalId)
    }
    

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle: {this.state.currentTime.ticks}</h2>

                    <Clock 
                        hours = {this.state.currentTime.hours}
                        minutes = {this.state.currentTime.minutes}
                        seconds = {this.state.currentTime.seconds}
                        session = {this.state.currentTime.session}

                    />

                    
            </div>
        );
    }

    
}