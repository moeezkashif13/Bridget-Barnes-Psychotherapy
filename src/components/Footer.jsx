import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhone, FaSquareFacebook } from "react-icons/fa6";

export default function Footer({noPadding}){
    return <div className={` ${noPadding?'':'px-mobilePadding md:px-tabletPadding lg:px-desktopPadding '} bg-primary flex flex-col gap-y-12  py-12 lg:py-0 text-white
    
    lg:flex-row
    
    lg:border-t
    lg:border-b
lg:border-[#363B56]

    `}>

    <div className="lg:w-[55%] space-y-5 lg:py-12">
    
    
    <div className="text-sm md:text-base lg:text-lg flex flex-col sm:flex-row sm:flex-wrap sm:justify-between  gap-y-5 ">
    
    {/*  */}
    
    <div className="w-full md:w-[calc(50%-5px)]">
    
        <p className="uppercase font-semibold">Name</p>
    
      <input type="text" className="w-full px-3 bg-[#2B304A] rounded-sm py-2.5 lg:py-1.5 outline-none mt-2"></input>
    
    
      </div>

    {/*  */}

    <div className="w-full md:w-[calc(50%-15px)]">
    
    <p className="uppercase font-semibold">Email</p>

  <input type="text" className="w-full px-3 bg-[#2B304A] rounded-sm py-2.5 lg:py-1.5 outline-none mt-2"></input>


  </div>

{/*  */}
<div className="sm:w-full">
    
    <p className="uppercase font-semibold">Message</p>

  <textarea rows={10} className="w-full resize-none px-3 bg-[#2B304A] rounded-sm py-5 mt-2"></textarea>


  </div>

    {/*  */}
    
    </div>
    
    <div className=" bg-white text-black px-5 inline-flex py-2 items-center font-semibold cursor-pointer">SUBMIT</div>
    
    
    
    </div>
    
    

    <div className="lg:w-[40%] lg:border-l-2 border-[#363B56] lg:ml-auto ">

    
    {/*  */}
    
    <div className="flex gap-x-4 py-10 lg:py-14 lg:px-12 border-[#363B56] border-t border-b even:border-t-0 even:border-b-0 lg:first:border-t-0  ">
    
    <div className="flex justify-center items-center w-9 h-9 bg-white rounded-full">
    <FaEnvelope  color="#242943"/>
    </div>
    
    <div>
      <p className="font-semibold mb-1 lg:mb-3 text-lg md:text-xl lg:text-2xl">Email</p>
      <p className="lg:text-lg">moeezkashif13@gmail.com</p>
    </div>
    
    
    
        </div>


{/*  */}

<a href="https://api.whatsapp.com/send?phone=923364507406" target="_blank" className="flex gap-x-4 py-10 lg:py-14 lg:px-12 border-[#363B56] border-t border-b even:border-t-0 even:border-b-0 lg:first:border-t-0  ">
    
    <div className="flex justify-center items-center w-9 h-9 bg-white rounded-full">
    <FaPhone  color="#242943"/>
    </div>
    
    <div>
      <p className="font-semibold mb-1 lg:mb-3 text-lg md:text-xl lg:text-2xl">Whatsapp</p>
      <p className="lg:text-lg">+923364507406</p>
    </div>
    
    
    
        </a>


{/*  */}


<a href="https://www.linkedin.com/in/abdulmoeez19/" target="_blank" className="flex gap-x-4 py-10 lg:py-14 lg:px-12 border-[#363B56] border-t border-b even:border-t-0 even:border-b-0 lg:first:border-t-0  ">
    
    <div className="flex justify-center items-center w-9 h-9 bg-white rounded-full">
    <FaLinkedinIn  color="#242943"/>
    </div>
    
    <div>
      <p className="font-semibold mb-1 lg:mb-3 text-lg md:text-xl lg:text-2xl">Linkedin</p>
      <p className="lg:text-lg">Visit Linkedin Profile</p>
    </div>
    
    
    
        </a>


        {/*  */}

        <a href="https://www.facebook.com/abdulmoeez121367" target="_blank" className="flex gap-x-4 py-10 lg:py-14 lg:px-12 border-[#363B56] border-t border-b even:border-t-0 even:border-b-0 lg:first:border-t-0  ">
    
    <div className="flex justify-center items-center w-9 h-9 bg-white rounded-full">
    <FaFacebookF  color="#242943"/>
    </div>
    
    <div>
      <p className="font-semibold mb-1 lg:mb-3 text-lg md:text-xl lg:text-2xl">Facebook</p>
      <p className="lg:text-lg">Visit Facebook Profile</p>
    </div>
    
    
    
        </a>
    
    
    </div>
    
    
    </div>
}