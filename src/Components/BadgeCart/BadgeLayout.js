import React from 'react'
import BadgeItem from './BadgeItem'

const BadgeLayout = ({property}) => {
  return (
    <div className='flex relative  w-full mt-[120px] lg:flex-row flex-wrap space-y-4'>
      {
        property.map((item,i)=><BadgeItem Icon ={item.Icon} item={item} key={i}/>)
      }
      
    </div>
  )
}

export default BadgeLayout