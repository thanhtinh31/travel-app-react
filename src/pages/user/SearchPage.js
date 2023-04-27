import axios from 'axios';
import React, { useState } from 'react'
import UserLayout from '../../layout/UserLayout'
import BaseUrl from '../../util/BaseUrl';
import { Input, Rate, Skeleton, Space, Spin } from 'antd';
import { MdCamera, MdCheckCircle, MdLocalActivity, MdLocalAirport, MdLocationOn, MdOutlineStar } from 'react-icons/md';
import { FaUtensils } from 'react-icons/fa';
import { BsBusFront, BsShieldFillCheck, BsTicketPerforatedFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
const { Search } = Input;
const Tour = ({ id, title, image ,price,inteval,sale,address ,vehicle}) => (
  <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md " key={id}>
  <div className="h-full w-full lg:w-[55%]">
    <Link to={"/detailtour?id="+id}  >
      <img
        src={image[0].url}
        alt=""
        className="p-2 rounded-md h-full"
      />
    </Link>
  </div>
  <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
    <div className="text-lg font-[600] p-1">
      <a href="">{title}-{inteval}</a>
    </div>
    <div className="px-1 text-md font-[500] flex items-center">
    <MdLocationOn size={20} color='red'/>   {"  "+address}
    </div>
    {/* <div className="px-1 text-md font-[500]">
      {inteval}{" "}
    </div> */}
    {/* <div className="flex items-center  px-1 text-md font-[500]">
      <span className="mr-2">Phương tiện: </span>
      {vehicle}
    </div> */}
    <div className="flex justify-around p-1">
      <MdCheckCircle size={20} />
      <FaUtensils size={20} />
      <BsShieldFillCheck size={20} />
      <BsTicketPerforatedFill size={20} />
      <BsBusFront />
    </div>
    <div className="text-md font-[600] text-red-600 p-1">
      {new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price - price * sale)}{" "}
      / người
    </div>
    <div className="line-through text-sm font-[400] text-red-400 p-1">
      {new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price)}{" "}
      / người
    </div>
    <div className="flex text-yellow-500">
      <Rate disabled value={5}></Rate>
    </div>
    
  </div>
</div>
)
function SearchPage() {
  const [loading,setLoading]=useState(true);
    var url_string = window.location;
    var url = new URL(url_string);
    var k= url.searchParams.get("key");
    const [key,setKey] = useState(k);
    const [tours,setTours] = useState([])
    const navigate =useNavigate();
    async function fetchData(k) {
      setLoading(true)
        try {
          if(k==""){const tours = await axios.get(BaseUrl+'tour/active');
          setTours(tours?.data);
          setLoading(false)}  
          else{
          const tours = await axios.get(BaseUrl+'tour/search?key='+k)
          setTours(tours?.data);
          setLoading(false)
          }
        } catch (error) {
          console.error(error);
        }
      }
      const onSearch = (value) =>{
        setKey(value);
        fetchData(value)
      }
    useState(() => {
        fetchData(key);
      }, []);
      const detailClick=(e)=>{
        navigate('/detailtour?id='+e);
      }
  return (
      <div className='mt-24'>
      <Search
      autoComplete='false'
      placeholder="input search text"
      allowClear
      value={key}
      onChange={(e)=>{onSearch(e.target.value)}}
      style={{
        width: 200,
      }}
    />
    <br/>
    <Spin spinning={loading}>
    <br/>
    {tours.length}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {tours.map(item => (
        <LazyLoad key={item.id}
        height={100}
        offset={[-100,100]}
        placeholder={<Skeleton/>}>
          <Tour key={item.id} {...item} />
        </LazyLoad>
          ))}
{/* 
          {tours.map((item) => {
            return (
              <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md " key={item.id}>
                <div className="h-full w-full lg:w-[55%]">
                  <Link to={"/detailtour?id="+item.id}  >
                    <img
                      src={item.image[0].url}
                      alt=""
                      className="p-2 rounded-md h-full"
                    />
                  </Link>
                </div>
                <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
                  <div className="text-lg font-[600] p-1">
                    <a href="">{item.title}</a>
                  </div>
                  <div className="px-1 text-md font-[500] flex items-center">
                  <MdLocationOn/>   {"  "+item.address}
                  </div>
                  <div className="px-1 text-md font-[500]">
                    {item.inteval}{" "}
                  </div>
                  <div className="flex items-center  px-1 text-md font-[500]">
                    <span className="mr-2">Phương tiện: </span>
                    {item.vehicle}
                  </div>
                  <div className="flex justify-around p-1">
                    <MdCheckCircle size={20} />
                    <FaUtensils size={20} />
                    <BsShieldFillCheck size={20} />
                    <BsTicketPerforatedFill size={20} />
                    <BsBusFront />
                  </div>
                  <div className="text-md font-[500] text-red-600 p-1">
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
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                    <MdOutlineStar size={20} />
                  </div>
                  <button onClick={()=>detailClick(item.id)} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 float-right m-2">Chi tiết</button>
                </div>
              </div>
            );
          })} */}
        </div>
        </Spin>
   </div>
  )
}
export default SearchPage