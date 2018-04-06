import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      currentItem: {}
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/products').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard getInventory={this.getInventory} inventory={this.state.inventory}/>
        <Form getProducts={this.getInventory}/>
      </div>
    );
  }
}

export default App;
