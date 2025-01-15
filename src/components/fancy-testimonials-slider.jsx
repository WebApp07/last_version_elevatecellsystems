import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    testimonial:
      "Working with this team has transformed our business approach completely. Their innovative solutions have helped us achieve unprecedented growth.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    testimonial:
      "The level of professionalism and technical expertise demonstrated by the team is exceptional. They delivered beyond our expectations.",
  },
  {
    id: 3,
    name: "Emma Davis",
    position: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    testimonial:
      "Their attention to detail and commitment to quality is remarkable. We've seen a significant improvement in our product metrics.",
  },
  {
    id: 4,
    name: "James Wilson",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    testimonial:
      "Outstanding service and remarkable results. They've become an invaluable partner in our growth journey.",
  },
];

const Testimonials = () => {
  const testimonialRef = useRef(null);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const testimonials = testimonialRef.current.children;

    gsap.set(testimonials, {
      opacity: 0,
      y: 50,
    });

    gsap.to(testimonials, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    const autoScroll = gsap.to(scrollRef.current, {
      x: `-${(testimonials.length - 1) * 100}%`,
      duration: testimonials.length * 4,
      ease: "none",
      repeat: -1,
    });

    return () => {
      autoScroll.kill();
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
    gsap.to(scrollRef.current, {
      x: `-${currentIndex * 100}%`,
      duration: 0.5,
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
    gsap.to(scrollRef.current, {
      x: `-${currentIndex * 100}%`,
      duration: 0.5,
    });
  };

  return (
    <div className="relative w-full py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedTitle
            title="What Our <b>C</b>lients Say"
            containerClass="mt-5 !text-black text-center"
          />

          <p className="mt-4 text-lg text-gray-500 py-8">
            Discover why clients love working with us
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              className="flex transition-transform duration-500"
            >
              <div ref={testimonialRef} className="flex flex-nowrap">
                {testimonialData.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-xl p-8 mx-2 h-full">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <FaChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  gsap.to(scrollRef.current, {
                    x: `-${index * 100}%`,
                    duration: 0.5,
                  });
                }}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
