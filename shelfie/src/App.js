import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentItem: {}
    }
    // this.setCurrent = this.setCurrent.bind(this)
  }

  
  // setCurrent(item) {
  //   this.setState({
  //     currentItem: item
  //   })
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => {
            <Dashboard setCurrent={this.setCurrent} getInventory={this.getInventory} inventory={this.state.inventory}/>
            }} />
          <Route path="/add" render={() => {
            <Form  />
            }} />
          <Route path="/edit/:id" render={() => {
            <Form getProducts={this.getInventory} currentItem={this.state.currentItem} />
            }} />
        </Switch>
        <Form  />
      </div>
    );
  }
}

export default App;
