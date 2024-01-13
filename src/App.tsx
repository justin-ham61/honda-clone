import './App.css'
import MainNav from './components/Nav/MainNav/MainNav'
import SubNav from './components/Nav/SubNav/SubNav'
import Video from './components/Intro/Video/Video'
import Promo from './components/Intro/Promo/Promo'
import Gallary from './components/Gallary/Gallary/Gallary'
import Colors from './components/Colors/Colors/Colors'
import Performance from './components/Performance/Performance/Performance'
import ExInterior from './components/ExInterior/ExInterior/ExInterior'
import Technology from './components/Technology/Technology/Technology'
import Sensing from './components/Sensing/Sensing/Sensing'
import Trim from './components/Trim/Trim/Trim'
import Misc from './components/Misc/Misc/Misc'
import Service from './components/Service/Service/Service'
import Brochures from './components/Brochures/Brochures/Brochures'
import MainFoot from './components/Footer/MainFoot/MainFoot'
import SubFoot from './components/Footer/SubFoot/SubFoot'
function App() {

  return (
    <div className='page'>
      <MainNav/>
      <SubNav/>
      <Video/>
      <Promo/>
      <Gallary/>
      <Colors/>
      <Performance/>
      <ExInterior/>
      <Technology/>
      <Sensing/>
      <Trim/>
      <Misc/>
      <Service/>
      <Brochures/>
      <MainFoot/>
      <SubFoot/>
    </div>
  )
}

export default App
