import React,{Component} from 'react';

class GridDataService extends Component{
    constructor(props){
        this.state = {gridData:''}
    }
    
    addData : function(data){
        let gData = this.state.gridData;
        gData.push(data);
        this.setState({gridData:gData});
    }

    getData : function(){
        return Object.assign({},this.state.gridData);
    }
}

export default GridDataService;