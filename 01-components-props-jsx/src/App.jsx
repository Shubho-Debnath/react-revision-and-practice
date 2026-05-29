import './App.css'
import Card from './components/Card'
import avatar from './assets/avatar.jpg'
import intersteller from './assets/intersteller.jpg'
import SpiderMan from './assets/spidermen.jpg'

function App() {

  return (
    <>
    <div className="parent-container">
    <Card name="Intersteller" year="2014" duration="2" image={avatar}/>
      <Card name="Spider-Man" year="2010" duration="2" image={SpiderMan}/>
    <Card name="Avatar" year="2010" duration="2" image={intersteller}/>
    </div>
    </>
  )
}

export default App
