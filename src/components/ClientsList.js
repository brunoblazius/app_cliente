import axios from 'axios'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

class ClientsList extends Component {
    constructor () {
        super()
        this.state ={
            clients: []
        }
    }

    componentDidMount () {
        axios.get(api.clients).then(response => {
            this.setState({
                clients: response.data
            })
        })
    }

    deleteContact (clienteId) {
        axios.delete(api.clients+'/'+`${clienteId}`)
            .then(() => {
                return axios.get(api.clients)
            })
            .then(res => {
                const clients = res.data;
                this.setState({ clients });
            })
    }

    render () {
        const { clients } = this.state

        return (
            <div className="container">
                <h2>Lista de clientes</h2>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>CPF</th>
                            <th>
                                <Link 
                                    className='btn btn-primary btn-xs' 
                                    to='/create'
                                >
                                            Adicionar cliente
                                    </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        clients.map((client, index) => (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                    <td>{client.nome}</td>
                                        <td>{client.email}</td>
                                        <td>{client.telefone}</td>
                                        <td>{client.cpf}</td>                               
                                        <td>
                                        <Link 
                                        className='btn btn-default btn-xs' 
                                        to={`/client/${client.id}`}
                                    >
                                        Editar
                                    </Link>
                                        <button 
                                            className="btn btn-danger btn-xs btn-delete"
                                            onClick={ () => this.deleteContact(client.id) }
                                        >
                                            Excluir
                                        </button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                    </table>
            </div>
        )
    }

}

export default ClientsList