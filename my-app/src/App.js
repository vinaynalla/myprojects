import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import NamedForm from './NamedForm.js';
import GridComponent from './GridComponent.js'

class App extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addGridData = this.addGridData.bind(this);
        this.getGridData = this.getGridData.bind(this);
        this.gridData = [];
    }
    
   addGridData(data){
        this.gridData.push(data);
    }
    getGridData(){
        return this.gridData;
    }
    handleSubmit(data){
        this.addGridData(data);
        this.refs.gridComponent.refreshGrid();
        //console.log('Appjs:'+JSON.stringify(this.gridData));
//        event.preventDefault();
    }
    updateData = () =>{
     //   console.log(this.gridData);
        this.gridData = this.refs.gridComponent.getRows().slice();
      //  console.log(this.gridData);
        
    }
  render() {
      
    return (
        <div>
            My First react app
            <Clock />

            <NamedForm ref="myFrom" onSubmit={this.handleSubmit}/>
            <GridComponent ref="gridComponent" data ={this.gridData} onDataUpdate={this.updateData}/>
            
        
        </div>        
    );
  }
}

export default App;
