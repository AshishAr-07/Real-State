import React from 'react'
import About from '@/components/About'
import Work from '@/components/Work'
import Background from '@/components/Background'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Herosecond from '@/components/HeroSecond'

export default function page() {
  return (
    <>
  <Herosecond/>
   <About/>
   <Work/>
   <Background/>
   <Contact/>
   <Footer/>
    </>
  )
}
