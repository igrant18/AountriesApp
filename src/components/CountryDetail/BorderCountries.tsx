import { useAppSelector } from '../../redux/store';
import { Country, Name } from '../../types/Countries';

function BorderCountries() {
  
    const borderCountries = useAppSelector(state => state.countriesRuducer.borderCountries);


    const render = borderCountries.map((country: Country, index, borderCountries) => {
        console.log(borderCountries.length == index)
        return index + 1 === borderCountries.length ? <span key={index}> {country.name.common} </span> : <span key={index}>{country.name.common} | </span>
    }) 

    return (
      <div className="BorderCountries">
         <p>Border Countries: {render}</p>
      </div>
    )
  }
  
  export default BorderCountries