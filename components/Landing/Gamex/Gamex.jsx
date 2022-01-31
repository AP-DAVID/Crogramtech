import React from 'react';
import ReactPlayer from 'react-player'
import {useRouter} from "next/router";

function Gamex() {
  const router = useRouter()
  return (
    <div id="gamex" className='mb-20 '>
        <div className='flex justify-center py-10'>
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                
                 <p className="mt-4 text-4xl text-slate-200">
                    Put your gaming skills to the test. Win cash prices!!
                  </p>
            </div>
        </div>
        <div onClick={() => router.push("https://gamex-three.vercel.app/")} className='flex justify-evenly cursor-pointer mr-5 ml-5 object-contain overflow-x-hidden '>
            <div className="sm:px-5 rounded lg:overflow-x-hidden bg-black mr-7 sm:mr:10 justify-items-stretch sm:space-x-1 sm:grid sm:grid:cols-2 md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                <div>
                <ReactPlayer style={{borderRadius : "50px"}} className='rounded-xl' width="600px"   muted={true} loop={true} playing={true} url="/COD.mp4" />
                </div>

                <div >
                <ReactPlayer style={{borderRadius : "50px"}} width="600px"   muted={true} loop={true} playing={true}  url="/PUBG.mp4" />
                </div>
            </div>
        </div>

        <div onClick={() => router.push("https://gamex-three.vercel.app/")} className="w-full cursor-pointer lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-white font-semibold text-5xl  rounded-md px-5 shadow-lg shadow-blue-500/50">
                Explore GameX
            </h1>
            
        </div>
    </div>
  )
}

export default Gamex;