import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function BookaSession(){

    return(

<>
        <Head>
  <title>Book a session | Bridget Barnes Psychotherapy</title>
</Head>

<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  bg-primary">

<Navbar/>

<div className="py-12 text-white font-light space-y-7 border-b md:text-lg">


<div className="space-y-2.5">
    <p className="font-semibold text-3xl md:text-4xl lg:text-5xl ">Book a session</p>
    <div className="w-full bg-white h-0.5"></div>
</div>


<div className="h-[200px] w-full sm:w-[450px] sm:h-[300px] relative block">
    
    
    <Image src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692446985/Bridget%20Barnes%20Therapy/i8wrqrllwxlnviqxdkkw.webp" fill quality={100} style={{objectFit:'cover',objectPosition:'center center'}} />

    
    {/* <img src="https://www.bridgetbarnestherapy.com/assets/images/therapy.jpg" className="w-full h-full object-cover max-w-full" alt="" /> */}



</div>


<p>Use the form below to book a session. Please include your availability and a brief summary of your current difficulties.</p>

<p>The initial session is a free 15-minute video call. The goal of this brief session is to explore your current difficulties in order to find the best treatment options for you going forward.</p>


<p>I will try to respond within two working days.</p>

</div>



<div>
    <Footer  noPadding />
</div>



</div>

</>


    )

}