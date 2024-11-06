import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SocialsBox from './components/SocialsBox'
import Sprite  from './components/Sprite'
import SpriteBox from './components/SpriteBox'
const App = () => {

  const content = (
    <>
      <div className="container">
        <SocialsBox></SocialsBox>
        <Header></Header>
        <Footer></Footer>
        <SpriteBox></SpriteBox>
        <Sprite></Sprite>
      </div>

    </>
  )
  
  return content
}

export default App
