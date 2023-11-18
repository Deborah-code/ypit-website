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
];


export default function Purpose() {
  
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
    width: "646px"
  }

  return (
    <section style={{display: "grid", gap: "96px", paddingInline: "56px", marginBottom: "152px"}}>
      {
        cardDetails.map((details) => (
          <div style={{display: "flex", flexDirection: details.flexDirection, justifyContent: "space-between", alignItems: "center" }}>
            <div className="" style={{padding: "62px 38px 126px 74px"}}>
              <Image src={details?.icon} alt="icon" style={{marginBottom: "56px", height: "72px", width: "72px"}} />
              <div className="text_container">
                <h2 style={heading}>{details?.heading}</h2>
                <p style={text}>{details?.text}</p>
              </div>
            </div>
            <div className="image_container" style={{padding: "24px", borderRadius: "44px", border: "1px solid #AF8AE2"}}>
              <Image src={details?.image} alt="Hero Image" style={{borderRadius: "29.227px"}} />
            </div>
          </div>
        ))
      }

    </section>
  )
}
