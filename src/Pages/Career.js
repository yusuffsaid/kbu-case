import React from 'react'
import PageTitle from '../Components/PageTitle'
import img1 from "../Assets/Img/img1.png"
import img2 from "../Assets/Img/img2.png"
import img3 from "../Assets/Img/img3.png"
const Career = () => {
  return (
   <>
   <PageTitle title={"Career & opportunities"} text="We offer an effective combination of broad customer service expertise and deep product knowledge to ensure customer experience"></PageTitle>
   <section className='wrapper'>
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
   </section>
   </>
  )
}

export default Career