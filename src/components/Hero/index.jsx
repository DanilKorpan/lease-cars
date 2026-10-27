import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="Featured vehicles">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="hero__swiper"
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide}>
            <HeroSlide />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
