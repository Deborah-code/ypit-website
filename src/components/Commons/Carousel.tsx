import { useWindowSize } from "@uidotdev/usehooks";
import { useMemo } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = (props: any) => {
  const windowWidth = useWindowSize().width!;

  const slidesPerView = useMemo(() => {
    if (windowWidth > 767) {
      return windowWidth / 400;
    } else return windowWidth / 300;
  }, [windowWidth]);
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        keyboard={true}
        spaceBetween={150}
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
