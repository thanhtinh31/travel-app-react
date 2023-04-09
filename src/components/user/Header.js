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
  return(
    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>


  );
  // return (
  //   <div className="bg-[#0284c7] text-white w-full fixed z-50">
  //     <div className="flex justify-between px-2 lg:px-28 border-b-[1px]">
  //       <div>
  //         <ul className="hidden sm:flex items-center">
  //           <span className="text-md font-normal">Theo dõi:</span>
  //           <li className="mx-1">
  //             <BsFacebook size={20} />
  //           </li>
  //           <li className="mx-1">
  //             <BsTwitter size={20} />
  //           </li>
  //           <li className="mx-1">
  //             <BsInstagram size={20} />
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="flex">
  //         {isLogin ? (
  //           <div className="flex">
  //             <Link to="/profile">
  //             <div className="flex items-center px-2">
  //               <img
  //                 src={JSON.parse(sessionStorage.getItem('user')).image?JSON.parse(sessionStorage.getItem('user')).image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
  //                 className="w-6 h-6 rounded-full"
  //               />
  //               <span className="text-md font-normal mx-1">{JSON.parse(sessionStorage.getItem('user')).nameAccount}</span>
  //             </div>
  //             </Link>
  //             <div className="flex items-center px-2">
  //               <BiLogOut size={20} />
  //               <span className="text-md font-normal mx-1">
  //                 <Link onClick={logout} to="/login">Đăng Xuất</Link>
  //               </span>
  //             </div>
  //           </div>
  //         ) : (
  //           <div className="flex">
  //             <div className="flex items-center px-2">
  //               <BiLogIn size={20} />
  //               <span className="text-md font-normal mx-1">
  //                 <Link to="/login">Đăng nhập</Link>
  //               </span>
  //             </div>
  //             <div className="flex items-center px-2">
  //               <BsFillPersonFill size={20} />
  //               <span className="text-md font-normal mx-1">
  //               <Link to="/login">Đăng ký</Link>
  //               </span>
  //             </div>
  //           </div>
  //         )}

  //         <div
  //           onClick={() => toggleDarkMode(!darkmode)}
  //           className="rounded-full border-1 w-5 h-5 flex justify-center items-center my-1 bg-mainbg"
  //         >
  //           <div className="">
  //             {darkmode ? (
  //               <BsMoonStars color="yellow" />
  //             ) : (
  //               <BsSun color="yellow" />
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="flex flex-col md:flex-row justify-between items-center px-2 lg:px-28">
  //       <div className="p-2">
  //         <img src={logo} width={150} height={150} />
  //       </div>
  //       <div>
  //         <div className="flex justify-around">
  //           <div
  //             onClick={toggleNavbar}
  //             className="flex justify-center items-center w-9 h-9 border border-slate-400 dark:border-subtext rounded-sm m-2 md:hidden"
  //           >
  //             {togglebtn ? <MdClose size={30} /> : <MdMenu size={30} />}
  //           </div>
  //           <form onSubmit={handleSearch}>
  //           <div className="flex items-center">
  //             <input
  //               className="h-10 sm:w-96 rounded-l-sm outline-none text-slate-800 pl-2"
  //               type="text"
  //               value={key}
  //               onChange={(e)=>setKey(e.target.value)}
  //               placeholder="Tìm kiếm..."
  //             />
  //             <span className="flex justify-center items-center w-10 h-10 bg-white text-slate-800 rounded-r-sm border-l-[1px] border-gray-500">
  //               <BsSearch/>
  //             </span>
  //           </div>
  //           </form>
  //           <div className="flex justify-center items-center w-9 h-9 m-2">
  //             <MdFilterListAlt size={30} />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="hidden lg:flex">
  //         <div className="flex justify-center items-center">
  //           <div className="h-10 w-10">
  //             <img src={require("../../assets/hotline_image.png")} alt="" />
  //           </div>
  //         </div>

  //         <div className="text-[#ffdd20]">
  //           <span className="">Hotline: </span>
  //           <div className="">0368 766 753</div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="bg-white dark:bg-gray-800 px-2 lg:px-28 shadow-md">
  //       {!togglebtn && (
  //         <ul className="hidden md:flex flex-row justify-around w-full lg:w-full xl:w-9/12 h-12 text-subtext dark:text-subtext">
  //           {links.map(({ id, title, link, path, icon }) => (
  //             <li
  //               onClick={() => {
  //                 setActive(link);
  //                 dropDownbtn(id);
  //               }}
  //               key={id}
  //               className={`flex justify-center items-center mx-1 cursor-pointer capitalize font-medium text-lg ${
  //                 id === 1 ? "active" : ""
  //               } ${link}`}
  //             >
  //               {icon}
  //               <Link to={path}>{title}</Link>
  //               {dropdown && id === 3 && (
  //                 <div className="bg-white dark:bg-gray-800 text-slate-900 flex justify-center items-center flex-col absolute bottom-[-7.5rem] w-80 rounded-sm shadow-md dark:text-darksubtext dropdownbtn">
  //                   <div className="py-1 hover:bg-slate-200 dark:hover:bg-slate-400 hover:dark:text-darkmaintext w-full flex justify-center items-center itemdrdown">Du lịch biển</div>
  //                   <div className="py-1 hover:bg-slate-200 dark:hover:bg-slate-400 hover:dark:text-darkmaintext w-full flex justify-center items-center itemdrdown">Du lịch miền núi</div>
  //                   <div className="py-1 hover:bg-slate-200 dark:hover:bg-slate-400 hover:dark:text-darkmaintext w-full flex justify-center items-center itemdrdown">Du lịch miền núi</div>
  //                 </div>
  //               )}
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //       {togglebtn && (
  //         <ul className="flex flex-col md:hidden justify-center items-center absolute z-10 top-0 left-0 w-full h-screen text-[#455c7d] dark:text-darksubtext bg-gradient-to-b from-sky-200 to-sky-300 dark:g-gradient-to-b from-slate-400 to-slate-600">
  //           <div
  //             onClick={toggleNavbar}
  //             className="flex justify-center items-center w-10 h-10 top-0 left-0 absolute z-20 border rounded-sm m-2 md:hidden"
  //           >
  //             {togglebtn ? <MdClose size={30} /> : <MdMenu size={30} />}
  //           </div>
  //           {links.map(({ id, title, link, path, icon }) => (
  //             <li
  //               onClick={() => {
  //                 setActive(link);
  //                 dropDownbtn(id);
  //               }}
  //               key={id}
  //               className={`flex justify-center items-center mx-1 cursor-pointer capitalize font-medium text-lg py-2 my-2 duration-200 itemdrdown ${
  //                 id === 1 ? "active" : ""
  //               } ${link}`}
  //             >
  //               {icon}
  //               <Link to={path}>{title}</Link>
  //               {dropdown && id === 3 && (
  //                 <div className="bg-white dark:bg-gray-500 text-slate-900 flex justify-center items-center flex-col md:hidden absolute z-30 bottom-[calc(40%-5rem)] w-[90%] rounded-sm shadow-md dark:text-darksubtext dropdownbtn">
  //                   <div className="py-1 hover:bg-slate-200 w-full dark:hover:bg-slate-400 hover:dark:text-darksubtext flex justify-center items-center itemdrdown">Du lịch biển</div>
  //                   <div className="py-1 hover:bg-slate-200 w-full dark:hover:bg-slate-400 hover:dark:text-darksubtext flex justify-center items-center itemdrdown">Du lịch miền núi</div>
  //                   <div className="py-1 hover:bg-slate-200 w-full dark:hover:bg-slate-400 hover:dark:text-darksubtext flex justify-center items-center itemdrdown">Du lịch thôn quê</div>
  //                 </div>
  //               )}
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //   </div>
  // );
}


export default Header;
