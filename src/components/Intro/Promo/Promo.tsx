import './Promo.scss'
import { useEffect, useRef, useState} from 'react'

const Promo = () => {
    const [ imageHeight, setImageHeight ] = useState<number>(0)
    const imageRef = useRef<HTMLImageElement>(null)

    const updateHeight = () => {
        if (imageRef.current) {
            setImageHeight(imageRef.current.clientHeight + 40);
        }
    };
    
    useEffect(() => {
        window.addEventListener('resize', updateHeight);

        // Initial height update
        updateHeight();

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const handleLoad = () => {
        const img = imageRef.current;
        if (img) {
            console.log(img.clientHeight); // Log the original height
            setImageHeight(img.clientHeight + 40); // Add 100 to the original height
        }
    };

    const handleClick = () => {
        console.log("hello")
    }
  return (
    <div className='promo-section' style={{height: imageHeight}}>
       <div className='promo-image'>
            <img onLoad={handleLoad} ref={imageRef} src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Hybrid/Promo-Banner/MY24-accord-promobanner-1920x350-2x.jpg" alt="" />
            <div className='bottom-info'>Sport-L Hybrid shown in Crystal Black Pearl.</div>
       </div>
       <div className='white-bar left'></div>
       <div className="white-bar right"></div>
       <div className='promo-info-section' onClick={handleClick}>
                <h2>Step Up to the Accord Hybrid</h2>
                <p>With 204-horsepower,* an extra-wide 12.3-inch touch-screen, and wireless Apple CarPlay®* compatibility, hybrid trims give you premium technology, while receiving a 46 city/41 highway mpg rating.*</p>
                <button className='blue-button' onClick={handleClick}>LEARN MORE</button>
       </div>
    </div>
  )
}

export default Promo
