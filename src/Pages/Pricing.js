import React, { useState } from 'react'
import PageTitle from '../Components/PageTitle'
import CardLayout from '../Components/PriceCard/CardLayout'

const Pricing = () => {
  const [cardProps, setCardProps] = useState([
    {title:"Basic",
    description:"Most Popular",
    price:"4,95",
    falseItemIndex:[3,4,5],
    isSelected:false

},
{
    title:"Professional",
    description:"Recommended",
    price:"9,95",
    falseItemIndex:[5],
    isSelected:true,
},
{
    title:"Ultimate",
    description:"Best value",
    price:"12,95",
    falseItemIndex:[],
    isSelected:false,
 
}
])
  return (
    <>
    <PageTitle title="Pricing Plans" text="We are an industry-leading company that values honesty, integrity, and efficiency. Building quality products and caring."/>
    <section className='wrapper bg-background-color'>
      <CardLayout property={cardProps}/>
    </section>
    </>
  )
}

export default Pricing