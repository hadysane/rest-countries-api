import React from 'react';


import ThemeChanger from './ThemeChanger';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className='container d-flex justify-content-between align-item-center'>
                <p className='w-800'>Where in the world?</p>

               <ThemeChanger />
            </div>
            
        </nav>
    )
}

export default Navbar