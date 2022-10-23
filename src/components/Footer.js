import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'


    
const Footer = () => {
  return (
    <div className='w-full bg-gray-400 py-16'>
    <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
    <div className='sm:flex text-center justify-between items-center'>
     <h1>Geologi</h1>
    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
    
    <FaFacebook className='icon'/>
    <FaTwitter className='icon'/>
    <FaYoutube className='icon'/>
    <FaPinterest className='icon'/>
    <FaInstagram className='icon'/>
    </div>
    </div>
    <div className='flex justify-between'>
    <ul className='lg:flex'>
    <li>fxg</li>
    <li>sd2</li>
    <li>sd</li>
    <li>sds</li>
    </ul>
    <ul className='text-right lg:flex'>
    <li>home</li>
    <li>batuan</li>
    <li>peminjaman</li>
    <li>book</li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Footer