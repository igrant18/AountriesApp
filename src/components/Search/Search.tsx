import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { changeRegionFilter, changeSearchValue } from "../../redux/filterSlice"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import './Search.css'

function Search() {
    const currentRegionFilter: string = useAppSelector(state => state.filterReducer.regionFilter)
    const currentSearchFilter: string = useAppSelector(state => state.filterReducer.searchValue)
    const dispatch = useAppDispatch();
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchValue({ searchValue: event.target.value }))
    }
    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeRegionFilter({ regionFilter: event.target.value }))
    }
  
    return (
    <div className="SearchNav">
        <div className="Search">
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input onChange={handleSearch} className="SearchInput" placeholder="Search for a country..." type='text' value={currentSearchFilter}/>
        </div>
        <div className="FilterRegion">
            <select onChange={handleRegionChange} className="Regions" name="Regions" id="Regions">
                <option className="Region" value="" selected={currentRegionFilter === ""}>Filter by Region</option>
                <option className="Region" value="Africa" selected={currentRegionFilter === "Africa"}>Africa</option>
                <option className="Region" value="America" selected={currentRegionFilter === "America"}>America</option>
                <option className="Region" value="Antarctic" selected={currentRegionFilter === "Antarctic"}>Antarctic</option>
                <option className="Region" value="Asia" selected={currentRegionFilter === "Asia"}>Asia</option>
                <option className="Region" value="Europe" selected={currentRegionFilter === "Europe"}>Europe</option>
                <option className="Region" value="Oceania" selected={currentRegionFilter === "Oceania"}>Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default Search
