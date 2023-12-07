"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { SliderImgData } from "@/utils";

const SliderComponent = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "75vh",
          margin: "auto",
          borderRadius: "15px",
        }}
      >
        {SliderImgData?.map((item) => (
          <SwiperSlide>
            <img src={item?.imgUrl} alt={item?.id} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderComponent;
