import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../src/index.css";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedCanvas = () => {
  const canvasRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const frameCount = 179;

    // Function to generate the frame URL
    const currentFrame = (index) =>
      `/optimized_blender_imgs/${(index + 1).toString()}.webp`;

    // Preload images
    const images = Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();
      img.src = currentFrame(i);
      return img;
    });

    const ball = { frame: 0 };

    const render = () => {
      const image = images[ball.frame];
      if (image) {
        context.canvas.width = image.width;
        context.canvas.height = image.height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0);
      }
    };

    // GSAP animation for canvas
    gsap.to(ball, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        pin: canvas,
        end: "500%",
      },
      onUpdate: render,
    });

    // GSAP animation for the headline
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 1,
          start: "60%",
          end: "80%",
        },
      }
    );

    // Render the first frame initially
    images[0].onload = render;

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="responsive-container">
      <canvas ref={canvasRef} className="canvas"></canvas>
      <img
        ref={headlineRef}
        className="headline object-cover h-48 w-96"
        alt="Headline Animation"
        src="/optimized_blender_imgs/1.webp"
        height={250}
        width={150}
      />
    </div>
  );
};

export default AnimatedCanvas;
