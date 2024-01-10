import './Service.scss'

const Service = () => {
  return (
    <div className='service-section'>
      <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Global-Promo-Banners/Honda-Service-Pass/Accord/Promo-Banner-2024/MY24-Accord-Honda-Service-Pass-Promo-Banner-TOURING-1400.jpg?sc_lang=en" alt="" />
      <div className='overlay'>
        <div className='service-text'>
            <h2 className='thin-heading'>Complimentary Maintenance* for 2 Years/24,000 Miles</h2>
            <button className='blue-button'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Service
