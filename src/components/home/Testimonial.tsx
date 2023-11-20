import { useWindowSize } from "@uidotdev/usehooks";
import { CSSProperties } from "react";
import Carousel from "../Commons/Carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonial = (): JSX.Element => {
  const windowWidth: number = useWindowSize().width!;

  const card: JSX.Element[] = [
    <TestimonialCard name="" img="" role="" comment="" key={0} />,
    <TestimonialCard name="" img="" role="" comment="" key={0} />,
    <TestimonialCard name="" img="" role="" comment="" key={0} />,
    <TestimonialCard name="" img="" role="" comment="" key={0} />,
    <TestimonialCard name="" img="" role="" comment="" key={0} />,
  ];

  const ContainerStyle: CSSProperties = {
    paddingBottom: 96,
    paddingLeft: 18,
  };
  return (
    <div style={ContainerStyle}>
      <h3 style={{ paddingBottom: windowWidth > 767 ? 54 : 28 }}>
        Testimonials from our members
      </h3>
      <Carousel components={card} />
    </div>
  );
};

export default Testimonial;
