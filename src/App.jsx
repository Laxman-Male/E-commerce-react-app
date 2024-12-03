import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Shopping from './Components/Shopping'
import Cart from './Components/Cart'
import Fotter from './Components/Fotter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] "> */}
   <div className='bg-gradient-to-t from-violet-300'>
    <Navbar/>
    <Home/>
    <Cart/>
    <Shopping/>
    <About/>
    <Fotter/>
    </div>
       {/* <h1 className='bg-slate-500'> hello </h1> */}
    </>
  )
}

export default App
