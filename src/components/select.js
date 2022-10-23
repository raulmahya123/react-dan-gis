import React from 'react'
import Selectcard from './selectcard';
import Oo from '../assets/oo.jpg'

const select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3  gap-4'>
   
    <Selectcard bg={Oo} text='apa iyah???'/>
    <Selectcard bg={Oo} text='apa iyah???'/>
    <Selectcard bg={Oo} text='apa iyah???'/>
    <Selectcard bg={Oo} text='apa iyah???'/>
    <Selectcard bg={Oo} text='apa iyah???'/>
    <Selectcard bg={Oo} text='apa iyah???'/>

    </div>
  )
}

export default select