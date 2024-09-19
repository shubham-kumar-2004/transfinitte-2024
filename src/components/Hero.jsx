import React from 'react'
import { bubble, tfhero } from '../assets'

const Hero = () => {
  return (
    <div className='mx-auto bg-black max-w-[93.194%]'>
        <div className='max-h-screen px-12 flex-shrink-0 border-l border-r border-l-edge border-r-edge py-8'>
            <div className='flex items-center justify-center'>
                <img 
                src={tfhero}
                />
            </div>
            <div className='mt-[-28px] flex items-center justify-center'>
                <img
                src={bubble}
                />

            </div>
        </div>
    </div>
    
  )
}

export default Hero
