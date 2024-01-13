import { faChevronDown, faMapLocationDot, faMagnifyingGlass, faGlobe, faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './MainNav.scss'

const MainNav = () => {


  return (
    <div className='main-nav-bar nav'>
      <div className='nav-logo'>HONDA</div>
      <div className='nav-right'>
        <div className='nav-item'>VEHICLES <FontAwesomeIcon icon={faChevronDown}/></div>
        <div className='nav-item'>SHOPPING TOOLS <FontAwesomeIcon icon={faChevronDown}/></div>
        <div className='nav-item'>Owners <FontAwesomeIcon icon={faChevronDown}/></div>
        <div className='nav-item'>Explore <FontAwesomeIcon icon={faChevronDown}/></div>
        <div className='nav-item'>Find a Dealer</div>
        <div className='nav-item'><FontAwesomeIcon icon={faGlobe} />EN <FontAwesomeIcon icon={faChevronDown}/></div>
        <div className='nav-item'><FontAwesomeIcon icon={faMapLocationDot}/>Location</div>
        <div className='nav-item'><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
      </div>
      <div className='nav-right-mobile'>
        <FontAwesomeIcon icon={faLocationDot} size='lg'/>
        <FontAwesomeIcon icon={faBars} size='lg' className='burger'/>
      </div>
    </div>
  )
}

export default MainNav
