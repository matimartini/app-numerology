import React from 'react'

import BootstrapTable from 'react-bootstrap-table-next';

import './styles/TablesDeficiencies.css'

class TablesDeficiencies extends React.Component {

    handleClick = e => {
        console.log(this.props.carencias)
    }; 
    columns = [{
        dataField: 'Number',
        text: 'Numero', 
        sort: true
      }, {
        dataField: 'Exists',
        text: 'Existe'
      }, {
        dataField: 'Cant',
        text: 'Cantidad', 
        sort: true
    }];

    render() {
        return (<BootstrapTable classes="table table-dark" keyField='Number' data={ this.props.carencias } columns={ this.columns } />)
    }
}

export default TablesDeficiencies