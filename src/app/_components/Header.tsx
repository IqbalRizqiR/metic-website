import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="mt-28">
            <div className="text-center">
            <h1 className="font-[700] text-primary leading-[54px] text-[49px]">Yuk! Kepoin METIC!</h1>
            <h3 className="font-[700] mt-[2px] text-primary leading-[54px] text-[30px]">Moklet Education of Technology Informatic Club</h3>
            <p className="mt-[20px] text-black font-[400] text-[15px] leading-5">METIC (Moklet Education of Technology and Informatics Club) adalah organisasi teknologi di SMK Telkom Malang yang jadi <br /> wadah eksplorasi, inovasi, dan kolaborasi siswa dalam bidang teknologi digital, bisnis kreatif, dan media komunikasi.</p>
            </div>
            <div className="text-center drop-shadow-[0_6px_97.5px_rgba(225,95,96,0.73)]">
            <Image
                src="/assets/image/meca-header-4x.png"
                alt="Arrow Down"
                width={484}
                height={235}
                className="relative mx-auto mt-[38px] z-[-1]"
            />
            <a href="" className="block bg-primary rounded-[39px] text-white text-[38px] font-[700] leading-[27px] px-[97px] py-[23px] z-[2] text-center w-[371px] h-[71.25px] mx-auto mt-[-30px]">
                Join Us!
            </a>
            </div>
            <div className="hiasan">
            <Image
                src="/assets/image/server-rack.png"
                alt="Server Rack"
                width={72}
                height={72}
                className="absolute left-[153px] top-[150px] rotate-[-5deg]"
            />
            <Image
                src="/assets/image/triangle-sm.png"
                alt="small triangle"
                width={32}
                height={28}
                className="absolute left-[294px] top-[246px] rotate-[-127deg]"
            />
            <Image
                src="/assets/image/mc-triangle.png"
                alt="segitiga kiri"
                width={343.5}
                height={307.5}
                className="absolute left-[100px] top-[359px] "
            />
            <Image
                src="/assets/image/foto-bareng-triangle.png"
                alt="foto bareng segitiga"
                width={104}
                height={92.5}
                className="absolute left-[370px] top-[411px] rotate-[-5deg]"
            />
            <Image
                src="/assets/image/right-triangle.png"
                alt="triangle kanan"
                width={318}
                height={283.5}
                className="absolute right-[104px] top-[377px]"
            />
            <Image
                src="/assets/image/desktop.png"
                alt="desktop"
                width={65}
                height={65}
                className="absolute right-[350px] top-[400px]"
            />
            <Image
                src="/assets/image/triangle-sm.png"
                alt="Server Rack"
                width={32}
                height={28}
                className="absolute right-[306px] top-[195px] rotate-[-5deg]"
            />
            <Image
                src="/assets/image/triangle-lg.png"
                alt="triangle besar"
                width={90}
                height={81}
                className="absolute right-[180px] top-[264px]"
            />
            <Image
                src="/assets/image/panah-kiri.png"
                alt="triangle kiri"
                width={161}
                height={32}
                className="absolute left-[320px] top-[640px]"
            />
            <Image
                src="/assets/image/panah-kanan.png"
                alt="Server Rack"
                width={161}
                height={32}
                className="absolute right-[375px] top-[485px]"
            />
            </div>
        </div>
        </>
    )
}