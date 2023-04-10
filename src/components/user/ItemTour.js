import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Countdown from 'react-countdown';
import { BsBusFront, BsFillCarFrontFill, BsShieldFillCheck, BsTicketPerforatedFill } from 'react-icons/bs';
import { FaUtensils } from 'react-icons/fa';
import { MdAirplanemodeActive, MdCheckCircle, MdLocationOn, MdTrain } from 'react-icons/md';
import BaseUrl from '../../util/BaseUrl';
import { Link } from 'react-router-dom';
const Completionist = () => <span>You are good to go!</span>;
// Renderer callback with condition
const renderer = ({total, days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} ngày:{hours}:{minutes}:{seconds}</span>;
  }
};

function ItemTour(props) {
    var d = new Date(props.data.dayStart); 
    var id = props.data.idTour;
    const [tour,setTour] =useState();
    async function fetchData() {
      try {
        console.log(id)
        const res = await axios.get(BaseUrl +"tour/"+id);
        setTour(res.data);
        console.log(res?.data)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      fetchData();
    }, []);
  
    console.log(d.getDay())
  return (
    <Link to={"/detailtour?id="+id}>
    <div className="w-full md:w-72 p-2 bg-white rounded-sm relative">
        <img
          src={tour?tour.image[0].url:""}
          className="w-full h-48"
        />
        <div className="absolute bg-[rgba(255,255,255,0.41)] text-red-600 top-3 font-[500] p-1">
          <Countdown
        date={d}
        renderer={renderer}
        /> 
        </div>
        <div className="flex items-center justify-center bg-mainbg text-white text-md font-[500] py-1">
          <MdLocationOn size={20} /> <span className="ml-2">{tour?tour.address:""}</span>
        </div>
        <h2 className="capitalize font-[500] text-maintext">
        {tour?tour.title:""}
        </h2>
        <div className="px-1 text-md font-[500] text-maintext">{tour?tour.inteval:""}</div>
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
          {tour?tour.price:""} VDN/người
        </div>
        <div className="line-through text-sm font-[400] text-red-500 p-1">
        {tour?tour.price:""} VND/người
        </div>
      </div>
  </Link>
  )
}

export default ItemTour