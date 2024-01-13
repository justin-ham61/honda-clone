
import './SubNav.scss'

const SubNav = () => {
  return (
    <div className='sub-nav-bar nav'>
      <div className='sub-nav-logo'>
        <p>2024</p>
        <p className='main'>ACCORD</p>
      </div>
      <div className='nav-right'>
        <div className='nav-item'>Intro</div>
        <div className='nav-item'>Gallery</div>
        <div className='nav-item'>Colors</div>
        <div className='nav-item'>Performance</div>
        <div className='nav-item'>Exterior & Interior</div>
        <div className='nav-item'>Technology</div>
        <div className='nav-item'>Honda Sensing</div>
        <div className='nav-item'>Trim & Specs</div>
        <div className='nav-item'><button className='nav-red-button'>BUILD</button></div>
      </div>
      <div className='nav-right-mobile'>
        <div className='nav-item'><button className='nav-red-button'>BUILD</button></div>
      </div>
    </div>
  )
}

export default SubNav
