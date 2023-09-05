import HeadComponent from "@/components/Head/Head";
import Header from "@/components/Header/Header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Coach Santi Lucero"
        description="Entrenador Personal"
      />
      <Header className={inter.className} />
      <main className={`${inter.className}`}></main>
    </>
  );
}
