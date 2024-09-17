import React, { useState } from 'react'
import { judges } from '../constants'

const Judges = () => {
    const [hoveredJudge, setHoveredJudge] = useState(null);
    return (
        <div className='flex items-center justify-center mb-[-8px] bg-black '>
            <div className='flex flex-col items-start justify-center'>
                <div className='flex w-[1342px] h-auto py-[70px] px-[46px] justify-between items-start content-start gap-y-[92px] flex-wrap border-r border-l border-r-edge border-l-edge bg-black'>
                    <div className='flex w-[1000px] h-auto py-1 px-0 content-center items-center gap-2'>
                        <div className='text-[#EDEDED] font-geist text-[64px] font-normal leading-[64px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
                    </div>
                    <div className='flex w-[1250px] justify-start items-start gap-[187.4px] flex-shrink-0'>
                        <div className='flex w-[323px] flex-col justify-start items-start gap-[84px] flex-shrink-0'>
                            <div className='flex h-[60px] items-start self-stretch'>
                                <div className='text-[#EDEDED] font-geist text-[64px] font-normal leading-[60px]'>
                                Judges
                                </div>
                                <div className='flex w-[27.303px] h-[20.5px] flex-col justify-center text-[#A1A1A1] font-geistmono text-[18px] not-italic font-normal leading-[28px] '>
                                (2)
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-4 self-stretch'>
                                <ul className='flex flex-col items-start gap-4 self-stretch'>
                                {judges.map((judge)=>(
                                    <li key={judge.id}
                                    className={`text-offwhite font-geist text-[32px] not-italic font-normal leading-8 transition-opacity duration-300 select-none cursor-default ${hoveredJudge === judge.id ? 'opacity-100' : 'opacity-50'}`}
                                    onMouseEnter={() => setHoveredJudge(judge.id)}
                                    onMouseLeave={() => setHoveredJudge(null)}>{judge.name}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex w-[739.6px] items-start content-start gap-5 flex-shrink-0 flex-wrap'>
                            <div className='grid grid-cols-3 grid-flow-row gap-5'>
                                {judges.map((judge)=>(
                                    <div className='flex content-center items-center w-[233.2px] h-[253.18px] overflow-hidden object-cover relative border border-dashed border-[#454545] cursor-default'
                                    onMouseEnter={() => setHoveredJudge(judge.id)}
                                    onMouseLeave={() => setHoveredJudge(null)}>
                                        <img
                                        src={judge.imgurl}
                                        alt={judge.name}
                                        width='100%'
                                        height='100%'
                                        className={`object-cover w-full h-full grayscale transition-transform duration-300 ${hoveredJudge === judge.id ? 'grayscale-0 scale-105' : 'grayscale' }`}/>
                                        <div className='text-offwhite font-geistmono text-[13px] font-normal uppercase absolute bottom-0 right-0 text-right bg-transparent select-none cursor-default'>
                                            {judge.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}

export default Judges
