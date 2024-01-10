import './ExInterior.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

const ExInterior = () => {
    const [ chosenCategory, setChosenCategory ] = useState(0)
    const [ initial, setInitial ] = useState({
        image: 500,
        text: 350
    })

    const category = [
        {
            name: 'OVERVIEW',
            heading: 'Modern Design in Motion',
            info: 'The Accord features a sleek look, with available sport styling that amplifies its spirited on-road personality. Inside, youll find a more comfortable experience, with body-strabilizing seats and available heated and ventilated front seats with automatic climate control.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/EXTERIOR--INTERIOR/Overview/MY24-accord-feat-blade-exterior-interior-overview-desktop-2x.jpg'
        },
        {
            name: 'STYLING',
            heading: 'Silhouette',
            info: 'Casting a bold, graceful profile, the Accord achieves its disinguished look with smooth contours and a fastback-inspired roofline.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/EXTERIOR--INTERIOR/Styling/Silhouette/MY24-accord-feat-blade-exterior-interior-styling-01-desktop-2x-C.jpg'
        },
        {
            name: 'CABIN',
            heading: 'Leather-Trimmed Seating',
            info: 'Plush yet durable leather-trimmed seats add another dimension of confort and style. Manufactured using a kneading process, they offer a softer, smoother texture than other leather seats',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/EXTERIOR--INTERIOR/Cabin/Leather-Trimmed-Seating/MY24-accord-feat-blade-exterior-interior-cabin-01-desktop-2x.jpg'
        },
        {
            name: 'AMENITIES',
            heading: 'Bose Premium Sound System',
            info: 'Immerse yourself in every crystal-clear note from the 12-speaker Bose premium sound system. Centerpoint surround-sound technology creates concert-like acoustics in your Accord, using a proprietary algorithm to convert your music into multiple channels.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/EXTERIOR--INTERIOR/Amenities/Bose-Premium-Sound-System/MY24-accord-feat-blade-exterior-interior-amenities-01-desktop-2x.jpg'
        },
        {
            name: 'ACCESSORIES',
            heading: 'HPD Package',
            info: 'Take your Accord to the next level with the Honda Performace Development Package, which includes a glodd-black decklid spoiler, black door mirror cover, HPD emblem, and front, side, and rear underbody spoilers.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/EXTERIOR--INTERIOR/Accessories/HPD---Package/MY24-Accord-feat-blade-ext-int-ext-accessories-01-2x.jpg'
        }
    ]

    const handleLeftClick = () => {
        setInitial({image: -500, text: -350})
        setTimeout(() => {
            setChosenCategory(chosenCategory - 1)
        }, 100)
    }
    const handleRightClick = () => {
        setInitial({image: 500, text: 350})
        setTimeout(() => {
            setChosenCategory(chosenCategory + 1)
        }, 100)
    }

    const handleNavClick = (target: number) => {
        if (target === chosenCategory){
            return
        }

        if(target > chosenCategory){
            setInitial({image: +500, text: +350})
        } else if (target < chosenCategory) {
            setInitial({image: -500, text: -350})
        }
        setTimeout(() => {
            setChosenCategory(target)
        }, 100)
    }


  return (
    <div className='box'>
    <div className='performance-box'>
        <div className='performance-heading-bar-mirror'>
            <div className='heading'>
                <h1 className='performance-heading thin-heading'>Exterior & Interior</h1>
            </div>
            <div className='heading-accent'>
                <p>FEATURES</p>
            </div>
        </div>

        <ul className='performance-nav-mirror'>
            {category.map((item, i) => {
                return(
                    <li className={`overview-nav-button  ${chosenCategory === i && "active"}`} key={i} onClick={() => handleNavClick(i)}>{item.name}</li>
                )
            })}
        </ul>

        <div className='main-image-mirror'>
            <div className='image-wrapper'>
                <AnimatePresence>
                    <motion.img key={category[chosenCategory].name}src={category[chosenCategory].image} alt="" 
                        initial={{x: initial.image, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ease: 'easeOut', duration: .5}}
                        />
                </AnimatePresence>
            </div>
                <div className='text-box-mirror'>
                        <div className='text-wrapper'>
                            <AnimatePresence>
                                <motion.div className='text-final'
                                    key={chosenCategory}
                                    initial={{x: initial.text}}
                                    animate={{x: 0}}
                                    exit={{x: -initial.text}}
                                    transition={{ease: 'easeOut', duration: .5, delay: .01}}
                                >
                                    <p className='name'>{category[chosenCategory].name}</p>
                                    <h2 className='heading'>{category[chosenCategory].heading}</h2>
                                    <p className='info'>
                                        {category[chosenCategory].info}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    <div className='directional'>
                        {chosenCategory > 0 ? 
                            <div className='left' onClick={handleLeftClick}>
                                <FontAwesomeIcon icon={faChevronLeft}/>
                                <p>{category[chosenCategory - 1].name}</p>
                            </div>
                            :
                            <div></div>
                        }
                        {chosenCategory < 3 ? 
                            <div className='right' onClick={handleRightClick} >
                                <p>{category[chosenCategory + 1].name}</p>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}

export default ExInterior
