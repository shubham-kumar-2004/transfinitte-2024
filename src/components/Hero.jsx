import React from 'react'
import { bubble, tfhero } from '../assets'

const Hero = () => {
  return (
    <div className='flex items-center justify-center mb-[-8px] bg-black'>
        <div className='w-[1342px] h-[649px] flex-shrink-0 border-l border-r border-l-edge border-r-edge py-8'>
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
