import { useWindowSize } from "@uidotdev/usehooks";
import Hero from "~/components/AboutUs/Hero";
import Navbar from "~/components/Commons/Navbar";
import { gradientStyle } from "~/styles/Theme";
import { CSSProperties } from "react";
import heroImage from "../assets/aboutUs/heroImage.png"
import Image from "next/image";
import Purpose from "~/components/AboutUs/Purpose";


export default function AboutUs() {
  const windowWidth = useWindowSize().width!;
  const headingTextStyle: CSSProperties = {
    marginTop: 96,
    marginBottom: 84,
    textAlign: 'center'
  };
  const bottomDivStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 44,
    gap: windowWidth < 768 ? "24px" : 290,
    marginBottom: windowWidth < 768 ? "48px" : "6rem"
  };
  const containerStyle: CSSProperties = {
    overflow: "hidden",
  };
  return (
    <>
      <main style={containerStyle}>
        <Navbar />
        <h1 className="text-red" style={headingTextStyle}>About us at <span style={gradientStyle} >YPIT</span></h1>
        <Hero />
        <Image src={heroImage} alt="Hero Image" style={{maxWidth: "95%", display: "block", marginInline: "auto", height: windowWidth < 768 ? "15em" : "auto"}} />
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
      </main>
    </>
  );
}
