  import React, {useState} from 'react'
  import {BsPerson} from 'react-icons/bs'
  import {BsSearch} from 'react-icons/bs'
// import {AiOutLinelose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'



  const Navbar = () => {
    const [nav, setNav] = useState(false)
  const {logo,setLogo} = useState(false)
    const handleNav = () => {
      setNav(!nav);
      setLogo(!logo);
    }
    return (
    
        <div className='flex w-full items-center justify-between h-20 px-4 absolute z-10 text-black'>
      <div >
      <h1 onClick={handleNav} className={logo ? 'hidden' : "block"}>GEOLOGI</h1>
      </div>
      <ul className='hidden md:flex'>
      <li>home</li>
      <li>batuan</li>
      <li>peminjaman</li>
      <li>book</li>
      </ul>
      <div className='hidden md:flex'>
      <BsPerson className='mr-2' size={20}/>
      <BsSearch size={20}/>
      </div>

      <div onClick={handleNav} className='z-10 md:hidden'>
      {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/> }
      </div>
      
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
      <ul>
      <h1>GEOLOGI</h1>
      <li className='border-b'>home</li>
      <li className='border-b'>batuan</li>
      <li className='border-b'>peminjaman</li>
      <li className='border-b'>book</li>
      <div className='flex flex-col'>
      <button className='my-6'>Search</button>
      <button className=''>Account</button>
      </div>

      <div className='flex justify-between my-6'>
      <FaFacebook className='icon'/>
      <FaTwitter className='icon'/>
      <FaYoutube className='icon'/>
      <FaPinterest className='icon'/>
      <FaInstagram className='icon'/>

      </div>
      </ul>
      </div>
          </div>
    )
  }

  export default Navbar