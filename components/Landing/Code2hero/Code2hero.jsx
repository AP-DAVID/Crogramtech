import React from 'react';
import ReactPlayer from 'react-player'
import Features from './Features';
import { useRouter } from "next/router"


function Code2hero() {
  const router = useRouter();
  return (
    <div id="code" className='mb-10'>
        <div className='flex justify-center'>
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                 <p className="mt-4 text-4xl text-slate-200">
                    Your programming classes
                </p>
            </div>
            
        </div>

        <div>
            <Features />
        </div>
        <div onClick={() => router.push("https://code2hero.vercel.app/")}  className="w-full lg:w-6/12 px-4 cursor-pointer ml-auto mr-auto text-center">
                <h1 className="text-white font-semibold text-5xl  rounded-md px-5 shadow-lg shadow-blue-500/50">
                  Code2hero
                </h1>
        </div>
    </div>
  )
}

export default Code2hero;