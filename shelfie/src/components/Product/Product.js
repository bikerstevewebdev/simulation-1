import React from 'react'

function Product(props) {
    const { name, price, img, id } = props
    return(
        <div className="product">
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>${price}</p>
            <button onClick={() => props.deleteItem(id)}>Delete</button>
            <button onClick={() => props.setCurrent({name, price, img, id})}>Edit</button>
        </div>
    )
}

export default Product