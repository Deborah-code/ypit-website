import { useWindowSize } from "@uidotdev/usehooks";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface CarouselProps {
  components: any[];
  width: number;
  mobileWidth: number;
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const windowWidth: number = useWindowSize().width!;

  const slidesPerView: number = useMemo(() => {
    if (windowWidth > 767) {
      return windowWidth / props.width;
    } else return windowWidth / props.mobileWidth;
  }, [windowWidth]);
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        keyboard={true}
        spaceBetween={80}
        mousewheel={true}
        style={{
          overflow: "visible",
          justifyContent: "start",
        }}
      >
        {props.components.map((slide: any, index: number) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
