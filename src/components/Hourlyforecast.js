import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Hourlyforecast({ forecast, title }) {
  return (
    <div>
      <div className="flex items-center justify-start my-4">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex text-white">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          // install Swiper modules
          spaceBetween={30}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              pagination: false,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
              // pagination={{ clickable: true }}
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
              // pagination={{ clickable: true }}
            },
          }}
        >
          {forecast.forecastday[0].hour.map((h) => (
            <SwiperSlide key={h.time}>
              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">{h.time.slice(11,16)}</p>
                <img
                  src={h.condition.icon}
                  className="w-12"
                />
                <p className="font-light">{h.temp_c}°C</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hourlyforecast;