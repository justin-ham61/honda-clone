import './Gallary.scss'

const Gallary = () => {
  return (
    <div className='gallary-box box'>
      <div className='gallary-title'><h1 className='thin-heading'>Gallery</h1></div>
      <div className='image-box'>
        <div className="article">
            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/MY24-acccord-gallery-exterior-desktop-2x.jpg" alt="" />
            <div className='article-overlay'>
                <p>Explore the sleek look from every angle.</p>
                <button className='blue-button'>View Exterior</button>
            </div>
        </div>
        <div className="article">
            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/MY24-accord-gallery-interior-desktop-2x.jpg" alt="" />
            <div className='article-overlay'>
                <p>Get an inside look at the most advanced Accord ever.</p>
                <button className='blue-button'>Watch Videos</button>
            </div>      
        </div>
        <div className="article">
            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/Honda-_Accord_Video-Tout_XL_-927-x-1010.jpg?sc_lang=en" alt="" />
            <div className='article-overlay'>
                <p>Take a tour of the Accord.</p>
                <button className='blue-button'>Watch Videos</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallary
