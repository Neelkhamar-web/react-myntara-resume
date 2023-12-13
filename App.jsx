import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Product from './Product'
import About from './About'
import { BrowserRouter,Route,Routes } from 'react-router-dom'



const App = () => {
  return (
    <>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/> }>
      </Route>
      <Route path="/About" element={ <About /> }>
      </Route>
      <Route path="/Product" element={ <Product /> }>
      </Route>
    </Routes>
  </BrowserRouter>

    
    </>
  )
}

export default App