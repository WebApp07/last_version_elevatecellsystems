import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        {/*  

        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to ElevateCellSystems
        </p>
        */}

        <AnimatedTitle
          title="Stay <b>C</b>onnected with the <br /> World's Most Reliable <b>E</b>mergency Network"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>AT&T FirstNet® Priority Data Service</p>
          <p className="text-gray-500">
            Elevate Systems partners with Voice Link providing both a simple and
            highly-secure service. Our turn-key solution simplifies the
            emergency phone line process, ensuring that establishing an
            emergency communication is a straightforward endeavor.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            className="absolute left-0 top-0 size-full object-cover"
            autoPlay
            muted
            loop
          >
            <source className="opacity-100" src="videos/feature-4.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
