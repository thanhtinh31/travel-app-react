import React, { useEffect, useState } from "react";
import { useDarkMode } from "../../layout/useDarkMode";
import logo from "../../assets/greenhouse_logo.png";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import {
  BsFacebook,
  BsFillCloudSunFill,
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
import { FaBars, FaTimes } from "react-icons/fa";
import { Avatar, Dropdown } from "antd";
import {  MenuProps} from 'antd';
import { SmileOutlined } from "@ant-design/icons";
const items = [
  {
    key: '7',
    label: (
      <Link to={'history'}>Lịch sử hóa đơn</Link>
    ),
    icon: <SmileOutlined />
  },
  {
    key: '1',
    label: (
      <Link to={'mytour'}>Lịch sử tour</Link>
    ),
    icon: <SmileOutlined />
  },
  {
    key: '2',
    label: (
      <Link to={'profile'}>Thông tin tài khoản</Link>
    ),
    icon: <SmileOutlined />
  },
  {
    key: '3',
    danger: true,
    label: (
      <Link onClick={()=>{logout()}} to={'/login'}>Thoát</Link>
    ),
    icon: <SmileOutlined />
  },
 
];
function logout(){
   sessionStorage.removeItem('user')
}
function Header() {
  // const navigate = useNavigate();
  const [togglebtn, setTogglebtn] = useState(false);
  const [key, setKey] = useState("");
  let isLogin = sessionStorage.getItem("user") ? true : false;

  const [avt,setAvt]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  const [name,setName]=useState("");
  const toggleNavbar = () => {
    setTogglebtn(!togglebtn);
  };

  const check = async()=>{
    if(sessionStorage.getItem('user')){
    try{
      const account= await axios.get(BaseUrl+'account/getAccount/'+sessionStorage.getItem('user'));
      setName(account?.data.nameAccount)
      if(account?.data.image) setAvt(account?.data.image)
    }
    catch{
        console.log('lỗi kết nối')

    }
  }
  }
  useEffect(() => {
    check();
  }, [avt]);

  
  

  const [nav, setNav] = useState(false);
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
      title: "Thời tiết",
      link: "weather",
      path: "weather",
      icon: <BsFillCloudSunFill size={20} />,
    },
    {
      id: 3,
      title: "Giới thiệu",
      link: "introduce",
      path: "introduce",
      icon: <RiAdvertisementFill size={20} />,
    },
    {
      id: 4,
      title: "Booking",
      link: "booking",
      path: "filter",
      icon: <TbBrandBooking size={20} />,
    },
    {
      id: 4,
      title: "Tìm kiếm",
      link: "Search",
      path: "search?key=",
      icon: <MdHistory size={20} />,
    },
  ];
  const logout = (e) => {
    sessionStorage.removeItem("user");
    //Navigate("login");
  };
  return (
    <div className="flex justify-center items-center w-full h-20 text-white bg-mainbg shadow-sm shadow-gray-500 fixed top-0 z-20">
      <div className="flex justify-between w-full max-w-screen-xl px-4 md:mx-2">
        <div className="">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
        </div>
        <ul className="hidden lg:flex">
          {links.map(({ id, title, link, path, icon }) => (
            <li
              key={id}
              className={`${
                id === 1 ? "active" : ""
              } px-4 mx-1 cursor-pointer capitalize font-medium text-[1.25rem] text-white dark:text-lime-200 hover:scale-105 duration-200 main-text ${link}`}
            >
              <Link
                onClick={() => setActive(link)}
                 to={path}
                smooth
                duration={500}
                className="flex items-center"
              >
                {icon}
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-white lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            {links.map(({ id, title, link, path, icon }) => (
              <li
                key={id}
                className="cursor-pointer capitalize font-medium py-6 hover:scale-110 duration-200"
              >
                <Link
                  onClick={() => setActive(link)}
                  // to={path}
                  smooth
                  duration={500}
                  className="flex items-center"
                >
                  {icon}
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="flex absolute lg:relative top-0 right-0 text-maintext">
          {isLogin ? (
            <div className="flex">
              <div className="flex items-center px-5">
              <Dropdown menu={{ items }}   placement="bottomRight" arrow={{ pointAtCenter: true }}>
                <Avatar size={'large'} src={avt}>
                </Avatar>
              </Dropdown>
               
              </div>
            
            </div>
          ) : (
            <div className="flex">
              <div className="flex items-center pr-1">
                <BiLogIn size={20} />
                <span className="text-md font-bold mx-1">
                  <Link to="/login">Đăng nhập</Link>
                </span>
              </div>
              <div className="flex items-center">
                <BsFillPersonFill size={20} />
                <span className="text-md font-bold mx-1">
                  <Link to="/register">Đăng ký</Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}

export default Header;