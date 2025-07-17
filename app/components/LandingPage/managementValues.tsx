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
    <div className="py-[51px] px-[100px] bg-[#FFFFFF] flex gap-[40px] max-[1150px]:px-[50px] max-[900px]:flex-col max-[768px]:px-[24px]">
      <div className="max-w-[377.25px] w-full bg-[#FF5F1F] h-[553.5px] rounded-[12px] max-[900px]:max-w-full max-[900px]:h-[350px]"></div>
      <div className="w-full flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} />
            <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              Management & Values
            </p>
          </div>
          <p className="font-clash font-semibold text-[38px] text-[#000000] leading-[48px]  max-[951px]:text-[28px] max-[951px]:leading-[38px] max-[470px]:text-[24px] max-[470px]:leading-[34px]">
            How we elevate the ideas to greater userbase?
          </p>
        </div>
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div
              key={index}
              className="py-[16px] flex items-center gap-[48px] max-[1100px]:gap-[20px]  max-[500px]:flex-col max-[500px]:items-start"
              style={{ borderBottom: "1px solid #0000001A" }}
            >
              <div className="flex items-center gap-[48px] max-[1100px]:gap-[20px]" >
                <div
                  className="rounded-full h-[38px] w-[38px] flex items-center justify-center"
                  style={{ border: "1px solid #0000001A" }}
                >
                  <p className="font-lato font-bold text-[12px] leading-[100%] text-[#000000]">
                    {step.number}
                  </p>
                </div>
                <p className="font-Pop font-semibold text-[16px] leading-[25.2px] text-[#123042] whitespace-nowrap max-[500px]:text-[14px]">
                  {step.title}
                </p>
              </div>
              <p className="font-Inter font-normal text-[14.54px] text-[#757575] leading-[150%] max-[500px]:text-[12px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
