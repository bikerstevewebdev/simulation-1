import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
    constructor() {
        super()
        this.state = {
            inventory: []
        }
        this.deleteItem = this.deleteItem.bind(this)
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

    deleteItem(id) {
        axios.delete(`/api/product/${id}`).then(res => {
            alert(res.data.message)
            this.getInventory
        })
    }

    
    
    render() {
        const products = this.state.inventory.map((v, i) => {
            return <Product key={v.id} deleteItem={this.deleteItem} id={v.id} name={v.name} price={v.price} img={v.img} />
        }) 

        return(
            <div className="dashboard">
                {products}
            </div>
        )
    }
}
export default Dashboard


// Removed from product prop because there is now a Link in each Product to the correct Form path
// setCurrent={(item) => this.props.setCurrent(item)}

// Removed because I guessed that this function would exist here but it actually lives in Form
// updateItem={this.updateItem}