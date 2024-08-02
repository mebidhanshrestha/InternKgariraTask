import Footer from './components/Footer'
import Header from './components/Header'
import './global.scss'
import Artist from './pages/Artist'
import Events from './pages/Events'
import Explore from './pages/Explore'
import Informed from './pages/Informed'
import RecentlyViewed from './pages/RecentlyViewed'
import Slider from './pages/Slider'
import Venue from './pages/Venue'


function App() {
  return (
    <>
      <Header />
      <Slider/>
      <Events/>
      <RecentlyViewed/>
      <Explore/>
      <Artist />
      <Venue />
      <Informed/>
      <Footer />
    </>
  )
}

export default App
