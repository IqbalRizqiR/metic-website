import Image from "next/image";
import Header from "./_components/Header";
import ProgramKerjaHead from "./_components/ProgramKerjaHead";
import Portofolio from "./_components/Portofolio";
import Team from "./_components/Team";
import { divisi } from "@/app/_components/const/datas";

interface Params {
  params: {id: number}
}

export async function generateStaticParams() {
  return divisi.map((d) => ({
    id: d.id,
  }))
}

export default function DivisionPage({ params: { id } }: Params) {
  const division = divisi.find((d) => d.id === id);
  if (!division) {
    return <div>Division not found</div>;
  }
  return (
    <>
      <Header title={division.name} image={division.image} desc={division.desc} />
      <ProgramKerjaHead prokja={division.prokja} />
      <Portofolio />
      <Team />
    </>
  );
}
