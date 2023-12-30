 "use client"
import React, { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios'
import Link from 'next/link'


const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [FullName, setFullName] = useState<string>("")
  const [role, setRole] = useState<string>("User")

  const add = async (): Promise<void> => {
         try {
      if (!FullName) {
        alert('Please enter a username.')
        
      }
  
      const userData = {
        FullName: FullName,
        email: email,
        password: pass,
        role: role
      };
  

      const response = await axios.post('http://localhost:8000/auth/register', userData);

      console.log('User added:', response.data);
      // Optionally, you can redirect the user to a different page after successful registration.
    } catch (error) {
      console.error('Error adding user:', error);

      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.error || 'Registration failed. Please try again later.'
        console.error('Response data:', error.response?.data)
        console.error('Response status:', error.response?.status)
        console.error('Response headers:', error.response?.headers)

        if (error.response?.data.details) {
          alert(`Validation failed: ${error.response.data.details.join(', ')}`)
        } else {
          alert(errorMessage);
        }
      } else {
        console.error('Error setting up the request:', error.message)
      }
    }
  }

  return (
    <div className='grid grid-cols-2'>
      <div id='div-az' className='bg-gray w-full h-full'>
        <div className='flex m-20 ml-40 '>
          <div className='flex gap-20'>
            <Link href={'/home'}>Home</Link>
            <Link href={'/About'}>About</Link>
            <Link href={'/faq'}>FAQ</Link>
            <Link href={'/login'}>
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
                Login
              </h1>
            </Link>
          </div>
        </div>
        <div className='ml-40 mt-10'>
          <h1 className='text-center mb-5 font-extrabold text-xl'>Welcome To Hannibal</h1>
          <h1 className='mb-5'>Register to continue </h1>
          <div>
            <Link href={'/login'}>
              <button
                style={{ 'position': 'absolute', 'top': '31%', 'left': '43%' }}
                className=' text-blue float-right font-bold mr-10'
              >
                Log-in
              </button>
            </Link>
            <input
              placeholder='Username'
              required
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              className='w-[30rem] h-14 border border-gray-400 p-4 text-sm mb-10'
            />
            <input
              required
              type="email"
              placeholder='Email Address '
              onChange={(e) => setEmail(e.target.value)}
              className='w-[30rem] h-14 border border-gray-400 p-4 text-sm mb-10'
            />
            <input
              placeholder='Password'
              required
              type="password"
              onChange={(e) => setPass(e.target.value)}
              className='w-[30rem] h-14 border border-gray-400 p-4 text-sm mb-5	'
            />
            <br />
            <h1>Role:</h1><br />
            <select
              onChange={(e) => setRole(e.target.value)}
              className='w-[10rem] h-7 cursor-pointer rounded-sm'
            >
              <option>seller</option>
              <option>User</option>
            </select>
            <button
        onClick={() => add()}
        style={{ 'backgroundImage': 'linear-gradient(90deg,#4681b9,#2c578c)' }}
        className='flex justify-center items-center w-[30rem] h-14 bg-blue mt-10 text-white'
      >
        Register
      </button>
            <br />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
        
          <p className="text-sm text-gray-500 mt-2">Follow us on social media</p>
        </div>
      </div>
      <div>
        <img className='w-full h-full float-right' src='https://img.freepik.com/premium-photo/online-shopping-images-big-sales-offer-sale-idea-image-illustration-black-friday-images-banners_744422-6374.jpg' alt="" />
      </div>
    </div>
  );
};

export default Register;
