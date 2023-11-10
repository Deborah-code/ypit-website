import Image from "next/image";
import { CSSProperties } from "react";
import { gradientStyle } from "~/styles/Theme";
import HeroSectionImage from "../../assets/home/heroImage.svg";
import Button from "../Commons/Button";
export default function HeroSection() {
  const containerStyle: CSSProperties = {
    paddingTop: 48,
    maxWidth: 1120,
    margin: "auto",
  };
  const flexContainer: CSSProperties = {
    display: "flex",
    maxWidth: 1032,
    alignItems: "center",
    justifyContent: "start",
    gap: 58,
    margin: "auto",
    paddingTop: 24,
  };
  const textStyle: CSSProperties = {
    maxWidth: 740,
    textAlign: "left",
    fontSize: 24,
    lineHeight: "normal",
  };
  return (
    <>
      <main style={containerStyle}>
        <h1 style={{ fontSize: "40px", lineHeight: "84px" }}>
          Creating a Space for Young People to{" "}
          <span style={gradientStyle}>Connect and Grow</span>
        </h1>
        <div style={flexContainer}>
          <p style={textStyle}>
            A community of Young People in Tech connecting, and growing, with a
            mission to make an impact in Nigeria and Africa using technology
          </p>
          <Button text="Join us now" />
        </div>
        <Image
          src={HeroSectionImage}
          alt="hero ypit"
          style={{ maxWidth: 1120, margin: "auto" }}
        />
      </main>
    </>
  );
}
