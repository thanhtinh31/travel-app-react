import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import UserLayout from '../../layout/UserLayout'
import BaseUrl from '../../util/BaseUrl';


import {
  BsBusFrontFill,
  BsClockFill,
  BsFacebook,
  BsFillCarFrontFill,
  BsInstagram,
  BsPersonFillCheck,
  BsPhoneVibrate,
  BsSendFill,
  BsTicketPerforatedFill,
  BsTwitter,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  MdAirplanemodeActive,
  MdLocationOn,
  MdOutlineWarningAmber,
  MdTrain,
} from "react-icons/md";
import { AiFillSchedule, AiOutlineFileProtect } from "react-icons/ai";
import { GiKnifeFork, GiRotaryPhone } from "react-icons/gi";
import { Button, Modal, Popover, Rate, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import Post24h from '../../components/user/Post24h';
import Weather from './Weather';
import TextArea from 'antd/es/input/TextArea';
import Rating from '../../components/user/Rating';
import PostRating from '../../components/user/PostRating';
import Post24h2 from '../../components/user/Post24h2';
import Request from '../../components/user/Request';
import ItemTour from '../../components/user/ItemTour';
function loc_xoa_dau(str) {
  // Gộp nhiều dấu space thành 1 space
  str = str.replace(/\s+/g, ' ');
  // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
  str = str.trim();
  // bắt đầu xóa dấu tiếng việt  trong chuỗi
   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
   str = str.replace(/đ/g, "d");
   str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
   str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
   str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
   str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
   str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
   str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
   str = str.replace(/Đ/g, "D");
   return str;
}
function DetailTourPage() {
  const [loading,setLoading]=useState(true);
  const [loadingpage,setLoadingPage]=useState(true);
    var url_string = window.location;
    var urla = new URL(url_string);
    var id = urla.searchParams.get("id");
    const [open,setOpen]=useState(false)
    const [tour,setTour] =useState({});
    const [listSchedule,setListSchedule]=useState([]);
    const [images,setImages] =useState([]);
    const [idSchedule,setIdSchedule] = useState("0");
    const [people,setPeople] =useState(1);
    const [hanhtrinh,setHanhtrinh]=useState([]);
    const [services,setServices] =useState([]);
    const [listRating,setListRating]=useState([])
    const [open1,setOpen1]=useState(false);
    const [item,setItem] =useState([]);
    const [tongquat,setTongquat]=useState({})
    const  navigate = useNavigate()
    const handleBooking = async()=>{
        const account  = sessionStorage.getItem('user');
        if(!account){
            alert("vui long dang nhap de dat tour")
            navigate("/login")
        }
        else{
            console.log(idSchedule);
            if(idSchedule=="0") toast.warning("Vui long chon ngay khoi hanh");
            else
            navigate('/booking?idSchedule='+idSchedule+'&sl='+people);
        }
    }
    const thanhcong=(e)=>{
        setOpen1(e);
    }
    const handleRequest =()=>{
      const account  = sessionStorage.getItem('user');
      if(!account){
          alert("vui long dang nhap de dat tour")
          navigate("/login")
      }
      else{
        setOpen1(true);


      }

    }
    async function fetchApi() {
        setLoadingPage(true)
        try{
            const res= await axios.get(BaseUrl+'tour/'+id);
            setTour(res?.data);  
            setHanhtrinh(res?.data.hanhtrinh)
            setImages(res?.data.image);
            const item1= await axios.get(BaseUrl+'schedule/home');
            setItem(item1?.data)
            let arr=[{}]
            res?.data.idService.map(async(item)=>{
            let service= await axios.get(BaseUrl+'service/'+item)
            arr.push(service?.data)
            })
            console.log(arr)
            setServices(arr)
            setLoadingPage(false)
            const r= await axios.get(BaseUrl+'schedule/idtourprogress/'+id+'/0'); 
            setListSchedule(r?.data);
            
        }catch(err){alert('Khong co ket noi');}        
    }
    async function ratingApi() {
      setLoading(true)
      try{
          const rate= await axios.get(BaseUrl+'rating/'+id);
          setListRating(rate?.data)
          const tongquat= await axios.get(BaseUrl+'rating/tongquat/'+id);
          setTongquat(tongquat?.data)
          console.log(tongquat?.data)
          setLoading(false)
      }catch(err){alert('Khong co ket noi');setLoading(false)}        
  }
    useEffect(() => {
      fetchApi();
      ratingApi();
      }, []);
  return (

   <Spin spinning={loadingpage} >
    <div className="max-w-screen-lg mx-auto bg-white shadow-lg mt-28">
    <h1 className="font-[700] text-xl mx-2 py-4 text-mainbg">
        {tour.title} | {tour.subTitle}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] p-3">
          <Swiper
            className="relative"
            modules={[Autoplay, Navigation, Pagination, A11y]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {images.map((img)=>{return(
            <SwiperSlide key={img.url}>
              <div className="w-full h-80">
                <img
                  src={img.url}
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
            )})}

          </Swiper>
          <div className="text-mainbg">
            <h2 className="text-maintext font-[600] py-3">Mã Tour: {tour.id}</h2>
            <div className="flex justify-between text-sm my-2">
              <div className="flex items-center">
                <MdLocationOn size={20} />{" "}
                <span className="ml-2">{tour.address}</span>
              </div>
              <div className="flex items-center">
                <BsClockFill size={20} />
                <span className="ml-2">{tour.inteval}</span>
              </div>
              <div className="flex items-center">
              <BsFillCarFrontFill size={20}/>Phương tiện: 
                <span className="mr-2">{tour.vehicle}</span>{" "}
                {/* <BsFillCarFrontFill size={20} />
                <MdTrain size={20} />
                <MdAirplanemodeActive size={20} /> */}
              </div>
            </div>
            <div className="flex items-center">
              {/* <AiFillSchedule size={20} /> */}
              <Button onClick={()=>{setOpen(true)}} style={{backgroundColor:'aqua',marginLeft:220}}><span className="ml-2 font-[600]">Xem thời tiết</span></Button>
            </div>

            <hr className="my-3" />

            {/* Dịch vụ kèm theo */}
            <h2 className="text-maintext my-2 font-[700]">DỊCH VỤ KÈM THEO</h2>
            <div className="flex ">
              {services?
              services.map((item)=>{ return (item.name?<>
               <Popover content={item.describle} title={item.name}>
              <div className="flex" style={{marginRight:'30px'}}>
                <img src={item.icon} width={30}></img>{" "}
                <span className="ml-2">{item.name}</span>
              </div>
              </Popover>
              </>:<></>);}):<></>}

              {/* <div className="flex items-center">
                <GiKnifeFork size={15} />
                <span className="ml-2">Bữa ăn</span>
              </div>
              <div className="flex items-center">
                <BsPersonFillCheck size={15} />
                <span className="ml-2">Hướng dẫn viên</span>
              </div>

              <div className="flex items-center">
                <BsTicketPerforatedFill size={15} />
                <span className="ml-2">Vé thăm quan</span>
              </div>
              <div className="flex items-center">
                <BsBusFrontFill size={15} />
                <span className="ml-2">Vé thăm quan</span>
              </div> */}
            </div>
            <h2 className="text-maintext my-2 font-[700]">MÔ TẢ</h2>
            <p className="text-sm font-[500] text-justify">
              {tour.describe}
            </p>

            <hr className="my-3" />

            <h2 className="text-maintext my-2 font-[700] ">
              ĐIỂM NỔI BẬT NHẤT
            </h2>

            <ul className="pl-6 text-sm w-full overflow-auto">
              <pre className='w-auto'>{tour.interesting}</pre>
            </ul>
          </div>
          <hr className="my-3" />

          <h2 className="text-maintext my-2 font-[700]">LỊCH TRÌNH CỤ THỂ</h2>
          <div >
          {hanhtrinh.map((item) => { 
                  return(
              <>
            <div className="flex flex-col text-mainbg">
              <h3 className="text-maintext my-2 font-[500]">{item.time}</h3>
              <ul className="pl-6 text-sm">
                <li className="list-disc">
                 <p > {item.todo} </p>
                </li>
              </ul>
            </div>
            <hr className="my-3" />
            </>
            )})}
          </div>
         
          <p className="italic font-[500] text-maintext">
            Nhanh tay book ngay tour Hà Giang 4 ngày 3 đêm từ TPHCM trọn gói giá
            tốt của ThanhTinh travel qua hotline 1900 3398 thôi nào !
          </p>
        </div>
        <div className="w-full my-3">
          <div className="bg-[#12092e] p-3 h-80 mx-2">
            <div className="text-xl font-[500] text-[#f8d000]">
            {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(tour.price - tour.price * tour.sale)}{" "} /1 người
            </div>
            {tour.sale==0?<></>:
            <div className="line-through text-md text-[#f8d000]">
              
            {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(tour.price)}{" "} / 1 người
            </div>
            }
            <div className="flex justify-around my-4">
              <label for="select-time" className="text-white">
                Khởi hành
              </label>
              <select   name="select-time" className="border-2 text-sm w-[70%]"
                       value={idSchedule}
                        onChange={(e) => {setIdSchedule(e.target.value)}}>
                  <option value="0">Chọn ngày xuất phát</option>
                  { listSchedule.map((item) => { 
                  return(
                  <option value={item.id} key={item.id} >{item.dayStart} -- {item.addressStart}</option> 
                   )})}
              </select>
            </div>

            <div className="flex justify-around my-4">
              <label for="select-time" className="text-white">
                Số khách
              </label>
              <input
                className="w-[70%] text-sm px-2"
                type={Number}
                value={people}
                onChange={(e)=>{setPeople(e.target.value)}}
                min={1}
                max={50}
              />
            </div>
            <div className="flex text-[#f8d000] py-2">
              <MdOutlineWarningAmber size={30} />
              <span className="ml-2 italic">
                Quý khách vui lòng kiểm tra lại thông tin và yêu cầu trước khi
                xác nhận đặt tour
              </span>
            </div>
            <div className="flex justify-center items-center my-8">
              <Button type='primary' onClick={handleBooking}>Đặt tour</Button>
             
            </div>
          </div>

          <div className="my-3 mx-2">
            <div className="uppercase font-[600] flex items-center justify-center bg-mainbg text-white h-10">
            <Button type='primary' onClick={handleRequest}>Đặt tour theo yêu </Button>
            </div>
            <div className="text-maintext">
              <h2 className=" my-2 font-[600]">Hotline</h2>
              <div className="flex items-center px-4">
                <GiRotaryPhone size={20} />
                <span className="ml-2">1900 111 222</span>
              </div>
              <h2 className=" my-2 font-[600]">Tư Vấn Viên</h2>
              <div className="flex items-center px-4">
                <BsPhoneVibrate size={20} />
                <span className="ml-2">Mr-A : 0961964263</span>
              </div>
              <div className="flex items-center px-4">
                <BsPhoneVibrate size={20} />
                <span className="ml-2">Mr-A : 0961964263</span>
              </div>
              <div className="flex items-center px-4">
                <BsPhoneVibrate size={20} />
                <span className="ml-2">Mr-A : 0961964263</span>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <h2 className=" my-2 font-[600] uppercase text-maintext text-center">Tour giờ chốt</h2>
          <div className="flex flex-col justify-around items-center">
          {item.map((i) => {
            return (<>
              <div className='my-5'>
            <ItemTour data={i}/>
            </div>
              </>);
            })}
            
            
          </div>
          
          <hr className="my-3" />

          <div className="flex justify-around text-mainbg">
            <BsFacebook size={25} />
            <BsInstagram size={25} />
            <BsTwitter size={25} />
            
          </div>

          
        </div>
      </div>
      <hr className="my-3" />
      <div className="py-6">
        {sessionStorage.getItem('user')?
        <PostRating idTour={id} post={ratingApi} />:<></>}
        <Spin spinning={loading}>
        <div className="flex flex-col">
          <div className="">
            <h2 className="text-maintext m-2 font-[600] text-lg uppercase">
              Các đánh giá tour
            </h2>

            {tongquat?tongquat.tong==0?<>Chưa có đánh giá...</>:
            <div className="flex flex-col md:flex-row">
              <div className="text-[#fadb14] text-lg flex flex-col items-center px-3">
                <h2 className="font-[600]">.</h2>
                <Rate disabled value={tongquat.tong==0?5:tongquat.trungbinh} allowHalf />
              </div>
              <div className="flex items-center flex-col md:flex-row my-6">
                <div className="flex justify-center items-center border border-slate-400 rounded-md w-20 h-8 mx-4 my-1 cursor-pointer rate active">
                  Tất cả({tongquat.tong})
                </div>
                <div className="flex justify-center items-center border border-slate-400 rounded-md w-20 h-8 mx-4 my-1 cursor-pointer rate ">
                  5 sao ({tongquat.nam})
                </div>
                <div className="flex justify-center items-center border border-slate-400 rounded-md w-20 h-8 mx-4 my-1 cursor-pointer rate ">
                  4 sao ({tongquat.bon})
                </div>
                <div className="flex justify-center items-center border border-slate-400 rounded-md w-20 h-8 mx-4 my-1 cursor-pointer rate ">
                  3 sao ({tongquat.ba})
                </div>
                <div className="flex justify-center items-center border border-slate-400 rounded-md w-20 h-8 mx-4 my-1 cursor-pointer rate ">
                  2 sao ({tongquat.hai})
                </div>
                <div className="flex justify-center items-center border border-slate-400 rounded-md w-20 h-8 mx-4 my-1 cursor-pointer rate ">
                  1 sao ({tongquat.mot})
                </div>
              </div>
            </div>:<></>}

          </div>
          <hr className="my-3" />
          
          {listRating.map((rate)=>{
            return(
              <Rating comment={rate.comment} star={rate.star} idAccount={rate.idAccount} />  
            )})}      
          </div>
          </Spin>

        


        <h2 className="text-maintext mx-2 my-4  mt-10 font-[600] text-lg uppercase">
          Tin tức du lịch
        </h2>
        <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         

         <Post24h2/>

        </div>
        <Modal
      open={open}
      onCancel={()=>{setOpen(false)}}
      title="Thời tiết"
      footer={null}
      width={900}
        >
     {tour.address?<Weather city={loc_xoa_dau(tour.address)}/>:<></>}
    </Modal>

        </div>
      </div>
    </div>  

    <Modal
      open={open1}
      onCancel={()=>{setOpen1(false)}}
      title="Đặt tour theo yêu cầu"
      footer={null}
      width={700}
      >
     
     <Request idTour={id} thanhcong={thanhcong}/>
    </Modal>
    </Spin> 

  )
}

export default DetailTourPage