import Carousel from "../Commons/Carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const card = [
    <TestimonialCard />,
    <TestimonialCard />,
    <TestimonialCard />,
    <TestimonialCard />,
  ];
  return (
    <div
      style={{
        maxWidth: 1220,
        margin: "auto",
        paddingBottom: 96,
      }}
    >
      <h3 style={{ paddingBottom: 54 }}>Testimonials from our members</h3>
      <div style={{ width: 400 }}>
        <Carousel components={card} />
      </div>
    </div>
  );
};

export default Testimonial;
