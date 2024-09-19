import React, { useEffect, useRef } from 'react'
import {  arrowbl, arrowwh, numbersvg } from '../assets'
import { toast } from 'sonner'
import { Button } from './ui/button'
import gsap from 'gsap';

const Header = () => {
  const handleClick = () => {
    toast("Coming Soon", {
          
      description:"Tuesday, 8 October 2024, 9:00 AM",// Custom style for description
      style: {
        backgroundColor: '#EDEDED', 
        color: '#000',    
        padding: '16px',  
        font: 'Geist',  
      },
    });
  };
  function calculateDaysToGo(targetDate) {
    // Get the current date
    const currentDate = new Date();
  
    // Parse the target date (input should be in "YYYY-MM-DD" format)
    const target = new Date(targetDate);
  
    // Calculate the difference in time (milliseconds)
    const timeDifference = target - currentDate;
  
    // Convert time difference from milliseconds to days
    const daysToGo = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    // Return the calculated number of days
    return daysToGo;
  }
  const targetDate = '2024-10-18';
  const daysLeft = calculateDaysToGo(targetDate);
  const dateRef = useRef(null);
  const daysLeftRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(dateRef.current, {
      duration: 0.8,
      rotateX: 90,
      opacity: 0,
      transformOrigin: "top",
      ease: "power1.in",
      onComplete: () => {
        dateRef.current.style.display = 'none';
        daysLeftRef.current.style.display = 'block';
      },
    })
      .to(daysLeftRef.current, {
        duration: 0.8,
        rotateX: 0,
        opacity: 1,
        transformOrigin: "bottom",
        ease: "power1.out",
      })
      .to(daysLeftRef.current, { delay: 8 }) // Stay visible for 8 seconds
      .to(daysLeftRef.current, {
        duration: 0.8,
        rotateX: 90,
        opacity: 0,
        transformOrigin: "top",
        ease: "power1.in",
        onComplete: () => {
          daysLeftRef.current.style.display = 'none';
          dateRef.current.style.display = 'block';
        },
      })
      .to(dateRef.current, {
        duration: 0.8,
        rotateX: 0,
        opacity: 1,
        transformOrigin: "bottom",
        ease: "power1.out",
      })
      .to(dateRef.current, { delay: 10 }); // Stay visible for 10 seconds
  }, []);

  return (
    <div className='flex justify-between items-center h-max py-5 bg-black shrink-0 self-stretch border-b-[#EDEDED26] border-b border-solid pl-12 sticky top-0 shadow-md z-50 content-stretch'>
      <div>
        <div ref={dateRef} className='text-[#A1A1A1] font-geistmono text-sm font-normal leading-[17.5px] tracking-[0.35px] uppercase'>
          OCT 18-20 2024, GJCH
        </div>
        <div ref={daysLeftRef} className='text-[#A1A1A1] font-geistmono text-sm font-normal leading-[17.5px] tracking-[0.35px] uppercase' style={{ display: 'none' }}>
          {`${daysLeft} days to go...`}
        </div>
      </div>
      <div className='flex flex-row flex-grow gap-1 self-stretch items-center justify-center'>
        <div className='text-white text-center text-xl font-spacegrotesk items-center font-medium leading-5 tracking-[-0.1px] uppercase'>
          Transfinitte
        </div>
        <div>
          <a>
            <img src={numbersvg} alt='24' />
          </a>
        </div>
      </div>
      <div className='w-fit h-fit flex gap-[36px] mr-[3rem] justify-center items-center'>
        <a href='https://www.instagram.com/tc_nitt/' target="_blank" rel="noopener noreferrer" className='hover:underline decoration-white'>
          <button className='flex flex-row gap-1 justify-center items-center'>
            <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>
              INSTAGRAM
            </div>
            <div>
              <img src={arrowwh} className='max-w-none w-fit' />
            </div>
          </button>
        </a>
        <Button variant="outline" onClick={handleClick}>
          <div className='flex flex-row gap-1 justify-center items-center bg-offwhite px-5 py-2 rounded-full hover:underline decoration-black'>
            <div className='text-black text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase bg-offwhite'>
              REGISTER
            </div>
            <div>
              <img src={arrowbl} className='max-w-none w-fit bg-offwhite' />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Header
