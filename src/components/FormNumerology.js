import React from 'react'; 

class FormNumerology extends React.Component {

   /*  handleSubmit = e => {
        e.preventDefault();
    }; */

/*     handleClick = e => {
        console.log(this.props.formValues)
        console.log('Button was clicked');
    }; */

    render () {
        return (

            <div>
                <h1>Calculadora</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="row">
                         <div className="col-6">
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input
                                onChange={this.props.onChange}
                                className="form-control"
                                type="text"
                                name="name"
                                value={this.props.formValues.name}
                                />
                            </div>
                         </div>
                         <div className="col-6">
                            <div className="form-group">
                                <label>Fecha Nacimiento</label>
                                <input
                                onChange={this.props.onChange}
                                className="form-control"
                                type="date"
                                name="date"
                                value={this.props.formValues.date}
                                />
                            </div>
                         </div>
                    </div>
                    <button onClick={this.props.handleClick} className="btn btn-primary btn-lg btn-block"> Calcular </button>
                </form>
            </div>

        )
    }
}

export default FormNumerology