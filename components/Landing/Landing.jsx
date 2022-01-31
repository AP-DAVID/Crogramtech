import React from 'react';
import Code2hero from './Code2hero/Code2hero';
import Form from './form/Form';
import Gamex from './Gamex/Gamex';
import Musco from './Musco/Musco';
import Sms from './Sws/Sws';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';

function Landing() {
  return (
     <div>
      <div className="relative pt-16 pb-15  bg-slate-900 flex content-center items-center h-full justify-center min-h-screen-75">
        <div
            className="absolute top-0 bg-center bg-cover "
            // style={{
            //   backgroundImage:
            //     "url('https://media.istockphoto.com/photos/asia-at-night-planet-earth-city-lights-space-picture-id1299973245?b=1&k=20&m=1299973245&s=170667a&w=0&h=UNvlTPr29TPFg69s2EX2rSfzM1142AuKKQfpo0K3tHY=')",
            // }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 "
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="glow  text-white object-cover mt-24  text-shadow-xl  font-semibold text-7xl">
                     <span>Crogam</span> 
                  </h1>
                  <p className="text2 font-normal mt-4 text-xl text-slate-300 h-10">
                    Let&apos;s put our country on the technological map one project at a time!. Come, let&apos;s explore our world together.
                  </p>
                </div>

                <div className='flex mt-7 text-center justify-center py-7'>
                  <Link href="#contact">
                    <h1  className='bg-blue-500 px-4 cursor-pointer hover:scale-105 hover:bg-blue-400 hover:shadow-md hover:shadow-blue-400 py-2 rounded-md text-lg text-white'>
                      {"<>"} Contact
                    </h1>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
        <Gamex />
        <Code2hero />
        
        <Sms />
        <Musco />
        <Form />
     </div>
  )
}

export default Landing;




// Dear Professor A,

// I am a student at X University currently working in Professor B’s group focusing on Feild Z. I am starting the master’s program at your university in the fall. Professor B thought your group would be a great fit for my research interests and I'm excited to explore potential research projects within your group. As an incoming master student, I am fully funded for two years. If you have time, can we set up a meeting to discuss potential research projects?

// Best Regards,

// Your name

// P.S. I've attached my CV for your reference and would be happy to discuss with one of your students/postdocs if your time is limited.



// This course covers advanced concepts and practices of object-oriented software construction. Topics includes software quality, modularity, and reusability, abstract data types, foundations of object techniques, design by contract, exception handling, as well as object-oriented (visual) modeling using Unified Modeling Language (UML) and formal specification using Object Constraint Language (OCL). Students are required to do both writing assignments to answer conceptual questions and programming assignments to practice the concepts, as well as a term project to practice object-oriented modeling.
