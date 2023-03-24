import React, { useEffect, useState } from "react";
import { useDarkMode } from "../../layout/useDarkMode";
import logo from "../../assets/greenhouse_logo.png"
import { RiAdvertisementFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import {
  BsFacebook,
  BsFillPersonFill,
  BsInstagram,
  BsMoonStars,
  BsSearch,
  BsSun,
  BsTwitter,
} from "react-icons/bs";
import {
  MdArrowDropDown,
  MdClose,
  MdFilterListAlt,
  MdHistory,
  MdHome,
  MdMenu,
} from "react-icons/md";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";


function  Header()  {
  // const navigate = useNavigate();
  const [togglebtn, setTogglebtn] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [darkmode, toggleDarkMode] = useDarkMode();
  const [key,setKey]=useState("");
  let isLogin = (sessionStorage.getItem('user'))?true:false;
  var url_string = window.location;
  var url = new URL(url_string);
  var keys = url.searchParams.get("key");
  const toggleNavbar = () => {
    setTogglebtn(!togglebtn);
  };
  
  const handleSearch=(e)=>{
    e.preventDefault();
    console.log('a')
    window.location="/search?key="+key;
  }
  useState(async() => {  
     setKey(keys);
  }, []);
  const dropDownbtn = (id) => {
    id === 3 ? setDropdown(!dropdown) : setDropdown(false);
  };
  const setActive = (props) => {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    const nav = document.querySelector("." + props);
    nav.classList.add("active");
  };
  
  const links = [
    {
      id: 1,
      title: "Trang chủ",
      link: "home",
      path: "/",
      icon: <MdHome size={20} />,
    },
    {
      id: 2,
      title: "Giới thiệu",
      link: "introduce",
      path: "/introduce",
      icon: <RiAdvertisementFill size={20} />,
    },
    {
      id: 3,
      title: "Danh mục tour",
      link: "category",
      path: "",
      icon: <MdArrowDropDown size={20} />,
    },
    {
      id: 4,
      title: "Booking",
      link: "booking",
      path: "/booking",
      icon: <TbBrandBooking size={20} />,
    },
    {
      id: 5,
      title: "Lịch sử đặt tour",
      link: "history",
      path: "/history",
      icon: <MdHistory size={20} />,
    },
  ];
  const logout =(e)=>{
      
    sessionStorage.removeItem('user');
    //Navigate("login");
  }
  return (
    <div className="bg-[#0284c7] text-white w-full fixed z-50">
      <div className="flex justify-between px-2 lg:px-28 border-b-[1px]">
        <div>
          <ul className="hidden sm:flex items-center">
            <span className="text-md font-normal">Theo dõi:</span>
            <li className="mx-1">
              <BsFacebook size={20} />
            </li>
            <li className="mx-1">
              <BsTwitter size={20} />
            </li>
            <li className="mx-1">
              <BsInstagram size={20} />
            </li>
          </ul>
        </div>
        <div className="flex">
          {isLogin ? (
            <div className="flex">
              <div className="flex items-center px-2">
                <img
                  src={JSON.parse(sessionStorage.getItem('user')).image?JSON.parse(sessionStorage.getItem('user')).image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-md font-normal mx-1">{JSON.parse(sessionStorage.getItem('user')).nameAccount}</span>
              </div>
              <div className="flex items-center px-2">
                <BiLogOut size={20} />
                <span className="text-md font-normal mx-1">
                  <Link onClick={logout} to="/login">Đăng Xuất</Link>
                </span>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="flex items-center px-2">
                <BiLogIn size={20} />
                <span className="text-md font-normal mx-1">
                  <Link to="/login">Đăng nhập</Link>
                </span>
              </div>
              <div className="flex items-center px-2">
                <BsFillPersonFill size={20} />
                <span className="text-md font-normal mx-1">
                <Link to="/login">Đăng ký</Link>
                </span>
              </div>
            </div>
          )}

          <div
            onClick={() => toggleDarkMode(!darkmode)}
            className="rounded-full border-1 w-5 h-5 flex justify-center items-center my-1 bg-mainbg"
          >
            <div className="">
              {darkmode ? (
                <BsMoonStars color="yellow" />
              ) : (
                <BsSun color="yellow" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-2 lg:px-28">
        <div className="p-2">
          <img src={logo} width={150} height={150} />
        </div>
        <div>
          <div className="flex justify-around">
            <div
              onClick={toggleNavbar}
              className="flex justify-center items-center w-9 h-9 border border-slate-400 dark:border-subtext rounded-sm m-2 md:hidden"
            >
              {togglebtn ? <MdClose size={30} /> : <MdMenu size={30} />}
            </div>
            <form onSubmit={handleSearch}>
            <div className="flex items-center">
              <input
                className="h-10 sm:w-96 rounded-l-sm outline-none text-slate-800 pl-2"
                type="text"
                value={key}
                onChange={(e)=>setKey(e.target.value)}
                placeholder="Tìm kiếm..."
              />
              <span className="flex justify-center items-center w-10 h-10 bg-white text-slate-800 rounded-r-sm border-l-[1px] border-gray-500">
                <BsSearch/>
              </span>
            </div>
            </form>
            <div className="flex justify-center items-center w-9 h-9 m-2">
              <MdFilterListAlt size={30} />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className="flex justify-center items-center">
            <div className="h-10 w-10">
              <img src={require("../../assets/hotline_image.png")} alt="" />
            </div>
          </div>

          <div className="text-[#ffdd20]">
            <span className="">Hotline: </span>
            <div className="">0368 766 753</div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 px-2 lg:px-28 shadow-md">
        {!togglebtn && (
          <ul className="hidden md:flex flex-row justify-around w-full lg:w-full xl:w-9/12 h-12 text-subtext dark:text-subtext">
            {links.map(({ id, title, link, path, icon }) => (
              <li
                onClick={() => {
                  setActive(link);
                  dropDownbtn(id);
                }}
                key={id}
                className={`flex justify-center items-center mx-1 cursor-pointer capitalize font-medium text-lg ${
                  id === 1 ? "active" : ""
                } ${link}`}
              >
                {icon}
                <Link to={path}>{title}</Link>
                {dropdown && id === 3 && (
                  <div className="bg-white dark:bg-gray-800 text-slate-900 flex justify-center items-center flex-col absolute bottom-[-7.5rem] w-80 rounded-sm shadow-md dark:text-darksubtext dropdownbtn">
                    <div className="py-1 hover:bg-slate-200 dark:hover:bg-slate-400 hover:dark:text-darkmaintext w-full flex justify-center items-center itemdrdown">Du lịch biển</div>
                    <div className="py-1 hover:bg-slate-200 dark:hover:bg-slate-400 hover:dark:text-darkmaintext w-full flex justify-center items-center itemdrdown">Du lịch miền núi</div>
                    <div className="py-1 hover:bg-slate-200 dark:hover:bg-slate-400 hover:dark:text-darkmaintext w-full flex justify-center items-center itemdrdown">Du lịch miền núi</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        {togglebtn && (
          <ul className="flex flex-col md:hidden justify-center items-center absolute z-10 top-0 left-0 w-full h-screen text-[#455c7d] dark:text-darksubtext bg-gradient-to-b from-sky-200 to-sky-300 dark:g-gradient-to-b from-slate-400 to-slate-600">
            <div
              onClick={toggleNavbar}
              className="flex justify-center items-center w-10 h-10 top-0 left-0 absolute z-20 border rounded-sm m-2 md:hidden"
            >
              {togglebtn ? <MdClose size={30} /> : <MdMenu size={30} />}
            </div>
            {links.map(({ id, title, link, path, icon }) => (
              <li
                onClick={() => {
                  setActive(link);
                  dropDownbtn(id);
                }}
                key={id}
                className={`flex justify-center items-center mx-1 cursor-pointer capitalize font-medium text-lg py-2 my-2 duration-200 itemdrdown ${
                  id === 1 ? "active" : ""
                } ${link}`}
              >
                {icon}
                <Link to={path}>{title}</Link>
                {dropdown && id === 3 && (
                  <div className="bg-white dark:bg-gray-500 text-slate-900 flex justify-center items-center flex-col md:hidden absolute z-30 bottom-[calc(40%-5rem)] w-[90%] rounded-sm shadow-md dark:text-darksubtext dropdownbtn">
                    <div className="py-1 hover:bg-slate-200 w-full dark:hover:bg-slate-400 hover:dark:text-darksubtext flex justify-center items-center itemdrdown">Du lịch biển</div>
                    <div className="py-1 hover:bg-slate-200 w-full dark:hover:bg-slate-400 hover:dark:text-darksubtext flex justify-center items-center itemdrdown">Du lịch miền núi</div>
                    <div className="py-1 hover:bg-slate-200 w-full dark:hover:bg-slate-400 hover:dark:text-darksubtext flex justify-center items-center itemdrdown">Du lịch thôn quê</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default Header;
