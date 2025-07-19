"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import client from "@/utils/client";
import CircularProgress from "@mui/material/CircularProgress";
type Faq = {
 question:string;
 answer:string;
};
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const [faq, setfaq] = useState<Faq[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchFaq = async (): Promise<void> => {
        try {
          const { data } = await client.get(
            "/faq/view-faqs"
          );
          console.log("data", data);
          setfaq(data);
        } catch (err) {
          console.error("Failed to fetch faq", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchFaq();
    }, []);
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
    <div className="px-[24px] py-[51px] flex gap-[16px]  xl:px-[100px] lg:px-[70px] md:px-[50px] lg:flex-row flex-col">
      <div className="flex flex-col gap-[16px] lg:w-full md:w-[80%] w-full">
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} />
            <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              FAQs
            </p>
          </div>
          <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
            Frequently asked questions about us.
          </p>
        </div>
        <div className="sm:px-[24px] lg:py-[16px] flex lg:gap-[24px] bg-[#FF5F1F] rounded-[16px] justify-between p-[15px] gap-[15px] flex-row flex-col-450">
          <div>
            <p className="font-Pop font-semibold md:text-[16px] text-[#FFFFFF] leading-[25.2px] text-[14px]">
              Have a question?
            </p>
            <p className="font-inter font-normal md:text-[16px] text-[#FFFFFF] leading-[150%]  text-[14px]">
              Lets Discuss it now!
            </p>
          </div>
          <button className="bg-[#FFFFFF] cursor-pointer whitespace-nowrap rounded-[40px] border-none font-lato font-bold text-[#000000] text-[16px] h-fit leading-[100%] py-[12px] xl:px-[58px] px-[20px] ">
            Book an appointment
          </button>
        </div>
      </div>
     <div className="flex flex-col gap-[12px] w-full">
      {loading ? (
        <div className="flex justify-center items-center h-[200px] w-full">
          <CircularProgress style={{ color: "#FF5F1F" }} size={50} thickness={5} />
        </div>
      ) : faq?.length > 0 ? (
        faq.map((faqs: Faq, index: number) => (
          <div
            className="bg-[#FFFFFF] rounded-[8px] flex sm:gap-[32px] justify-between p-[16px] gap-[15px]"
            onClick={() => toggleFAQ(index)}
            key={index}
          >
            <div className="flex flex-col gap-[8px]">
              <p className="font-Pop font-medium md:text-[16px] text-[#123042] md:leading-[25.2px] text-[14px] leading-[135%]">
                {faqs.question}
              </p>
              {openIndex === index && (
                <p className="font-Inter font-normal text-[14.54px] text-[#757575] leading-[150%]">
                  {faqs.answer}
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
      ) : (
        <p className="text-gray-500 text-center">No FAQs found.</p>
      )}
    </div>
    </div>
  );
}
