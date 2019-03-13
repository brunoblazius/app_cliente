import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import ClientsList from './components/ClientsList'
import CreateClient from './components/CreateClient'
import UpdateClient from './components/UpdateClient'
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={ClientsList} />
            <Route path='/create' component={CreateClient} />
            <Route path='/client/:id' component={UpdateClient} />     
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
