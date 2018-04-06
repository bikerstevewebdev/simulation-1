import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Form extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            img: '',
            id: 0,
            dontUpdate: false
        }
        this.updateName = this.updateName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.updateImg = this.updateImg.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
        this.addItem = this.addItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.location.state.editing){
        this.props.location.state.id
        ?
        axios.get(`/api/product/${this.props.location.state.id}`).then(res => {
            const obj = res.data[0]
            this.setState({
                name: obj.name,
                price: obj.price,
                img: obj.img,
                id: obj.id
            })
        })
        :
        null}
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.location.state)
        !this.props.location.state.editing && !this.state.dontUpdate
        ?
        this.clearInputs()
        :
        null
        
        
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
            id: 0,
            dontUpdate: true
        })
    }

    addItem() {
        const { name, price, img } = this.state
        axios.post('/api/product', { name, price, img }).then(res => {
            this.clearInputs()
        })
    }

    updateItem() {
        const { name, price, img, id } = this.state
        axios.put(`/api/product/${id}`, {name, price, img}).then(res => {
            this.setState({
                name: '',
                img: '',
                price: 0,
                id: null
            })
        })
    }

    getOne() {
        axios.get(`/api/product/${this.props.id}`).then(res => {
            this.setState({
                name: res.data.name,
                price: res.data.price,
                img: res.data.img,
                id: this.props.location.state.id
            })
        })
    }

    render() {
        return(
            <div className="form">
                <img src={this.state.img} alt={this.state.name} />
                <input onChange={this.updateName} value={this.state.name || ''} placeholder="Product Name"/>
                <input onChange={this.updatePrice} value={this.state.price} placeholder="Product Price"/>
                <input onChange={this.updateImg} value={this.state.img || ''} placeholder="Product Image URL"/>
                <button onClick={this.clearInputs}>Cancel</button>
                {this.state.id 
                    ?
                    <Link to="/"><button onClick={this.updateItem}>Save Changes</button></Link>
                    :
                    <Link to="/"><button onClick={this.addItem}>Add to Inventory</button></Link>
                }
            </div>
        )
    }
}
export default Form


// Old initial State before Routing :
// this.state = {
//     name: this.props.currentItem.name || '',
//     price: this.props.currentItem.price || 0,
//     img: this.props.currentItem.img || '',
//     id: this.props.currentItem.id || null
// }

// No longer needed with routing set up, using componentDidMount now and 
// componentDidUpdate(prevProps, prevState) {
//     console.log("prevProps from Form: ", prevProps)
//     prevProps.currentItem === this.props.currentItem 
//     ?
//      null
//     :
//     this.setState({
//          id: this.props.currentItem.id,
//          name: this.props.currentItem.name,
//          price: this.props.currentItem.price,
//          img: this.props.currentItem.img
//         })
//     console.log("Current Item from Form: ", this.props.currentItem)
// }