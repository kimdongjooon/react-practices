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
            hours : now.getHours(),
            minutes : now.getMinutes(),
            seconds : now.getSeconds()
        } 
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                currentTime: this._getCurrentTime()
            });
        }, 1000);
    }


    componentWillUnmount(){    
        clearInterval(this.intervalId)
    }
    

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours = {this.state.currentTime.hours}
                        minutes = {this.state.currentTime.minutes}
                        seconds = {this.state.currentTime.seconds}
                        session = {'pm'}

                    />
            </div>
        );
    }

    
}