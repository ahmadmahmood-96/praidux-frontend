import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-[35px] px-[100px] pb-[16.8px] flex flex-col gap-[16px] items-center max-[1150px]:px-[50px] max-[768px]:px-[24px]">
      <div className="flex justify-center items-center">
        <div className="z-30 mr-[-10px]">
          <Image
            height={39.2}
            width={39.2}
            src="/hero/p1.png"
            alt="Person 1"
            className="rounded-full"
          />
        </div>
        <div className="z-20 mr-[-10px]">
          <Image
            height={39.2}
            width={39.2}
            src="/hero/p2.png"
            alt="Person 2"
            className="rounded-full"
          />
        </div>
        <div className="z-10">
          <Image
            height={39.2}
            width={39.2}
            src="/hero/p3.png"
            alt="Person 3"
            className="rounded-full"
          />
        </div>
      </div>
      <p className="font-clash font-semibold text-[54px] text-[#000000] leading-[64px] text-center max-[951px]:text-[44px] max-[951px]:leading-[54px] max-[630px]:text-[38px] max-[630px]:leading-[48px] max-[525px]:text-[32px] max-[525px]:leading-[42px] max-[340px]:leading-[38px]  max-[340px]:text-[28px]">
        Your Ultimate Software <br /> Solutions Partner
      </p>
      <div className="flex flex-col gap-[18px] items-center">
        <p className="font-roboto text-center font-normal text-[18px] text-[#000000] leading-[100%] max-[630px]:text-[16px] max-[525px]:text-[14px] max-[420px]:text-[12px]">
         We&apos;re a design &amp; development partner for startup founders and online brands.
        </p>
        <div className="flex gap-[24px] w-full justify-center items-center">
          <button className="bg-[#FF5F1F] rounded-[40px] px-[21px] py-[12px] border-none font-Pop font-medium  text-[16px] leading-[100%] text-[#FFFFFF] max-[525px]:text-[14px] max-[525px]:px-[15px] max-[525px]:py-[10px] max-[420px]:text-[12px]">
            Contact Us
          </button>
          <p className="font-roboto font-normal text-[18px] text-[#000000] leading-[100%] max-[630px]:text-[16px] max-[525px]:text-[14px] max-[420px]:text-[12px]">
            What we Do?
          </p>
        </div>
        <p className="font-caveat font-normal text-[26px] leading-[100%] text-[#000000] max-[630px]:text-[22px] max-[525px]:text-[18px] max-[420px]:text-[16px] text-center">
          We have developed 40+ AI-based cross-platform ideas{" "}
        </p>
      </div>
    </div>
  );
}
