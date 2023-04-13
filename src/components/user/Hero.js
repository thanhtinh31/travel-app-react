import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../../assets/beachVid.mp4";
const Hero = () => {
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
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90"
        >
          <div className="flex items-center">
            <input
              className="bg-transparent h-8 w-full font-[Poppins] focus:outline-none text-xl mx-4"
              type="text"
              placeholder="Tìm kiếm tour"
            />
          </div>
          <div className="flex items-center">
            <button>
              <AiOutlineSearch
                size={25}
                className="icon"
                style={{ color: "#000000" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Hero;
