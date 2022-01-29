import React from 'react';
import ReactPlayer from 'react-player'
import Card from '../shared/Card';
import { useRouter } from "next/router"
import { faUserAlt, faMusic, faVideo,  faUsers } from "@fortawesome/free-solid-svg-icons";

function Musco() {
  const router = useRouter();
  return (
    <div id="musco" className='mb-20'>
        <div className='flex justify-center'>
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                
                 <p className="mt-4 text-4xl text-slate-200">
                    Your music ecosystem web application
                  </p>
            </div>
            
        </div>

        <div className='flex cursor-pointer justify-center w-full '>
            <div onClick={() => router.push("https://muscotest5a.vercel.app/") } className="sm:px-5 ml-7  sm:mr:10  justify-items-stretch sm:gap-5  sm:grid sm:grid:cols-2 md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-2 3xl:flex flex-wrap justify-center">
                <Card Icon={faUserAlt} text1="Individual users" text2="Listen to music, post, connect with friends, musical artists, videographers, record labels etc."/>
                <Card Icon={faUsers} text1="Music Artiste" text2="Upload music, interact with other sections, get paid via streams etc."/>
                <Card Icon={faVideo} text1="Videographers" text2="Create an account now, connect with other sections, get hired etc."/>
                <Card Icon={faMusic} text1="Record label" text2="Find musical artiste to enroll, interact with other record labels etc."/>
            </div>
        </div>

        <div onClick={() => router.push("https://muscotest5a.vercel.app/")} className="w-full cursor-pointer lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="text-white font-semibold text-5xl  rounded-md px-5 shadow-lg shadow-blue-500/50">
                  Musco(Coming soon)
                </h1>
        </div>
    </div>
  )
}

export default Musco;