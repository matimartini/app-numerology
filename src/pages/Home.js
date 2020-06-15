import React from 'react'

import './styles/Home.css'
import Navbar from '../components/NavBar'

import FormNumerology from '../components/FormNumerology'

class Home extends React.Component {

    state = {
        form: {
          name: '', 
          date: '',
        },
        btnDisabled: true
      };
    
    handleChange = e => {
        console.log("change padere");
       this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        }); 
        this.enableBtn()
    }

    enableBtn = () => {
        if(this.state.form.name !== '') {
            this.setState({btnDisabled: false})
        } else {
            this.setState({btnDisabled: true})
        }
    }

  /*   handleSubmit = e => {
        console.log("Click padre!!!!");
    } */
    
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <FormNumerology onChange={this.handleChange} datos={this.state} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home