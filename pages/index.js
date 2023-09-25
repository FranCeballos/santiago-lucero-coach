import HeadComponent from "@/components/Head/Head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Sections/Hero/Hero";
import About from "@/components/Sections/About/About";
import Benefits from "@/components/Sections/Benefits/Benefits";
import Join from "@/components/Sections/Join/Join";
import GymPicture1 from "@/components/UI/backgroundImages/GymPicture1";
import Footer from "@/components/Sections/Footer/Footer";
import InstagramGallery from "@/components/Sections/InstagramGallery/InstagramGallery";
import Modal from "@/components/Sections/Modal/Modal";

import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ instagramPostsData }) {
  const { showNav, showVideo } = useSelector((state) => state.modal);
  return (
    <>
      <HeadComponent
        title="Santiago Lucero Coach"
        description="Entrenador Personal"
      />
      <Header className={inter.className} />
      <main className={inter.className}>
        <AnimatePresence mode="wait">
          {(showNav || showVideo) && <Modal />}
        </AnimatePresence>
        <Hero />
        <About />
        <GymPicture1 />
        <Benefits />
        <Join />
        <InstagramGallery postsData={instagramPostsData} />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,permalink,thumbnail_url,media_type,media_url&access_token=${process.env.INSTAGRAM_TOKEN}`
  );
  const instagramPostsData = await res.json();
  return { props: { instagramPostsData }, revalidate: 30 };
};
