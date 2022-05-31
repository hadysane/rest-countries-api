const CardCountry = ({country} : any) => {
    return (
        <div className="card">
            <img className='card-img' src={country.img} alt={country.name} />
            
            <div className="card-body">
                <h2 className="card-title">{country.name}</h2>
                <div className="card-p">
                    <p><span className="w-600">Population:</span> {country.population} </p>
                    <p><span className="w-600">Region:</span> {country.region}</p>
                    <p><span className="w-600">Capital:</span> {country.capital}</p>
                </div>
               
            </div>
            
        </div>
    )
}

export default CardCountry
