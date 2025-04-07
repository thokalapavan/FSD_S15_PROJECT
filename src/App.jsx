import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Welcome from './components/welcome'
import Login from './components/Login'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Helloclass from './components/helloclass'
import { Home } from './components/Home'
import Datafetch from './components/Datafetch'
// import Flexdemo from './components/Flexdemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Welcome name="Pavan" id="39135"/>
      <Welcome name="chakri"/>
      <Welcome name="Nandu"/>
      <Flexdemo/>
      <Login/>
      <Greeting/>
      <Counter/>
      <Helloclass/> */}
      <Home/>
      {/* <Datafetch/> */}
      
    </>
  )
}

export default App
