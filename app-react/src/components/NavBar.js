import React from 'react';

import logo from '../images/hat.png'

import './styles/NavBar.css'


class Navbar extends React.Component {
    render() {
        return (
        <div className="NavBar">
            <div className="NavBar__hero">
                <div className="NavBar__container">
                    <img className="NavBar_logo " src={logo} alt="Conf Logo"/>
                    <h3 className="NavBar_title">Numerology Calculator</h3>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar