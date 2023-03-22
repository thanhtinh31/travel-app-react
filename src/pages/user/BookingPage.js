import React, { useState } from "react";
import {
  BsClockFill,
  BsFillCarFrontFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { MdAirplanemodeActive, MdLocationOn, MdTrain } from "react-icons/md";
import UserLayout from "../../layout/UserLayout";

function BookingPage() {
  const [payments, setPayments] = useState(false);
  const taiquay = () => {
    console.log("tại quầy");
    setPayments(false);
  };
  const atm = () => {
    console.log("ATM");
    setPayments(true);
  };
  return (
    <UserLayout>
      <div className="shadow-md p-3 bg-white my-4 rounded-md">
        <div className="flex justify-center items-center font-[700] text-3xl text-maintext uppercase">
          Booking tour
        </div>
        <div>
          <h2 className=" flex md:inline-block mt-4 justify-center items-center font-[500] text-2xl text-maintext uppercase px-2 border-b-2 border-maintext mb-6">
            Thông tin liên lạc
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row items-center m-3">
                <div className="relative z-0 w-full mb-6 group mr-8">
                  <input
                    type="text"
                    name="floating_text"
                    id="floating_text"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Họ và tên
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group mr-8">
                  <input
                    type="text"
                    name="floating_address"
                    id="floating_address"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Địa chỉ
                  </label>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center m-3">
                <div className="relative z-0 w-full mb-6 group mr-8">
                  <input
                    type="email"
                    name="floating_email"
                    autoFocus
                    id="floating_email"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group mr-8">
                  <input
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-[100%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Số điện thoại
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group pr-8">
                <input
                  type="text"
                  name="floating_other"
                  id="floating_other"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Yêu cầu khác
                </label>
              </div>

              <div className="">
                <h2 className=" flex md:inline-block mt-4 justify-center items-center font-[500] text-xl text-maintext uppercase border-b-2 border-maintext mb-6">
                  Hình thức thanh toán
                </h2>
                <div className="mx-2">
                  <div className=" flex flex-col md:flex-row justify-start">
                    <label className="flex items-center mr-6">
                      <input
                        type="radio"
                        name="pttt"
                        onChange={taiquay}
                        className="m-2"
                      />
                      Thanh toán tại quầy
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pttt"
                        onChange={atm}
                        className="m-2"
                      />
                      Chuyển khoản
                    </label>
                  </div>

                <div>
                  {payments?( <div className="w-full">
                    <div className="flex items-center my-4 ">
                      <div className="p-2 rounded-md mx-4 bg-slate-100 shadow-md cursor-pointer">
                        <img src='https://blog.logomyway.com/wp-content/uploads/2022/02/visa-logo-2.jpg' className="w-24 h-12 hover:scale-105"/>
                      </div>
                      <div className="p-2 rounded-md mx-4 bg-slate-100 shadow-md cursor-pointer">
                        <img src='https://doanhnghiep.quocgiakhoinghiep.vn/wp-content/uploads/2020/07/1581089357407-1580819448160-vnpay.png' className="w-24 h-12 hover:scale-105"/>
                      </div>
                    </div>

                  </div>):(<div className="flex flex-col text-maintext m-3">
                    <div className="flex w-full bg-[#f1f5f9] my-2 shadow-md">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/10/23/23/27/dead-sea-6736592_960_720.jpg"
                        className="h-20 m-2"
                      />
                      <div className="w-full">
                        <h3 className="text-xl font-[500]">Đà Nẵng</h3>
                        <div>166 Tô hiệu, Thanh Khuê</div>
                        <div>156 Nguyễn thị thập, Thanh Khuê</div>
                      </div>
                    </div>
                    <div className="flex w-full bg-[#f1f5f9] my-2 shadow-md">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/10/23/23/27/dead-sea-6736592_960_720.jpg"
                        className="h-20 m-2"
                      />
                      <div className="w-full">
                        <h3 className="text-xl font-[500]">Đà Nẵng</h3>
                        <div>166 Tô hiệu, Thanh Khuê</div>
                        <div>156 Nguyễn thị thập, Thanh Khuê</div>
                      </div>
                    </div>

                    <div className="flex w-full bg-[#f1f5f9] my-2 shadow-md">
                      <img
                        src="https://cdn.pixabay.com/photo/2021/10/23/23/27/dead-sea-6736592_960_720.jpg"
                        className="h-20 m-2"
                      />
                      <div className="w-full">
                        <h3 className="text-xl font-[500]">Đà Nẵng</h3>
                        <div>166 Tô hiệu, Thanh Khuê</div>
                        <div>156 Nguyễn thị thập, Thanh Khuê</div>
                      </div>
                    </div>
                  </div>)}
                </div>

                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-2">
              <div className="w-full md:w-80 lg:w-96">
                <img
                  src="https://cdn.pixabay.com/photo/2017/02/24/13/17/tea-plantation-2094890_960_720.jpg"
                  className="rounded-t-md"
                />
              </div>
              <div className="text-white bg-mainbg w-full md:w-80 lg:w-96 p-2">
                <span className="uppercase font-[600] mr-2 text-[#f8d000]">
                  Tour01
                </span>
                <span className="font-[500]">
                  Hành trình vi vu tour tây bắc 4 ngày 3 đêm| Mộc châu - Điện
                  Biên - Sapa
                </span>
                <div className="flex items-center">
                  <MdLocationOn size={20} />{" "}
                  <span className="ml-2">Hồ chí minh</span>
                </div>
                <div className="flex items-center">
                  <BsFillPersonFill size={20} />
                  <span className="ml-2">2 người</span>
                </div>
                <div className="flex items-center">
                  <BsClockFill size={20} />
                  <span className="ml-2">4 ngày 3 đêm</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Phương tiện</span>{" "}
                  <BsFillCarFrontFill size={20} />
                  <MdTrain size={20} />
                  <MdAirplanemodeActive size={20} />
                </div>
                <div className="flex items-center">
                  <AiFillSchedule size={20} />
                  <span className="ml-2">22/03/2023</span>
                </div>
              </div>
              <div className="flex items-center justify-around bg-[#f8d000] rounded-b-md text-maintext font-[500] w-full md:w-80 lg:w-96 text-xl">
                Tổng <span>10.0000000 VND</span>
              </div>
              <div className="w-full md:w-80 lg:w-96 bg-mainbg p-2 text-justify my-3 font-[500] text-[#f8d000] rounded-md">
                <p>
                  Sau khi hoàn tất hóa đơn, nhân viên của Green House sẽ liên hệ
                  với quý khách để xác nhận tình trạng tour
                </p>
                <p>Mọi thắc mắc xin liên hệ hotline: 1900 111 222</p>
              </div>
              <button className="button">Xác nhận tour</button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default BookingPage;
