import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import Home from './pages/Home'



const container = document.getElementById('app');

ReactDOM.render(<Home />, container)