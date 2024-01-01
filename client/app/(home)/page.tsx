"use client"
import axios from 'axios'

import Featured from './Featured/Featured'
import Landing from './landing/landing'
const  Home=()=> {


  return (
    <main>
      <Landing/>
      <Featured/>
    </main>
 
  )
}
export default Home