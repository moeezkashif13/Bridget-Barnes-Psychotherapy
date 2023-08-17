import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Policies(){

    return(

<>

<Head>
    <title>Policies | Bridget Barnes Psychotherapy</title>
</Head>

<div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  bg-primary">

<Navbar/>


<div className="pt-12 text-white font-light space-y-7">


<div className="space-y-2.5">
    <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">Policies</p>
    <div className="w-full bg-white h-0.5"></div>
</div>

</div>


<div className="text-white font-light lg:text-lg">



{/*  */}

<div className="border-b py-8 space-y-7">

    <p className="font-semibold text-2xl lg:text-3xl">Referrals</p>
    
    <p>You can make an appointment by email, or via the online contact form below. I understand that reaching out for
    psychological help can be difficult, so feel free to contact me in the way that suits you best. When you do get in
    touch, please include your availability and a brief summary of your current difficulties.</p>
    
    <p>I will try to contact you within two working days to arrange an initial appointment. In that session, we’ll explore your
    current difficulties in order to find the best treatment options for you going forward.</p>
    
    </div>


{/*  */}
<div className="border-b py-8 space-y-7">

    <p className="font-semibold text-2xl lg:text-3xl">Fees</p>
    
    <p>Your therapy appointment will last for 50 minutes.</p>
    
    <p>The self-funded fee for individual therapy is £100 for a daytime appointment and £120 for an evening appointment. The fee will be payable via bank transfer prior to the appointment.</p>
    
<p>I’m recognised with the following insurance providers: Aviva, AXA, Cigna, Vitality, and WPA.</p>

    </div>



{/*  */}

<div className="border-b py-8 space-y-7">

    <p className="font-semibold text-2xl lg:text-3xl">Cancellations</p>
    
   <p>I operate with a 48-hour cancellation policy.</p>
    
    <p>If an appointment is cancelled with less than 48 hours’ notice, the full fee for the session will be charged.</p>

<p>If you need to cancel a scheduled appointment, please contact me as soon as possible.</p>



    </div>


{/*  */}


</div>



<div>
    <Footer  noPadding />
</div>



</div>


</>

    )

}