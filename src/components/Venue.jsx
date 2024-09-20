import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { judges } from "@/constants";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Venue = ({ pin }) => {
  useGSAP(() => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      gsap.to(".slideshow", {
        x: "-88%",
        scrollTrigger: {
          trigger: ".venue",
          scroller: "body",
          start: "top 50%",
          end: "top -200%",
          scrub: 2,
          pin: `.${pin}`,
        },
      });
    } else {
      gsap.to(".slideshow", {
        x: "-59%",
        scrollTrigger: {
          trigger: ".venue",
          scroller: "body",
          start: "top 50%",
          end: "top -200%",
          scrub: 2,
          pin: `.${pin}`,
        },
      });
    }
  });
  return (
    <div className="block mx-auto bg-black overflow-hidden venue max-w-[91.467%] sm:max-w-[93.167%] border-l border-r border-l-edge border-r-edge">
      <div className="flex items-start w-fit gap-[4.0625rem] px-[3rem] slideshow">
        {judges.map((judge) => (
          <div
            key={judge.id}
            className="flex w-[18.75rem] aspect-[3/2] p-2 items-start gap-2 rounded-[0.5rem] object-cover relative border border-dashed border-[#454545] cursor-default select-none"
          >
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venue;
