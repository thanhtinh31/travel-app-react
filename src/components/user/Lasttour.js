import React from "react";
import {
  BsBusFront,
  BsFillCarFrontFill,
  BsShieldFillCheck,
  BsTicketPerforatedFill,
} from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import {
  MdAirplanemodeActive,
  MdCheckCircle,
  MdLocationOn,
  MdTrain,
} from "react-icons/md";

function Lasttour() {
  return (
    <div>
      <div className="mb-4 flex justify-center items-center text-3xl font-[500] text-maintext dark:text-darkmaintext">
        Tour giờ chót
      </div>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 py-6">
      <div className="w-full md:w-72 p-2 bg-white rounded-sm relative">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
            className="w-full h-48"
          />
          <div className="absolute bg-[rgba(255,255,255,0.41)] text-red-600 top-3 font-[500] p-1">06 ngày 07:12:00 </div>
          <div className="flex items-center justify-center bg-mainbg text-white text-md font-[500] py-1">
            <MdLocationOn size={20} /> <span className="ml-2">Hồ chí minh</span>
          </div>
          <h2 className="capitalize font-[500] text-maintext">
            Tour du lịch An giang Cần thơ
          </h2>
          <div className="px-1 text-md font-[500] text-maintext"> 4 ngày - 3 đêm</div>
          <div className="flex items-center px-1 text-md font-[500] text-maintext">
            <span className="mr-2">Phương tiện: </span>
            <BsFillCarFrontFill size={20} />
            <MdTrain size={20} />
            <MdAirplanemodeActive size={20} />
          </div>
          <div className="flex justify-around p-1 text-maintext">
            <MdCheckCircle size={20} />
            <FaUtensils size={20} />
            <BsShieldFillCheck size={20} />
            <BsTicketPerforatedFill size={20} />
            <BsBusFront />
          </div>
          <div className="text-md font-[500] text-red-600 p-1">
            5.999.000 VDN/người
          </div>
          <div className="line-through text-sm font-[400] text-red-500 p-1">
            6.499.000 VND/người
          </div>
        </div>

        <div className="w-full md:w-72 p-2 bg-white rounded-sm relative">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
            className="w-full h-48"
          />
          <div className="absolute bg-[rgba(255,255,255,0.41)] text-red-600 top-3 font-[500] p-1">06 ngày 07:12:00 </div>
          <div className="flex items-center justify-center bg-mainbg text-white text-md font-[500] py-1">
            <MdLocationOn size={20} /> <span className="ml-2">Hồ chí minh</span>
          </div>
          <h2 className="capitalize font-[500] text-maintext">
            Tour du lịch An giang Cần thơ
          </h2>
          <div className="px-1 text-md font-[500] text-maintext"> 4 ngày - 3 đêm</div>
          <div className="flex items-center px-1 text-md font-[500] text-maintext">
            <span className="mr-2">Phương tiện: </span>
            <BsFillCarFrontFill size={20} />
            <MdTrain size={20} />
            <MdAirplanemodeActive size={20} />
          </div>
          <div className="flex justify-around p-1 text-maintext">
            <MdCheckCircle size={20} />
            <FaUtensils size={20} />
            <BsShieldFillCheck size={20} />
            <BsTicketPerforatedFill size={20} />
            <BsBusFront />
          </div>
          <div className="text-md font-[500] text-red-600 p-1">
            5.999.000 VDN/người
          </div>
          <div className="line-through text-sm font-[400] text-red-500 p-1">
            6.499.000 VND/người
          </div>
        </div>

        <div className="w-full md:w-72 p-2 bg-white rounded-sm relative">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
            className="w-full h-48"
          />
          <div className="absolute bg-[rgba(255,255,255,0.41)] text-red-600 top-3 font-[500] p-1">06 ngày 07:12:00 </div>
          <div className="flex items-center justify-center bg-mainbg text-white text-md font-[500] py-1">
            <MdLocationOn size={20} /> <span className="ml-2">Hồ chí minh</span>
          </div>
          <h2 className="capitalize font-[500] text-maintext">
            Tour du lịch An giang Cần thơ
          </h2>
          <div className="px-1 text-md font-[500] text-maintext"> 4 ngày - 3 đêm</div>
          <div className="flex items-center px-1 text-md font-[500] text-maintext">
            <span className="mr-2">Phương tiện: </span>
            <BsFillCarFrontFill size={20} />
            <MdTrain size={20} />
            <MdAirplanemodeActive size={20} />
          </div>
          <div className="flex justify-around p-1 text-maintext">
            <MdCheckCircle size={20} />
            <FaUtensils size={20} />
            <BsShieldFillCheck size={20} />
            <BsTicketPerforatedFill size={20} />
            <BsBusFront />
          </div>
          <div className="text-md font-[500] text-red-600 p-1">
            5.999.000 VDN/người
          </div>
          <div className="line-through text-sm font-[400] text-red-500 p-1">
            6.499.000 VND/người
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lasttour;
