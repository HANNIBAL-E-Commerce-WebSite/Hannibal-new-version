"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("User");

  const router = useRouter();

  const add = async () => {
    try {
      if (!name) {
        alert('Please enter a username.');
        return;
      }

      const userData = {
        fullName: name,
        email,
        password: pass,
        role,
      };

      const response = await axios.post<{ success: boolean }>('http://localhost:8000/auth/register', userData);

      console.log('User added:', response.data);

      if (response.data.success) {
        window.alert('WELCOME TO HANNIBAL');
        router.push('/login');
      }
    } catch (error) {
      console.error('Error adding user:', error);

      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.error || 'Registration failed. Please try again later.';
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
        console.error('Response headers:', error.response?.headers);

        if (error.response?.data.details) {
          alert(`Validation failed: ${error.response.data.details.join(', ')}`);
        } else {
          alert(errorMessage);
        }
      } else {
        console.error('Error setting up the request:', error);
      }
    }
  };

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
          <h1 className='mb-5'>Register Now </h1>
          <div>
           
            <input
              placeholder='Username'
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
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
  <option value="Seller">Seller</option>
  <option value="User">Client</option>
</select>
            <button
              onClick={() => add()}
              style={{ 'backgroundImage': 'linear-gradient(90deg,#4681b9,#2c578c)' }}
              className='flex justify-center items-center w-[30rem] h-14 bg-blue mt-10 text-white'
            >
              Register
            </button>
            <div className='flex justify-center items-center mt-10'>
          <p className='text-sm text-gray-500 mt-2'>Follow us on social media:</p>
          <div className='flex gap-2 ml-2'>
            <FontAwesomeIcon icon={faFacebook} size='2x' />
            <FontAwesomeIcon icon={faTwitter} size='2x' />
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </div>
        </div>
         
            <br />

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
  );
};

export default Register;
