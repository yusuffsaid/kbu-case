import React from 'react'
import { Document } from '../../Assets/Svg/Svg'
import CardItem from './CardItem'

const CardLayout = ({property}) => {
  return (
    <div className=' flex flex-col mt-[80px] lg:flex-row  space-y-6 lg:space-y-0 lg:space-x-6 max-h-[498px] rounded-[15px]'>
        {
            property.map((item,i)=> <CardItem item={item}></CardItem>)
        }


<Document></Document>
       
    </div>
  )
}

export default CardLayout