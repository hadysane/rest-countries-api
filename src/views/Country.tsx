import React from 'react'
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import img from '../img/germany.png';

const Country = () => {
    // const { countryId } = useParams(); 
    return (
        <div className='container'>
            {/* {countryId} */}
            <Link to="/" className='d-flex align-item-center link'> <BsArrowLeft /> <span>Back</span></Link>

            <div className='country d-flex'>
                <div className='country-flag'>
                    <img  src={img} alt="flag" />
                </div>

                <div className='country-infos'>
                    <h1>Belgium</h1>
                    <div className="d-flex justify-content-between flex-wrap country-infos-contain">
                        <div className='country-infos_left'>
                            <p><span className='country-infos--title'>Native Name:</span> België</p>
                            <p><span className='country-infos--title'>Population:</span> 11, 319,511 </p>
                            <p><span className='country-infos--title'>Region:</span> Europe</p>
                            <p><span className='country-infos--title'>Sub Region:</span> Western Europe</p>
                            <p><span className='country-infos--title'>Capital:</span> Brussels</p>
                        </div>

                        <div className='country-infos_right '>
                            <p><span className='country-infos--title'>Top Level Domain:</span> .be</p>
                            <p><span className='country-infos--title'>Currencies:</span> Euro</p>
                            <p><span className='country-infos--title'>Languages:</span> Dutch, French, German</p>
                        </div>
                    </div>

                    <div className='border-countries'>
                        <p className='border-countries--title'>Border Countries:</p>

                        <div className='tags'>
                            <Link className="tag" to={"/France"} >France</Link>
                            <Link className="tag" to={"/France"} > Luxembourg </Link>
                            <Link className="tag" to={"/France"} > Belgium </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Country
