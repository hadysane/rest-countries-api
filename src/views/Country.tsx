import React from 'react'
import { useParams } from "react-router-dom";

const Country = () => {
    const { countryId } = useParams(); 
    return (
        <div className='container'>
            {countryId}
        </div>
    )
}

export default Country
