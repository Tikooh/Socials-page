import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SocialsBox from './components/SocialsBox'
const App = () => {

  const content = (
    <>
      <div className="container">
        
        <SocialsBox></SocialsBox>
        <Header></Header>
        <Footer></Footer>
      </div>

    </>
  )
  
  return content
}

export default App
