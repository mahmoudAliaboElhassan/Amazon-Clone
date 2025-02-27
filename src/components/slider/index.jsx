import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "./customSlide.css";

function Slider({ productsData }) {
  const products = productsData?.data;
  return (
    <div>
      {" "}
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: true }} // Enable pagination and make it clickable
        loop={true}
        style={{ height: "350px", width: "100%" }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <img
              src={product.imageCover}
              alt={product.title}
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
