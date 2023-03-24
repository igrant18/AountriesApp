import { useNavigate } from "react-router-dom";
import { Country } from "../../../types/Countries"
import './CountryItem.css'

type CountryItemProps = {
    country: Country
}

function CountriesList({ country }: CountryItemProps) {
    const navigate = useNavigate();

    const handleOnClick = (countryName: string) => {
        console.log(countryName);
        navigate(`/country/${countryName}`)
    }
    
    return (
        <div className="CountriesItem">
           <div onClick={() => handleOnClick(country.name.official)} className="box">
                <div className="imageContainer">
                    <img className="flagImage" alt={country.flags.alt} src={country.flags.png}></img>
                </div>
                <div className="CountryText"> 
                    <h1 className="CountryHeaderText">{country.name.official}</h1>
                    <p className="text"><b>Population</b>: {country.population.toLocaleString()}</p>
                    <p className="text"><b>Region</b>: {country.region}</p>
                    <p className="text"><b>Capital</b>: {country.capital}</p>
                </div>
           </div>
        </div>
    )
}

export default CountriesList
