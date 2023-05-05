import { Button } from "antd";
import getDate from "date-fns/getDate";
import React from "react";
import { AiFillSchedule } from "react-icons/ai";
import {
  BsClockFill,
  BsFileEarmarkCodeFill,
  BsPersonBoundingBox,
  BsPersonCircle,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import { MdAttachMoney, MdEmail, MdLocationPin, MdOutlineStickyNote2 } from "react-icons/md";

function Lichsudattour() {
  return (
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
          href="mailto:dulich@vietnambooking.com"
        >
          dulich@vietnambooking.com
        </a>{" "}
        để được hỗ trợ kịp thời.
      </p>
      <hr className="my-3" />
      <div className="w-full text-maintext text-sm">
        <h2 className="text-lg font-[600] mt-4 mb-2">Chi tiết đơn hàng</h2>
        <table className="w-full border-collapse border border-spacing-0 text-sm font-[500]">
          <tbody>
            <tr>
              <td colSpan={2} className="border-b p-3">
                <div className="flex items-center w-full flex-col lg:flex-row">
                  <div className="">
                    <img
                      className="w-36 h-24 rounded-md"
                      alt="Tour Ba Vì 1 ngày giá rẻ từ Hà Nội | Ngắm hoa dã quỳ, thăm Làng văn hóa các dân tộc Việt Nam"
                      src="https://www.vietnambooking.com/wp-content/uploads/2020/11/tour-ba-vi-1-ngay-7.jpg"
                    />
                  </div>
                  <div className="mx-4 my-2 text-maintext">
                    <h3>
                      Tour Ba Vì 1 ngày giá rẻ từ Hà Nội | Ngắm hoa dã quỳ, thăm
                      Làng văn hóa các dân tộc Việt Nam{" "}
                    </h3>
                    <h4>Mã tour: TOHANMBA1N-XETG-284058</h4>
                    <div className="flex items-center">
                      <MdLocationPin size={20} />
                      <span className="ml-2">Hà Nội</span>
                    </div>
                    <div className="flex items-center">
                      <BsClockFill size={15} />
                      <span className="ml-2">1 ngày</span>
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
                <span className="text-mainbg">VNBKT7123281858</span>
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
                <span>05/05/2023</span>
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
                <span>02</span>
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
                <span className="text-[#fadb14]">1.000.000 VND</span>
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
                <span className="">Trần Văn Hiếu</span>
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
                <span>tranvanhieu20032001@gmail.com</span>
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
                <span>01233444445</span>
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
                <span>Ko hút thuốc</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-8">
              <Button type='primary'>Về Trang Chủ</Button>
            </div>
    </div>
  );
}

export default Lichsudattour;
