import './Video.scss'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Video = () => {
    const [ videoHeight, setVideoHeight ] = useState<number>(0)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const videoElement = videoRef.current;

        const updateVideoHeight = () => {
            if (videoElement) {
                // Choose either offsetHeight or clientHeight based on your needs
                console.log(videoElement.clientHeight)
                setVideoHeight(videoElement.clientHeight);
            }
        };

        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', updateVideoHeight);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadedmetadata', updateVideoHeight);
            }
        };
    }, []);

  return (
    <div className='video-box'>
        <div className='video-wrapper'>   
            <video ref={videoRef} className='video' muted autoPlay loop src="https://cfvod.kaltura.com/pd/p/1583502/sp/158350200/serveFlavor/entryId/1_a5bx0613/v/21/ev/27/flavorId/1_m3w1kj97/name/a.mp4"/>
        </div>  
            <div className='video-overlay'
                style={{height: videoHeight}}
            >

                <div className='vehicle-info'>
                    <div className='vehicle-info-heading'>
                        <p className='sub-title'>2024</p>
                        <h1 className='title'>ACCORD</h1>
                    </div>
                    <div className='vehicle-info-row'>
                        <div className='msrp-content'>
                            <div className='msrp-label'>
                                <span>STARTING MSRP</span>
                            </div>
                            <div className='msrp-value'>
                                $27,895
                            </div>
                        </div>
                        <div className='award-container-row'>
                            <div className='award-container'>
                                <img src='https://automobiles.honda.com/-/media/Offers-Icon.svg' alt="" />
                                <div>
                                    <div className='offer-heading'>
                                        EX Special APR
                                    </div>
                                    <div className='offer-subheading'>
                                        2.9% APR for 24-36 months¹
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hero-bottom'>
                    <div className='hero-highlights'>

                    <div className="hero-highlight">
                       <div className='highlight-icon'>
                            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Tools/Model-Highlights/Icons/204hp-hybrid-powertrain-40x40.svg" alt="" />
                        </div> 
                        <div className='highlight-content'>
                            <div className='heading'>Available</div>
                            <div className='sub-heading'>204-Horsepower  Hybrid Powertrain</div>
                        </div>
                    </div>
                    <div className="hero-highlight">
                       <div className='highlight-icon'>
                            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Tools/Model-Highlights/Icons/google_built_in_light.svg" alt="" />
                        </div> 
                        <div className='highlight-content'>
                            <div className='heading'>Available with</div>
                            <div className='sub-heading'>Google built-in*</div>
                        </div>
                    </div>
                    <div className="hero-highlight">
                       <div className='highlight-icon'>
                            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Tools/Model-Highlights/Icons/12_3inch_display_audio_touchScreen_Light.svg" alt="" />
                        </div> 
                        <div className='highlight-content'>
                            <div className='heading'>Available</div>
                            <div className='sub-heading'>12.3-Inch Touch-Screen</div>
                        </div>
                    </div>
                    </div>
                    <div className='bottom-bottom'>Sport-L Hybrid shown in Radiant Red Metallic.*</div>
                </div>

            </div>
    </div>
  )
}

export default Video
