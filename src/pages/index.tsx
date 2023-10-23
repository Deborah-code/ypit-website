import { CSSProperties } from "react";
import Navbar from "~/components/Commons/Navbar";
import FixedButton from "~/components/Home/FixedButton";
import { HeroSection } from "~/components/Home/HeroSection";

export default function Home() {
  const containerStyle : CSSProperties = {
    textAlign: "center",
    alignItems: "center"
  }
  return (
    <>
      <main style={containerStyle}>
        <Navbar />
        <FixedButton text="Series D-Event coming up Dec12, 2023. Register now!" />
        <HeroSection />
      </main>
    </>
  );
}
