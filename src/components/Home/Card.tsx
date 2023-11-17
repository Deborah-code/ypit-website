import Image from "next/image";
import { CSSProperties, FC } from "react";
import { purpleLight } from "~/styles/Theme";
import { useWindowSize } from "@uidotdev/usehooks";

interface CardProps {
  image: any;
  heading: string;
  body: string;
  color: string;
}

const Card: FC<CardProps> = ({ image, heading, body, color }) => {
  const CardStyle: CSSProperties = {
    backgroundColor: color ? color : purpleLight,
    borderRadius: 23,
    paddingTop: 24,
    paddingLeft: 22,
    paddingBottom: 24,
    paddingRight: 22,
    width: "100%",
    color: "black",
    textAlign: "start",
    marginTop: 20,
  };
  const ImageStyle: CSSProperties = {
    borderRadius: 20,
    width: "100%",
    paddingBottom: 23,
    maxHeight: 242,
  };
  return (
    <div style={CardStyle}>
      {image && <Image src={image} alt={heading} style={ImageStyle} />}
      <div>
        {heading && (
          <h2
            style={{ paddingBottom: 16, fontStyle: "normal", fontWeight: 500 }}
          >
            {heading}
          </h2>
        )}
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
