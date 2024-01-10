import './MainFoot.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faSnapchat, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const MainFoot = () => {
    const logos = [
        faTwitter,
        faTiktok,
        faInstagram,
        faFacebookF,
        faLinkedinIn,
        faYoutube,
        faPinterestP,
        faSnapchat
    ]

    const menu = [
        {
            title: 'Vehicles',
            items: ['Civic Models','Accord Models', 'HR-V Crossover', 'CR-V Crossover', 'Passport SUV', 'Pilot SUV', 'Odyssey Minivan', 'Ridgeline Truck', 'Future Vehicles', 'Rugged Capability', 'Electrified Vehicles','Honda Certified Pre-Owned','All Vehicles']
        },
        {
            title: 'Shopping Tools',
            items: ['Build & Price', 'See Offers', 'Search Inventory', 'Estimate Payments', 'Apply for Financing', 'Trade-In Value', 'Lease or Finance']
        },
        {
            title: 'Discover Honda',
            items: ['About Us', 'News & Events', 'Awards, Accolades & Ratings', 'Careers', 'Investor Relations', 'Corporate Social Responsibility', 'Honda Financial Services', 'Honda in America', 'Honda Worldwide', 'Honda Merchandise & Apparel']
        },
        {
            title: 'Help & Support',
            items: ['FAQ', 'Customer Service', 'Mobility Assistance Program', 'Rear Entertainment System Accessibility for Individuals with Disabilites', 'Buyers Guide']
        },
        {
            title: 'Owners',
            items: ['Honda Owners Site', 'Schedule Service', 'Parts & Service', 'Certified Body Shop Locator', 'eStore', 'Roadside Assistance', 'Pay My Bill', 'Radio & Navi Codes', 'HondaLink','Wi-Fi Hotspot Data Plans', 'Safety Recall']
        }
    ]

  return (
    <div className='main-foot-box'>
      <div className='logo'>
        <img src="https://www.pmkm.com/wp-content/uploads/2014/07/blue-honda-logo-wallpaper-1.png" alt="" />
      </div>
      <div className='search'>
        <div className='search-item'>
            <p>Stay In Touch</p>
            <div className='logos'>
                {logos.map((logo, i) => {
                    return(
                        <div className='circle' key={i}>
                            <FontAwesomeIcon icon={logo}/>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='search-bar'>
            <input type="text" placeholder='Search for anything Honda' />
        </div>
        <div className='search-end'>
            <p>Receive the latest news and exclusive updates.</p>
            <button>Stay Informed</button>
        </div>
      </div>
      <div className='footer-menu-section'>
        {menu.map((menuItem, i) => {
            return (
                <div key={i} className='menu-column'>
                    <p className='menu-title'>{menuItem.title}</p>
                    <div className='menu-items'>
                        {menuItem.items.map((item, i) => {
                            return (
                                <p key={i} className='menu-item'>{item}</p>
                            )
                        })}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default MainFoot
