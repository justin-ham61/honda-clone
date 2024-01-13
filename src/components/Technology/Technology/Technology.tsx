
import { useState, useRef, RefObject } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

const Technology = () => {
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
            heading: 'A New Standard for Connectivity',
            info: 'The first-ever Honda with available Google build-in and an extra-wide 12.3-inch touch-screen, the 2024 Accord offers intuitive, hands-free connectivity to you media, avigation, and more. Effortlessly stream music, check the weather, and control smart home devices using Alexa Build-in',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/TECHNOLOGY/Overview/MY24-accord-feat-blade-technology-overview-desktop-2x-B.jpg'
        },
        {
            name: 'INTERFACE',
            heading: '12.3-Inch Touch-Screen',
            info: 'The 12.3-Inch touch-screen features swipe functionality and an extra-wide display, giving you a large, clear view of maps and other important apps.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/TECHNOLOGY/Interface/12-3-Inch-Touch-Screen/MY24-accord-feat-blade-technology-inerface-01-desktop-2x.jpg'
        },
        {
            name: 'CONNECTIVITY',
            heading: 'Google built-in',
            info: 'With Google build-in*, youll get Google Assistant for hands-free help and Google Maps to get the information you need on your drive. Youll also get access to more apps on Google Play.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/TECHNOLOGY/Connectivity/Google-built-in/MY24-accord-feat-blade-technology-connectivity-01-desktop-2x-A.jpg'
        },
        {
            name: 'PEACE OF MIND',
            heading: 'Parking Sensors',
            info: 'Park and make three-point teruns with confidence, even in tight spaces. With front and rear parking sensors, youll hear an audible alert when youre approaching a detected object or vehicle.',
            image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/feature-blades/TECHNOLOGY/peace-of-mind/Parking-Sensors/MY24-accord-feat-blade-technology-peaceofmind-02-desktop-2x.jpg'
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
                    <h1 className='performance-heading thin-heading'>Technology</h1>
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
            <h2 className='thin-heading'>Technology</h2>
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

export default Technology
