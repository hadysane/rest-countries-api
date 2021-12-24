import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            
            <div>
                <div>
                    <input type="text" placeholder='Search for a country…'/>
                </div>

                <div>
                    <select name="filterByRegion" id="filterByRegion">
                        <option value="">Filter by Region</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Home
