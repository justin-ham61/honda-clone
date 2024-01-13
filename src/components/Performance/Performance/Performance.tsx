import './Performance.scss'
import { RefObject, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

const Performance = () => {
    const [ chosenCategory, setChosenCategory ] = useState<number>(0)
    const [ mobileNavTranslate, setMobileNavTranslate ] = useState<number>(0)
    const navBarRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const mobileBoxRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const [ initial, setInitial ] = useState({
        image: 500,
        text: 350
    })

    const category = [
        {
            name: 'OVERVIEW',
            heading: 'An Ideal Balance of Power and Refinement',
            info: 'Whether you prefer thrills or serenity, the 2024 Accord delivers. Both the 192-hp turbo engine and available 204-hp hybrid powertrain offer improved acceleration, while the hybrids motion management system helps you handle corners with ease.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/PERFORMANCE/Overview/MY24-accord-feat-blade-performance-overview-desktop-2x.jpg'
        },
        {
            name: 'HYBRID',
            heading: '204-hp Hybrid Powertrain',
            info: 'From the moment you step on the pedal, youll feel the smooth, direct rush of instant torque, courtesy of the 204-horepower hybrids powerful electric motor.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/PERFORMANCE/Hybrid/Hybrid-Powertrain/MY24-accord-feat-blade-performance-hybrid-01-desktop-2x.jpg'
        },
        {
            name: 'TURBO',
            heading: '192-hp Turbocharged Engine',
            info: 'LX and EX trims feature a highly responsive 1.5-liter turbocharged engine, which puts out 192 horsepower and 192 pound-feet of torque.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/PERFORMANCE/Turbo/192-hp-Turbocharged-Engine/MY24-accord-feat-blade-performance-turbo-01-desktop-2x.jpg'
        },
        {
            name: 'HANDLING & COMFORT',
            heading: 'Motion Management System',
            info: 'As you steer through curves, you;; notice how responsive, agile, and balanced the Accord feels. A motion management system uses steering input to automatically adjust deceleration and can help maintain grip force on the front wheels.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/PERFORMANCE/Handling-and-Confort/Motion-Management-System/honda-accord-performance-handling-comfort-motion-management-system-2280x1282.jpg?sc_lang=en'
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
    
    const handleMobileNavClick = (target: number) => {
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
        if(navBarRef.current && mobileBoxRef.current){
            const navItem = navBarRef.current.children[target] as HTMLElement
            const navItemLeftPosition = navItem.offsetLeft
            const navItemRightPosition = navItemLeftPosition + navItem.offsetWidth
            const boxWidth = mobileBoxRef.current.offsetWidth
            //means item is in view
            if(navItemLeftPosition > 0 && navItemRightPosition < boxWidth){
                setMobileNavTranslate(0)
                //means item is off screen to the left
            } else if (navItemLeftPosition < 0 && navItemRightPosition > 0){
                setMobileNavTranslate(0)
                //means item is off screen to the right
            } else if (navItemLeftPosition < boxWidth && navItemRightPosition > boxWidth){
                const translateAmount = navItemRightPosition - boxWidth + 32
                setMobileNavTranslate(-translateAmount)
            }
        }
    }

  return (
    <div className='box'>
        <div className='performance-box'>
            <div className='performance-heading-bar'>
                <div className='heading-accent'>
                    <p>FEATURES</p>
                </div>
                <div className='heading'>
                    <h1 className='performance-heading thin-heading'>Performance</h1>
                </div>
            </div>

            <ul className='performance-nav'>
                {category.map((item, i) => {
                    return(
                        <li className={`overview-nav-button  ${chosenCategory === i && "active"}`} key={i} onClick={() => handleNavClick(i)}>{item.name}</li>
                    )
                })}
            </ul>
            <div className='main-image'>
                <div className='image-wrapper'>
                    <AnimatePresence>
                        <motion.img key={category[chosenCategory].name}src={category[chosenCategory].image} alt="" 
                            initial={{x: initial.image, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{ease: 'easeOut', duration: .5}}
                            />
                    </AnimatePresence>
                </div>
                    <div className='text-box'>
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
        <div className='performance-box-mobile' ref={mobileBoxRef}>
            <h2 className='thin-heading'>Performance</h2>
            <div className='nav-bar-wrapper'>
                <div className="mobile-nav-bar"
                    ref={navBarRef}
                    style={{
                        transform: `translateX(${mobileNavTranslate}px)`
                    }}
                    >
                    {category.map((item, i) => {
                        return(
                            <p key={i} onClick={() => handleMobileNavClick(i)} className={`mobile-nav-item ${chosenCategory === i && "active"}`}>{item.name}</p>
                            )
                        })}
                </div>
            </div>
            <div className='mobile-article-section'>
                <AnimatePresence>
                    <motion.div className='mobile-article'
                        key={chosenCategory}
                        initial={{x: initial.text}}
                        animate={{x: 0}}
                        exit={{x: -initial.text}}
                        transition={{ease: 'easeOut', duration: .5, delay: .01}}
                        >
                        <img src={category[chosenCategory].image} alt="" />
                        <div className='description'>
                            <p className='heading'>{category[0].heading}</p>
                            <p>{category[chosenCategory].info}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

export default Performance
