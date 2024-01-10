import './Trim.scss'

const Trim = () => {
    const nav = [
        'top features',
        'exterior',
        'interior',
        'technology',
        'safety & alerts'
    ]

    const trims = [
        {
            trim: 'LX',
            price: '27,895',
            attributes: ['192-hp turbocharged engine', '10.2-Inch Driver Information Interface','Apple CarPlay® Compatibility', 'Honda Sensing®'],
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Trim-Education/Jellies/Side-Profile/MY24-Accord-trim-jelly-LX-2x-A.png'
        },
        {
            trim: 'EX',
            price: '29,910',
            attributes: ['One-Touch Power Moonroof','Dual-Zone Automatic Climate Control','Heated Front Seats','Heated Side Mirrors'],
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Trim-Education/Jellies/Side-Profile/MY24-Accord-trim-jelly-EX-2x-A.png'
        },
        {
            trim: 'sports hybrid',
            price: '32,895',
            attributes: ['204-hp Hybrid Powertrain', '19-Inch Alloy Wheels', '12.3-Inch Touch-Screen','Wireless Apple CarPlay® Compatibility'],
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Trim-Education/Jellies/Side-Profile/MY24-Accord-trim-jelly-SPORT-HYB-2x-A.png'
        },
        {
            trim: 'EX-L Hybrid',
            price: '34,540',
            attributes: ['Leather-Trimmed Seating','Parking Sensors', 'Driver Memory Seat', 'Heated Side Mirrors'],
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Trim-Education/Jellies/Side-Profile/MY24-Accord-trim-jelly-EXL-HYB-2x-A.png'
        },
        {
            trim: 'Sport-L Hybrid',
            price: '34,875',
            attributes: ['Leather-Trimmed Seating', '19-Inch Matte-Black Alloy Wheels','Rear Decklid Spoiler','Rear Diffuser'],
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Trim-Education/Jellies/Side-Profile/MY24-Accord-trim-jelly-SPORT-L-HYB-2x-A.png'
        },
        {
            trim: 'Touring Hybrid',
            price: '38,890',
            attributes: ['Google built-in', 'Head-Up Display', 'Bose Premium Sound System','Wireless Phone Charger'],
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Trim-Education/Jellies/Side-Profile/MY24-Accord-trim-jelly-TOURING-HYB-2x-A.png'
        },
    ]
  return (
    <div className='trim-box'>
      <div className='trim-nav'>
            <div className='nav-title thin-heading'>Trims & Specs</div>
            <ul className='nav'>
                {nav.map((item, i) => {
                    return(
                        <li className='nav-item' key={i}>{item}</li>
                    )
                })}
            </ul>
      </div>

      <div className='trim-section'>
        <div className='trim-bar'>
            {trims.map((trim, i) => {
                return(
                    <div className="trim-card" key={i}>
                        <img src={trim.img} alt={trim.trim} />
                        <div className="trim-level-section">
                            <p className='trim-level'>{trim.trim}</p>
                            <p className='trim-price'>${trim.price} <span className='starting-tag'>Starting MSRP*</span></p>
                            <button className='trim-button'>BUILD</button>
                        </div>
                        <div className='trim-specs-section'>
                            {trim.attributes.map((attribute, i) => {
                                return(
                                    <div key={i} className='trim-spec'>
                                        <p>{attribute}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='see-more'>SEE MORE</p>
                    </div>
                )
            })}
            </div>
            <button>SEE ALL FEATURES & SPECS</button>
        </div>
    </div>
  )
}

export default Trim
