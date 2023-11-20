import { useWindowSize } from "@uidotdev/usehooks";
import { useMemo } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselProps {
  components: any[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const windowWidth: number = useWindowSize().width!;

  const slidesPerView: number = useMemo(() => {
    if (windowWidth > 767) {
      return windowWidth / 400;
    } else return windowWidth / 300;
  }, [windowWidth]);
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        keyboard={true}
        spaceBetween={80}
        mousewheel={true}
      >
        {props.components.map((slide: any, index: number) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
