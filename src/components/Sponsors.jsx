import React from 'react'
import { sponsors } from '../constants'

const Sponsors = () => {
  return (
    <div className='flex justify-center items-center bg-black'>
      <div className='flex w-[1342px] py-9 px-[46px] flex-col items-start gap-[46px] bg-black border-r border-l border-r-edge border-l-edge'>
        <div className='flex items-start'>
          <div className='text-offwhite font-geist text-[64px] font-normal not-italic leading-[60px] '>Sponsors</div>
          <div className='flex w-[27.303px] h-[20.5px] flex-col justify-center text-[#A1A1A1] font-[500] not-italic font-geistmono leading-[28px]'>(3)</div>
        </div>
        {sponsors.map((category)=>(
          <div key={category.id} className='flex w-[1220px] flex-col items-start gap-[50px]'>
            <div className='text-offwhite text-right font-geist text-[32px] not-italic font-normal leading-8'>{category.name}</div>
            {/* <div className='flex flex-row items-center justify-between gap-8 w-full bg-blue-500'> */}
              <div className='flex items-center justify-around gap-[10px] self-stretch flex-wrap'>
                {category.data.map((sponsor)=>(
                  <div key={sponsor.id} className='flex flex-col items-start gap-2 self-stretch'>
                    <img
                    src={sponsor.imgurl}
                    alt={sponsor.name}
                    className='w-fit h-fit grayscale ' />
                  </div>
                ))}
              </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsors
