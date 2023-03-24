import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Country } from '../../types/Countries';
import "./CountryDetail.css"
import CountryDetailText from "./CountryDetailText";


function CountryDetail() {
  // Navigation
  const params = useParams();
  const navigate = useNavigate();

  // Get Country Details
  const countries: Array<Country> = useAppSelector(state => state.countriesRuducer.countries);
  const countryFound = countries.find(country => country.name.official === params.countryName);

  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <div className="CountryDetail">
      <div onClick={handleBackClick} className="buttonRegion">
        <FontAwesomeIcon className="backIcon" icon={faArrowLeftLong} />
        <p>Back</p>
      </div>
      { countryFound ? 
        <CountryDetailText countryFound={countryFound}/> : 
        <p>An Error has occured</p>
      }
    </div>
  )
}

export default CountryDetail
