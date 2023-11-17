import { useWindowSize } from "@uidotdev/usehooks";
import { CSSProperties } from "react";
import Carousel from "../Commons/Carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const windowWidth = useWindowSize().width!;

  const card = [
    <TestimonialCard />,
    <TestimonialCard />,
    <TestimonialCard />,
    <TestimonialCard />,
  ];

  const ContainerStyle: CSSProperties = {
    maxWidth: 1220,
    margin: "auto",
    paddingBottom: 96,
    paddingLeft: 18,
  };
  return (
    <div style={ContainerStyle}>
      <h3 style={{ paddingBottom: windowWidth > 767 ? 54 : 28 }}>
        Testimonials from our members
      </h3>
      <div style={{ maxWidth: 1320 }}>
        <Carousel components={card} />
      </div>
    </div>
  );
};

export default Testimonial;
