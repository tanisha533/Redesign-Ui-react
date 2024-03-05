import React from 'react'
import Banner from './Banner' 
import About from './About'
import Toaction from './Toaction'
import Testimonials from './Testimonials'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Toaction/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
