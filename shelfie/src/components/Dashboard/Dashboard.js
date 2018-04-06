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
            this.props.getInventory()
        })
    }

    
    
    render() {
        const products = this.props.inventory.map((v, i) => {
            return <Product key={v.id} setCurrent={(item) => this.props.setCurrent(item)} updateItem={this.updateItem} deleteItem={this.deleteItem} id={v.id} name={v.name} price={v.price} img={v.img} />
        }) 

        return(
            <div className="dashboard">
                Dashboard
                {products}
            </div>
        )
    }
}
export default Dashboard