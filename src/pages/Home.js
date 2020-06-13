import React from 'react'

import './styles/Home.css'
import Navbar from '../components/NavBar'
import Number from '../components/Number'

import FormNumerology from '../components/FormNumerology'

class Home extends React.Component {

    state = {
        form: {
          name: '', 
          date: '', 
        }
      };
    
    handleChange = e => {
        console.log("change padere");
        this.setState({
            form: {
              ...this.state.form,
              [e.target.name]: e.target.value,
            },
        });
    }

    handleSubmit = e => {
        console.log("Click padre!!!!");
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <FormNumerology onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} />
                        </div>
                    </div>
                    <div className="row">
                       <div className="col">
                            <Number number="1" title="Camino de la vida" description="Se muestra / lo perciben: Generoso, amistoso y buen amigo. " />
                       </div>
                    </div>
                </div>
            </div>
        )
        
        //<FormNumerology onChange={this.handleChange} formValues={this.state.form} />
    }
}

export default Home