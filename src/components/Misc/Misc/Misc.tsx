import './Misc.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faTag, faMagnifyingGlass, faCalculator} from '@fortawesome/free-solid-svg-icons'

const Misc = () => {
    const tools = [
        {
            icon: faScrewdriverWrench,
            name: 'Build and Price'
        },
        {
            icon: faTag,
            name: 'See Offers'
        },
        {
            icon: faMagnifyingGlass,
            name: 'Search Inventory'
        },
        {
            icon: faCalculator,
            name: "Estimate Payments"
        }
    ]
  return (
    <div className='misc-section'>
        <div className='shopping-tools'>
            <h2 className='shopping-tools-heading thin-heading'>Shopping Tools</h2>
            <div className='shopping-tool-bar'>
                {tools.map((tool, i) => {
                    return (
                        <div className='shopping-tool' key={i}>
                            <FontAwesomeIcon icon={tool.icon}/>
                            <p>{tool.name}</p>
                            <button className='blue-button'>GO</button>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='awards'>
            <h2 className='thin-heading'>Awards</h2>
            <div className='award-card'>
                <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Awards/2021-Car-and-Driver-10Best/CarAndDriver-10Best-2x.jpg" alt="" />
                <div className='award-name'>
                    <p className='award-title'>2023 <span>Car and Driver's</span> 10 Best Cars</p>
                    <p className='award-origin'>Car and Driver</p>
                </div>
                <p className='see-details'>SEE DETAILS</p>
            </div>
            <button >SEE ALL AWARDS</button>
        </div>
    </div>
  )
}

export default Misc
