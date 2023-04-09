import React from "react";
import { MdCancel, MdDeleteForever } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

function HistoryBooking() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-maintext">
      <h1 className="font-[600] uppercase text-4xl text-center my-10">Lịch Sử Hóa đơn</h1>
      <div className="flex justify-between m-2">
        <h1 className="text-2xl font-[500] m-2">Hóa đơn chờ xác nhận</h1>
        <div className="flex justify-between">
          <div className="flex items-center m-2 bg-mainbg rounded-md p-1 text-white cursor-pointer border-2">
            <AiFillFileAdd size={15} />
            <span className="ml-1 text-sm">Hóa đơn mới</span>
          </div>
          <div className="flex items-center m-2 bg-mainbg rounded-md p-1 text-white cursor-pointer border-2">
            <MdCancel size={15} />
            <span className="ml-1 text-sm">Chưa thanh toán</span>
          </div>
          <div className="flex items-center m-2 bg-mainbg rounded-md p-1 text-white cursor-pointer border-2">
            <BsCheckCircleFill size={15} />
            <span className="ml-1 text-sm">Đã thanh toán</span>
          </div>
          <div className="flex items-center m-2 bg-mainbg rounded-md p-1 text-white cursor-pointer border-2">
            <MdDeleteForever size={15} />
            <span className="ml-1 text-sm">Đã hủy</span>
          </div>
        </div>
      </div>
      <table className="text-sm table-fill font-[500]">
        <thead>
          <tr className="bg-mainbg text-white">
            <th>STT</th>
            <th>Số hóa đơn</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Tour Booking</th>
            <th>Số người</th>
            <th>Tổng tiền</th>
            <th>Phương thức thanh toán</th>
            <th>Trạng thái</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          <th>1</th>
          <th>MD20001</th>
          <th>Trần Văn Hiếu</th>
          <th>0961964263</th>
          <th>Tour Hà Nội hai ngày một đêm</th>
          <th>2</th>
          <th>60000000</th>
          <th>Thanh toán tại cửa hàng</th>
          <th>Đang chờ xác nhận</th>
          <th>
            <div className="flex items-center justify-between h-full text-mainbg">
              <BiDetail size={25} className="cursor-pointer" />
              <MdDeleteForever size={25} className="cursor-pointer" />
            </div>
          </th>
        </tbody>
        <tbody>
          <th>2</th>
          <th>MD20001</th>
          <th>Trần Văn Hiếu</th>
          <th>0961964263</th>
          <th>Tour Hà Nội hai ngày một đêm</th>
          <th>2</th>
          <th>60000000</th>
          <th>Thanh toán tại cửa hàng</th>
          <th>Đang chờ xác nhận</th>
          <th>
            <div className="flex items-center justify-between h-full text-mainbg">
            <BiDetail size={25} className="cursor-pointer" />
              <MdDeleteForever size={25} className="cursor-pointer" />
            </div>
          </th>
        </tbody>
      </table>
    </div>
  );
}

export default HistoryBooking;