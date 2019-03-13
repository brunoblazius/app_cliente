import axios from 'axios'
import React, { Component } from 'react'
import api from '../api'
import { withRouter } from 'react-router-dom'

class UpdateClient extends Component {
 
    constructor (props) {
      super(props)
      this.state = {
        nome: '',
        email: '',
        cpf: '',
        telefone: ''
      }
      this.handleFieldChange = this.handleFieldChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }
   
    componentDidMount () {
      const clientId = this.props.match.params.id
   
      axios.get(api.clients+`/${clientId}`).then(response => {
        this.setState({
          nome: response.data.nome,
          email: response.data.email,
          cpf: response.data.cpf,
          telefone: response.data.telefone
        })
      })
    }
   
    handleFieldChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
   
    onSubmit (event) {
      event.preventDefault();
      const { history } = this.props
      const client = {
        nome: this.state.nome,
        email: this.state.email,
        telefone: this.state.telefone,
        cpf: this.state.cpf
      }
      axios.post(api.clients+'/'+this.props.match.params.id, client)
        .then(response => {
          // redirect to the homepage
          history.push('/')
          //console.log('response: ', response)
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
                  <form onSubmit={this.onSubmit}>
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
                    <button className='btn btn-primary'>Update</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
   
  export default UpdateClient