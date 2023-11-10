import React from "react";
import Swiper from "swiper";
import "swiper/css";

interface CarouselProps {
  components: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ components }) => {
  const swiperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        {components.map((component) => (
          <div className="swiper-slide">{component}</div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;
