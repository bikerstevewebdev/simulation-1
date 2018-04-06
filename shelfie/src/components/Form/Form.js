import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.currentItem.name || '',
            price: this.props.currentItem.price || 0,
            img: this.props.currentItem.img || '',
            id: this.props.currentItem.id || null
        }
        this.updateName = this.updateName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.updateImg = this.updateImg.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
        this.addItem = this.addItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    componentDidUpdate(prevProps) {
        console.log("prevProps from Form: ", prevProps)
        prevProps.currentItem === this.props.currentItem 
        ?
         null
        :
        this.setState({
             id: this.props.currentItem.id,
             name: this.props.currentItem.name,
             price: this.props.currentItem.price,
             img: this.props.currentItem.img
            })
        console.log("Current Item from Form: ", this.props.currentItem)
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
            id: null
        })
    }

    addItem() {
        const { name, price, img } = this.state
        axios.post('/api/product', { name, price, img }).then(res => {
            this.clearInputs()
            this.props.getProducts()
        })
    }

    updateItem() {
        const { name, price, img, id } = this.state
        axios.put(`/api/product/${id}`, {name, price, img}).then(res => {
            alert(res.data.message)
            this.props.getProducts()
            this.setState({
                name: '',
                img: '',
                price: 0,
                id: null
            })
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
                {this.state.id 
                    ?
                    <button onClick={this.updateItem}>Save Changes</button>
                    :
                    <button onClick={this.addItem}>Add to Inventory</button>
                }
            </div>
        )
    }
}
export default Form