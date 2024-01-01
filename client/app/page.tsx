"use client"
import axios from 'axios'
import Register from './register/page'
import Login from './login/page'
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