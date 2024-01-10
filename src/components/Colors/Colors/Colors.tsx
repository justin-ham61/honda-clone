/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './Colors.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface Color {
    name: string,
    available: string,
    img: string
}

interface Colors {
    'gray metallic': Color,
    'blue metallic': Color,
    'black pearl': Color,
    'silver metallic': Color,
    'white pearl': Color,
    'red metallic': Color,
    'night pearl': Color,
    'gray pearl': Color
}

const Colors = () => {
    const [ selectedColor, setSelectedColor ] = useState<string>('gray metallic')

    const colors:Colors = {
        'gray metallic': {
            name: 'Meteorite Gray Metallic',
            available: 'Available on LX, EX, EX-L Hybrid, Touring Hybrid trims.',
            img: 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F8RKNW$EC:NH-904M$HC:undefined$IC:BK$O:$F:FIFS$ECC:GC$ECX:&width=1400'
        },
        'blue metallic': {
            name: 'Canyon River Blue Metallic',
            available: 'Available on EX, EX-L Hybrid, Touring Hybrid trims.',
            img: 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F8RKNW$EC:B-640M$HC:undefined$IC:BK$O:$F:FIFS$ECC:BU$ECX:&width=1400'
        },
        'black pearl': {
            name: 'Crystal Black Pearl',
            available: 'Available on LX, EX, Sport Hybrid, EX-L Hybrid, Sport-L Hybrid, Touring Hybrid trims.',
            img: 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F8RKNW$EC:NH-731P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BK$ECX:&width=1400',
        },
        'silver metallic': {
            name: 'Solar Silver Metallic',
            available: 'Available on LX, EX, Sport Hybrid, EX-L Hybrid, Sport-L Hybrid, Touring Hybrid trims.',
            img:'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F8RKNW$EC:NH-932M$HC:undefined$IC:BK$O:$F:FIFS$ECC:SA$ECX:&width=1400'
        },
        'white pearl': {
            name: 'Platinum White Pearl',
            available: 'Premium color adds $455 charge. Available on LX, EX, Sport Hybrid, EX-L Hybrid, Sport-L Hybrid, Touring Hybrid trims.',
            img: 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F8RKNW$EC:NH-883P$HC:undefined$IC:BK$O:$F:FIFS$ECC:WX$ECX:&width=1400'
        },
        'red metallic': {
            name: 'Radiant Red Metallic',
            available: 'Premium color adds $455 charge. Available on LX, EX, Sport Hybrid, EX-L Hybrid, Sport-L Hybrid, Touring Hybrid trims.',
            img: 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F8RKNW$EC:R-569M$HC:undefined$IC:GR$O:$F:FIFS$ECC:RL$ECX:&width=1400'
        },
        'night pearl': {
            name: 'Still Night Pearl',
            available: 'Premium color adds $455 charge. Available on Sport Hybrid, Sport-L Hybrid trims.',
            img: 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F5RJW$EC:B-575P$HC:undefined$IC:BK$O:$F:FIFS$ECC:BM$ECX:&width=1400'
        },
        'gray pearl': {
            name: 'Urban Gray Pearl',
            available: 'Premium color adds $455 charge. Available on Sport Hybrid, EX-L Hybrid, Sport-L Hybrid, Touring Hybrid trims.',
            img: 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:CY2F8RKNW$EC:NH-912P$HC:undefined$IC:BK$O:$F:FIFS$ECC:GE$ECX:&width=1400'
        }
    }

    const colorButtons = [
        {
            name: 'gray metallic',
            link: 'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/Meteorite-Gray-Metallic-NH-904M-ext-color-orb-1400-2x.png")'
        },
        {
            name:'blue metallic',
            link:'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/Canyon-River-Metallic-B-640M-ext-color-orb-1400-2x.png")'
        },
        {
            name:'black pearl',
            link:'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/Crystal-Black-Pearl-ext-color-orb-1400-2x.png")'
        },
        {
            name:'silver metallic',
            link:'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/Solar-Silver-Metallic-NH-932M-ext-color-orb-1400-2x.png?sc_lang=en")'
        },
        {
            name:'white pearl',
            link:'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/Platinum-White-Pearl-ext-color-orb-1400-2x.png")'
        },
        {
            name:'red metallic',
            link:'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/Radiant-Red-Metallic-r-569M-color-orb-1400-2x.png")'
        },
        {
            name:'night pearl',
            link:'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/accord-coupe-b-575-still-night-pearl-color-orb-1400-2x.png?sc_lang=en")'
        },
        {
            name:'gray pearl',
            link:'url("https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Color-Orbs/Ext-Color-Orbs/Urban-Gray-Pearl-NH-912P-ext-color-orb-1400-2x-B.png")'
        },
    ]

    const handleColorClick = (color: string) => { 
        setSelectedColor(color)
    }
  return (
    <div className='colors-box box'>
      <div className='colors-title'><h1 className='thin-heading'>Colors</h1></div>
      <div className='color-cycle-box'>
        <div className='left-arrow'>
            <FontAwesomeIcon icon={faChevronLeft} size='lg'/>
        </div>
        <div className='right-arrow'>
            <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
        <div className='image'>
            <img src={colors[selectedColor as keyof Colors].img} alt="" />
        </div>
      </div>
      <div className='color-info-bar'>
        <p className='color-info'>{colors[selectedColor as keyof Colors].name}</p>
        <p className='color-sub-info'>{colors[selectedColor as keyof Colors].available}</p>
        <p className='color-warning'>Some trim and color combinations may be unavailable due to global supply challenges. See your local dealer for more information.</p>
      </div>
      <div className='color-selector-bar'>
        <ul>
            {colorButtons.map((color, i) => {
                return(
                    <li key={i}>
                        <button className='color-button' style={{backgroundImage: color.link}} onClick={() => handleColorClick(color.name)}></button>
                    </li>
                    )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Colors
