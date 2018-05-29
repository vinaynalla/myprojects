import React, { Component } from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){
        var hiStyle ={
            color:'blue'
        }
        var clockStyle = {
            color:'red'
        }
        return(
         <div>
             <h1 style={hiStyle}>Hi there</h1>
             <h2> It is <span style={clockStyle}> {this.state.date.toLocaleTimeString()} </span></h2>
         </div>
        )
    }
}

export default Clock;  