import React from 'react'
import { aboutus } from '../assets'

const AboutUs = () => {
  return (
    <div className='flex items-center justify-center bg-black'>
        <div className='flex w-[1342px] py-9 px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge'>
            <div className='flex flex-row gap-12'>
                <div className='flex w-auto h-auto flex-col items-start gap-[37px] flex-shrink-0'>
                    <div className='flex w-auto h-auto items-start'>
                        <div className='flex w-auto h-[73px] flex-col justify-center text-offwhite font-geist text-[3rem] font-normal leading-[60px]'>
                        About us
                        </div>
                        <div className='flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-geistmono font-[500] leading-[28px]'>(1)</div>
                    </div>
                    <div className='w-[522.44px] h-auto text-[#A0A0A0] font-geistmono text-[1rem] '>
                    Welcome to TransfiNITTe'24, NIT Trichy's premier hackathon, hosted by the Technical Council and SCIENT. This is where innovation meets action.
                    <br/><br/>
                    Building on the success of TransfiNITTe'23, where 300+ participants pushed the limits in a 42-hour coding marathon, we're taking it up a notch. With 500+ participants and 100+ teams expected, TransfiNITTe'24 is set to redefine the hackathon experience.
                    <br/><br/>
                    This isn't just a competition—it's a platform to create real solutions and make an impact. Join us, and be a part of something that truly matters.
                    </div>
                </div>
                <div className='w-[675px] h-[450px] border border-dashed p-2 border-[#454545]'>
                        <img
                        src={aboutus}
                        alt='about us'
                        width='100%'
                        height='100%'
                        className='object-cover w-full h-full'
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
