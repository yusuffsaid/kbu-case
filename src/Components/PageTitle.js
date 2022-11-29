import React from 'react'

const PageTitle = ({title,text}) => {
  return (
    <div className='wrapper flex flex-col justify-center items-center text-center !py-[109px]'>
        <h1 className='sm:text-[60px] sm:leading-[66px] text-[42px] leading-[50px]'>{title}</h1>
        <p className='text-opacity-70 font-extralight mt-5 md:text-[21px] text-[17px] max-w-[695px] leading-[30px]'>{text}</p>
    </div>
  )
}

export default PageTitle