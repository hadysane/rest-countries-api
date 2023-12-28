import Country from "../types/countries.types"

const CardCountry = ({ country }: { country: Country }) => {

   const  internationalNumberFormat = new Intl.NumberFormat('en-US')
   const formattedPopulation = internationalNumberFormat.format(country.population)
    return (
        <div className="card">
            <img className='card-img' src={country.flags.png} alt={country.name.common} />
            
            <div className="card-body">
                <h2 className="card-title">{country.name.common}</h2>
                <div className="card-p">
                    <p><span className="w-600">Population:</span> {formattedPopulation} </p>
                    <p><span className="w-600">Region:</span> {country.region}</p>
                    <p><span className="w-600">Capital:</span> {country.capital}</p>
                </div>
               
            </div>
            
        </div>
    )
}

export default CardCountry
