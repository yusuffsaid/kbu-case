import React from 'react'

const PageTitle = ({title,text}) => {
  return (
    <div className='wrapper flex flex-col justify-center items-center text-center mt-[109px] max-w-[695px] m-auto'>
        <h1 className='sm:text-[60px] sm:leading-[66px] text-[42px] leading-[50px]'>{title}</h1>
        <p className='sm:text-[21px] sm:leading-[32px] text-opacity-70 text-[17px] leading-[30px]'>{text}</p>
    </div>
  )
}

export default PageTitle