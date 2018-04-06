import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return(
        <div className="App-header">
            <img className="logo" src="https://raw.githubusercontent.com/bikerstevewebdev/simulation-1/master/assets/shelfie_icon.png" alt="shelfie logo"/>
            <h2>SHELFIE</h2>
            <nav className="nav">
                <Link to="/"><button>Dashboard</button></Link>
                <Link to={{pathname: "/add", state: { id: 0, editing: false }}}><button>Add Inventory</button></Link>
            </nav>
        </div>
    )
}

export default Header