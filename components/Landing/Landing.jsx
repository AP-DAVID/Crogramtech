import React from 'react';
import Code2hero from './Code2hero/Code2hero';
import Form from './form/Form';
import Gamex from './Gamex/Gamex';
import Musco from './Musco/Musco';
import Sms from './Sws/Sws';

function Landing() {
  return (
     <div>
      <div className="relative pt-16 pb-32 flex content-center items-center h-screen justify-center min-h-screen-75">
        <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/photos/asia-at-night-planet-earth-city-lights-space-picture-id1299973245?b=1&k=20&m=1299973245&s=170667a&w=0&h=UNvlTPr29TPFg69s2EX2rSfzM1142AuKKQfpo0K3tHY=')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    CROGAM.
                  </h1>
                  <p className="mt-4 text-lg text-slate-200">
                    Let's put our country on the technological map one project at a time!. Come, let's explore our world together.
                  </p>
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
