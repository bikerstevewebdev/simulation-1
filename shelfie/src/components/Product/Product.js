import React from 'react'

function Product(props) {
    return(
        <div className="product">
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <button onClick={() => props.deleteItem(props.id)}>Delete</button>
            <button onClick={() => props.editItem(props.id)}>Edit</button>
        </div>
    )
}

export default Product