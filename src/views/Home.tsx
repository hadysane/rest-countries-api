import { BiSearchAlt2 } from 'react-icons/bi'
import Dropdown from '../components/Dropdown';  
import CardCountry from '../components/CardCountry';
import { Link } from 'react-router-dom';
import img from '../img/germany.png';
const countriesData = [
    {
        id: 1,
        name: "Germany",
        population: "81,770,900", 
        region: "Europe",
        capital: "Berlin",
        img: img
    },  {
        id: 2,
        name: "France",
        population: "81,770,900", 
        region: "Europe",
        capital: "Berlin",
        img: img
    }, {
        id: 3,
        name: "Germany",
        population: "81,770,900", 
        region: "Europe",
        capital: "Berlin",
        img: img
    },  {
        id: 4,
        name: "Germany",
        population: "81,770,900", 
        region: "Europe",
        capital: "Berlin",
        img: img
    }, 
]

const Home = () => {
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
                {countriesData.map(function (country, key)  {
                    return <Link to={country.name} key={key}>
                        <CardCountry country={country} key={key} />
                    </Link>
                })}
                
            </div>

        </div>
    
    )
}

export default Home
