import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { timelineData } from '../constants'; // Adjust the path as necessary

const Timeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='mx-auto bg-black max-w-[93.194%]'>
      <div className='flex flex-col items-start justify-center'>
        <div className="flex h-auto py-[70px] px-[46px] justify-between items-start content-start flex-wrap border-r border-l border-r-edge border-l-edge bg-black md:px-10"
        ref={containerRef}>
        <div className="flex flex-col justify-start max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-10 ml-0">
          <div className="mb-4 text-white font-geist text-[4rem] font-normal leading-[60px]">
            Timeline
          </div>
          <div className="text-[#A1A1A1] font-geistmono text-[1.125rem] not-italic font-normal leading-[28px]">
            The provided timeline is tentative and subject to change as necessary.
          </div>
          <div className="text-white font-geist text-[2rem] font-normal leading-[60px]">
            27th October
          </div>
        </div>

        <div ref={ref} className="relative mx-auto pb-20">
          {timelineData.map((item, index) => (
            <div key={index} className=" flex justify-start pt-10 md:pt-40 md:gap-10">
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-36 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-8 w-8 absolute left-4 rounded-full bg-offwhite flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-offwhite border border-dashed border-gray-600 " />
                </div>
                <div className="hidden md:block text-offwhite font-geist text-[32px] not-italic font-normal leading-8 transition-opacity duration-300 select-none cursor-default md:pl-20 md:text-5xl">
                  {item.title}
                </div>
              </div>

              <div className="flex flex-col gap-4 relative pl-20 pr-4 md:pl-4 w-full">
                <div className="md:hidden block text-5xl mb-4 text-left font-bold text-offwhite dark:text-neutral-500">
                  {item.title}
                </div>
                {Array.isArray(item.content.text) ? 
                (item.content.text.map((text, idx) => (<div key={idx} className="text-[32px] mb-4">{text}</div>))) : 
                (
                <div className="text-[#A1A1A1] font-geistmono text-5xl not-italic font-normal leading-[28px] ">{item.content.text}</div>)
                }
                <div className="flex justify-around flex-wrap gap-5">
                {item.content.images && item.content.images.map((image, idx) => (
                  <div className="w-full aspect-auto sm:w-1/2 lg:w-1/3">
                  <img
                    key={idx}
                    src={image}
                    alt={`Image ${idx + 1}`}
                  />
                  </div>
                ))}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
