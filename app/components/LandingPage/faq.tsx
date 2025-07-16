"use client";
import Image from "next/image";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
    {
      question: "What services do you offer?",
      answer:
        "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
  ];
  return (
    <div className="px-[100px] py-[51px] flex gap-[16px] max-[1150px]:px-[50px] max-[768px]:px-[24px] max-[930px]:flex-col">
      <div className="flex flex-col gap-[16px] w-full max-[930px]:w-[70%] max-[837px]:w-full">
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} />
            <p className="font-poppins font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              FAQs
            </p>
          </div>
          <p className="font-clash font-semibold text-[38px] text-[#000000] leading-[48px]  max-[951px]:text-[28px] max-[951px]:leading-[38px] max-[470px]:text-[24px] max-[470px]:leading-[34px]">
            Frequently asked questions about us.
          </p>
        </div>
        <div className="px-[24px] py-[16px] flex gap-[24px] bg-[#FF5F1F] rounded-[16px] justify-between max-[470px]:p-[15px] max-[470px]:gap-[15px] max-[420px]:flex-col">
          <div>
            <p className="font-poppins font-semibold text-[16px] text-[#FFFFFF] leading-[25.2px] max-[951px]:text-[14px]">
              Have a question?
            </p>
            <p className="font-inter font-normal text-[16px] text-[#FFFFFF] leading-[150%]  max-[951px]:text-[14px]">
              Lets Discuss it now!
            </p>
          </div>
          <button className="bg-[#FFFFFF] cursor-pointer whitespace-nowrap rounded-[40px] border-none font-lato font-bold text-[16px] leading-[100%] py-[12px] px-[58px] max-[1250px]:px-[20px] max-[470px]:gap-[15px]">
            Book an appointment
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] w-full">
        {faqs?.length > 0
          ? faqs?.slice(0, 4).map((faqs, index) => (
              <div
                className="bg-[#FFFFFF] rounded-[8px] flex gap-[32px] justify-between p-[16px] max-[500px]:gap-[15px]"
                onClick={() => toggleFAQ(index)}
                key={index}
              >
                <div className="flex flex-col gap-[8px]">
                  <p className="font-poppins font-medium text-[16px] text-[#123042] leading-[25.2px] max-[768px]:text-[14px] max-[768px]:leading-[135%]">
                    {" "}
                    {faqs?.question}
                  </p>
                  {openIndex === index && (
                    <p className="font-Inter font-normal text-[14.54px] text-[#757575] leading-[150%] ">
                      {faqs?.answer}
                    </p>
                  )}
                </div>
                <Image
                  src={openIndex === index ? "/FaqCross.png" : "/FaqPlus.png"}
                  alt=""
                  height={40}
                  width={38}
                  className="h-fit cursor-pointer"
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
