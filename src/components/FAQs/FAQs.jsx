import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be unworn and in their original packaging.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times will be calculated at checkout.",
  },
  {
    question: "How long will my order take to arrive?",
    answer: "Domestic orders typically arrive within 3-5 business days. International orders can take 7-14 business days.",
  },
  {
    question: "What materials do you use?",
    answer: "Our pieces are crafted from hand-selected, high-quality fabrics including pure silks, organic cottons, and premium wools.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive an email with a tracking number and a link to monitor its progress.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20 md:py-28">
      
      {/* Heading */}
      <h2 className="mb-12 text-center text-4xl font-normal text-black sm:text-5xl">
        FAQ
      </h2>

      {/* Accordion List */}
      <div className="flex flex-col border-t border-gray-300">
        {FAQS.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-gray-600"
            >
              <span className="text-sm font-normal text-gray-900 sm:text-base">
                {faq.question}
              </span>
              <Plus
                className={`h-4 w-4 shrink-0 text-gray-900 transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              />
            </button>

            {/* Answer Row */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-gray-500">
                {faq.answer}
              </p>
            </div>
            
          </div>
        ))}
      </div>
      
    </section>
  );
}