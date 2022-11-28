import React, { useState } from 'react'

const CardItem = ({item}) => {
    const [packageFeatures, setpackageFeatures] = useState({
        items:[
            {
                text:"Unlimited updates and products",
                selected:true,
            },
            {
                text:"Custom permissions",
                selected:true,
            },
            {
                text:"Custom infrastructure",
                selected:true,
            },
            {
                text:"Custom design and features",
                selected:false,
            },
            {
                text:"Unlimited updates ",
                selected:false,
            },
            {
                text:"Custom infrastructure ",
                selected:false,
            },
        ]
    })
  return (
    <div className={`${item.isSelected ? " bg-active-color text-white" : " bg-white"} lg:basis-1/3 max-h-[498px] rounded-[15px] p-[10px] lg:p-[35px]`}>
        <div className={`flex justify-between items-center pb-[19px] border-b-[1px]`}>
            <div className='flex flex-col'>
                <h3 className='text-6 leading-8'>{item.title}</h3>
                <span className='text-[13px] leading-[22px] opacity-70 font-normal'>{item.description}</span>
            </div>
            <div className='flex flex-col items-end'>
                <h3 className='text-6 leading-8'>${item.price}</h3>
                <span className='text-[13px] leading-[22px] opacity-70 font-normal'>Per mounth</span>
            </div>

        </div>

        <div className='flex flex-col justify-between mt-[40px] space-y-2'>
            {
                packageFeatures.items.map((feature,i)=>(
                   <div className='flex justify-between items-center font-extralight text-[17px] leading-[30px'>
                     <p key={i} className={"]"}>{feature.text}</p>
                     <i className={item.falseItemIndex.includes(i) ? "fa fa-solid fa-times" : "fa fa-solid fa-check" }></i>  
                   </div>
                ))
            }
        </div>
        <button className={`${item.isSelected ? "bg-white text-active-color":"bg-active-color text-white"} rounded-[50px] py-[13px] w-full mt-[26px]`}>Get started</button>

    </div>
  )
}

export default CardItem