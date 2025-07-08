import Image from "next/image";
import React from "react";

const Leaders = [
{
    name: "Achmad Ilham Ramadhani",
    role: "Pembimbing",
    image: "/assets/image/pembimbing.png",
},
{
    name: "Sauqy Rahmatul Ramadhan",
    role: "Ketua METIC",
    image: "/assets/image/ketuaMTC.png",
},
{
    name: "Muhammad Syamil Muwahhid",
    role: "Ketua Internal",
    image: "/assets/image/ketuaintern.png",
},
{
    name: "Naufal Nabil R.",
    role: "Lead of Moklet Dev",
    image: "/assets/image/LeadMokdev.png",
},
{
    name: "Muhammad Radika A. B.",
    role: "Lead of Medcom", 
    image: "/assets/image/Leadmedcom.png",
},
{
    name: "Arsyad Ali M.",
    role: "Lead of Merch",
    image: "/assets/image/LeadMerch.png",
},
];

const Leader = () => {
return (
    <section className="py-20 px-6 bg-white text-center" id="leaders">
    <p className="text-sm text-gray-400 mb-2">Our Core Team</p>
    <h2 className="text-4xl font-bold mb-14">Meet Our Leader’s</h2>

      {/* Baris 1: Pembimbing */}
    <div className="flex justify-center mb-16">
        <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md">
            <Image
            src={Leaders[0].image}
            alt={Leaders[0].name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
            />
        </div>
        <h3 className="text-lg font-semibold">{Leaders[0].name}</h3>
        <p className="text-sm mt-1 bg-red-100 text-red-600 px-3 py-1 rounded-full">
            {Leaders[0].role}
        </p>
        </div>
    </div>

      {/* Baris 2: Ketua */}
    <div className="flex justify-center gap-20 mb-14 flex-wrap">
        {Leaders.slice(1, 3).map((leader, index) => (
        <div key={index} className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md">
            <Image
                src={leader.image}
                alt={leader.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
            />
            </div>
            <h3 className="text-md font-semibold">{leader.name}</h3>
            <p className="text-sm mt-1 bg-red-100 text-red-600 px-3 py-1 rounded-full">
            {leader.role}
            </p>
        </div>
        ))}
    </div>

      {/* Baris 3: Divisi */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {Leaders.slice(3).map((leader, index) => (
        <div key={index} className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md">
            <Image
                src={leader.image}
                alt={leader.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
            />
            </div>
            <h3 className="text-sm font-semibold">{leader.name}</h3>
            <p className="text-xs mt-1 bg-red-100 text-red-600 px-3 py-1 rounded-full">
            {leader.role}
            </p>
        </div>
        ))}
    </div>
    </section>
);
};

export default Leader;
