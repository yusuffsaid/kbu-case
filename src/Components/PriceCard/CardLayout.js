import React from 'react'
import CardItem from './CardItem'

const CardLayout = ({property}) => {
  return (
    <div className=' relative flex flex-col mt-[80px] lg:flex-row  flex-grow space-y-6 lg:space-y-0 lg:space-x-6 md:max-h-[498px] rounded-[15px]'>
        {
            property.map((item,i)=> <CardItem item={item}></CardItem>)
        }
       
    </div>
  )
}

export default CardLayout