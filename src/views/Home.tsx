import { BiSearchAlt2 } from 'react-icons/bi'
import Dropdown from '../components/Dropdown';  
import CardCountry from '../components/CardCountry';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from '../types/countries.types';

const client = axios.create({
    baseURL: 'https://restcountries.com/v3.1',  
})



const Home = () => {
    const [countriesData, setCountries] = useState<Country[]>([]);

    const getAllCountries = async () => {
        await client.get('/all').then((response) => {
            setCountries(response.data);
        }).catch((error) => {
            console.error('Error:', error);
          });
    }

    useEffect(() => {
       getAllCountries()
    }, [])

    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-item-baseline flex-wrap'>
                <div className='search search-light'>
                    <label htmlFor="search"><BiSearchAlt2/></label>
                    <input type="text" name="search" id="search" placeholder='Search for a country…'/>
                </div>
                <Dropdown/>
            </div>

            <div className="cards d-flex justify-content-between list-country flex-wrap gap">
                {countriesData.map(function (country)  {
                    return <Link to={country.name.common} key={ country.name.common }>
                        <CardCountry country={country } />
                    </Link>
                })}
                
            </div>

        </div>
    
    )
}

export default Home
