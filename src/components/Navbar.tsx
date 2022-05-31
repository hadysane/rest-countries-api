import React from 'react';
import { Link } from 'react-router-dom';

import ThemeChanger from './ThemeChanger';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className='container d-flex justify-content-between align-item-center'>
                <Link to="/"><p className='w-800 nav-link'>Where in the world?</p></Link>

               <ThemeChanger />
            </div>
            
        </nav>
    )
}

export default Navbar