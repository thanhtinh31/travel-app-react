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
  BsBusFront,
  BsFillCarFrontFill,
  BsShieldFillCheck,
  BsTicketPerforatedFill,
} from "react-icons/bs";
import {
  MdAirplanemodeActive,
  MdCheckCircle,
  MdOutlineStar,
  MdTrain,
} from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";
import { useState } from "react";
import { useEffect } from "react";
import ItemTour from "../../components/user/ItemTour";
import Recommend from "../../components/user/Recommend";
import Hero from "../../components/user/Hero";
import Post24h from "../../components/user/Post24h";
import { Col, Rate, Row } from "antd";
import data from '../../data.json'
function HomePage() {
  const [tour, setTour] = useState(data.tourdata);
  const [category, setCategory] = useState(data.categorydata);
  const [listSchedule,setListSchedule] = useState(data.tourgiochot);
  const navigate =useNavigate()
  async function fetchData() {
    try {
      const categories = await axios.get(BaseUrl + "category/home");
      const tours = await axios.get(BaseUrl + "tour/homeactive");
      const res= await axios.get(BaseUrl+'schedule/all/active');
      setListSchedule(res?.data)
      setCategory(categories.data);
      setTour(tours.data);
    } catch (error) {
      console.error(error);
    }
  }
  const detailClick=(e)=>{
    navigate('/detailtour?id='+e, { replace: false });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero></Hero>
      <div className="my-4 flex flex-col sm:flex-row flex-wrap justify-center md:justify-between">
        {category.map((item) => {
          return (
            <div className="single-banner shadow-sm mb-4 w-full md:w-[32%] shadow-md" key={item.id}>
              <img src={item.image} alt="" />
              <div className="banner-content w-40 md:w-48 flex items-center justify-center">
                <div className="banner-title">{item.name}</div>
              </div>
              <div className="hover_banner"></div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-10">
        <div className="mb-4 flex justify-center items-center text-3xl font-[500] text-maintext dark:text-darkmaintext">
          Tour Giờ Chót
        </div>
        
     
        <div className="flex flex-col md:flex-row justify-between">
          {listSchedule.map((item) => (
            <div key={item.id}>
              <ItemTour data={item}></ItemTour>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-10">
        <div className="mb-4 flex justify-center items-center text-3xl font-[500] text-maintext dark:text-darkmaintext">
          KHÁM PHÁ TOUR DU LỊCH
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tour.map((item) => {
            return (
              <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md " key={item.id}>
                <div className="h-full w-full lg:w-[55%]">
                  <Link to={"/detailtour?id="+item.id}>
                    <img
                      src={item.image[0].url}
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
                    {item.vehicle}
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
                  <Rate disabled defaultValue={5} />
                  </div>
                  <button onClick={()=>detailClick(item.id)} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 float-right m-2">Chi tiết</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
          
      <div className="my-14">
        <div className="flex justify-center items-center mb-2 text-3xl font-[500] text-maintext dark:text-darkmaintext">
          Tin Tức du lịch
        </div>
        <div className=" flex justify-center items-center md:justify-around flex-col md:flex-row">
          <Post24h></Post24h>
        {/* <Swiper
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
      </Swiper> */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
