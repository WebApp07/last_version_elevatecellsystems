import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import testimonialData from "../constants/testimonialData";

const TestimonialItem = ({ name, position, image, rating, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div id="customers" className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1511367461989-f85a21fda167";
          }}
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm">{position}</p>
          <div className="flex mt-1">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400 w-4 h-4" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </motion.div>
  );
};

const TestimonialsList = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedTitle
            title="What Our Customers <b>Say</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <p className="mt-4 text-lg text-gray-600">
            Discover why businesses trust us for their success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialItem key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsList;
