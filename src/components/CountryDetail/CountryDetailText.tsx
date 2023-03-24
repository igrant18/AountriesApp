import { useCallback, useEffect } from "react"
import { setBorderCountries } from "../../redux/countriesSlice"
import { useAppDispatch } from "../../redux/store"
import { Country, Languages } from "../../types/Countries"
import BorderCountries from "./BorderCountries"
import "./CountryDetail.css"

type CountryDetailTextProps = {
  countryFound: Country
}

function CountryDetailText({ countryFound }: CountryDetailTextProps) {
  const dispatch = useAppDispatch();

  const fetchBorders = useCallback(async (codes: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
    const values = await response.json();
    dispatch(setBorderCountries({ borderCountries: values }))
  }, [])

  useEffect(() => {
      if(!countryFound.borders)
        return
      const borderCountries = getborderCountries(countryFound.borders);
      if(borderCountries === '') 
        return
      fetchBorders(borderCountries)
  });

  const getborderCountries = (borderCountries: Array<string>): string => {
    let concatCountries = '';
    for(let i = 0; i < borderCountries.length; i++) {
      concatCountries = borderCountries[i] + ',' + concatCountries
    }
    return concatCountries;
  }

  const currencies = (countryFound: Country) => {
    if(!countryFound.currencies)
      return <span></span>
    const currencyKey = Object.keys(countryFound.currencies)[0]
    return <span>{ countryFound.currencies[currencyKey].name }</span>
  }

  const nativeName = (countryFound: Country) => {
    if(!countryFound.name.nativeName)
      return <span></span>
    const nativeNameKey: string = Object.keys(countryFound.name.nativeName)[0]; 
    return <span>{countryFound.name.nativeName[nativeNameKey].common}</span>
  }

  const languages = (languages: Languages) => {
    let concatLnaguages = ''
    Object.keys(languages).forEach((language) => {
      concatLnaguages = languages[language] + ', ' + concatLnaguages
    })
    return <span>{concatLnaguages}</span>
  }
  
  return (
    <div className="details">
      <div className="imgContainer">
        <img className="img" src={countryFound.flags.svg} alt={countryFound.flags.alt}></img>
      </div>
      <div className="textDetailsContainer">
        <div className="detailsHeader">
          <h1 className="detailsHeaderText">{ countryFound.name.common }</h1>
        </div>
        <div className="detailsInfoContainer">
          <div className="detailsTextCol1">
            <p>Native: { nativeName(countryFound) }</p>
            <p>Population: {countryFound.population.toLocaleString()}</p>
            <p>Region: {countryFound.region}</p>
            <p>Sub Region: {countryFound.subregion }</p>
            <p>Capital: { countryFound.capital }</p>
          </div>
          <div className="detailsTextCol2">
            <p>Top Level Domain: {countryFound.tld}</p>
            <p>Currencies: { currencies(countryFound) }</p>
            <p>languages: { countryFound.languages ? languages(countryFound.languages): <span></span>  }</p>
          </div>
        </div>
        <BorderCountries />
      </div>
    </div>
  )
}

export default CountryDetailText

