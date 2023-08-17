import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function About(){
    return(


        <>
        
        <Head>
  <title>About | Bridget Barnes Psychotherapy</title>
</Head>
        

        <div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  bg-primary text-white">


<Navbar/>


<div>



{/* FIRSTTT SECTION */}

<div className="mt-10">
    <p className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-3">About</p>
    <div className="w-full h-0.5 bg-white"></div>


<div className="space-y-8 py-12 md:text-lg">


    <div className="w-[130px] h-[130px]
    
    md:w-[180px] md:h-[180px]
    lg:w-[230px] lg:h-[230px]
    
    
     rounded-full">

<img src="/man.jpg" className="w-full max-w-full h-full object-cover rounded-full" />



    </div>

<p>I’m Bridget Barnes, an accredited Cognitive Behavioural Psychotherapist (British Association for Behavioural and Cognitive Psychotherapists). I’ve trained at the Institute of Psychiatry Psychology and Neuroscience at King’s College London. I have a decade of experience working in NHS mental health services. Beyond this, I’ve also worked in voluntary organisations and in private practice. I’m currently based in London.</p>


<p>I pride myself in providing you with the highest quality care during your sessions. Sessions are currently remote.</p>

</div>



</div>

{/* FIRSTTT SECTION */}


{/* SECONDDDD SECTION */}


<div className=" py-12 border-t border-b space-y-8 font-light text-[0.94rem] md:text-lg">


<p className="font-semibold text-2xl md:text-3xl lg:text-4xl">My Approach to Therapy</p>

<p>I specialise in the following anxiety disorders:</p>

<ul className="space-y-1 list-disc px-mobilePadding md:px-tabletPadding lg:px-desktopPadding ">
<li>obsessive compulsive disorder (OCD)</li>
<li>social anxiety</li>
<li>health anxiety</li>
<li>generalised anxiety disorder (GAD)</li>
<li>phobias</li>
<li>panic disorder</li>
<li>low self-esteem or imposter syndrome</li>
<li>perfectionism</li>
<li>body dysmorphic disorder</li>
<li>tricotilomania</li>
<li>insomnia</li>
<li>post-traumatic stress disorder (PTSD)</li>

</ul>


<p>In our sessions we will use Cognitive Behavioural Therapy as well as third wave therapies including; Compassion Focused Therapy and Acceptance and Commitment Therapy and Mindfulness Based Therapy.</p>


<p>Your anxiety is unique to you and I can offer you a bespoke, tailor made treatment plan to meet your needs. I believe it’s important that I help you to have agency over your life and live a life more in line with your values. It’s important that you l feel equipped with life long skills to manage the inevitable challenges of life.</p>


<p>Understanding how your anxieties have come about and why they continue to be a problem is the first thing we’ll do together. I then help my client’s to overcome behaviours that are limiting their lives and to quieten the overwhelming thoughts that they have. My approach is thoughtful, creative, and collaborative.</p>

<p>I understand that exploring these difficulties can feel vulnerable and frightening. The therapeutic relationship is very important to me and I try to help my clients feel listened to, comfortable, and safe in our sessions.</p>


</div>



{/* SECONDDDD SECTION */}





{/* THIRDDDD SECTION */}


<Footer noPadding />



{/* THIRDDDD SECTION */}












</div>






        </div>

        </>


    )
}