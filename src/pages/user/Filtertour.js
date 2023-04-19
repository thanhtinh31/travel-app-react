import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    UnorderedListOutlined,
    DesktopOutlined,
    OrderedListOutlined,
    MenuUnfoldOutlined,
  } from "@ant-design/icons";
  import { Button, Menu } from "antd";
  import { Pagination } from 'antd';
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { BiPaperPlane } from "react-icons/bi";
  import { BsBusFront, BsCardChecklist, BsFillCarFrontFill, BsShieldFillCheck, BsTicketPerforatedFill } from "react-icons/bs";
  import { GiBamboo } from "react-icons/gi";
  import { MdAirplanemodeActive, MdArrowDownward, MdArrowUpward, MdCheckCircle, MdLocationPin, MdOutlineRequestPage, MdOutlineStar, MdTrain } from "react-icons/md";
  import { TbBeach, TbMountain } from "react-icons/tb";
  import BaseUrl from "../../util/BaseUrl";
  import { FaUtensils } from "react-icons/fa";
  import { Link, useNavigate } from "react-router-dom";
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };
  
  const items = [
    getItem("Tất cả tour", "1", <UnorderedListOutlined />),
    // getItem('Option 2', '2', <DesktopOutlined />),
    // getItem('Option 3', '3', <ContainerOutlined />),
    getItem("Danh mục", "sub1", <BsCardChecklist/>, [
      getItem(
        <span onClick={() => console.log("Du lịch miền núi")}>
          Du lịch miền núi
        </span>,
        "5",<TbMountain/>
      ),
      getItem(
        <span onClick={() => console.log("Du lịch miền biển")}>
          Du lịch miền biển
        </span>,
        "6",<TbBeach/>
      ),
      getItem(
        <span onClick={() => console.log("Du lịch vùng quê")}>
          Du lịch vùng quê,
        </span>,
        "7",<GiBamboo/>
      ),
      getItem(
        <span onClick={() => console.log("Du lịch nước ngoài")}>
          Du lịch nước ngoài
        </span>,
        "8",<BiPaperPlane/>
      ),
    ]),
    getItem("Khởi hành", "sub2", <MdLocationPin/>, [
      getItem(
        <span onClick={() => console.log("Du lịch miền núi")}>
          Đà nẵng
        </span>,
        "9"
      ),
      getItem(
        <span onClick={() => console.log("Du lịch miền biển")}>
          Hồ chí Mình
        </span>,
        "10"
      ),
      getItem(
        <span onClick={() => console.log("Du lịch vùng quê")}>
          Hà Nội
        </span>,
        "11"
      ),
    ]),
    getItem("Theo giá", "sub3", <AppstoreOutlined />, [
      getItem("Tăng dần", "12",<MdArrowUpward/>),
      getItem("Giảm dần", "13",<MdArrowDownward/>),
      getItem("Khoảng giá", "sub4", <MdOutlineRequestPage/>, [
        getItem("Khoảng 1 - 2 triệu", "14"),
        getItem("Khoảng 3 - 5 triệu", "15"),
        getItem("Khoảng > 5 triệu", "16"),
        getItem("Khoảng > 10 triệu", "17"),
      ]),
    ]),
  ];
  const Filtertour = () => {
    const navigate =useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const [tour, setTour] = useState([]);
    async function fetchData() {
      try {
        const categories = await axios.get(BaseUrl + "category?size=3");
        const tours = await axios.get(BaseUrl + "tour?size=6");
        const res = await axios.get(BaseUrl + "schedule/all/active");
        setTour(tours.data.content);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);
    const detailClick=(e)=>{
     navigate('/detailtour?id='+e);
    }
  
  
    return (
      <div className="flex mt-24">
        <div className="absolute md:relative" style={{ width: 256 }}>
          <div>
            <h2 className="flex items-center mb-3 text-md uppercase font-[600] text-maintext">
              <Button
                className="flex items-center md:hidden mr-2"
                type="primary"
                onClick={toggleCollapsed}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              Bộ lọc tìm kiếm
            </h2>
          </div>
  
          <Menu
            className="hidden md:block"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1","sub2","sub3"]}
            mode="inline"
            theme="light"
             //  inlineCollapsed={collapsed}
            items={items}
          />
          {collapsed ? (
            <Menu
              className="menudr block md:hidden"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1","sub2","sub3"]}
              mode="inline"
              theme="light"
              //   inlineCollapsed={collapsed}
              items={items}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="w-full h-screen mt-10 ml-3 overflow-y-scroll">
          <h2 className="text-sm md:text-base font-[500] text-maintext">Tìm kiếm cho từ khóa <span className="italic">"Tất cả tour"</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" navi>
            {tour.map((item) => {
              return (
                <div className="flex flex-col lg:flex-row md:h-auto bg-slate-100 shadow-md rounded-md ">
                  <div className="h-full w-full lg:w-[55%]">
                    <Link to={"/detailtour?id="+item.id}>
                      <img
                        src={item.image[0].url}
                        alt=""
                        className="p-2 rounded-md h-full"
                      />
                    </Link>
                  </div>
                  <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
                    <div className="text-base font-[600] p-1">
                      <a href="">{item.title}</a>
                    </div>
                    <div className="px-1 text-sm font-[500]">
                      {" "}
                      {item.inteval}{" "}
                    </div>
                    <div className="flex items-center px-1 text-sm font-[500]">
                      <span className="mr-2">Phương tiện: </span>
                      <BsFillCarFrontFill size={15} />
                      <MdTrain size={15} />
                      <MdAirplanemodeActive size={15} />
                    </div>
                    <div className="flex justify-around p-1">
                      <MdCheckCircle size={15} />
                      <FaUtensils size={15} />
                      <BsShieldFillCheck size={15} />
                      <BsTicketPerforatedFill size={15} />
                      <BsBusFront />
                    </div>
                    <div className="text-sm font-[500] text-red-600 p-1">
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
                      <MdOutlineStar size={15} />
                      <MdOutlineStar size={15} />
                      <MdOutlineStar size={15} />
                      <MdOutlineStar size={15} />
                      <MdOutlineStar size={15} />
                    </div>
                    <button onClick={() => detailClick(item.id)} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center px-2 py-1 float-right m-2">Xem thêm</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  
      </div>
    );
  };
  export default Filtertour;