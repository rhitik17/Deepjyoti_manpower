import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import faqs from "../../data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

 

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full ">
      <div className="py-14 flex flex-col gap-y-4">
        <div className=" text-center text-[#323232] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium ">
          Frequently asked questions
        </div>
        <div className=" text-center text-[#636363] text-sm lg:text-lg font-normal ">
          Can’t find the anwser you’re looking for ? Reach out to customer
          support team.
        </div>
      </div>
      <div className="space-y-10 border-t py-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <div className="flex gap-x-2 ">
                <span className="text-gray-500 text-l md:text-2xl xl:text-3xl font-semibold">{index + 1 + "."}</span>
                <span className="sm:text-xl lg:text-2xl text-primary-web/200 font-medium">
                  {" "}
                  {faq.question}
                </span>
              </div>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown />
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 px-6 lg:px-10 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
