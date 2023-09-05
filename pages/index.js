import HeadComponent from "@/components/Head/Head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Coach Santi Lucero"
        description="Entrenador Personal"
      />
      <main></main>
    </>
  );
}
