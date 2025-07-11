import { DivisiProps } from "@/app/_components/const/datas";
import Image from "next/image";

interface HeaderProps {
  title: string;
  image: string;
  desc: string;
}
export default function Header({title, image, desc}: HeaderProps) {
  return (
    <>
      <Image
        src="/assets/image/polygon-multipage.png"
        alt="Division Header"
        width={204}
        height={183}
        className="absolute left-[98px] top-[370px] rotate-[-34deg]"
      />
      <Image
        src="/assets/image/polygon-multipage.png"
        alt="Division Header"
        width={204}
        height={183}
        className="absolute right-[85px] top-[248px]"
      />
      <Image
        src="/assets/image/panah-kiri-multipage.png"
        alt="triangle kiri"
        width={161}
        height={32}
        className="absolute left-[347px] top-[540px]"
      />
      <Image
        src="/assets/image/panah-kanan-multipage.png"
        alt="Server Rack"
        width={161}
        height={32}
        className="absolute right-[315px] top-[421px]"
      />
      <Image
        src="/assets/image/server-rack.png"
        alt="Server Rack"
        width={72}
        height={72}
        className="absolute left-[380px] top-[696px] rotate-[-5deg]"
      />
      <Image
        src="/assets/image/desktop.png"
        alt="desktop"
        width={65}
        height={65}
        className="absolute right-[311px] top-[778px]"
      />
      <Image
        src="/assets/image/cakar.png"
        alt="Division Header"
        width={58}
        height={55}
        className="absolute top-[784px] left-[205px]"
      />
      <Image
        src="/assets/image/cakar.png"
        alt="Division Header"
        width={58}
        height={55}
        className="absolute right-[204px] top-[559px] rotate-[-41deg]"
      />
      <Image
        src="/assets/image/pen-tool.png"
        alt="Division Header"
        width={67}
        height={67}
        className="absolute left-[505px] top-[768px]"
      />
      <Image
        src="/assets/image/verified-handphone.png"
        alt="Server Rack"
        width={72}
        height={72}
        className="absolute left-[643px] top-[699px] rotate-[-5deg]"
      />
      <Image
        src="/assets/image/kamera.png"
        alt="desktop"
        width={65}
        height={65}
        className="absolute right-[590px] top-[784px]"
      />
      <Image
        src="/assets/image/laptop.png"
        alt="desktop"
        width={65}
        height={65}
        className="absolute right-[449px] top-[694px]"
      />
      <div className="mt-28 pb-10">
        <div className="text-center">
          <h1 className="font-[700] text-primary leading-[54px] text-[48.75px]">
            Moklet Developer
          </h1>
          <p className="text-[#515050] mt-[17px] font-[400] text-[15px]">
            MokletDev is the developer division under the Moklet Education of
            Technology and Informatic Club <br /> (METIC) at SMK Telkom Malang,
            also known as <span className="font-[600]">Moklet</span>. We’re a
            team of passionate students in <br /> software development, focused
            on creating innovative IT solutions
          </p>
        </div>
        <div className="block drop-shadow-[0_6px_61px_#E15F60] mx-auto w-[247px] h-[247px] mt-[73px] bg-primary rounded-full">
          <Image
            src="/assets/image/logo-medcom.png"
            alt="Moklet Dev"
            width={123}
            height={88}
            className="mx-auto py-20"
          />
        </div>
      </div>
    </>
  );
}

