import Image from "next/image";

export default function Team() {
  return (
    <>
      <div className="relative pb-8 bg-secondary">
        <div className="text-center pt-21">
          <Image
            src="/assets/image/cakar-kiri.png"
            width={92}
            height={102}
            alt="Cakar Kiri"
            className="absolute left-[424px] mt-"
          />
          <Image
            src="/assets/image/cakar-kanan.png"
            width={92}
            height={102}
            alt="Cakar Kiri"
            className="absolute right-[433px] mt-"
          />
          <h6 className="text-[#FDFDFD] text-[15px] font-[500]">Our Team</h6>
          <h1 className="text-white text-[45px] font-[700]">Meet Our Team</h1>
        </div>
      </div>
    </>
  );
}
