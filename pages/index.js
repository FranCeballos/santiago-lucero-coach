import HeadComponent from "@/components/Head/Head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Sections/Hero/Hero";
import About from "@/components/Sections/About/About";
import Benefits from "@/components/Sections/Benefits/Benefits";
import Join from "@/components/Sections/Join/Join";

import { Inter } from "next/font/google";
import GymPicture1 from "@/components/UI/backgroundImages/GymPicture1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Coach Santi Lucero"
        description="Entrenador Personal"
      />
      <Header className={inter.className} />
      <main className={`${inter.className}`}>
        <Hero />
        <About />
        <GymPicture1 />
        <Benefits />
        <Join />
      </main>
    </>
  );
}
