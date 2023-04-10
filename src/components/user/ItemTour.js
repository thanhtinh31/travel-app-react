import React from "react";
import Countdown from "react-countdown";
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
const Completionist = () => <span>You are good to go!</span>;
// Renderer callback with condition
const renderer = ({ total, days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days} ngày:{hours}:{minutes}:{seconds}
      </span>
    );
  }
};

function ItemTour(props) {
  var d = new Date(props.data.dayStart);
  console.log(d.getDay());
  return (
    <>
      <div className="w-full md:w-80 p-2 bg-slate-200 rounded-sm relative shadow-lg">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
          className="w-full h-48"
        />
        <div className="absolute bg-[rgba(255,255,255,0.41)] text-red-600 top-3 font-[500] p-1">
          <Countdown date={d} renderer={renderer} />
        </div>
        <div className="flex items-center justify-center bg-mainbg text-white text-md font-[500] py-1">
          <MdLocationOn size={20} /> <span className="ml-2">Hồ chí minh</span>
        </div>
        <h2 className="capitalize font-[500] text-maintext">
          Tour du lịch An giang Cần thơ
        </h2>
        <div className="px-1 text-md font-[500] text-maintext">
          {" "}
          4 ngày - 3 đêm
        </div>
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

      {/* id tour: {props.data.id} 
    <br/>
    Hướng dẫn viên: {props.data.tourGuide}
    <br/>
    <Countdown
    date={d}
    renderer={renderer}
    />
    <br/><br/> */}
    </>
  );
}

export default ItemTour;
