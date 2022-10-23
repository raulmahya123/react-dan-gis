import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Pinjaman = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
    <div className='lg:col-span-2 flex flex-col justify-evenly'>
    <div>
    <h2>Peminjaman barang</h2>
    <p className='py-4'>testing
    </p>
    </div>
    <div className='grid sm:grid-cols-2 gap-8 py-4'>
    <div className='flex flex-col lg:flex-row items-center text-center'>
    <button>
    <RiCustomerService2Fill size={50}/>
    </button>
    <div>
    <h3 className='py-2'>Ledaing service</h3>
    <p  className='py-1'>sok pinjem</p>
    </div>
    </div>

    <div className='flex flex-col lg:flex-row items-center text-center'>
    <button>
    <MdOutlineTravelExplore size={50}/>
    </button>
    <div>
    <h3 className='py-2'>Ledaing service</h3>
    <p className='py-1'>sok pinjem</p>
    </div>
    </div>
    </div>
    </div>

    <div>
    <div className='border text-center'>
    <p className='pt-2'>SOK PILIH</p>
    <p className='py-4'>SOK PILIH YA</p>
    <p className='bg-gray-800 text-gray-200 py-2'>SOK PILIH</p>
    </div>
    <form className='w-full'>
     <div className='flex flex-col my-2'>
     <label>okoko</label>
     <select className='' >
     <option >akik</option>
     <option >akik</option>
     <option >akik</option>
     <option >akik</option>
     </select>
     </div> 

     <div className='flex flex-col my-4'>
     <label>okoko</label>
     <input  className='border rounded-md p-2' type="date"/>
     </div>
     <div className='flex flex-col my-2'>
     <label>okoko</label>
     <input className='border rounded-md p-2'  type="date"/>
     </div>  
     <button className='w-full my-4'>sok jadiin</button>  
    </form>
    </div>
    </div>
  )
}

export default Pinjaman