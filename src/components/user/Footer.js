import React from "react";
import {
  BsArrowRight,
  BsFacebook,
  BsFillTelephoneForwardFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/greenhouse_logo.png";
function Footer() {
  return (
    <div className="bg-mainbg px-2 lg:px-28 text-white font-[500]">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4 py-6">
        <div className="box">
          <div className="p-2">
            <img src={logo} width={150} height={150} />
          </div>
          <p>
            GreenHouse cam kết mang đến cho quý khách một chiến hành trình thú
            vị, hấp dẫn và an toàn nhất!
          </p>
          <div className="flex justify-around items-center my-2">
            <Link to="https://www.facebook.com/">
              <BsFacebook
                className="hover:scale-110 hover:text-yellow-400"
                size={25}
              />
            </Link>
            <Link to="https://www.facebook.com/">
              <BsInstagram
                className="hover:scale-110 hover:text-yellow-400"
                size={25}
              />
            </Link>
            <Link to="https://www.facebook.com/">
              <BsTwitter
                className="hover:scale-110 hover:text-yellow-400"
                size={25}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl">Thông Tin liên hệ</h3>
          <div className="flex items-center mb-4">
            <BsFillTelephoneForwardFill size={20} color="#ffdd20" />
            <div className="px-2 hover:ml-4 transition-all">0123456789</div>
          </div>
          <div className="flex items-center mb-4">
            <BsFillTelephoneForwardFill size={20} color="#ffdd20" />
            <div className="px-2 hover:ml-4 transition-all">0123456789</div>
          </div>
          <div className="flex items-center mb-4">
            <MdMarkEmailRead size={20} color="#ffdd20" />
            <div className="px-2 hover:ml-4 transition-all">
              tranvanhieu@gmail.com
            </div>
          </div>
          <div className="flex items-center mb-4">
            <MdLocationOn size={20} color="#ffdd20" />
            <div className="px-2 hover:ml-4 transition-all">
              Da Nang, Quang Nam
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl">Liên kết nhanh</h3>
          <div className="flex items-center mb-4">
            <BsArrowRight size={25} color="#ffdd20" />
            <div className="px-2 hover:ml-4 transition-all">
              <Link>Giới thiệu</Link>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <BsArrowRight size={25} color="#ffdd20" />
            <div className="px-2 hover:ml-4 transition-all">
              <Link>Booking</Link>
            </div>
          </div>
          <div className="flex items-center">
            <BsArrowRight size={25} color="#ffdd20" />
            <div className="px-2 hover:ml-4 transition-all">
              <Link>Lịch sử đặt tour</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl">Thông báo mới</h3>
          <span>Đăng kí để nhận thông báo mới</span>
          <form method='POST' className='flex flex-col m-2 w-full dark:text-lime-100'>
            <input type="text" name ='email' placeholder='Enter your email' className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
            <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-2 my-3 mx-auto fl items-center rounded-md hover:scale-105 duration-200'>Send</button>
        </form>
          </div>
      </div>
    </div>
  );
}

export default Footer;