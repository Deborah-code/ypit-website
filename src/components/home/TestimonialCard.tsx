import { useWindowSize } from "@uidotdev/usehooks";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import person from "../../assets/home/person.png";

import Card from "./Card";

interface TestimonialCardProps {
  name: string;
  role: string;
  img: HTMLImageElement | string | StaticImageData;
  comment: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role }) => {
  const windowWidth: number = useWindowSize().width!;

  const DivStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 24,
    paddingTop: 16,
  };
  const TextStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  return (
    <div style={{ width: windowWidth > 767 ? 400 : 300 }}>
      <Card
        body="Lorem ipsum dolor sit amet consectetur. Duis pharetra at commodo urna sed eu consectetur eget adipiscing. Elit sed imperdiet diam mi viverra neque vivamus nunc."
        image=""
        heading=""
        color=""
      />
      <div style={DivStyle}>
        <Image
          src={person}
          alt={name}
          width={windowWidth > 767 ? 86 : 45}
          height={windowWidth > 767 ? 86 : 45}
        />
        <div style={TextStyle}>
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
