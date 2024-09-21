import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { judges } from "@/constants";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Venue = ({ pin }) => {
  useGSAP(() => {
    // const isMobile = window.innerWidth < 640;
    // if (isMobile) {
      // gsap.to(".slideshow", {
        // x: "-90%",
        // scrollTrigger: {
          // trigger: ".venue",
          // scroller: "body",
          // start: "top 15%",
          // end: "top -200%",
          // scrub: 2,
          // markers:true,
          // pin: `.${pin}`,
        // },
      // });
    // } else {
      // gsap.to(".slideshow", {
        // x: "-59%",
        // scrollTrigger: {
          // trigger: ".venue",
          // scroller: "body",
          // start: "top 15%",
          // end: "top -200%",
          // scrub: 2,
          // markers:true,
          // pin: `.${pin}`,
        // },
      // // });
    // }
    
    gsap.to(".slideshow", {
      x: "-90%",
      scrollTrigger: {
        trigger: ".venue",
        // scroller: "body",
        start: "top 15%",
        end: "top -100%",
        scrub: 2,
        // markers:true,
        pin: `.${pin}`,
      },
    });
  });
  return (
    <div className="block mx-auto bg-black overflow-hidden venue max-w-[91.467%] sm:max-w-[93.167%] border-l border-r border-l-edge border-r-edge">
      {/* <div className="pin-venue"> */}
      <div className="flex h-fit items-start self-stretch mb-6 sm:mb-[4.06rem] ml-6 sm:ml-9">
        <div className="text-[#EDEDED] font-geist text-[2rem] sm:text-[4rem] font-normal leading-[60px]">
          Venue
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-geistmono text-[1.125rem] not-italic font-normal leading-[28px] ">
          (2)
        </div>
      </div>
      <div className="flex items-start w-fit gap-[4.0625rem] px-[3rem] slideshow">
        {judges.map((judge) => (
          <div
            key={judge.id}
            className="flex w-[21rem] sm:w-[18.75rem] aspect-[3/2] p-2 items-start gap-2 rounded-[0.5rem] object-cover relative border border-dashed border-[#454545] cursor-default select-none"
          >
            <div></div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Venue;
