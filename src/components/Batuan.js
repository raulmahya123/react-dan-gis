import React  from 'react'
import Iya from '../assets/iya.jpg'
import Iyaa from '../assets/iyaa.jpg'
import Iye from '../assets/iye.jpg'
import Oo from '../assets/oo.jpg'


const Batuan = () => {


  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1>INi adalah muserum dan bebatuan</h1>
    <p className='py-4'>ajkshgdbajkhsbdjahsb</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
     <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'  src={Iya} alt='/'></img>
     <img  className='w-full h-full object-cover'  src={Iyaa} alt='/'></img>
     <img  className='w-full h-full object-cover' src={Iye} alt='/'></img>
     <img  className='w-full h-full object-cover' src={Oo} alt='/'></img>
     <img  className='w-full h-full object-cover' src={Oo} alt='/'></img>
    </div>
    <h1>Nanti pake gis(lokasi museum,indonesia,jawabarat</h1>
    <p className='py-4'>ajkshgdbajkhsbdjahsb</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>

    </div>
    </div>

  )
}

export default Batuan