import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { Route, Switch } from 'react-router-dom'
// import axios from 'axios'


class App extends Component {
 


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => {
            return <Dashboard {...props}/>
            }} />
          <Route path="/add" component={Form}/>
          <Route path="/edit/:id" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;

// Removed from Dashboard prop because now using method in own component
// getInventory={this.getInventory} 

// Now lives in Dashboard
// inventory={this.state.inventory}

// Removed from Dashboard props because handled by Form now
// setCurrent={this.setCurrent}

// Removed from Form props because Form handles this functionality depending on the route path:
// getProducts={this.getInventory}
// currentItem={this.state.currentItem}


// Chunk removed from App as is now pointless with all functionality living in other components
// constructor() {
//   super()
//   this.state = {
//     currentItem: {}
//   }
//   this.setCurrent = this.setCurrent.bind(this)
// }


// setCurrent(item) {
//   this.setState({
//     currentItem: item
//   })
// }