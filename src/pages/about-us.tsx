import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { CSSProperties } from "react";
import Hero from "~/components/AboutUs/Hero";
import Purpose from "~/components/AboutUs/Purpose";
import TeamSection from "~/components/AboutUs/TeamSection";
import Footer from "~/components/Commons/Footer";
import LargeImageCTA from "~/components/Commons/LargeImageCTA";
import Navbar from "~/components/Commons/Navbar";
import { gradientStyle } from "~/styles/Theme";
import heroImage from "../assets/aboutUs/heroImage.png";

export default function AboutUs() {
  const containerStyle: CSSProperties = {
    textAlign: "center",
    alignItems: "center",
    overflow: "hidden",
    maxWidth: "100%",
  };
  const windowWidth = useWindowSize().width!;
  const headingTextStyle: CSSProperties = {
    marginTop: 96,
    marginBottom: 84,
    textAlign: "center",
  };
  const bottomDivStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 44,
    gap: windowWidth < 768 ? "24px" : 290,
    marginBottom: windowWidth < 768 ? "48px" : "6rem",
  };

  return (
    <>
      <main style={containerStyle}>
        <Navbar />
        <h1 className="text-red" style={headingTextStyle}>
          About us at <span style={gradientStyle}>YPIT</span>
        </h1>
        <Hero />
        <Image
          src={heroImage}
          alt="Hero Image"
          style={{
            width: "95vw",
            display: "block",
            marginInline: "auto",
            maxWidth: 1320,
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: windowWidth < 767 ? 181 : "none",
          }}
        />
        <div style={bottomDivStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: 44 }}>700+</p>
            <p>
              Active <br /> members
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: 44 }}>5+</p>
            <p>
              Community <br /> Events
            </p>
          </div>
        </div>
        <Purpose />
        <TeamSection />
        <LargeImageCTA />
        <Footer />
      </main>
    </>
  );
}
