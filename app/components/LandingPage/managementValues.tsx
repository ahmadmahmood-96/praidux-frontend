import Image from "next/image";

export default function ManagementValue() {
  const steps = [
    {
      number: "01",
      title: "Stage 1 Name",
      description:
        "Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text.",
    },
    {
      number: "02",
      title: "Stage 2 Name",
      description:
        "Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text.",
    },
    {
      number: "03",
      title: "Stage 3 Name",
      description:  "Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text.",
    },
    {
      number: "04",
      title: "Stage 4 Name",
      description:  "Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text. Lorem ipseim is ad ummy text.",
    },
  ];

  return (
    <div className="py-[51px] px-[24px] bg-[#FFFFFF] flex gap-[40px] xl:px-[100px] lg:px-[70px] md:px-[50px] definedNinecol">
      <div className="max-w-[377.25px] w-full bg-[#FF5F1F] h-[553.5px] rounded-[12px] containerSixefixed"></div>
      <div className="w-full flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} />
            <span className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              Management & Values
            </span>
          </div>
         <h2 className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
             How we elevate the ideas to greater userbase?
          </h2>
        </div>
        <section className="flex flex-col">
          {steps.map((step, index) => (
            <div
              key={index}
              className="py-[16px] flex sm:items-center lg:gap-[48px] w-fit gap-[20px] sm:flex-row flex-col items-start"
              style={{ borderBottom: "1px solid #0000001A" }}
            >
              <div className="flex items-center lg:gap-[48px] gap-[20px]" >
                <div
                  className="rounded-full h-[38px] w-[38px] flex items-center justify-center"
                  style={{ border: "1px solid #0000001A" }}
                >
                  <p className="font-lato font-bold text-[12px] leading-[100%] text-[#000000]">
                    {step.number}
                  </p>
                </div>
                <p className="font-Pop font-semibold sm:text-[16px] leading-[25.2px] text-[#123042] whitespace-nowrap text-[14px]">
                  {step.title}
                </p>
              </div>
              <p className="font-Inter font-normal sm:text-[14.54px] text-[#757575] leading-[150%] text-[12px]">
                {step.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
