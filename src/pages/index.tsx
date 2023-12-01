import { CSSProperties } from "react";
import Footer from "~/components/Commons/Footer";
import LargeImageCTA from "~/components/Commons/LargeImageCTA";
import Navbar from "~/components/Commons/Navbar";
import Partners from "~/components/Commons/Partners";
import CardsSection from "~/components/Home/CardsSection";
import Connect from "~/components/Home/Connect";
import FixedButton from "~/components/Home/FixedButton";
import HeroSection from "~/components/Home/HeroSection";
import Testimonial from "~/components/Home/Testimonial";

export default function Home() {
  const containerStyle: CSSProperties = {
    textAlign: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  return (
    <>
      <main style={containerStyle}>
        <Navbar />
        <FixedButton text="Series D-Event coming up Dec12, 2023. Register now!" />
        <HeroSection />
        <Connect />
        <CardsSection />
        <LargeImageCTA />
        <Testimonial />
        <Partners />
        <Footer />
      </main>
    </>
  );
}
