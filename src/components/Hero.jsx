import React, { useEffect, useRef } from 'react'

const Hero = () => {

   const videoRef = useRef();
   useEffect(()=> {
    if(videoRef.current) videoRef.current.playbackRate = 2 ;
   }, []);
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="macbook-title" />
        </div>
        <video src="/videos/hero.mp4" autoPlay muted playsInline  />

        <button className=' relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out '>Buy</button>
        <p>From $1599 or $133/mo for 12 month</p>
    </section>
  )
}
2
export default Hero