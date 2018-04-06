import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
    constructor() {
        super()
        
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    deleteItem(id) {
        axios.delete(`/api/product/${id}`).then(res => {
            alert(res.data.message)
            this.props.getInventory()
        })
    }

    updateItem(id) {
        axios.put(`/api/product/${id}`).then(res => {
            alert(res.data.message)
            this.props.addInventory()
        })
    }
    
    render() {
        const products = this.props.inventory.map((v, i) => {
            return <Product key={v.id} updateItem={this.updateItem} deleteItem={this.deleteItem} id={v.id} name={v.name} price={v.price} img={v.img} />
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