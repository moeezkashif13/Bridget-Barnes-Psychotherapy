import Link from 'next/link';
import { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {FaXmark} from 'react-icons/fa6'

export default function Navbar(){

const [showMenu,setShowMenu] = useState(false);


    return (

        <>
        <div className="text-white flex justify-between  items-center pt-3 ">

<Link href='/' className="bg-white uppercase px-1 h-5 md:h-6 leading-2 flex items-center text-[#242943] text-xs md:text-sm lg:text-base font-semibold  tracking-[0.27em]">Bridget Barnes</Link>



<div className="flex cursor-pointer" onClick={()=>setShowMenu(true)}>
     
<HiMenu className='text-2xl md:text-3xl lg:text-4xl'/>


</div>



        </div>


<div style={{opacity:!showMenu?"0":"1",transition:'all 0.4s',visibility: !showMenu ? "hidden" : "visible",}} className='w-full h-full bg-[rgba(36,41,67,0.9)] fixed left-0 top-0 flex items-center justify-center uppercase flex-col text-xs md:text-sm lg:text-base font-semibold text-white px-mobilepadding md:px-tabletpadding lg:px-desktopPadding !-mt-0'>

<div className='absolute cursor-pointer right-4 top-4 text-3xl md:text-4xl lg:text-5xl' onClick={()=>setShowMenu(false)}>
    <FaXmark/>
</div>

<Link onClick={()=>setShowMenu(false)} className=' tracking-[0.25em] py-4 border-[rgba(212,212,255,0.1)] border-t  w-full text-center' href='/about'>About</Link>


<Link onClick={()=>setShowMenu(false)} className=' tracking-[0.25em] py-4 border-[rgba(212,212,255,0.1)] border-t  w-full text-center' href='/book-a-session'>Book a session</Link>


<Link onClick={()=>setShowMenu(false)} className=' tracking-[0.25em] py-4 border-[rgba(212,212,255,0.1)] border-t  w-full text-center' href='/policies'>Policies</Link>



<Link onClick={()=>setShowMenu(false)} className=' tracking-[0.25em] py-4  border-t border-[rgba(212,212,255,0.1)] border-b  w-full text-center' href='/testimonial'>Testimonials</Link>




</div>



        </>



    )


}