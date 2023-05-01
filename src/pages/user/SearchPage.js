import axios from "axios";
import React, { useState } from "react";
import UserLayout from "../../layout/UserLayout";
import BaseUrl from "../../util/BaseUrl";
import { Input, Space } from "antd";
import {
  MdCamera,
  MdCheckCircle,
  MdLocalActivity,
  MdLocalAirport,
  MdLocationOn,
  MdOutlineStar,
} from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import {
  BsBusFront,
  BsShieldFillCheck,
  BsTicketPerforatedFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
const { Search } = Input;
function SearchPage() {
  var url_string = window.location;
  var url = new URL(url_string);
  var k = url.searchParams.get("key");
  const [key, setKey] = useState(k);
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();
  async function fetchData(k) {
    try {
      if (k == "") {
        const tours = await axios.get(BaseUrl + "tour?size=1000");
        setTours(tours?.data.content);
      } else {
        const tours = await axios.get(BaseUrl + "tour/search?key=" + k);
        setTours(tours?.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const onSearch = (value) => {
    setKey(value);
    fetchData(value);
  };
  useState(() => {
    fetchData(key);
  }, []);
  const detailClick = (e) => {
    navigate("/detailtour?id=" + e);
  };
  return (
    <div className="mt-24">
      <div className="flex justify-center items-center mx-auto">
        <Search
          className="flex justify-center w-full md:w-96"
          autoComplete="false"
          placeholder="Tìm kiếm tour"
          allowClear
          value={key}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
      </div>
      <br />

      <h2 className="text-sm md:text-base font-[500] text-maintext my-3 mx-5">
        {tours.length} kết quả cho từ khóa{" "}
        <span className="italic">"{key}"</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tours.map((item) => {
          return (
            <div
              className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md "
              key={item.id}
            >
              <div className="h-full w-full lg:w-[55%]">
                <Link to={"/detailtour?id=" + item.id}>
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
                <div className="px-1 text-md font-[500] flex items-center">
                  <MdLocationOn /> {"  " + item.address}
                </div>
                <div className="px-1 text-md font-[500]">{item.inteval} </div>
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
                  <MdOutlineStar size={20} />
                  <MdOutlineStar size={20} />
                  <MdOutlineStar size={20} />
                  <MdOutlineStar size={20} />
                  <MdOutlineStar size={20} />
                </div>
                <button
                  onClick={() => detailClick(item.id)}
                  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 float-right m-2"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchPage;
