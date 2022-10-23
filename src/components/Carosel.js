import React, {useState} from 'react'
import { BsArrowLeftSquareFill ,BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url:'https://upload.wikimedia.org/wikipedia/commons/e/ec/Tidung_besar.JPG'
    },
    {
        url:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg'
    },
    {
        url:'https://asset.kompas.com/crop/0x71:966x715/750x500/data/photo/2018/07/07/85160710.jpg'
    }
];

const Carosel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    // console.log(length)

    const prevSlide = () => {
setSlide(slide === length - 1 ? 0 : slide + 1);

    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    }


  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
    <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-black cursor-pointer left-8'/>
    <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-black cursor-pointer right-8' />
    {sliderData.map((item,index)=>(
        <div className={index === slide ? 'opacity-100': 'opacity-0'}>
        {index === slide && (<img  className='w-full rounded-md' src={item.url} alt=''/>)}
        </div>
  ))}
    </div>
  );
};

export default Carosel