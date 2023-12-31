import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const testimonialsarray = [

     'Bridget was excellent, I have completely transformed as a person. I am no longer worried about the little things as I have tools to handle them in a rational way. I am leaving today feeling so confident and excited for life.',

     'My CBT sessions have turned my life around and I am recovering very well. Bridget has been very supportive of me and really accommodating. It is all still very sincerely appreciated. Her expertise, patience, encouragement and calm professional presence on a weekly basis gave me so much hope and in effect, positive results. My sincerest gratitude to Bridget for setting me on the road to overcoming my phobias.',

"Bridget was really wonderful. I have left my sessions feeling empowered and confident that I have everything I need to tackle my OCD and challenging situations that may arise in future. I really can not thank her enough and I'm excited that I have various exercises I can use to navigate my OCD.",

    'Bridget was a great therapist. I am so grateful for all the help and support that she provided me',
    
    
    'I have had a wonderful experience with my sessions with Bridget. I feel like I have all the tools in my tool belt to successfully navigate challenging situations that come my way in the future.',
    
    "Thank you again for our sessions, I really got so much out of them and I'm feeling really empowered and confident that I have all the tools I need to navigate my OCD. I'm really thankful.",

    'Bridget was very patient, understanding and extremely useful to help guide me to where I am today. I have taken away what I have learnt and applied it to real life scenarios as I tackle mental health solo.',
    
    'Bridget is a very skilled and empathetic therapist. I am so grateful to her for all the positive changes she has helped me achieve.',
    
    'I found our sessions so helpful and have already recommended it to people I know who suffer with anxiety. I have learnt so many helpful techniques to take into my life to change things for the better. Bridget was very helpful + patient, explaining everything in detail + listening to my needs. She was kind, professional + thorough',
    
    "I would like to thank you again for your hard work and for all the effort you put in to prepare each session. I am very happy that I was lucky enough to have you as my therapist. I think you're a great professional and I would never make this kind of progress without your help.",
    
    'I really enjoyed working through all this with you and feel really positive going forward. You’ve helped me loads, I’ve recommended CBT to people having been through it and you were a big part of that. Thanks! Was a great experience.',
    
    'I would like to formally express my gratitude ahead of my final CBT session today.',

    "You have set me firmly on the path to recovery and I am ever so grateful for the positive changes that unfold as the days go by.",


    "Thank you so very much for your time, your professionalism and for the positive results. I will miss my sessions but I will soar with the wings that you have given me.",


    "Thank you for being so patient with me throughout this process. It has made me re-evaluate how I think/behave and the automatic assumptions I make about myself and my journey. I don't doubt it will have lasting benefits for my mental well-being. I will keep working on it!",


    "The experience has been crucial in helping me reach a much better place. I feel happy and healthy, and have achieved what I wanted. Bridget was brilliant, helping me find the right techniques and practices for me, and being flexible to accommodate work commitments. Would recommend it to anyone.",


    "Having the help from Bridget was the best thing that could happen to me. She brought light to my life when I was lost in the darkness of my mental illness and totally hopeless. I will be forever grateful for what she did, she changed my life. Thank you Bridget.",


    


]


export default function Testimonial(){

    return (


<>


        <Head>
    <title>Testimonials | Bridget Barnes Psychotherapy</title>
</Head>


        <div className="px-mobilePadding md:px-tabletPadding lg:px-desktopPadding  bg-primary text-white">

<Navbar/>
        
        
        <div >
        
        
        
        {/* FIRSTTT SECTION */}
        
        <div className="mt-10">
        <p className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-3">Testimonials</p>
    <div className="w-full h-0.5 bg-white"></div>
                
        
        </div>
        
        {/* FIRSTTT SECTION */}
        
        {/* SECOND SECTION */}

<div className="text-sm md:text-base lg:text-lg italic font-light pt-12 space-y-10 lg:mb-12">

        {testimonialsarray.map((each)=>{

return <div className="flex gap-x-6">

<div className="min-w-[6px]  bg-[#d4d4ff1a]"></div>

<p className="py-3 leading-6 lg:leading-8">{each}</p>

</div>


        })}



</div>


        
        {/* SECOND SECTION */}
        
        
        
        {/* THIRDDDD SECTION */}
        
        
        <Footer noPadding />
        
        
        
        {/* THIRDDDD SECTION */}
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        
        
        
        
        
        
                </div>
  
                </>
  
  
    )


}