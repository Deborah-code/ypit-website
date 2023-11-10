import Image from "next/image";
import { CSSProperties } from "react";
import { purpleDark } from "~/styles/Theme";
import globe from "../../assets/home/connectGlobe.svg";
import Button from "../Commons/Button";

const Connect = () => {
  const ContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    maxWidth: 1220,
    margin: "auto",
    justifyContent: "center",
    textAlign: "start",
    paddingBottom: 96,
  };
  const headingTextStyle: CSSProperties = {
    fontSize: 44,
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
  };
  return (
    <div style={ContainerStyle}>
      <div>
        <h2 style={headingTextStyle}>
          Connecting, empowering and Impacting the next generation of{" "}
          <span style={{ color: purpleDark }}> tech innovators.</span>
        </h2>
        <p style={bodyTextStyle}>
          {" "}
          All tech and tech-adjacent professionals that need a space to learn,
          shine, and grow with other people just like them are welcome in the
          YPIT community. From tiny beginnings, our work has spread to over 1000
          individuals across 2 countries, over 6 events
        </p>
        <div style={bottomDivStyle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: 44 }}>1000+</p>
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
          <Button text="Become an active member" />
        </div>
      </div>
      <Image src={globe} alt="globe" width={405} />
    </div>
  );
};

export default Connect;
