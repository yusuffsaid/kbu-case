import React from 'react'
import { Calender, Location } from '../../Assets/Svg/Svg'

const CardItem = ({item}) => {
  return (
    <div className='p-[24px] rounded-[15px] w-full flex flex-col lg:basis-1/3 gap-x-4 bg-white'>
        <div className=' flex items-center text-secondary-color'>
            <Location/>
            <span className='text-[15px] font-extralight text-opacity-70 ml-[10px]'>{item.location}</span>
        </div>
        <div className='mt-[24px]'>
            <h1 className='text-[24px] leading-[32px] '>{item.title}</h1>
            <p className='text-secondary-color text-[17px] font-extralight mt-8px '>By <span className='text-badge-orange'>{item.supporter}</span></p>
        </div>
        <div className='flex justify-between mt-[30px]'>
            <div className='flex items-center'>
                <Calender></Calender>
                <p className='text-[15px] font-extralight'>{item.time} Ago</p>
            </div>
            <button className='bg-badge-green rounded-[10px] py-[13px] px-[22px] text-white text-[15px]'>Apply Now</button>
        </div>
        
    </div>
  )
}

export default CardItem