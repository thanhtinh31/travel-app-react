import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import"swiper/css/autoplay"
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsBusFront,
  BsFillCarFrontFill,
  BsShieldFillCheck,
  BsTicketPerforatedFill,
} from "react-icons/bs";
import {
  MdAirplanemodeActive,
  MdCheckCircle,
  MdLocationOn,
  MdOutlineStar,
  MdTrain,
} from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserLayout from "../../layout/UserLayout";
import SlideComponent from "../../components/user/SlideComponent";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";
import { useState } from "react";
import { useEffect } from "react";
import Slidecmt from "../../components/user/Slidecmt";
import Lasttour from "../../components/user/Lasttour";
import ItemTour from "../../components/user/ItemTour";
import Recommend from "../../components/user/Recommend";
import Hero from "../../components/user/Hero";
function HomePage() {
  const [tour, setTour] = useState([]);
  const [category, setCategory] = useState([]);
  const [listSchedule,setListSchedule] = useState([]);
  async function fetchData() {
    try {
      const categories = await axios.get(BaseUrl + "category?size=3");
      const tours = await axios.get(BaseUrl + "tour?size=6");
      const res= await axios.get(BaseUrl+'schedule/all/active');
      setListSchedule(res?.data)
      setCategory(categories.data.content);
      setTour(tours.data.content);
    } catch (error) {
      console.error(error);
    }
  }
  
  const detailClick=(e)=>{
    window.location='/detailtour?id='+e;
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <UserLayout>
      {/* <div className="shadow-md rounded-sm">
        <Swiper
          className="relative group"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >

          {category.map((item) => {
          return (
          <SwiperSlide>
            <SlideComponent dataFromParent={item} />
          </SwiperSlide>)})}
    
          <div className="top-[43%]  absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-sky-600 text-5xl w-[40px] h-[40px] bg-blend-normal">
            <BsArrowLeftCircleFill />
          </div>
          <div className="top-[43%]  absolute z-10 button-prev-slide group-hover:right-2 -right-[23rem] duration-500 text-sky-600 text-5xl w-[40px] h-[40px] bg-blend-normal">
            <BsArrowRightCircleFill />
          </div>
        </Swiper>
      </div> */}
      <Hero></Hero>
      <div className="my-4 flex flex-col sm:flex-row flex-wrap justify-center md:justify-between">
        {category.map((item) => {
          return (
            <div className="single-banner shadow-sm mb-4 w-full md:w-[32%] shadow-md">
              <img src={item.image} alt="" />
              <div className="banner-content w-40 md:w-48 flex items-center justify-center">
                <div className="banner-title">{item.name}</div>
              </div>
              <div className="hover_banner"></div>
            </div>
          );
        })}
      </div>
      

      <div className="">
        <div className="mb-4 flex justify-center items-center text-3xl font-[500] text-maintext dark:text-darkmaintext">
          KHÁM PHÁ TOUR DU LỊCH
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {listSchedule.map((item) => (
         <div key={item.id}>
           <ItemTour data={item}></ItemTour>
         </div>
      ))}
      </div>
      </div>


      <div className="">
        <div className="mb-4 flex justify-center items-center text-3xl font-[500] text-maintext dark:text-darkmaintext">
          KHÁM PHÁ TOUR DU LỊCH
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tour.map((item) => {
            return (
              <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md ">
                <div className="h-full w-full lg:w-[55%]">
                  <Link onClick={()=>detailClick(item.id)}>
                    <img
                      src={item.image[0]}
                      alt=""
                      className="p-2 rounded-md h-full"
                    />
                  </Link>
                </div>
                <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
                  <div className="text-lg font-[600] p-1">
                    <a href="">{item.title}</a>
                  </div>
                  <div className="px-1 text-md font-[500]">
                    {" "}
                    {item.inteval}{" "}
                  </div>
                  <div className="flex items-center  px-1 text-md font-[500]">
                    <span className="mr-2">Phương tiện: </span>
                    <BsFillCarFrontFill size={20} />
                    <MdTrain size={20} />
                    <MdAirplanemodeActive size={20} />
                  </div>
                  <div className="flex justify-around p-1">
                    <MdCheckCircle size={20} />
                    <FaUtensils size={20} />
                    <BsShieldFillCheck size={20} />
                    <BsTicketPerforatedFill size={20} />
                    <BsBusFront />
                  </div>
                  <div className="text-md font-[500] text-red-600 p-1">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price - item.price * item.sale)}{" "}
                    / người
                  </div>
                  <div className="line-through text-sm font-[400] text-red-500 p-1">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}{" "}
                    / người
                  </div>
                  <div className="flex text-yellow-500">
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                  </div>
                  <button className="button float-right m-2">Xem thêm</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>


          


      <div className="my-14">
        <div className="flex justify-center items-center mb-2 text-3xl font-[500] text-maintext dark:text-darkmaintext">
          REVIEWS
        </div>
        <div className="">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
        <SwiperSlide><Slidecmt/></SwiperSlide>
      </Swiper>
        </div>
      </div>
    </UserLayout>
  );
}

export default HomePage;
