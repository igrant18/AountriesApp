import { useEffect } from 'react';
import './App.css'
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import { getAllCountriesAsync } from './redux/countriesSlice';
import { useAppDispatch, useAppSelector } from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch((getAllCountriesAsync()))
    }
    fetchData()
  });
  const theme: string = useAppSelector(state => state.themeReducer.theme)

  return (
    <div data-theme={theme} className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div>
              <Search />
              <CountriesList />
            </div>
          }/>
        <Route path='/country/:countryName' element={<CountryDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
