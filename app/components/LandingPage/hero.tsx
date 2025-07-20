import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router=useRouter();
   const handleClick = () => {
    router.push("/?scrollTo=contact-us");
  };
  return (
    <div className="pt-[35px] px-[24px] pb-[16.8px] flex flex-col gap-[16px] items-center lg:px-[100px] md:px-[50px]">
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
      <p className="font-clash font-semibold text-[32px] leading-[42px] lg:text-[54px] text-[#000000] lg:leading-[64px] text-center md:text-[44px] md:leading-[54px] hero-font">
        Your Ultimate Software <br /> Solutions Partner
      </p>
      <div className="flex flex-col gap-[18px] items-center">
        <p className="font-roboto text-center font-normal text-[14px] text-[#000000] leading-[100%] sm:text-[16px] md:text-[18px] ">
          We&apos;re a design &amp; development partner for startup founders and
          online brands.
        </p>
        <div className="flex gap-[24px] w-full justify-center items-center">
          <button 
            onClick={handleClick}
            className="bg-[#FF5F1F] rounded-[40px] sm:px-[21px] sm:py-[12px] cursor-pointer border-none font-Pop font-medium  sm:text-[16px] leading-[100%] text-[#FFFFFF] text-[14px] px-[15px] py-[10px]">
            Contact Us
          </button>
          <p className="font-roboto font-normal sm:text-[18px] text-[#000000] leading-[100%] text-[14px]">
            What we Do?
          </p>
        </div>
        <p className="font-caveat font-normal md:text-[26px] leading-[100%] text-[#000000] sm:text-[22px] text-[16px] text-center">
          We have developed 40+ AI-based cross-platform ideas{" "}
        </p>
      </div>
    </div>
  );
}
