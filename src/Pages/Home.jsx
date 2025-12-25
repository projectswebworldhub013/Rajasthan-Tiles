import React from 'react'
import HeroSection from '../Components/HeroSection'
import OurStory from '../Components/OurStory'
import CollectionAbout from '../Components/CollectionAbout'
import SurfaceCollections from '../Components/SurfaceCollections'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurStory/>
      <SurfaceCollections/>
      <CollectionAbout/>
      <Testimonials/>
    </div>
  )
}

export default Home
