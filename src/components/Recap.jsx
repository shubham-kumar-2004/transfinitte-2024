import React from 'react';
import CounterStats from './ui/counter';
import { counter } from '@/constants';

const Recap = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-col w-[1342px] py-9 px-[46px] justify-center items-start border-r border-l border-r-edge border-l-edge'>
            <div className='flex w-auto h-auto items-start mb-16'>
                <div className='flex w-auto h-[73px] flex-col justify-center text-offwhite font-geist text-[3.7rem] font-normal leading-[60px]'>
                    2023 Recap
                </div>
                <div className='flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-geistmono font-[500] leading-[28px]'>
                    (5)
                </div>
            </div>
            <CounterStats stats={counter} />
            {/* <div className='text-offwhite text-right font-geist text-[32px] not-italic font-normal leading-8'>
                Images
            </div> */}
        </div>
    </div>
  )
}

export default Recap
