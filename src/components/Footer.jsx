import { useForm } from "react-hook-form";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhone, FaSquareFacebook } from "react-icons/fa6";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from "react";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const phoneRegExp = /^[0-9]{10}$/; // Adjust the regular expression based on your phone number format


const schema = yup.object({

    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Email is required').required('Email is required'),
    
    phoneNumber: yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),

    
    message: yup.string().required('Message is required'),

    


  }).required();



export default function Footer({noPadding}){

  const [sendingLoader,setSendingLoader] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"

  });

  
  const [details,setDetails] = useState({});

    const onSubmit =  async data=>{

        setSendingLoader(true)

        // setTimeout(() => {
        //     setSendingLoader(false)
        // }, 1000);
        
        axios.post('/api/sendemail',{
...data
        }).then(resp=>{

            
        setSendingLoader(false)
        setDetails(resp.data)
            
        }).catch(err=>{
            setSendingLoader(false)
            setDetails(err.response.data)
        })


    };


    useEffect(()=>{

      console.log(details.sent);

        if(details.sent){

            toast.success(details.message,{
                position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            
            })

        }else{

            toast.error(details.message,{
                position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            
            })

        }


    },[details.sent])





    return <div className={` ${noPadding?'':'px-mobilePadding md:px-tabletPadding lg:px-desktopPadding '} bg-primary flex flex-col gap-y-12  py-12 lg:py-0 text-white
    
    lg:flex-row
    
    lg:border-t
    lg:border-b
lg:border-[#363B56]

    `}>

{sendingLoader && <div className="fixed left-0 top-0 z-20 w-full h-full bg-[rgba(0,0,0,0.8)] flex justify-center items-center">

<span className="loader"></span>


</div>

}


    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[55%] space-y-5 lg:py-12">

    
    
    <div className="text-sm md:text-base lg:text-lg flex flex-col sm:flex-row sm:flex-wrap sm:justify-between  gap-y-5 ">
    
    {/*  */}
    
    <div className="w-full md:w-[calc(50%-10px)]">
    
        <p className="uppercase font-semibold">First Name</p>
    
      <input {...register("firstName")} type="text" className="w-full px-3 bg-[#2B304A] rounded-sm py-2.5 lg:py-1.5 outline-none mt-2"></input>
    
      <p className="text-red-500 font-semibold mt-2">{errors.firstName?.message}</p>

    
      </div>

    {/*  */}

    <div className="w-full md:w-[calc(50%-10px)]">
    
    <p  className="uppercase font-semibold">Last Name</p>

  <input {...register("lastName")} type="text" className="w-full px-3 bg-[#2B304A] rounded-sm py-2.5 lg:py-1.5 outline-none mt-2"></input>

  <p className="text-red-500 font-semibold mt-2">{errors.lastName?.message}</p>



  </div>

{/*  */}

    {/*  */}

    <div className="w-full md:w-[calc(50%-10px)]">
    
    <p className="uppercase font-semibold">Email</p>

  <input {...register("email")} type="text" className="w-full px-3 bg-[#2B304A] rounded-sm py-2.5 lg:py-1.5 outline-none mt-2"></input>

  <p className="text-red-500 font-semibold mt-2">{errors.email?.message}</p>


  </div>

{/*  */}

    {/*  */}

    <div className="w-full md:w-[calc(50%-10px)]">
    
    <p className="uppercase font-semibold">Phone Number</p>

  <input {...register("phoneNumber")} type="text" className="w-full px-3 bg-[#2B304A] rounded-sm py-2.5 lg:py-1.5 outline-none mt-2"></input>

  <p className="text-red-500 font-semibold mt-2">{errors.phoneNumber?.message}</p>


  </div>

{/*  */}


<div className="sm:w-full">
    
    <p className="uppercase font-semibold">Message</p>

  <textarea {...register("message")} rows={10} className="outline-none w-full resize-none px-3 bg-[#2B304A] rounded-sm py-4 mt-2"></textarea>

  <p className="text-red-500 font-semibold mt-2">{errors.message?.message}</p>


  </div>

    {/*  */}
    
    </div>
    
    <input value="SUBMIT" type="submit" className=" bg-white text-black px-5 inline-flex py-2 items-center font-semibold cursor-pointer" />
    
    
    
    </form>
    
    

    <div className="lg:w-[40%] lg:border-l-2 border-[#363B56] lg:ml-auto ">

    
    {/*  */}
    
    <a href="mailto:moeezkashif13@gmail.com" className="flex gap-x-4 py-10 lg:py-14 lg:px-12 border-[#363B56] border-t border-b even:border-t-0 even:border-b-0 lg:first:border-t-0  ">
    
    <div className="flex justify-center items-center w-9 h-9 bg-white rounded-full">
    <FaEnvelope  color="#242943"/>
    </div>
    
    <div>
      <p className="font-semibold mb-1 lg:mb-3 text-lg md:text-xl lg:text-2xl">Email</p>
      <p className="lg:text-lg">moeezkashif13@gmail.com</p>
    </div>
    
    
    
        </a>


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