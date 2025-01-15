/* eslint-disable react/prop-types */
import { useState } from "react";
import desktop from "../assets/desktop.svg";
import mobile from "../assets/mobile.svg";
import box from "../assets/box-desktop.svg";
import womandk from "../assets/woman-desktop.svg";
import womanmb from "../assets/woman-mobile.svg";
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    key: 1,
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    key: 2,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    key: 3,
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    key: 4,
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we`ll process your request no questions asked.",
  },
  {
    key: 5,
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <article className="mb-4">
      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer rounded-md"
      >
        <div
          className={
            isActive
              ? "font-bold text-[#1d1e35] hover:text-[#f47c57]"
              : "text-[#4a4b5e] hover:text-[#f47c57]"
          }
        >
          <h3 className="text-base">{question}</h3>
        </div>
        <div className={isActive ? "transform rotate-180 ml-2" : "ml-2"}>
          <IoIosArrowDown className="text-[#f47c57]" />
        </div>
      </div>
      {isActive && (
        <div className="mt-2 text-[#787887]">
          <p className="text-sm">{answer}</p>
        </div>
      )}
      <hr className="text-[#e7e7e9] my-3" />
    </article>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="h-screen grid place-content-center bg-gradient-to-b  from-[#af67e9] to-[#6565e7]">
      <div className="bg-[#f5f2f2] rounded-2xl max-w-4xl relative m-4 ">
        <img
          src={box}
          alt=""
          className="hidden md:block absolute top-36 -left-20 z-10 animate-bounce ease-in-out"
        />
        <img
          src={womanmb}
          alt=""
          className="md:hidden absolute left-[60px] -top-28 w-60"
        />
        <div className="flex justify-between items-center flex-col md:flex-row overflow-hidden ">
          <div className="relative md:w-1/2">
            <img
              src={desktop}
              alt=""
              className="hidden md:block absolute -top-16 -left-10"
            />
            <img src={mobile} alt="" className="block md:hidden" />
            <img
              src={womandk}
              alt=""
              className="hidden md:block relative bottom-1 -left-8"
            />
          </div>

          <div className="p-4 md:p-12 max-w-sm md:max-w-full md:w-1/2 md:h-[65vh] flex justify-center flex-col items-center md:grid md:place-content-center ">
            <h1 className="text-4xl font-bold font-mono mb-2 md:mb-4 lg:text-left md:text-left text-center ">
              FAQ
            </h1>
            <div className="max-w-2xl md:mt-4">
              {faqData.map((faq) => (
                <FaqItem
                  key={faq.key}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeIndex === faq.key}
                  onClick={() => handleItemClick(faq.key)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
