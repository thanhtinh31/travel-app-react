import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../../assets/beachVid.mp4";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
const Hero = () => {
  const navigate =useNavigate();
  const [key,setKey]=useState("");
  return (
    <div className="w-full h-screen relative mt-24">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <div
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-white bg-overlay"
         // onSubmit={()=>{console.log("a")}}
        >
          <input
              className="float-left items-center bg-transparent h-8 w-full outline-none text-xl font-light focus:border-b border-b-slate-400 mx-3 "
              type="text"
              placeholder="Tìm kiếm tour..."
              value={key}
              onChange={(e)=>{setKey(e.target.value)}}
              onPressEnter={()=>{navigate('/search?key='+key)}}
            />
             <button onClick={()=>{navigate('/search?key='+key)}} className="border-l-2 px-2" >
              <AiOutlineSearch
                size={25}
                className="icon"
                style={{ color: "#ffffff" }}
              /></button>
          {/* <div className="flex items-center">
            <Input
              className="bg-transparent h-8 w-full font-[Poppins] focus:outline-none text-xl mx-4"
              type="text"
              placeholder="Tìm kiếm tour"
              value={key}
              onChange={(e)=>{setKey(e.target.value)}}
              onPressEnter={()=>{navigate('/search?key='+key)}}
            />
          </div>
          <div className="flex items-center">
            <button >
              <AiOutlineSearch
                size={25}
                className="icon"
                style={{ color: "#000000" }}
              />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
