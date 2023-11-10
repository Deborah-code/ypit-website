import Image from "next/image";
import { CSSProperties } from "react";

import { gradientStyle } from "~/styles/Theme";
import largeLogo from "../../assets/commons/ypitLargeLogo.svg";
import Button from "./Button";
const LargeImageCTA = () => {
  const ContainerStyle: CSSProperties = {
    textAlign: "center",
    paddingBottom: 96,
    maxWidth: 1220,
    margin: "auto",
  };
  return (
    <div style={ContainerStyle}>
      <Image src={largeLogo} alt="Large Ypit Logo" />
      <h4>Discover the power of young people in tech.</h4>
      <h4 style={gradientStyle}>Connect and Grow!</h4>
      <div
        style={{ paddingTop: 48, display: "flex", justifyContent: "center" }}
      >
        <Button text="Join the YPIT community" globeButton />
      </div>
    </div>
  );
};

export default LargeImageCTA;
