import { useEffect, useRef, useState } from 'react'
import './Sensing.scss'

const Sensing = () => {
    const [ activeGallary, setActiveGallary ] = useState(0)
    const [ width, setWidth ] = useState(0)
    const [ left, setLeft ] = useState(0)
    const trackBoxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!trackBoxRef.current){
        return
        } else {
        const resizeObserver = new ResizeObserver(() => {
            if(trackBoxRef.current){
                setWidth(trackBoxRef.current.clientWidth)
            }
        })
        resizeObserver.observe(trackBoxRef.current)
        return () => resizeObserver.disconnect()
        }
    }, [trackBoxRef, width])

    useEffect(() => {
        const left = (width - (290))/2
        setLeft(left)
    },[width])
    const info = [
        {
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Honda-Sensing/MY24-accord-honda-sensing-01-2x.jpg',
            title: 'The Honda Sensing Suite',
            text: 'Honda Sensing® is a suite of safety and assistance features designed to make driving easier and help protect you and your passengers. When activated, these features use sensor inputs to automatically provide alerts and can also provide steering and braking assistance as needed.'
        },
        {
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Honda-Sensing/MY24-accord-honda-sensing-02-2x.jpg',
            title: 'Collision Mitigation Braking System',
            text: 'The Collision Mitigation Braking System™ (CMBS™) can alert and assist you when there’s a risk of collision with a detected vehicle or pedestrian in front of you. The system can automatically apply brake pressure when it determines that a collision is unavoidable.'
        },
        {
            img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Honda-Sensing/MY24-accord-honda-sensing-03-2x.jpg',
            title: 'Road Departure Mitigation System',
            text: 'The Road Departure Mitigation System (RDM) is designed to help you stay on the road. If you cross over detected lane lines without signaling, RDM can provide necessary steering assistance to help you return to your lane or keep you from leaving the roadway entirely.'
        },
    ]
  return (
    <div className='sensing-box box'>
      <img className='sensing-logo' src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2019/passport/Honda_Sensing_SVG_Light.svg" alt="" />
      <div className='image-track-wrapper'>
        <div className='image-track'>
            {info.map((item, i) => {
                return(
                <div className="item" key={i}>
                    <img src={item.img} alt="" />
                    <div className='information'>
                        <div className='info-title'>{item.title}</div>
                        <div className='info-text'>
                            <p>{item.text}</p>
                        </div>
                    </div>
                </div>
                )}
            )}
        </div>
      </div>
      <div className='image-track-box' ref={trackBoxRef}>
          <div className='image-track'
            style={{
                transform: `translateX(${left - (((290)) * activeGallary) - (15 * activeGallary)}px`
            }}
          >
            {info.map((item, i) => {
                return(
                    <div className="item" key={i} onClick={() => setActiveGallary(i)}>
                    <img src={item.img} alt="" />
                    <div className='information'>
                        <div className='info-title'>{item.title}</div>
                        <div className='info-text'>
                            <p>{item.text}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        <div className='dot-bar'>
            <div onClick={() => setActiveGallary(0)} className={activeGallary === 0 ? 'active' : ''}></div>
            <div onClick={() => setActiveGallary(1)} className={activeGallary === 1 ? 'active' : ''}></div>
            <div onClick={() => setActiveGallary(2)} className={activeGallary === 2 ? 'active' : ''}></div>
        </div>
    </div>
    </div>
  )
}

export default Sensing
