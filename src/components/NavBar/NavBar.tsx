import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { toggleTheme } from '../../redux/themeSlice';

function NavBar() {

  const theme: string = useAppSelector(state => state.themeReducer.theme)
  const dispatch = useAppDispatch();
  const handleThemeClick = () => {
    dispatch(toggleTheme('LIGHT'))
  }
  
  const displayText = (theme: string) => {
    if(theme === 'DARK')
      return 'Light Mode'
    return 'Dark Mode'
  }
  
  return (
    <div className="NavBar">
        <div className='headerText'>
            <h1>Where in the world?</h1>
        </div>
        <div className='headerText2' onClick={() => handleThemeClick()}>
            <h1><FontAwesomeIcon icon={faMoon} /> {displayText(theme)}</h1>
        </div>
    </div>
  )
}

export default NavBar
