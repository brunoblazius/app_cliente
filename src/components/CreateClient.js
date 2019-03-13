import axios from 'axios'
import React, {Component} from 'react'
import api from '../api'

class CreateClient extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            telefone: '',
            cpf: '',
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateClient = this.handleCreateClient.bind(this)
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCreateClient (event) {
        event.preventDefault()
        const { history } = this.props
        const client = {
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            cpf: this.state.cpf
        }

        axios.post(api.clients, client).then(response => {
            history.push('/')
        })
        .catch(error => {
            this.setState({
            errors: error.response.data.errors
            })
        })
    }

    render () {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>Create new client</div>
              <div className='card-body'>
                <form onSubmit={this.handleCreateClient}>
                  <div className='form-group'>
                    <label htmlFor='nome'>Nome</label>
                    <input
                      id='nome'
                      type='text'
                      className='form-control'
                      name='nome'
                      value={this.state.nome}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                      id='email'
                      type='text'
                      className='form-control'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='telefone'>Telefone</label>
                    <input
                      id='telefone'
                      type='text'
                      className='form-control'
                      name='telefone'
                      value={this.state.telefone}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='cpf'>CPF</label>
                    <input
                      id='cpf'
                      type='text'
                      className='form-control'
                      name='cpf'
                      value={this.state.cpf}
                      onChange={this.handleFieldChange}
                    />
                  </div>
                  <button onClick={ () => this.props.history.goBack()} className='btn btn-default'>Cancelar</button>
                  <button className='btn btn-primary'>Create</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default CreateClient