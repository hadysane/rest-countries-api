import React from 'react'
import img from '../img/germany.png';

const CardCountry = () => {
    return (
        <div className="card">
            <img className='card-img' src={img} alt="germany" />
            
            <div className="card-body">
                <h2 className="card-title">Germany</h2>
                <div className="card-p">
                    <p><span className="w-600">Population:</span> 81,770,900</p>
                    <p><span className="w-600">Region:</span> Europe</p>
                    <p><span className="w-600">Capital:</span> Berlin</p>
                </div>
               
            </div>
            
        </div>
    )
}

export default CardCountry
