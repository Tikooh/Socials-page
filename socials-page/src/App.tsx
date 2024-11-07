import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import RenderSlimes from './components/RenderSlimes'
import SocialsBox from './components/SocialsBox'
import SpawnSlime from './components/SpawnSlime'

const App = () => {

  const content = (
    <>
      <div className="container">
        <SocialsBox></SocialsBox>
        <Header></Header>
        <Footer></Footer>
        <SpawnSlime></SpawnSlime>
        <RenderSlimes></RenderSlimes>
      </div>

    </>
  )
  
  return content
}

export default App
