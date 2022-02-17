import React from 'react'
import { BiMoon } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className='container d-flex justify-content-between align-item-center'>
                <p className='w-800'>Where in the world?</p>

                <button className='btn d-flex align-item-center gap-8'> <BiMoon/>  Dark Mode</button>
            </div>
            
        </nav>
    )
}

export default Navbar
