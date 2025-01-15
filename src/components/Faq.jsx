import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import AnimatedTitle from "./AnimatedTitle";

const faqData = [
  {
    question: "How do I create an account?",
    answer:
      'To create an account, click on the "Sign Up" button in the top right corner of our website. Fill in your details including email, password, and personal information. Once submitted, you\'ll receive a confirmation email to activate your account.',
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Domestic orders typically arrive within 3-5 business days, while international shipping can take 7-14 business days. You'll receive a tracking number once your order is dispatched.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. To initiate a return, please contact our customer service team with your order number. Return shipping costs may apply unless the item is defective.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our customer support team is available 24/7 through multiple channels. You can reach us via email at support@example.com, through our live chat feature, or by calling our toll-free number 1-800-123-4567.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <FiChevronUp className="h-6 w-6 text-indigo-500" />
          ) : (
            <FiChevronDown className="h-6 w-6 text-gray-400" />
          )}
        </span>
      </button>
      <div
        className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <AnimatedTitle
        title="Frequently Asked Questions"
        containerClass="mt-5 !text-black text-center mb-12 text-gray-800"
      />
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
