import React from 'react'
import Navbar from '../components/Navbar'
import { BiSearchAlt2 } from 'react-icons/bi'
import Dropdown from '../components/Dropdown';  
import CardCountry from '../components/CardCountry';

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className='container'>
                <div className='d-flex justify-content-between align-item-baseline flex-wrap'>
                    <div className='search search-light'>
                        <label htmlFor="search"><BiSearchAlt2/></label>
                        <input type="text" name="search" id="search" placeholder='Search for a country…'/>
                    </div>
                    <Dropdown/>
                </div>

                <div className="d-flex justify-content-between list-country flex-wrap gap">
                    <CardCountry />
                    <CardCountry />
                    <CardCountry />
                    <CardCountry />
                </div>

            </section>
        </div>
    )
}

export default Home
