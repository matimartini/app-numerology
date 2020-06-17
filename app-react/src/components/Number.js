import React from 'react'

import './styles/Number.css'

class Number extends React.Component {
    render() {
        return (
            <div className="rc-course-card">
                <div className="rc-course-card__text-container">
                    <div className="rc-course-card__header">
                        <span className="rc-course-card__label">Numero: <strong>{this.props.number}</strong></span>
                    </div>
                    <h3 className="rc-course-card__title">{this.props.title}</h3>
                    <p className="rc-course-card__description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default Number 