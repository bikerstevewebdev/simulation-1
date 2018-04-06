import React from 'react'
import { Link } from 'react-router-dom'


function Product(props) {
    const { name, price, img, id } = props
    return(
        <div className="product">
            <img className="img" src={img} alt={name} />
            <section className="info">
                <section className="pars">
                    <p>{name}</p>
                    <p>${price}</p>
                </section>
                <section className="buttons">
                    <button onClick={() => props.deleteItem(id)}>Delete</button>
                    <Link to={{pathname: `/edit/${id}}`, state: {id, editing: true }}}><button>Edit</button></Link>
                </section>
            </section>
        </div>
    )
}

export default Product

// Not using this with the Link now being the primary handler
// onClick={() => props.setCurrent({name, price, img, id})}