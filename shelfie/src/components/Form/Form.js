import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component{
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: '',
            editId: this.props.editId ? this.props.editId : null
        }
        this.updateName = this.updateName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.updateImg = this.updateImg.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    componentDidUpdate(prevProps) {
        prevProps.editId === this.props.editId 
        ?
         null
        :
        this.setState({
             editId: this.props.editId,
             name: this.props.name,
             price: this.props.price,
             img: this.props.img
            })
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updatePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    updateImg(e) {
        this.setState({
            img: e.target.value
        })
    }

    clearInputs() {
        this.setState({
            name: '',
            price: 0,
            img: '',
        })
    }

    addItem() {
        const { name, price, img } = this.state
        axios.post('/api/product', { name, price, img }).then(res => {
            this.setState({
                name: '',
                price: 0,
                img: ''
            })
            this.props.getProducts()
        })
    }

    render() {
        return(
            <div className="form">
                <img src={this.state.img} alt={this.state.name} />
                <input onChange={this.updateName} value={this.state.name} placeholder="Product Name"/>
                <input onChange={this.updatePrice} value={this.state.price} placeholder="Product Price"/>
                <input onChange={this.updateImg} value={this.state.img} placeholder="Product Image URL"/>
                <button onClick={this.clearInputs}>Cancel</button>
                <button onClick={this.addItem}>Add to Inventory</button>
            </div>
        )
    }
}
export default Form