import React, {component} from 'react';
import CustomCombo from './CustomCombo.js';


class NamedForm extends React.Component
{
    constructor(props){
        super(props);  
        //this.griddata = [];
        this.state = {
            name:this.props.formData?this.props.formData.name:'',
            about:this.props.formData?this.props.formData.about:'',
            color:this.props.formData?this.props.formData.color:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
       // this.griddata.push(Object.assign({},this.state));
       // console.log(this.griddata);
        
        event.preventDefault();
        var data = Object.assign({},this.state);
        //var data = this.state.slice();
        data.color = this.refs.color.getSelectedItem();
        this.props.onSubmit(data);
        
      //  alert('Submitted Name: '+this.state.name+"    "+this.state.about+", Color: "+this.refs.color.getSelectedItem());
        
        
    }
    
    handleChange(event){
        if([event.target.name] == 'color'){
            alert('color: '+event.target.value);
        }
        this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
        this.data = [
            'Yellow','Red','Blue','Green'
        ];
        return(
            <form onSubmit={this.handleSubmit} method="POST">
                <label>
                    Name: 
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>            
                </label><br/>
                <label>
                  About yourself:
                  <textarea value={this.state.about} onChange={this.handleChange} name="about"/>
                </label><br/>
                <CustomCombo data={this.data} value={this.state.color} ref="color" default={this.data[0]}/>
            
            
                <input type="submit" value="submit"/>            
            </form>
        );
    }
}

export default NamedForm;