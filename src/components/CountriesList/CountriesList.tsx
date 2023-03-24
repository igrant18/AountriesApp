import { useAppSelector } from "../../redux/store"
import { Country } from "../../types/Countries";
import "./CountriesList.css"
import CountryItem from "./CountryItem/CountryItem";


function CountriesList() {
    const countries: Array<Country> = useAppSelector(state => state.countriesRuducer.countries);
    const searchFilter: string = useAppSelector(state => state.filterReducer.searchValue)
    const regionFilter: string = useAppSelector(state => state.filterReducer.regionFilter)

    const updatedSearchCountries = countries.filter((country) => {
        return country.name.official.toLowerCase().includes(searchFilter);
    });

    const updatedCountries = updatedSearchCountries.filter((country) => {
        return country.region.toLowerCase().includes(regionFilter.toLowerCase())
    }).sort((a, b) => a.name.official.localeCompare(b.name.official))

    return (
        <div className="CountriesList">
            { updatedCountries.map((item: Country, index: number)  => {
                return <CountryItem key={index} country={item} />
            })}
        </div>
    )
}

export default CountriesList
