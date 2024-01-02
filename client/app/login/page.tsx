"use client"
import React,{useState,createContext} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useUserContext } from '@/context/userContext' 
const Login= () => {
  const[con,setCon]=useState("")
  const router=useRouter()
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  const[userID,setUserID]=useState(0)
  const[token,setToken]=useState('')
  const[logged,setLogged]=useState(false)
  const [role,setRole]=useState("")
  const {setUser} =useUserContext()

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        email: email,
        password: pass,
      })
      const { token, id ,role} = response.data
      setToken(token)
      setUserID(id)
      setRole(role)
      setUser(response.data)
      alert('Login successful. Welcome!')
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your Password or email and try again.')
    }
  }

  
  const handleRedirect = () => {
    switch (role) {
      case 'admin':
        router.push('/admin-dashboard')
        break
      case 'seller':
        router.push('/seller-dashboard')
        break
      case 'client':
        router.push('/client-dashboard')
        break
      default:
        router.push('/')
    }
  }

  
  return (
    <div className='grid grid-cols-2'>
     
          <div id='div-az' className='bg-gray w-full h-full' >
            <div className='flex m-20 ml-40 '>
              <div className='flex gap-20'>
              <Link href={'/register'}>
  <h1
    style={{
      'color': 'white',
      'width': '240%',
      'marginTop': '-11%',
      'height': '150%',
      'borderRadius': '25px',
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'backgroundImage': 'linear-gradient(-45deg,#ce7615, #fcc32c)'
    }}
  >
    <button>Register</button>
  </h1>
</Link>

              </div>
            </div>
            <div className='ml-40 mt-10'>
              <h1 className='text-center mb-5 font-extrabold text-xl'>Welcome</h1>
              <h1>Sign-Up For Free </h1>

              <div>
                
          <input type="email"
          placeholder='Email Adress or Username'
          onChange={(e)=>setEmail(e.target.value)}
          className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	mb-10'
          />
          <br/>
          <input type="password"
          placeholder='Password'
          onChange={(e)=>setPass(e.target.value)}
          className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	'

          /><br/>
       <button onClick={()=>login()} 
       style={{'backgroundImage': 'linear-gradient(90deg,#4681b9,#2c578c)'}}
       className='flex justify-center items-center w-[30rem] h-14 bg-blue mt-10 text-white'
       >Sign-in </button>
       <h1 className='text-blue text-center mt-10 mr-10 mb-10'>Forget Password?</h1>
       <div className='flex justify-center items-center mt-10'>
          <p className='text-sm text-gray-500 mt-2'>Follow us on social media:</p>
          <div className='flex gap-4 ml-4'>
            <FontAwesomeIcon icon={faFacebook} size='2x' />
            <FontAwesomeIcon icon={faTwitter} size='2x' />
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </div>
        </div>
       </div>
      </div>
        </div>
        <div>
        
        <img
  className='w-[600px] h-[600px] float-left mb-4 shadow-2xl mt-24 ml-4'
  src='https://img.freepik.com/premium-photo/online-shopping-images-big-sales-offer-sale-idea-image-illustration-black-friday-images-banners_744422-6374.jpg'
  alt=""
/>





        </div>
      
        </div>
  )
}

export default Login