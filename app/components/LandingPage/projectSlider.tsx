import Image from "next/image";

const line1Images = [
  { src: "/slider/lineAp1.webp", w: 492, h: 315.9 },
  { src: "/slider/lineAp2.webp", w: 145.8, h: 315.9 },
  { src: "/slider/lineAp3.webp", w: 492.4, h: 315.9 },
  { src: "/slider/lineAp4.webp", w: 492.4, h: 315.9 },
  { src: "/slider/lineAp5.webp", w: 145.8, h: 315.9 },
];

const line2Images = [
  { src: "/slider/l2Ap1.webp", w: 492, h: 315.9 },
  { src: "/slider/l2Ap2.webp", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap3.webp", w: 540.5, h: 315.9 },
  { src: "/slider/l2Ap4.webp", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap5.webp", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap6.webp", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap7.webp", w: 492.4, h: 315.9 },
  { src: "/slider/l2Ap8.webp", w: 145.8, h: 315.9 },
  { src: "/slider/l2Ap9.webp", w: 145.8, h: 315.9 },
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
        loading="lazy"
        className={`project-slider-image ${w > 200 ? "wide" : "narrow"}`}
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
