/* eslint-disable @typescript-eslint/no-unused-vars */
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import DivisionSection from "./_components/DivisionSection";
import Header from "./_components/Header";
import Visi from "./_components/Visi";
import Leader from "./_components/Leader";
import { LeadersData, TrackData } from "./_components/const/datas";
import TrackRecord from "./_components/TrackRecord";

export default function Home() {
  return (
    <>
      <Header />
      <Visi />
      <DivisionSection />
      <TrackRecord datas={TrackData} />
      <Leader datas={LeadersData} />
    </>
  );
}
