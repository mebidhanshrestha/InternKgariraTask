import "../sass/Slider.scss";
import Hero from "../components/Hero";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import recent from "../assets/recent.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="Slider">
      <div className="container">
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper Slider-info"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <Hero
              image={recent}
              heading={"APRIL ETHEREAL - The Act and Space Live!"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hero image={recent} heading={"APRIL done aayo gama e Live!"} />
          </SwiperSlide>
          <SwiperSlide>
            <Hero image={recent} heading={"APRIL hawa jastai mero name"} />
          </SwiperSlide>
          <SwiperSlide>
            <Hero image={recent} heading={"APRIL ramro- Hello world!"} />
          </SwiperSlide>
        </Swiper>
        <div className="customNavigation">
          <button ref={prevRef} className="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.74028 3.93306C7.99133 4.17714 7.99133 4.57286 7.74028 4.81694L3.69485 8.75H15.8571C16.2122 8.75 16.5 9.02982 16.5 9.375C16.5 9.72018 16.2122 10 15.8571 10H3.69485L7.74028 13.9331C7.99133 14.1771 7.99133 14.5729 7.74028 14.8169C7.48923 15.061 7.0822 15.061 6.83115 14.8169L1.68829 9.81694C1.43724 9.57286 1.43724 9.17714 1.68829 8.93306L6.83115 3.93306C7.0822 3.68898 7.48923 3.68898 7.74028 3.93306Z"
                fill="#121212"
              />
            </svg>
          </button>
          <button ref={nextRef} className="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2597 3.93306C10.5108 3.68898 10.9178 3.68898 11.1689 3.93306L16.3117 8.93306C16.5628 9.17714 16.5628 9.57286 16.3117 9.81694L11.1689 14.8169C10.9178 15.061 10.5108 15.061 10.2597 14.8169C10.0087 14.5729 10.0087 14.1771 10.2597 13.9331L14.3051 10H2.14286C1.78782 10 1.5 9.72018 1.5 9.375C1.5 9.02982 1.78782 8.75 2.14286 8.75H14.3051L10.2597 4.81694C10.0087 4.57286 10.0087 4.17714 10.2597 3.93306Z"
                fill="#121212"
              />
            </svg>
          </button>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Slider;
