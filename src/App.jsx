import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap';
import { ScrollTrigger }from 'gsap/all';


//registration of the gsap 
gsap.registerPlugin(ScrollTrigger)



const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    </main>
  )
}

export default App