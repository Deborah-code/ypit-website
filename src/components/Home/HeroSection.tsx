import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { CSSProperties } from "react";
import { gradientStyle } from "~/styles/Theme";
import HeroSectionImage from "../../assets/home/heroImage.png";
import HeroImageMobile from "../../assets/home/heroImageMobile.png";
import Button from "../Commons/Button";

export default function HeroSection() {
  const windowWidth = useWindowSize().width!;

  const containerStyle: CSSProperties = {
    paddingTop: 48,
    maxWidth: 1120,
    margin: "auto",
  };
  const flexContainer: CSSProperties = {
    display: "flex",
    maxWidth: 1068,
    alignItems: "center",
    justifyContent: windowWidth > 767 ? "start" : "center",
    gap: windowWidth > 767 ? 58 : 24,
    margin: "auto",
    paddingTop: 24,
    flexDirection: windowWidth > 767 ? "row" : "column",
    paddingLeft: 18,
    paddingRight: 18,
  };
  const textStyle: CSSProperties = {
    maxWidth: 740,
    textAlign: windowWidth > 767 ? "left" : "center",
    fontSize: 24,
    lineHeight: "normal",
  };
  const DesktopImageStyle: CSSProperties = {
    maxWidth: 1032,
    margin: "auto",
    maxHeight: 539,
    paddingTop: 56,
    paddingBottom: 96,
  };

  const MobileImageStyle: CSSProperties = {
    maxWidth: "100%",
    paddingTop: 40,
    paddingLeft: 18,
    paddingBottom: 64,
    paddingRight: 18,
    maxHeight: 350,
  };
  return (
    <>
      <main style={containerStyle}>
        <h1>
          Creating a Space for Young People to{" "}
          <span style={gradientStyle}>Connect and Grow</span>
        </h1>
        <div style={flexContainer}>
          <p style={textStyle}>
            YPIT is a community of young professionals in Nigeria's tech
            ecosystem, brought together with a mission to make impact in Nigeria
            and Africa using technology
          </p>
          <Button text="Join us now" />
        </div>
        <Image
          src={windowWidth > 767 ? HeroSectionImage : HeroImageMobile}
          alt="hero ypit"
          style={windowWidth > 767 ? DesktopImageStyle : MobileImageStyle}
        />
      </main>
    </>
  );
}
