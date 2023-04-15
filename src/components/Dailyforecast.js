import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Dailyforecast({ forecast, title }) {
  console.log(forecast);
    return (
        <div>
          <div className="flex items-center justify-start my-4">
            <p className="text-white font-medium uppercase">{title}</p>
          </div>
          <hr className="my-2" />
          <div className="flex text-white">
            <Swiper
              modules={[Navigation, Pagination,A11y]}
              // install Swiper modules
              spaceBetween={30}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  pagination: false,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  // pagination={{ clickable: true }}
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  // pagination={{ clickable: true }}
                },
              }}
            >
              {forecast.forecastday.map((daily) => (
                <SwiperSlide key={daily.date}>
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">{daily.date}</p>
                    <img
                      src={daily.day.condition.icon}
                      className="w-12"
                    />
                    <p className="font-light">{daily.day.avgtemp_c}°C</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
}

export default Dailyforecast