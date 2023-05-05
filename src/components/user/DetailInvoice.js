import { Button, Spin } from "antd";
import axios from "axios";
import getDate from "date-fns/getDate";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillSchedule } from "react-icons/ai";
import {
  BsClockFill,
  BsFileEarmarkCodeFill,
  BsPersonBoundingBox,
  BsPersonCircle,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import { MdAttachMoney, MdEmail, MdLocationPin, MdOutlineStickyNote2 } from "react-icons/md";
import BaseUrl from "../../util/BaseUrl";
import { useNavigate } from "react-router-dom";

function DetailInvoice(props) {
  const navigate=useNavigate();
  const [invoice,setInvoice]=useState();
  const [schedule,setSchedule]=useState();
  const [tour,setTour]=useState();
  const [loading,setLoading]=useState(true);
  const getInvoice=async()=>{
    try{
      setLoading(true)
      const inv= await axios.get(BaseUrl+'invoice/detail/'+props.id)
      if(inv?.data.status==="1")
      {
        setInvoice(inv?.data.invoice)
        setSchedule(inv?.data.schedule)
        setTour(inv?.data.tour)
        setLoading(false)
      }

    }catch{

    }
  }
  useEffect(() => {
    getInvoice()
  }, [props.id]);
  return (
    <Spin spinning={loading}>
    <div className="max-w-5xl mx-auto flex justify-center items-center flex-col bg-slate-50 p-4">
      <h1 className="text-maintext text-lg font-[600] ">
        VietNam booking xin cảm ơn quý khách !
      </h1>
      <img
        src="https://data.vietnambooking.com/business/tour/banner/banner_confirm.png"
        className="my-6"
      />
      <p className="text-sm text-center font-[500]">
        Chúng tôi đang xử lý đơn hàng của bạn và sẽ liên hệ lại bạn trong thời
        gian sớm nhất để hoàn tất giao dịch.
        <br />
        Mọi thắc mắc xin liên hệ qua tổng đài: 1900 3398 hoặc email:
        <a
          className="font-[600] text-base"
          href="mailto: thanhtinhtrinhtk123@gmail.com"
        >
          thanhtinhtrinhtk123@gmail.com
        </a>{" "}
        để được hỗ trợ kịp thời.
      </p>
      <hr className="my-3" />
      <div className="w-full text-maintext text-sm">
        <h2 className="text-lg font-[600] mt-4 mb-2">Chi tiết hóa đơn</h2>
        <table className="w-full border-collapse border border-spacing-0 text-sm font-[500]">
          <tbody>
            <tr>
              <td colSpan={2} className="border-b p-3">
                <div className="flex items-center w-full flex-col lg:flex-row">
                  <div className="">
                    <img
                      className="w-36 h-24 rounded-md"
                      alt={tour?tour.title:""}
                      src={tour?tour.image[0].url:""}
                    />
                  </div>
                  <div className="mx-4 my-2 text-maintext">
                    <h3>
                    {tour?tour.title:""} | {tour?tour.subTitle:""}{" "}
                    </h3>
                    <h4>Mã tour: {tour?tour.id:""}</h4>
                    <div className="flex items-center">
                      <MdLocationPin size={20} />
                      <span className="ml-2">{tour?tour.address:""}</span>
                    </div>
                    <div className="flex items-center">
                      <BsClockFill size={15} />
                      <span className="ml-2">{tour?tour.inteval:""}</span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <BsFileEarmarkCodeFill size={15} />
                  <span className="ml-2">Mã đơn hàng</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span className="text-mainbg">{props.id}</span>
              </td>
            </tr>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <AiFillSchedule size={15} />
                  <span className="ml-2">Ngày khởi hành</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span>{schedule?schedule.dayStart:""}</span>
              </td>
            </tr>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <BsPersonBoundingBox size={15} />
                  <span className="ml-2">Số hành khách</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span>{invoice?invoice.people:"00"}</span>
              </td>
            </tr>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <MdAttachMoney size={15} />
                  <span className="ml-2">Thành tiền</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span className="text-[#fadb14]">{new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(invoice?invoice.amount:0)}</span>(<>{invoice?.status==0?"Chờ xác nhận":invoice?.status==1?"Chưa thanh toán":invoice?.status==2?"Đã thanh toán":"Đã hủy"}</>)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full text-maintext text-sm">
        <h2 className="text-lg font-[600] mt-4 mb-2">Thông tin liên hệ</h2>
        <table className="w-full border-collapse border border-spacing-0">
          <tbody>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <BsPersonCircle size={15} />
                  <span className="ml-2">Họ Và Tên</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span className="">{invoice?invoice.fullName:"00"}</span>
              </td>
            </tr>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <MdEmail size={15} />
                  <span className="ml-2">Email</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span>{invoice?invoice.email:"00"}</span>
              </td>
            </tr>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <BsPhoneVibrateFill size={15} />
                  <span className="ml-2">Số điện thoại</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span>{invoice?invoice.phone:"00"}</span>
              </td>
            </tr>
            <tr>
              <td className="border-b p-3">
                <div className="flex items-center">
                  <MdOutlineStickyNote2 size={15} />
                  <span className="ml-2">Yêu cầu đặc biệt</span>
                </div>
              </td>
              <td className="border-b p-3">
                <span>{invoice?invoice.note:"00"}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-8">
              <Button type='primary' onClick={()=>{navigate("/")}}>Về Trang Chủ</Button>
            </div>
    </div>
    </Spin>
  );
}

export default DetailInvoice;