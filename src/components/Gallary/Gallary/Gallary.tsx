import { useEffect, useRef, useState } from 'react'
import './Gallary.scss'

const Gallary = () => {
  const [ width, setWidth ] = useState(0)
  const [ left, setLeft ] = useState(0)
  const [ activeGallary, setActiveGallary ] = useState(0)
  const [startX, setStartX] = useState(0)
  const [endX, setEndX] = useState(0)

  const articles = [
    {
      title: 'Explore the sleek look from every angle.',
      button: 'View Exterior',
      img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/MY24-acccord-gallery-exterior-desktop-2x.jpg',
      mobile: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/MY24-accord-gallery-exterior-mobile-2x.jpg'
    },
    {
      title: 'Get an inside look at the most advanced Accord ever.',
      button: 'Watch Videos',
      img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/MY24-accord-gallery-interior-desktop-2x.jpg',
      mobile: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/MY24-accord-gallery-interior-mobile-2x.jpg'
    },
    {
      title: 'Take a tour of the Accord',
      button: 'Watch Videos',
      img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/Honda-_Accord_Video-Tout_XL_-927-x-1010.jpg?sc_lang=en',
      mobile: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Mini-Gallery/Honda-_Accord_Video-Tout_S_-714-x-1010.jpg?sc_lang=en'
    }
  ]
  
  const trackBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trackBoxRef.current){
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

  const onTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
      setEndX(e.changedTouches[0].clientX);
      handleSwipe();
  };

  const handleSwipe = () => {
    if(activeGallary === 0 || activeGallary === 2){
      return
    }
    if (startX - endX > 150) {
        // Swipe Left
        setActiveGallary(activeGallary + 1)
    } else if (endX - startX > 150) {
        // Swipe Right
        setActiveGallary(activeGallary - 1)
    }
  };



  return (
    <div className='gallary-box box'>
      <div className='gallary-title'><h1 className='thin-heading'>Gallery</h1></div>
      <div className='image-box'>
        {articles.map((article, i) => {
          return(

            <div className="article" key={i}>
              <img src={article.img} alt="" />
              <div className='article-overlay'>
                  <p>{article.title}</p>
                  <button className='blue-button'>{article.button}</button>
              </div>
          </div>
            )
        })}
      </div>
      <div className='image-track-box' ref={trackBoxRef}>
        <div className='image-track'
          style={{
            transform: `translateX(${left - (((290)) * activeGallary) - (15 * activeGallary)}px`
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          >
        {articles.map((article, i) => {
          return(
            <div className="article" key={i} style={{width: 290}} onClick={() => setActiveGallary(i)}>
              <img src={article.mobile} alt="" />
              <div className='article-overlay'>
                  <p>{article.title}</p>
                  <button className='blue-button'>{article.button}</button>
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

export default Gallary
