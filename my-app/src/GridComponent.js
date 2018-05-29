


import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';
//import GridDataService from './GridDataService.js';
import update from 'immutability-helper';
//import update from 'react-addons-update';
import { Toolbar, Data  } from 'react-data-grid-addons';
const {Selectors} = Data;

class GridComponent extends Component {
    
    constructor(props,context){
        super(props,context);
        
        this._columns = [
            {key:'name', name:'Name', sortable: true, filterable: true},
            { key: 'about', name: 'About', editable:true },
            { key: 'color', name: 'Favourite Color' } 
        ];
        this.state = {rows:this.props.data?this.props.data : [],filters:{}};
    }
    
    refreshGrid = () =>{
        this.setState({rows:this.props.data});
    }
    
     createRows = () => {
//         let data = GridDataService.getGridData();
      //   console.log(data);
            let rows = [];
            for (let i = 1; i < 10; i++) {
              rows.push({
                name: i,
                about: 'Title ' + i,
                color: i * 10
              });
            }

           return rows;
          };

     rowGetter = (i) => {

         return this.state.rows[i];
        
      };
    rowCount = () =>{

        return this.state.rows.length;
    }
    getRows = () =>{
        return this.state.rows;
    }
    
    handleGridSort = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
          if (sortDirection === 'ASC') {
            return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
          } else if (sortDirection === 'DESC') {
            return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
          }
        };

        const rows = sortDirection === 'NONE' ? this.state.rows.slice(0) : this.state.rows.sort(comparer);

        this.setState({ rows });
      };
    
    handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        let rows = this.state.rows.slice();

        for (let i = fromRow; i <= toRow; i++) {
          let rowToUpdate = rows[i];
          let updatedRow = update(rowToUpdate, {$merge: updated});
          rows[i] = updatedRow;
        }

        this.setState({ rows },()=>this.props.onDataUpdate());
        
      };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    this.setState({ filters: newFilters });
  };

onClearFilters = () => {
    // all filters removed
    this.setState({filters: {} });
  };

  render() {
  
    return (
        <div>
             <ReactDataGrid
                    onGridSort={this.handleGridSort}
                    enableCellSelect={true}
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}
                    minHeight={500} 
                    onGridRowsUpdated={this.handleGridRowsUpdated}
                    onAddFilter={this.handleFilterChange}
                    onClearFilters={this.onClearFilters}
                    toolbar={<Toolbar enableFilter={true}/>}/>);
        
        </div>        
    );
  }
}

export default GridComponent;