import React from 'react'; 

import Number from './Number'
import TablesDeficiencies from './TablesDeficiencies'


class FormNumerology extends React.Component {

    state ={
        data: {},
        numberData: [], 
        showElement: false
    } 

    handleSubmit = e => {
        e.preventDefault();
    };

    handleClick = e => {
        console.log(this.props.datos)
        this.fetchCharacters()
    }; 

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
                                value={this.props.datos.form.name} 
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
                                value={this.props.datos.form.date}
                                />
                            </div>
                         </div>
                    </div>
                    <button 
                        disabled={this.props.datos.btnDisabled}
                        type="button" 
                        onClick={this.handleClick} 
                        className="btn btn-primary btn-lg btn-block"> 
                        Calcular 
                    </button>
                </form>      

                { this.state.showElement ? 
                    (
                        
                        <div>
                            <div className="row">
                                <div className="col margin-custom">
                                    <Number 
                                        number={this.state.data.data.camino_de_vida}
                                        title="Camino de la Vida" 
                                        description=""
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col margin-custom">
                                    <Number 
                                        number={this.state.data.data.personalidad.number}
                                        title="Personalidad" 
                                        description={this.state.data.data.personalidad.description}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col margin-custom">
                                    <Number 
                                        number={this.state.data.data.expresion.number}
                                        title="Expresion"
                                        description={this.state.data.data.expresion.description}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col margin-custom">
                                    <Number 
                                        number={this.state.data.data.deseo_del_alma.number}
                                        title="Deseo del Alma" 
                                        description={this.state.data.data.deseo_del_alma.description}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col margin-custom">
                                    <Number 
                                        number={this.state.data.data.meta_de_vida.number}
                                        title="Meta final" 
                                        description={this.state.data.data.meta_de_vida.description}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col margin-custom">
                                    <h4>Carencias</h4>
                                    <TablesDeficiencies carencias={this.state.data.data.carencias.ListLack}/>
                                </div>
                            </div>
                        </div>

                    ) : null
                }
            </div>
        )
    }


    
    fetchCharacters = async () => {
        console.log("LLamada a la api!!");
        // limpiamos data!!
        this.setState({
            data: {}
        })
        if(this.validateFrom()) {

            const url = `https://cors-anywhere.herokuapp.com/https://api-numerologia.herokuapp.com/calculate?name=${this.props.datos.form.name}&date=${this.props.datos.form.date}`;

            console.log(url)
            console.log(this.props.datos.data)
            const response = await fetch(url);

            console.log("Response API: ", response)
            const data = await response.json();

            console.log("Data api: ", data)
            
            this.setState({
                data: data
            });

            this.isShowElement(this.state.data.data !== {})
            console.log(this.state.data.data.deseo_del_alma) 
        }
    }

    validateFrom = () => {
        const form = this.props.datos.form;
        var isValidation = true;
        if(form === 'undefined' || form.name === '' || form.date === '') {
            console.log("Error!!")
            isValidation =  false;
        }
        return isValidation;
    }


    isShowElement = (flag) => {
        this.setState({
            showElement: flag
        })
    }

}

export default FormNumerology