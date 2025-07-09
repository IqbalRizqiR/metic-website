import Image from "next/image";
import { LeaderComponent } from "./Leader";

export const CardLeader: React.FC<{ data: LeaderComponent }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md">
        <Image
          src={data.image}
          alt={data.name}
          width={112}
          height={112}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-md font-semibold">{data.name}</h3>
      <p className="text-sm mt-1 bg-red-100 text-red-600 px-3 py-1 rounded-full">
        {data.role}
      </p>
    </div>
  );
};