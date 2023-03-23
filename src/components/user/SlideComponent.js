import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function SlideComponent(props) {
  return (

            <div className="image relative">
              <img src={props.dataFromParent.image} width='100%'/>
              <div className="hidden lg:block absolute left-20 top-[50%] bottom-0 text-white text-md">
                <h3 className="text-[20px]">GreenHouse</h3>
                <h3 className="text-[40px] font-[500] space-y-3">
                {props.dataFromParent.name}
                </h3>
                <p className="text-[14px] w-[40%]">
                {props.dataFromParent.content}
                </p>
                <button className="px-[1rem] p-1 button">Chi tiết</button>
              </div>
            </div>
        
  )
}

export default SlideComponent