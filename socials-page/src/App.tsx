import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SocialsBox from './components/SocialsBox'
import SpawnSlime from './components/SpawnSlime'
import Slime  from './components/Slime'

const App = () => {

  const content = (
    <>
      <div className="container">
        <SocialsBox></SocialsBox>
        <Header></Header>
        <Footer></Footer>
        <Slime></Slime>
        <SpawnSlime></SpawnSlime>
      </div>

    </>
  )
  
  return content
}

export default App
