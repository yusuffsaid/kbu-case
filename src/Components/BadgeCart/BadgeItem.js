import React from 'react'
const BadgeItem = ({item,Icon}) => {
  return (
    <div className='flex text-ellipsis lg:basis-1/3 gap-x-4 '>
      <div className={item.color+" flex justify-center items-center w-[80px] h-[80px] rounded-full bg-opacity-40 flex-4"}>
      <Icon className="absolute"></Icon>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-[24px]'>{item.title}</h1>
        <p className='text-[15px] font-extralight leading-[28px] text-opacity-70 max-w-[260px] '>{item.text}</p>
      </div>
    </div>
  )
}

export default BadgeItem