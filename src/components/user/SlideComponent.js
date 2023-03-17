import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function SlideComponent() {
  return (

            <div className="image relative">
              <img src={require("../../assets/bg1.jpg")} />
              <div className="hidden lg:block absolute left-20 top-[50%] bottom-0 text-white text-md">
                <h3 className="text-[20px]">GreenHouse</h3>
                <h3 className="text-[40px] font-[500] space-y-3">
                  Du lịch miền núi
                </h3>
                <p className="text-[14px] w-[40%]">
                  Chinh phục những ngọn núi cao và vượt qua những cánh rừng
                  thiên nhiên bạt ngàn luôn có sức hút mạnh mẽ với những người
                  yêu du lịch. Không thua kém những danh thắng nổi tiếng trên
                  thế giới, Việt Nam có vị trí địa lý hài hòa giữa vùng núi và
                  miền biển nên sở hữu rất nhiều điểm du lịch đẹp mê đắm lòng
                  người.
                </p>
                <button className="px-[1rem] p-1 button">Chi tiết</button>
              </div>
            </div>
        
  )
}

export default SlideComponent