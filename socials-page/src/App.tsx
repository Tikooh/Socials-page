import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import RenderSlimes from './components/RenderSlimes'
import SocialsBox from './components/SocialsBox'
import SpawnSlime from './context/SpawnSlime'
import Spotify from './components/Spotify'
import UniqueSlimes from './components/UniqueSlimes'

const App = () => {

  const content = (
    <>
      <div className="container">
        <SocialsBox></SocialsBox>
        <Header></Header>
        <Footer></Footer>
        <SpawnSlime></SpawnSlime>
        <RenderSlimes></RenderSlimes>
        <UniqueSlimes></UniqueSlimes>
        <Spotify></Spotify>
      </div>

    </>
  )
  
  return content
}

export default App
