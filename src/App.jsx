/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home/Home'

function App() {
 
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
      
    </>
  )
}

export default App
