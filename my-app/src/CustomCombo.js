import React, {Component} from 'react';

function ListItem(props) {
  var myStyle ={
      color:props.value
  }
  return <option value={props.value} style={myStyle}>{props.value}</option>;
}

class CustomCombo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data?this.props.data:'',
            selectedItem:this.props.default?this.props.default:this.props.data?this.props.data[0]:''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.getSelectedItem = this.getSelectedItem.bind(this);
    }
    
    handleChange(event){
//        this.setState((prevState,props)=>(
//            {
//                selectedItem:event.target.value
//            }
//        ));
        
        this.setState(
            {
                selectedItem:event.target.value
            }
        );
//        console.log(this.props.onChange);
//        this.props.onChange(event);
        
        event.preventDefault();
    }
    
    getSelectedItem(){
        return this.state.selectedItem;
    }
    
    render(){
        const listItems = this.state.data.map((number) =>
                            
                            <ListItem key={number.toString()}
                                      value={number} />

                          );
        
        return(
            <div>
                <select value={this.state.selectedItem} onChange={this.handleChange}>
                    {listItems}
                </select>
            </div>
        );
    }
}

export default CustomCombo;