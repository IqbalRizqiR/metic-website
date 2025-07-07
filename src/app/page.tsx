import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import DivisionSection from "./_components/DivisionSection";
import Header from "./_components/Header";
import Visi from "./_components/Visi";

export default function Home() {
  return (
    <>
      <Header />
      <Visi />
      <DivisionSection />
    </>
  );
}
