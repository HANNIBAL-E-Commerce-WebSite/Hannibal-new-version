"use client"
import axios from 'axios'

import Featured from './Featured/Featured'
import Landing from './landing/landing'
import FeaturedItems from '../Featured/FeaturedItems/page'
const  Home=()=> {


  return (
    <main>
      <Landing/>
      <Featured/>
      <FeaturedItems/>
    </main>
 
  )
}
export default Home