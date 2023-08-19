import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {BsArrowRight} from 'react-icons/bs'

const colorfulDivs = [

  {color:'bg-[#64ABC7]',page:'/about',heading:'About',text:'my background, experience and approach  '},

  {color:'bg-[#7E75B1]',page:'/book-a-session',heading:'Book a session',text:'START WITH A FREE 15-MINUTE VIDEO CALL'},


  {color:'bg-[#CE7F78]',page:'/testimonial',heading:'Testimonials',text:'How my therapy has helped others  '},


  {color:'bg-[#CAA27E]',page:'/policies',heading:'Policies',text:'Referrals, Fees, and Cancellations  '},



]

export default function Home() {
  

  return (


<>

<Head>
  <title>Bridget Barnes Psychotherapy</title>
</Head>



<div className="bg-[#2D324A] " >




{/* FIRSTTT SECTIONN */}

<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding relative

">

<div className="absolute w-full h-full   left-0 top-0">

    <div className="w-full h-full relative block">

{/* <Image src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692446735/Bridget%20Barnes%20Therapy/puzk8i2hgi03shk7uztp.webp" fill quality={100} style={{objectFit:'cover',objectPosition:'center center'}} /> */}

      {/* <img src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692446735/Bridget%20Barnes%20Therapy/puzk8i2hgi03shk7uztp.webp" className="h-full w-full max-w-full object-cover" alt="" /> */}

{/* <Image src="/banner.webp" fill quality={100} style={{objectFit:'cover',objectPosition:'center center'}} /> */}


      <img src="/banner.webp" className="h-full w-full max-w-full object-cover" alt="" />



<div className="absolute w-full h-full bg-[rgba(35,40,67,0.85)] top-0 text-white font-semibold  space-y-4 md:space-y-8 px-mobilePadding     md:px-tabletPadding lg:px-desktopPadding ">

<Navbar/>
  


<div className="!mt-16  md:!mt-10 w-[150px] h-[150px]

md:w-[200px] md:h-[200px]
lg:w-[250px] lg:h-[250px]



 rounded-full relative block">

{/* <Image src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692446871/Bridget%20Barnes%20Therapy/e69vpgnubh2hx13gt6b9.webp" className="rounded-full" fill quality={100} style={{objectFit:'cover',objectPosition:'center center'}} /> */}


<img src="/man.webp" className="w-full max-w-full h-full object-cover rounded-full" />


 </div>

<h1 className=" text-3xl md:text-5xl md:w-1/2 md:leading-[4.5rem] lg:text-6xl lg:w-full leading-[48px] ">Bridget Barnes Psychotherapy</h1>


<div className="h-0.5 w-full bg-white"></div>

<div className="flex flex-col space-y-4 md:flex-row  md:space-y-0 md:items-center">


<p className="text-xs lg:text-sm pr-8 tracking-[0.2em]">HELPING YOU TO TAKE BACK CONTROL OF YOUR ANXIETY</p>

<Link href='/book-a-session' className="items-center px-6 py-1.5 border-2 border-white flex mr-auto">

  BOOK A SESSION <span><BsArrowRight className="text-2xl ml-3"/></span>

</Link>


</div>


</div>

    </div>

</div>



  {/* <img src="https://www.bridgetbarnestherapy.com/assets/images/banner.jpg" className="w-full max-w-full h-full object-cover" alt="" /> */}



<Navbar/>


{/* DO NOT TOUCH IT */}
<div className=" text-white font-semibold py-20 md:py-12 space-y-4 md:space-y-8 invisible">

<div className="w-[150px] h-[150px]

md:w-[200px] md:h-[200px]
lg:w-[250px] lg:h-[250px]



bg-red-500 rounded-full"></div>

<h1 className=" text-3xl md:text-5xl md:w-1/2 md:leading-[4.5rem] lg:text-6xl lg:w-full leading-[48px] ">Bridget Barnes Psychotherapy</h1>


<div className="h-0.5 w-full bg-white"></div>

<div className="flex flex-col space-y-4 md:flex-row  md:space-y-0 md:items-center">


<p className="text-xs lg:text-sm pr-8 tracking-[0.2em]">HELPING YOU TO TAKE BACK CONTROL OF YOUR ANXIETY</p>

<Link href='/book-a-session' className="items-center px-6 py-1.5 border-2 border-white flex mr-auto">

  BOOK A SESSION <span><BsArrowRight className="text-2xl ml-3"/></span>

</Link>


</div>



</div>

{/* DO NOT TOUCH IT */}


</div>

{/* FIRSTTT SECTIONN */}



{/* SECONDDD SECTIONN */}


<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  bg-secondary font-light  py-20 text-white space-y-8 md:text-lg">


  <p>Hello I’m Bridget Barnes, a Cognitive Behavioural Therapist who specialises in Anxiety Disorders. I’m passionate about giving my clients more control over their lives and breaking through the wall of anxiety holding them back.</p>
  <p>I firmly believe that you can overcome the behaviours that are limiting your life and can quieten your overwhelming anxious thoughts through the process of therapy.</p>

    <p className="font-semibold">Book a no obligation free 15 minute introductory call to get started and see if it’s a good fit for you.</p>

<p>Here’s some recent client feedback</p>


<div className="flex gap-x-7 ">
    
    <div className="w-3 h-auto bg-[#3C405C]"></div>

<p className="py-3 italic leading-7">Bridget was excellent, I have completely transformed as a person. I am no longer worried about the little things as I have tools to handle them in a rational way. I am leaving today feeling so confident and excited for life.</p>


</div>


</div>



{/* SECONDDD SECTIONN */}




{/* THIRDDD SECTIONN */}


<div className="flex flex-wrap  text-white">


{colorfulDivs.map((eachBox)=>{
  return <Link href={eachBox.page} className={`w-full sm:w-1/2 lg:first:w-[40%] lg:last:w-[40%]  lg:w-[60%] h-[300px] md:h-[350px] lg:h-[400px] flex flex-col justify-center px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  gap-y-2
  
  
  ${eachBox.color} 
  
  
  hover:bg-primary`} style={{transition:'all 0.5s'}}>

<h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">{eachBox.heading}</h1>

<div className="h-0.5 w-full bg-white"></div>

<p className="uppercase text-xs tracking-[0.2em] ">{eachBox.text}</p>

  </Link>
})}




</div>




{/* THIRDDD SECTIONN */}


{/* FOURTHHH SECTIONN */}



<Footer/>

{/* FOURTHHH SECTIONN */}




</div>



</>
  
    

  )
}

