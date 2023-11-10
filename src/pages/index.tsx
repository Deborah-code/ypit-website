import { CSSProperties } from "react";
import LargeImageCTA from "~/components/Commons/LargeImageCTA";
import Navbar from "~/components/Commons/Navbar";
import CardsSection from "~/components/home/CardsSection";
import Connect from "~/components/home/Connect";
import FixedButton from "~/components/home/FixedButton";
import HeroSection from "~/components/home/HeroSection";
import Testimonial from "~/components/home/Testimonial";

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
      </main>
    </>
  );
}
