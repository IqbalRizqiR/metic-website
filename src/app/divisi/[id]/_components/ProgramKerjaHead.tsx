import { DivisiProps } from "@/app/_components/const/datas";
import Image from "next/image";

interface ProgramKerjaHeadProps {
  prokja?: DivisiProps['prokja']
}
export default function ProgramKerjaHead({prokja}: ProgramKerjaHeadProps ) {
  return (
    <>
      <div className="relative bg-secondary w-full mt-71">
        <div className="absolute -top-[15px] left-0 w-full overflow-hidden leading-none">
          <svg
            width="1440"
            height="60"
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 20 Q720 50 1440 20 L1440 0 Q720 10 0 0 Z"
              fill="url(#gradienName)"
            />
            <defs>
              <linearGradient
                id="gradienName"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E9E2EA" />
                <stop offset="1" stopColor="#F5F5F5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="pt-30">
          {prokja?.map((item, index) => (
            <div className="absolute right-[134px] z-[222]" key={index}>
              <div className=" px-[10px] py-[14px] bg-[#F9DCDC] border-[1px] rounded-[12px_12px_12px_0px]">
                <h5 className="text-primary text-[28px] font-[700]">{item.title}</h5>
                <p className="text-primary font-[400] text-[28px] ">{item.desc}</p>
              </div>
            </div>
          ))}
          <Image
            src="/assets/image/stars-multipage.png"
            alt="Arrow Down"
            width={519}
            height={401}
            className="absolute left-[430px] mt-[170px] drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] right-0 z-[1]"
          />
          <Image
            src="/assets/image/noir-multipage.png"
            alt="Arrow Down"
            width={572}
            height={628}
            className="mt-[22.5px] block mx-auto drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] right-0 z-[1]"
          />
        </div>
        <h1 className="mt-[25px] pb-[43px] text-center text-white text-[49px] font-[700] drop-shadow-[0_6px_9px_rgba(0,0,0,0.25)]">
          Program Kerja Sobat METIC Dev !
        </h1>
        <div className="block bg-[#E9E2EA] h-5"></div>
      </div>
    </>
  );
}
