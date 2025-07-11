import { LeaderComponent } from "../Leader";
import { TrackRecordProps } from "../TrackRecord";

export const TrackData: TrackRecordProps[] = [
  {
    title: "Tesla Metic UI/UX 2024",
    eventDate: "Aug 28, 2024",
    desc: "UI/UX Design Competition yang diselenggarakan oleh METIC pada event PITULASAN. ",
    img: "/assets/image/tesla-metic-img.png",
    name: "Event",
    type: "Event",
  },
  {
    title: "Buka Bersama METIC 2025",
    eventDate: "Mar 16, 2025",
    desc: "Kebersamaan anggota METIC di bulan Ramadhan dengan mengadakan buka bersama seluruh metizen 31, 32 & 33. ",
    img: "/assets/image/metic-bukber.png",
    name: "Event",
    type: "Event",
  },
  {
    title: "Moklet Youth Innovators 2025",
    eventDate: "Jun 2, 2025",
    desc: "Moklet Youth Innovators 2025 diadakan oleh METIC untuk para siswa SMA/SMK/SMP sederajat tingkat Nasional. ",
    img: "/assets/image/metic-moyi.png",
    name: "Event",
    type: "Event",
  },
  {
    title: "Kolaborasi OSIS Man 2 Malang",
    eventDate: "Apr 19, 2025",
    desc: "Metic terlibat dalam Final Lomba Cerdas Cermat yang diselenggarakan oleh OSIS MAN 2 Malang dalam proyek pembuatan bel untuk olimpiade. ",
    img: "/assets/image/metic-japan.png",
    name: "Event",
    type: "Event",
  },
  {
    title: "Media Partner ArtFest Kosayu",
    eventDate: "Apr 26, 2025",
    desc: "Kebersamaan anggota METIC di bulan Ramadhan dengan mengadakan buka bersama seluruh metizen 31, 32 & 33. ",
    img: "/assets/image/metic-japan.png",
    name: "Event",
    type: "Event",
  },
  {
    title: "Sponsorship MGIP Demo Day",
    eventDate: "Jun 5, 2025",
    desc: "Kebersamaan anggota METIC di bulan Ramadhan dengan mengadakan buka bersama seluruh metizen 31, 32 & 33. ",
    img: "/assets/image/metic-japan.png",
    name: "Event",
    type: "Event",
  },
  {
    title: "Arsyad Ali Mahardika",
    eventDate: "Feb 28, 2024",
    desc: "Sakura Science High School Program 2025 in Japan. ",
    img: "/assets/image/metic-japan.png",
    name: "Metizen 32",
    type: "International",
    country: "Japan",
  },
  {
    title: "Fathimah Aqilah Zarrah",
    eventDate: "Feb 28, 2024",
    desc: "Asean Youth Competition: Hackathon AI 2025 in Thailand. ",
    img: "/assets/image/32-aqila.png",
    name: "Event",
    type: "International",
    country: "Thailand",
  },
  {
    title: "Muhammad Keefa Syawal",
    eventDate: "Feb 28, 2024",
    desc: "Asean Youth Competition: Hackathon AI 2025 in Thailand. ",
    img: "/assets/image/32-keefa.png",
    name: "Event",
    type: "International",
    country: "Thailand",
  },
  {
    title: "Shabri Sebastian Siregar",
    eventDate: "Feb 28, 2024",
    desc: "Asean Youth Competition: Hackathon AI 2025 in Thailand. ",
    img: "/assets/image/33-shabri.png",
    name: "Event",
    type: "International",
    country: "Thailand",
  },
  {
    title: "Jean Richnerd R.",
    eventDate: "Feb 28, 2024",
    desc: "International Standards Olympiad 2025 in Korea. ",
    img: "/assets/image/33-bara.png",
    name: "Event",
    type: "International",
    country: "Korea",
  },
  {
    title: "Muhammad Alfareza Hans P.",
    eventDate: "Feb 28, 2024",
    desc: "STEM Nexus ASEAN Regional 2025 in Malaysia. ",
    img: "/assets/image/33-alfareza.png",
    name: "Event",
    type: "International",
    country: "Malaysia",
  },
  {
    title: "Muhammad Dzaky Azzam",
    eventDate: "Feb 28, 2024",
    desc: "STEM Nexus ASEAN Regional 2025 in Malaysia. ",
    img: "/assets/image/33-azzam.png",
    name: "Event",
    type: "International",
    country: "Malaysia",
  },
]
export const LeadersData: LeaderComponent[] = [
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

export interface DivisiProps {
  id: number;
  name: string;
  image: string;
  desc: string;
  prokja: {
    title: string;
    desc: string;
  }[];
  portfolio: {
    title: string;
    desc: string;
    image: string;
    link: string;
    date: string;
  };
}
export const divisi: DivisiProps[] = [];
