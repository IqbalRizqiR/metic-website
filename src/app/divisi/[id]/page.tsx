import Header from "./_components/Header";
import ProgramKerjaHead from "./_components/ProgramKerjaHead";
import Portofolio from "./_components/Portofolio";
import Team from "./_components/Team";
import { divisi } from "@/app/_components/const/datas";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams(): PageProps["params"][] {
  return divisi.map((d) => ({
    id: d.id,
  }));
}

export default function DivisionPage({ params }: PageProps) {
  const { id } = params;
  const division = divisi.find((d) => d.id === id);
  if (!division) {
    return <div>Division not found</div>;
  }
  return (
    <>
      <Header data={division} />
      <ProgramKerjaHead name={division.name} prokja={division.prokja} />
      <Portofolio divisi={division}/>
      <Team divisi={division}/>
    </>
  );
}
