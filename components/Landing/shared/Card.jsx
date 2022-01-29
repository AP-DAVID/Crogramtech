import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card({Icon, text1, text2}) {
  return (
    <div className='flex-col max-w-xs w-full px-10 hover:scale-105  py-10 rounded-md border-2 hover:shadow-lg hover:shadow-blue-500/50 border-blue-700 group'>
        <div>
          <FontAwesomeIcon icon={Icon} className="h-6 w-6  group-hover:animate-bounce text-cyan-500"/>
        </div>
        <div className='flex-col space-y-5'>
            <h1 className='text-white text-lg font-semibold'>{text1}</h1>

            <h1 className='text-slate-400 font-medium'>{text2}</h1>
        </div>
    </div>
  )
}

export default Card;
