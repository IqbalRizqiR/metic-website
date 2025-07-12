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
];
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
  id: string;
  name: string;
  image: string;
  preview: string;
  alias: string;
  desc: string;
  prokja: {
    title: string;
    desc: string;
  }[];
  portfolio: {
    id: string;
    title: string;
    sosmed: string;
    image: string;
    link: string;
    date: string;
  }[];
  team: {
    name: string;
    role: string;
    image: string;
  }[];
}
export const divisi: DivisiProps[] = [
  {
    image: "/assets/image/logo-mokletdev.png",
    preview:
      " Divisi yang fokus pada  pengembangan teknologi dan sebagai pusat inovasi.",
    desc: `MokletDev is the developer division under the Moklet Education of
            Technology and Informatic Club <br /> (METIC) at SMK Telkom Malang,
            also known as <span className="font-[600]">Moklet</span>. We’re a
            team of passionate students in <br /> software development, focused
            on creating innovative IT solutions`,
    name: "MokletDev",
    alias: "Moklet Developer",
    id: "1",
    prokja: [
      {
        title: "MokletDev go to DevFest",
        desc: "Event yang di selenggarakan oleh Google Developer Group untuk eksplorasi teknologi terbaru seputar google. pelaksanaan nya setahun sekali",
      },
      {
        title: "Probation",
        desc: "Workshop internal mokletdev untuk melatih softkill dan hardskill IT yang dibutuhkan dalam project, ada 2 kategori (mentoring dan sharing session).",
      },
      {
        title: "MokletDev go to Google I/O",
        desc: "Event yang di selenggarakan oleh Google Developer Group secara berkala.",
      },
      {
        title: "Project Development",
        desc: "Anggota mokletdev akan diberi akses terjun ke proyek langsung sesuai dengan skill/kemampuan anggota.",
      },
    ],
    portfolio: [
      {
        date: "01/01/2025",
        sosmed: "mokletdev",
        id: "1",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://moklet.org/",
        title: "Website Moklet.org",
      },
      {
        date: "01/01/2025",
        sosmed: "mokletdev",
        id: "2",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://telkom-society.smktelkom-mlg.sch.id/",
        title: "Website Digifest",
      },
      {
        date: "01/01/2025",
        sosmed: "mokletdev",
        id: "3",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://telkom-society.smktelkom-mlg.sch.id/",
        title: "Website E-Pilketos",
      },
      {
        date: "01/01/2025",
        sosmed: "mokletdev",
        id: "4",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://telkom-society.smktelkom-mlg.sch.id/",
        title: "Website Moklet IT Fest",
      },
    ],
    team: [
      {
        "name": "Naufal Nabil Ramadhan",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Abhinaya Dwi Putra M",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Haza Nasrullah K.",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Vincent Clause Junior ",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Aaron Zanett Samudra",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "M. Raka Aqil Ghifari ",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Fahrell Sandy Zhariif W",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Sayoga Sindhunata N",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "M. Zuhair Zuhdi",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Shabri Sebastian S",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Ryo Hariyono Angwyn",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Queen Nur Hafizah",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Rakha Adrian Nur Tanaya",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Syamraya Ibrahim A",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "M Faiz Annabil",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Violetta Emerald W",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "M Rezky Eksatama",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "M Kevin Arif Rudianto ",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Yahya Az-Zyahabby R",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Maulana Alfara S. ",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Fadlurrahman Yusuf Al F",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Jean Richnerd R",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Yohanes Capelliou S",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Esya Zachreva A",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Shofiyulloh Kamil",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Fakhriza Althaf F",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "M Keefa Syawal",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Iqbal Rizqi Ramadhan",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Tisha Ivana",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Achmad Rafi Akmal ",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Moh Abdul Azis",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Rahadyan Alfarisi",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "⁠M Dionesia Alfiansyah ",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Akira Saskara H",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Moh Abdul Azis",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Fathir Tegar N",
        "role": "Metizen 33",
        "image": "/assets/image/33-bara.png"
      },
      {
        "name": "Arsyad Ali Mahardika ",
        "role": "Metizen 32",
        "image": "/assets/image/33-bara.png"
      },
      
      
      
      ],
  },
  {
    image: "/assets/image/logo-medcom.png",
    preview:
      "Berfokus pada pengelolaan konten kreatif, manajemen media sosial, publikasi, serta komunikasi digital",
    desc: ``,
    name: "Medcom",
    alias: "Media Communication",
    id: "2",
    prokja: [
      {
        title: "Review Website",
        desc: "Program inisiatif untuk memperkenalkan dan mengulas website project.",
      },
      {
        title: "MeTor",
        desc: "Program untuk memperkenalkan dan mengulas website projectProgram kurikulum untuk Software Engineer, Network and Computer Engineering and Game Dev. Berupa tutorial video pemrograman.",
      },
      {
        title: "SnapShot Photobooth",
        desc: "Program penyebaran informasi terkait lokasi photobooth, marketing dan dokumentasi.",
      },
    ],
    portfolio: [
      {
        date: "01/01/2025",
        sosmed: "medcom",
        id: "1",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://medcom.org/",
        title: "Streaming Shine Angkatan 31",
      },
      {
        date: "01/01/2025",
        sosmed: "medcom",
        id: "2",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://telkom-society.smktelkom-mlg.sch.id/",
        title: "Review Website MokletDev",
      },
      {
        date: "01/01/2025",
        sosmed: "medcom",
        id: "3",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://telkom-society.smktelkom-mlg.sch.id/",
        title: "Editing MeTor",
      },
    ],
    team: [
      {
        image: "/assets/image/33-bara.png",
        name: "M. Radika Afwa Bimalaksa",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Keyza Alvaro Faiq",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Fathimah Aqilah Zarrah",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M. Rabbani Aryanta",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "⁠M. Dionesia Alfiansyah ",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Pradipta Daniswara",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M. Zalmaladzi El-Shirazzi ",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Loi Lieant Ratri Leony",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Arsyad Dhiyaul Haq",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M Rizky Ferdinand",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Aloysius Nathanael Purba ",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Feodora Ester",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Rizq Syafriano Valeant",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Fayola Khanza L",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Danish Shafiqa L Noerdars",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Habibi Mahatma S",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "⁠Azzura Ulfiatufathin M",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Indira Savida S",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "⁠M Raya Putra Ashiddiqi ",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Abdur Rasyid H",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Leon Adam Royyan ",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Latifa Irsyadiyah",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Hafidz Agil Abiyasa",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Ahmad Zaki",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M Keefa Syawal",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Muhammad Zulkarnaen",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Moh Abdul Aziz",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M Dzaky Azzam",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Muhamad Arifdiansyah",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M Alfareza Hans P",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Kinan Shafin Ibrahim",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Fadi Alyuliansyah",
        role: "Metizen 33"
      },
    ],
  },
  {
    image: "/assets/image/logo-meticmerch.png",
    preview:
      "Divisi yang fokus pada pengembangan teknologi dan sebagai pusat inovasi.",
    desc: ``,
    name: "Metic Merch",
    alias: "Metic Merch",
    id: "3",
    prokja: [
      {
        title: "Produksi ID Card Siswa dan Organisasi",
        desc: "Melayani proses pembuatan ID card secara menyeluruh, mulai dari pengambilan foto, desain identitas visual, hingga proses pencetakan.",
      },
      {
        title: "Layanan Photobooth untuk Berbagai Event",
        desc: "Menyediakan jasa photobooth profesional untuk kegiatan seperti konser, wisuda, pernikahan, serta event sekolah lainnya.",
      },
      {
        title: "Kerja Sama Produksi dengan Vendor Eksternal",
        desc: "Menjalin kolaborasi strategis dengan vendor luar untuk memperluas kapasitas produksi serta meningkatkan kualitas hasil akhir.",
      },
      {
        title: "Pengembangan Produk Merchandise Kreatif",
        desc: "Menghadirkan beragam produk kreatif seperti stiker, banner, jersey, hingga filter media sosial yang dirancang secara eksklusif.",
      },
      {
        title: "Penguatan Branding Eksternal METIC MERCH",
        desc: "Melakukan pengembangan identitas dan citra METIC MERCH melalui logo, katalog, serta media promosi untuk meningkatkan eksistensi di luar organisasi.",
      },
    ],
    portfolio: [
      {
        date: "01/01/2025",
        sosmed: "meticmerch",
        id: "1",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://meticmerch.org/",
        title: "Photobooth Shine Angkatan 31",
      },
      {
        date: "01/01/2025",
        sosmed: "meticmerch",
        id: "2",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://telkom-society.smktelkom-mlg.sch.id/",
        title: "Photobooth MGIP 2025",
      },
      {
        date: "01/01/2025",
        sosmed: "meticmerch",
        id: "3",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://telkom-society.smktelkom-mlg.sch.id/",
        title: "PhotoBooth EduFest 2025",
      },
      {
        date: "01/01/2025",
        sosmed: "meticmerch",
        id: "4",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://meticmerch.org/",
        title: "PhotoBooth Elqif 2025",
      },
      {
        date: "01/01/2025",
        sosmed: "meticmerch",
        id: "5",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://meticmerch.org/",
        title: "PhotoBooth Saraya 2025",
      },
      {
        date: "01/01/2025",
        sosmed: "meticmerch",
        id: "6",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://meticmerch.org/",
        title: "PhotoBooth Antareja 2024",
      },
      {
        date: "01/01/2025",
        sosmed: "meticmerch",
        id: "7",
        image: "/assets/image/foto-bareng-triangle.png",
        link: "https://meticmerch.org/",
        title: "PhotoBooth DiesNatalis 2024",
      },
    ],
    team: [
      {
        image: "/assets/image/33-bara.png",
        name: "Arsyad Ali Mahardika",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Lanang Tegar Cahyo",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Hafidz Agil Abiyasa",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Rizqi Ramadhan",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Nayla Chandra",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Nadhifatul Azmi",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Agnes Shifa R",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Nayla Larasati",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Bilqis Nur Fadhila Ismoyo",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Fattan Arifudin",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M Dionesia Alfiansyah",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Nella Salsabila",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M Keefa Syawal",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Earlene Zabrina J",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Moh Abdul Azis",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Danish Satria Indie",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "M Syamil Muwahhid",
        role: "Metizen 32"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Aurel Dwi Bintari",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Abravia Mouzahra R",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Dentha Dewangga P",
        role: "Metizen 33"
      },
      {
        image: "/assets/image/33-bara.png",
        name: "Adhiana Alika Apriantina",
        role: "Metizen 33"
      },
    ],
  },
];
