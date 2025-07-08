import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import DivisionSection from "./_components/DivisionSection";
import Header from "./_components/Header";
import Visi from "./_components/Visi";

export default function Home() {
  return (
    <>
      <Header />
      <Visi />
      <DivisionSection />
      <div className="relative bg-secondary w-full mt-31">
        <div className="absolute -top-[15px] left-0 w-full overflow-hidden leading-none">
          <svg width="1440" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 20 Q720 50 1440 20 L1440 0 Q720 10 0 0 Z" fill="url(#gradienName)"/>
              <defs>
              <linearGradient id="gradienName" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E9E2EA"/>
                  <stop offset="1" stopColor="#F5F5F5"/>
              </linearGradient>
              </defs>
          </svg>
        </div>
        <div className="text-center pb-[30px] pt-[60px]">
          <h4 className="font-[500] text-[15px] text-white/61">Event & Achievements</h4>
          <h1 className="font-[700] text-[45px] text-white">Track Record</h1>
        </div>
        <div className="flex w-full mt-[30px] pb-[30px]">
          <div className="flex gap-[43px] flex-row-reverse shrink-0 w-[60%] overflow-x-hidden">
            <div className="min-w-[377px] min-h-[448px] bg-white rounded-[18px] px-[16.5px] py-[22.5px]">
              <Image
                src="/assets/image/tesla-metic-img.png"
                alt="Tesla Event"
                width={339}
                height={182}
                className="w-full rounded-[20px]"
              />
              <div className="">
                <div className="w-[113px] h-[32px] bg-secondary-bg text-primary rounded-[13px] text-center text-[12px] font-[500] mt-[15px] py-2">Event</div>
                <h2 className="text-[22px] font-[600] text-primary mt-[10px]">Tesla Metic UI/UX 2024</h2>
                <p className="text-[15px] text-black font-[400] ">UI/UX Design Competition yang diselenggarakan oleh METIC pada event PITULASAN. </p>
                <p className="relative text-right text-[12px] text-[#BFBFBF] font-[400]">Aug 28, 2024</p>
              </div>
            </div>
            <div className="min-w-[377px] min-h-[448px] bg-white rounded-[18px] px-[16.5px] py-[22.5px]">
              <Image
                src="/assets/image/tesla-metic-img.png"
                alt="Tesla Event"
                width={339}
                height={182}
                className="w-full rounded-[20px]"
              />
              <div className="">
                <div className="w-[113px] h-[32px] bg-secondary-bg text-primary rounded-[13px] text-center text-[12px] font-[500] mt-[15px] py-2">Event</div>
                <h2 className="text-[22px] font-[600] text-primary mt-[10px]">Tesla Metic UI/UX 2024</h2>
                <p className="text-[15px] text-black font-[400] ">UI/UX Design Competition yang diselenggarakan oleh METIC pada event PITULASAN. </p>
                <p className="relative text-right text-[12px] text-[#BFBFBF] font-[400]">Aug 28, 2024</p>
              </div>
            </div>
            <div className="min-w-[377px] min-h-[448px] bg-white rounded-[18px] px-[16.5px] py-[22.5px]">
              <Image
                src="/assets/image/tesla-metic-img.png"
                alt="Tesla Event"
                width={339}
                height={182}
                className="w-full rounded-[20px]"
              />
              <div className="">
                <div className="w-[113px] h-[32px] bg-secondary-bg text-primary rounded-[13px] text-center text-[12px] font-[500] mt-[15px] py-2">Event</div>
                <h2 className="text-[22px] font-[600] text-primary mt-[10px]">Tesla Metic UI/UX 2024</h2>
                <p className="text-[15px] text-black font-[400] ">UI/UX Design Competition yang diselenggarakan oleh METIC pada event PITULASAN. </p>
                <p className="relative text-right text-[12px] text-[#BFBFBF] font-[400]">Aug 28, 2024</p>
              </div>
            </div>
          </div>
          <div className="w-[40%]"></div>
        </div>
        <div className="block bg-[#E9E2EA] h-5"></div>
    </div>
    </>
  );
}
