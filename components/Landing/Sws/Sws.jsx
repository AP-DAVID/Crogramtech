import React from 'react';
import ReactPlayer from 'react-player'
import Card from '../shared/Card';
import { useRouter } from "next/router"
import { faUserAlt, faDatabase, faArrowRight, faUsers } from "@fortawesome/free-solid-svg-icons";


function Sms() {
  const router = useRouter();
  return (
    <div id="sws" className='mt-20'>
         <div className='flex justify-center'>
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                 <p className="mt-4 text-4xl text-slate-200">
                    Your school management system 
                  </p>
            </div>
            
        </div>

        <div  className='flex cursor-pointer justify-center w-full '>
            <div onClick={() => router.push("https://stms.vercel.app/") } className="sm:px-5  sm:mr:10  justify-items-stretch sm:gap-5 space-y-2 sm:space-y-0  sm:grid sm:grid:cols-2 md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-2 3xl:flex flex-wrap justify-center">
                <Card Icon={faUserAlt} text1="Teacher" text2="Connect with your Administrator, share resources and other valuable functionalities with your students now!"/>
                <Card Icon={faUsers} text1="Students" text2="Connect with your classmates and teachers via a dashboard!!" />
                <Card Icon={faDatabase} text1="Administrator" text2="Access to Crud functionality of the web management ecosystem between in the teachers, students and the Administrator"/>
                <Card Icon={faArrowRight} text2="View demo application"/>
           </div>
        </div>
        <div onClick={() => router.push("https://stms.vercel.app/") } className='flex cursor-pointer justify-center'>
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="text-white font-semibold text-5xl  rounded-md px-5 shadow-xl shadow-blue-500/50">
                  SMS
                </h1>
               
            </div>
            
        </div>
    </div>
  )
}

export default Sms;