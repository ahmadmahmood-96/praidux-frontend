import Image from "next/image";

const line1Images = [
  { src: "/slider/lineAp1.png", w: 492, h: 315.9 },
  { src: "/slider/lineAp2.png", w: 145.8, h: 315.9 },
  { src: "/slider/lineAp3.png", w: 492.4, h: 315.9 },
  { src: "/slider/lineAp4.png", w: 492.4, h: 315.9 },
  { src: "/slider/lineAp5.png", w: 145.8, h: 315.9 },
];

const line2Images = [
  { src: "/slider/l2Ap1.png", w: 492, h: 315.9 },
  { src: "/slider/l2Ap2.png", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap3.png", w: 540.5, h: 315.9 },
  { src: "/slider/l2Ap4.png", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap5.png", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap6.png", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap7.png", w: 492.4, h: 315.9 },
  { src: "/slider/l2Ap8.png", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap9.png", w: 145.8, h: 315.9 },
];

const renderImageSet = (images: typeof line1Images, repeatCount = 3) =>
  Array.from({ length: repeatCount }, (_, i) =>
    images.map(({ src, w, h }, idx) => (
      <Image
        key={`${src}-${i}-${idx}`}
        src={src}
        alt={`image-${src}`}
        width={w}
        height={h}
        className={`max-[900px]:h-[280px] ${
          w > 200 ? "max-[900px]:w-[430px]" : ""
        } max-[600px]:h-[220px] ${
          w > 200 ? "max-[600px]:w-[380px]" : "max-[600px]:w-[120px]"
        }`}
      />
    ))
  );

export default function ProjectSlider() {
  return (
    <div className="pt-[26.5px] pb-[10.98] flex flex-col gap-[24px]">
      <div className="w-full overflow-hidden">
        <div className="w-max flex animate-slide gap-0">
          {renderImageSet(line1Images)}
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="w-max flex animatedd-slide gap-0">
          {renderImageSet(line2Images)}
        </div>
      </div>
    </div>
  );
}
