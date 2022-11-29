import React from 'react'
import CardItem from './CardItem'

const CardLayout = ({property}) => {
  return (
    <div className='flex relative w-full my-[120px] lg:flex-row flex-wrap gap-y-3'>
        {
            property.map((item,i)=><CardItem key={i} item={item}/>)
        }
    </div>
  )
}

export default CardLayout