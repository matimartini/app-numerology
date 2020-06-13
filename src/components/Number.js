import React from 'react'

import './styles/Number.css'

class Number extends React.Component {
    render() {
        return (
            <div className="NumberBase">
                <div className="Item">
                {/* <img className="Item__avatar" src="" alt=""/> */}
                <strong>{this.props.number}</strong>
                <div>
                    <strong>{this.props.title}</strong>
                    <br />{this.props.description}
                </div>
            </div>
            </div>
        )
    }
}

export default Number 