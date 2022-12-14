import React, { useState } from 'react'
import PageTitle from '../Components/PageTitle'
import BadgeLayout from "../Components/BadgeCart/BadgeLayout";
import * as Icon from '../Assets/Svg/Svg'
import img1 from "../Assets/Img/img1.png"
import img2 from "../Assets/Img/img2.png"
import img3 from "../Assets/Img/img3.png"
import CardLayout from '../Components/CareerCard/CardLayout';
const Career = () => {
    const [badgeProps, setBadgeProps] = useState([
        {
          title: "Work from anywhere",
          text: "A team of experts passionate about product management.",
          Icon: Icon["Bag"],
          color: "bg-badge-red",
        },
        {
          title: "Flexible hours",
          text: "A team of experts passionate about product management",
          Icon: Icon["Time"],
          color: "bg-badge-dark ",
        },
        {
          title: "Work and travel",
          text: "A team of experts passionate about product management",
          Icon: Icon["Valise"],
          color: "bg-badge-purple",
        },
        {
          title: "Paid parental leave",
          text: "A team of experts passionate about product management",
          Icon: Icon["Baby"],
          color: "bg-badge-turquoise",
        },
        {
          title: "Yearly bonuses",
          text: "A team of experts passionate about product management",
          Icon: Icon["Gift"],
          color: "bg-badge-pink",
        },
        {
          title: "Smart salary ",
          text: "A team of experts passionate about product management",
          Icon: Icon["Dollar"],
          color: "bg-badge-militarygreen",
        },
      ]);

    const [cardProps,setCardProps]=useState([
        {
            location: "New York, USA",
            title:"Full-Stact Web Developer",
            supporter: "Chorocon Ltd.",
            time:"1 Week"
        },
        {
            location: "Singapore",
            title:"Senior Project Manager",
            supporter: "Google Inc.",
            time:"2 Week"
        },
        {
            location: "Remote",
            title:"Junior Graphic Designer",
            supporter: "Canva",
            time:"2 Week"
        },
        {
            location: "Singapore",
            title:"Senior Project Manager",
            supporter: "Google Inc.",
            time:"2 Week"
        },
        {
            location: "Remote",
            title:"Junior Graphic Designer",
            supporter: "Canva",
            time:"2 Week"
        },
        {
            location: "New York, USA",
            title:"Full-Stact Web Developer",
            supporter: "Chorocon Ltd.",
            time:"1 Week"
        },
       
    ])



  return (
   <>
   <PageTitle title={"Career & opportunities"} text="We offer an effective combination of broad customer service expertise and deep product knowledge to ensure customer experience"></PageTitle>
   <section className='wrapper bg-background-color'>
   <div className='flex flex-col-reverse mt-[80px] items-center lg:flex-row  space-y-6 lg:space-y-0 lg:space-x-6  rounded-[15px]'>
        <div className='basis-1/2 md:text-left text-center space-y-6'>
            <h1 className='text-[42px] md:text-[60px] md:leading-[66px]'>Build your career in our community</h1>
            <p className='text-[17px] leading-[30px] font-extralight md:max-w-[496px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className='py-[15px] px-[29px] text-white bg-badge-orange rounded-[10px]'>Check Listing</button>
        </div>
        <div className='basis-1/2 flex justify-center items-center gap-4'>
           <div className=''>
                <img src={img1} className="rounded-[10px]" />
           </div>
           <div className='space-y-4'>
                <div>
                <img src={img2} className="rounded-[10px]"  />
                </div>
                <div>
                <img src={img3} className="rounded-[10px]"  />
                </div>
           </div>
        </div>
   </div>
   <BadgeLayout property={badgeProps}/>
   <div className=''></div>
   <h1 className='md:text-[48px] md:leading-[58px] text-left text-[36px] leading-[46px]'>Our current vacancies</h1>
   <p className='text-[17px] leading-[30px] font-thin text-opacity-70'>Check our featured jobs from popular companies. Start applying now. </p>
   <CardLayout property={cardProps}/>
   </section>
   </>
  )
}

export default Career