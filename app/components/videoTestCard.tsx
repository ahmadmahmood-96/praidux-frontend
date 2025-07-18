
"use client";
import { useState } from "react";
import Image from "next/image";
interface VideoTestCardProps {
  testimonial: {
    clientName: string;
    designation: string;
    projectName: string;
    stars: number;
    description: string;
    websiteLink?: string;
    iosLink?: string;
    androidLink?: string;
    liveStatus: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    _id: string;
  };
}

const VideoTestCard = ({ testimonial }: VideoTestCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const {
    clientName,
    projectName,
    stars,
    description,
    thumbnailUrl,
    websiteLink,
    iosLink,
    androidLink,
    liveStatus,
    videoUrl,
  } = testimonial;

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className=" w-[729px] p-[16px] rounded-[32px] bg-[#fffaf8] flex gap-[10px] sm:gap-[16px]">
     
        {/* Left - Video or Thumbnail */}
        <div className="w-full sm:max-w-[252px] max-w-[200px] sm:h-[321px] h-[280px] rounded-xl bg-[#ff5f1f] overflow-hidden ">
          {videoUrl && (
            <>
              {!showVideo && (
                <div
                  onClick={handlePlayClick}
                  className="w-full h-full bg-cover bg-center cursor-pointer flex items-end"
                  style={{
                    backgroundImage: thumbnailUrl
                      ? `url(${thumbnailUrl})`
                      : undefined,
                  }}
                >
                  
                     <Image
                                src="/contact/play.png"
                                alt="play"
                                width={180}
                                height={120}
                                className="mb-[-35px] ml-[-20px]"
                              />
                
                </div>
              )}

              {showVideo && (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </>
          )}
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-between flex-1 gap-5">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start flex-wrap gap-5">
              <div className="flex gap-6 items-center flex-wrap">
                <p className="font-Pop font-semibold text-[12px] sm:text-[14.4px] text-[#090914] sm:leading-[25.2px] leading-[20px]">
                  {clientName}
                </p>
                <p className="font-Pop font-medium sm:text-[14.4px] text-[12px] text-[#757575] sm:leading-[21.6px] leading-[20px]">
                  {projectName}
                </p>
                {stars > 0 && (
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: stars }, (_, i) => (
                      <img
                        key={i}
                        src="/testimonial/star.svg"
                        alt="star"
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                )}
              </div>

             
            </div>

            <p className="font-Pop font-normal sm:text-[18px] text-[14px] text-[#757575] leading-[20px] sm:leading-[25.2px]">
              "{description}"
            </p>
          </div>

          <div className="flex flex-wrap gap-[8px] items-center">
            {/* Links */}
            <div className="flex gap-[8px] flex-wrap">
              {websiteLink && (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black/10 rounded-full px-3 py-2 bg-white"
                >
                  <img src="/testimonial/language.svg" alt="Web" />
                  <p className="sm:text-[14px] text-[12px] font-lato font-bold text-black">Web</p>
                </a>
              )}

              {iosLink && (
                <a
                  href={iosLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black/10 rounded-full px-3 py-2 bg-white"
                >
                  <img src="/testimonial/apple.svg" alt="iOS" />
                  <p className="sm:text-[14px] text-[12px] font-lato font-bold text-black">iOS</p>
                </a>
              )}

              {androidLink && (
                <a
                  href={androidLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black/10 rounded-full px-3 py-2 bg-white"
                >
                  <img src="/testimonial/Android.svg" alt="Android" />
                  <p className="sm:text-[14px] text-[12px] font-lato font-bold text-black">Android</p>
                </a>
              )}
            </div>

            {/* Live Status */}
            <div className="flex items-center gap-2">
              {liveStatus === "yes" && (
                <div className="w-2 h-2 bg-[#00df78] rounded-full"></div>
              )}
              <p className="font-Pop font-medium sm:text-[14.4px] text-[12px] text-[#757575]">
                {liveStatus === "yes"
                  ? "The app is live"
                  : "App is not live"}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default VideoTestCard;
