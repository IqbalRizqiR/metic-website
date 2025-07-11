import Image from "next/image";

export default function Portofolio() {
  return (
    <>
      <div className="pt-48">
        <div className="flex mx-auto items-center justify-center gap-2">
          <Image
            src="/assets/image/kardus.png"
            alt="kardus"
            width={49}
            height={54}
          />
          <h1 className="">
            <span className="text-primary font-[700] text-[49px]">
              Yuk intip intip portofolio kita!
            </span>
          </h1>
          <Image
            src="/assets/image/kardus.png"
            alt="kardus"
            width={49}
            height={54}
          />
        </div>
        <div className="min-h-[450px] pb-[135px]"></div>
        <div className="block bg-[#E9E2EA] h-5"></div>
      </div>
    </>
  );
}
