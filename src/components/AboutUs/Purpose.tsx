import { useWindowSize } from "@uidotdev/usehooks";
import { CSSProperties } from "react";
import Image from "next/image";
import missionImage from "../../assets/aboutUs/missionImage.png"
import missionIcon from "../../assets/aboutUs/missionIcon.png"
import visionImage from "../../assets/aboutUs/visionImage.png"
import visionIcon from "../../assets/aboutUs/visoionIcon.png"

const cardDetails = [
  {
    icon: missionIcon,
    heading: "Mission",
    text: `The community's mission is to foster connections among young individuals in the field of technology across Africa 
    through the utilisation of physical events, virtual events, and targeted communication.`,
    image: missionImage,
    flexDirection: "row"
  },
  {
    icon: visionIcon,
    heading: "Vision",
    text: `The community envisions becoming a thriving environment that fosters growth and development through networking for aspiring 
    and fledgling technologically interested individuals across Africa`,
    image: visionImage,
    flexDirection: "row-reverse"
  },
] as const ;


export default function Purpose() {
  const windowWidth = useWindowSize().width!;
  const heading: CSSProperties = {
    fontFamily: "Neue Helvetica",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    marginBottom: "16px",
    color: "#000"
  }
  const text: CSSProperties = {
    color: "#626262",
  /* PARAGRAPH TEXT(R) */
    fontFamily: "Neue Helvetica",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    width: windowWidth > 767 ? "37.5rem" : ""
  }
  const leftSide: CSSProperties = {
    padding: windowWidth > 767 ? "62px 38px 80px 74px" : "1.5rem 0"
  }
  const imgIcon: CSSProperties = {
    marginBottom: "56px",
    height: "4.5em",
    width: "4.5em"
  }
  const sectionStyle: CSSProperties = {
    display: "grid",
    gap: "2rem",
    marginBottom: "152px",
    justifyContent: "center",
    maxWidth: 1220,
    marginInline: "auto",
    padding: "0 1rem"
  }
  const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
  const imgContainer: CSSProperties = {
    padding: "24px",
    borderRadius: "44px",
    border: "1px solid #AF8AE2",
    height: windowWidth < 767 ? "21rem": "auto",
  }
  const image: CSSProperties = {
    borderRadius: "29.227px",
    width: windowWidth < 767 ? "100%" : "31.25em",
    height: "100%",
  }
  

  return (
    <section style={sectionStyle}>
      {
        cardDetails.map((details) => (
          <div style={{flexDirection: `${windowWidth < 1440 ? "column" : details.flexDirection}`, ...containerStyle}}>
            <div className="" style={leftSide}>
              <Image src={details?.icon} alt="icon" style={imgIcon} />
              <div className="text_container">
                <h2 style={heading}>{details?.heading}</h2>
                <p style={text}>{details?.text}</p>
              </div>
            </div>
            <div className="image_container" style={imgContainer}>
              <Image src={details?.image} alt="Hero Image" style={image} />
            </div>
          </div>
        ))
      }
    </section>
  )
}
