import Image from "next/image";
import { CSSProperties } from "react";
import { gradientStyle } from "~/styles/Theme";
import largeLogo from "../../assets/commons/ypitLargeGroupLogo.png";
import Button from "./Button";
import { useWindowSize } from "@uidotdev/usehooks";
const LargeImageCTA = () => {
  const windowWidth = useWindowSize().width!;
  const ContainerStyle: CSSProperties = {
    textAlign: "center",
    paddingBottom: 96,
    maxWidth: 1220,
    margin: "auto",
  };
  const ImageStyle: CSSProperties ={
    maxWidth: "100%",
    maxHeight: windowWidth > 767 ? 470 : 300,
    paddingBottom: windowWidth > 767 ? 54 : 32,
    paddingTop: windowWidth > 767 ? 64 : 50,
  };
  return (
    <div style={ContainerStyle}>
      <Image src={largeLogo} alt="Large Ypit Logo" style={ImageStyle} />
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
