import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { CSSProperties } from "react";
import { purpleDark } from "~/styles/Theme";
import heroStack from "../../assets/aboutUs/heroStack.png";
import Button from "../Commons/Button";

const Hero = () => {
  const windowWidth = useWindowSize().width!;

  const ContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    maxWidth: 1220,
    margin: "auto",
    justifyContent: "center",
    textAlign: "start",
    paddingBottom: 96,
    flexDirection: windowWidth < 768 ? "column" : "row",
    paddingInline: "1rem",
  };
  const headingTextStyle: CSSProperties = {
    fontSize: windowWidth < 768 ? 27 : 44,
    paddingBottom: 24,
    maxWidth: 700,
  };
  const bodyTextStyle: CSSProperties = {
    maxWidth: 600,
  };
  const bottomDivStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    paddingTop: 44,
    gap: 49,
    marginBottom: windowWidth < 768 ? "2rem" : 0
  };
  return (
    <>
    <div style={ContainerStyle}>
      <div>
        <h2 style={headingTextStyle}>
        We're Here to Help You Make Your Mark on the {" "}
          <span style={{ color: purpleDark }}> Tech Industry</span>
        </h2>
        <p style={bodyTextStyle}>
          {" "}
          Welcome to a place where innovation knows no bounds, and your tech dreams are fueled with endless possibilities. 
          We're here to help you make your indelible mark on the tech industry, and we couldn't be more excited about your journey ahead.
        </p>
        <div style={bottomDivStyle}>
          <Button text="Become an active member" />
        </div>
      </div>
      <Image src={heroStack} alt="globe" width={405} />
    </div>
    </>
  );
};

export default Hero;
