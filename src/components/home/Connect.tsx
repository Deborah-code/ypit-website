import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { CSSProperties } from "react";
import { purpleDark } from "~/styles/Theme";
import globe from "../../assets/home/connectGlobe.png";
import Button from "../Commons/Button";

const Connect: React.FC = () => {
  const windowWidth: number = useWindowSize().width!;

  const ContainerStyle: CSSProperties = {
    maxWidth: 1072,
    margin: "auto",
    textAlign: "start",
    paddingBottom: 96,
    paddingLeft: 18,
    paddingRight: 18,
  };

  const headingTextStyle: CSSProperties = {
    paddingBottom: 24,
    // maxWidth: 600,
  };
  const bodyTextStyle: CSSProperties = {
    // maxWidth: 600,
  };
  const bottomTextStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: windowWidth > 767 ? 40 : 24,
  };
  const bottomDivStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    paddingTop: 34,
    gap: 40,
    flexDirection: windowWidth > 767 ? "row" : "column",
  };

  const commMembersStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
  };
  const textAndImageStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 28,
    flexDirection: windowWidth > 767 ? "row" : "column",
  };
  const textContainerStyle: CSSProperties = {
    textAlign: windowWidth > 767 ? "start" : "center",
  };
  return (
    <div style={ContainerStyle}>
      <div>
        <div style={textAndImageStyle}>
          <div style={textContainerStyle}>
            <h2 style={headingTextStyle}>
              Connecting, empowering and Impacting the next generation of{" "}
              <span style={{ color: purpleDark }}> tech innovators.</span>
            </h2>
            <p style={bodyTextStyle}>
              {" "}
              All tech and tech-adjacent professionals that need a space to
              learn, shine, and grow with other people just like them are
              welcome in the YPIT community. From tiny beginnings, our work has
              spread to over 1000 individuals across 2 countries, over 6 events
            </p>
          </div>
          <Image src={globe} alt="globe" width={405} />
        </div>
        <div style={bottomDivStyle}>
          <div style={bottomTextStyle}>
            <div style={commMembersStyle}>
              <p style={{ fontSize: 40 }}>1000+</p>
              <p>
                Community <br /> members
              </p>
            </div>
            <div style={commMembersStyle}>
              <p style={{ fontSize: 40 }}>5+</p>
              <p>
                Community <br /> Events
              </p>
            </div>
          </div>
          <Button text="Join us" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
