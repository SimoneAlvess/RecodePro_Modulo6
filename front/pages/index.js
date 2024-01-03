import Head from "next/head";
import { Inter } from "next/font/google";
import CarouselHome from "@/components/indexOnly/carouselHome";
import CardsCarousel from "@/components/indexOnly/cardsCarousel";
import About from "@/components/indexOnly/about";
import Benefits from "@/components/indexOnly/benefits";
import InputSection from "@/components/indexOnly/inputSection";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | DestinoFácil</title>
      </Head>
      <main>
        <CarouselHome />
        <Benefits />
        <CardsCarousel />
        <About />
        <InputSection />
      </main>
    </>
  );
}
