import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../layout/Hero'
import Layanan from '../layout/Layanan'
import Footer from '../layout/Footer'
import CTA from '../layout/CTA'
import Team from '../layout/Team'
import Portfolio from '../layout/Portofolio'
import About from '../layout/AboutUs'

export default function Home() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Hero></Hero>
      <Layanan></Layanan>
      <CTA></CTA>
      <Portfolio></Portfolio>
      <About></About>
      {/* <Team></Team> */}
      <Footer></Footer>
    </div>
  )
}
