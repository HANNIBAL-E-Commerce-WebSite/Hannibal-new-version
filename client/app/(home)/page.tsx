"use client"
import axios from 'axios'
import { useUserContext } from '@/context/userContext' 
import Featured from './Featured/Featured'
import Landing from './landing/landing'
import FeaturedItems from '../Featured/FeaturedItems/page'
const  Home=()=> {
 
  const {user}=useUserContext()
  console.log(user,"hhh");
  

  return (
    <main>
      <Landing/>
      <Featured/>
      <FeaturedItems/>
    </main>
 
  )
}
export default Home