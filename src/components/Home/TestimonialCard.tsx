import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { CSSProperties } from "react";
import person from "../../assets/home/person.svg";

import Card from "./Card";
const TestimonialCard = (
  name: string,
  role: string,
  img: any,
  comment: string
) => {
  const windowWidth = useWindowSize().width!;

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
      />
      <div style={DivStyle}>
        <Image
          src={person}
          alt={name}
          width={windowWidth > 767 ? 86 : 45}
          height={windowWidth > 767 ? 86 : 45}
        />
        <div style={TextStyle}>
          <p>Bolu Ademola</p>
          <p>Data analyst</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
