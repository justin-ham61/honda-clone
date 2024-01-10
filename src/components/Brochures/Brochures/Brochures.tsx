import './Brochures.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCarBattery, faTriangleExclamation, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
const Brochures = () => {
    const warranties = [
        {
            icon: faClipboard,
            name: 'Honda Limited Warranty'
        },
        {
            icon: faCarBattery,
            name: '8-Year Limited Battery Warranty'
        },
        {
            icon: faTriangleExclamation,
            name: 'Roadside Assistance'
        },
        {
            icon: faScrewdriverWrench,
            name: 'Honda Care'
        }
    ]
  return (
    <div className='brochures-box'>
      <div className='content'>
        <div className="brochures">
            <h2 className='thin-heading'>Brochures</h2>
            <div className='info'>
                <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Full-Line-and-Family-Brochures/2022/Wave-2/Brand-Brochure/Brochure-Block-Thumbnail.png" alt="" />
            </div>
            <button className='red-button'>DOWNLOAD</button>
        </div>
        <div className="warranty">
            <h2 className='thin-heading'>Warranty</h2>
            <div className='warranty-info'>
                {warranties.map((warranty, i) => {
                    return(
                        <div className='warranty-item' key={i}>
                            <FontAwesomeIcon icon={warranty.icon}/>
                            <p>{warranty.name}</p>
                        </div>
                    )
                })}
            </div>
            <button className='red-button'>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Brochures
