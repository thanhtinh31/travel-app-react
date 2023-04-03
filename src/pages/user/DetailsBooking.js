import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function DetailsBooking() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-maintext">
      <h2 className="font-signature text-2xl font-[500] text-mainbg">
        Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi
      </h2>
      <p className="text-lg font-[500] ">
        Tour Hà Giang 4 ngày 3 đêm từ TPHCM | Đồng Văn - Mã Pí Lèng - Dinh Thự
        vua Mèo
      </p>
      <div className="flex items-center mt-4">
        <BsCheckCircleFill size={20} />{" "}
        <span className="ml-2 font-signature text-xl my-3">
          Xác nhận đặt tour
        </span>
      </div>
      <table className="table-fill">
        <thead></thead>
        <tbody className="table-hover">
          <tr>
            <td className="text-left">Mã tour</td>
            <td className="text-left code-tour">VNB-123456</td>
          </tr>
          <tr>
            <td className="text-left">Tên tour</td>
            <td className="text-left desc">
              {" "}
              Tour du lịch miền tây 2 ngày 1 đêm cho khách du lịch: Thưởng ngoạn
              cảnh sắc du lịch sông nước
            </td>
          </tr>
          <tr>
            <td className="text-left">Ngày đi</td>
            <td className="text-left time">05/12/2022</td>
          </tr>
          <tr>
            <td className="text-left">Thời gian</td>
            <td className="text-left schedule">2 ngày - 1 đêm</td>
          </tr>
          <tr>
            <td className="text-left">Điểm khởi hành</td>
            <td className="text-left location">Hồ Chi Minh</td>
          </tr>
        </tbody>
      </table>

      <div className="flex items-center mt-4">
        <BsCheckCircleFill size={20} />{" "}
        <span className="ml-2 font-signature text-xl my-3">
          Chi tiết đặt tour
        </span>
      </div>
      <table className="table-fill">
        <thead></thead>
        <tbody className="table-hover">
          <tr>
            <td className="text-left">Số booking</td>
            <td className="text-left code-bk">VNB-123456</td>
          </tr>
          <tr>
            <td className="text-left">Trị giá booking</td>
            <td className="text-left price"> 1.990.000 vnd</td>
          </tr>
          <tr>
            <td className="text-left">Ngày đăng kí</td>
            <td className="text-left time-bk">
              05/12/2022 - 7:00 (theo giờ việt nam)
            </td>
          </tr>
          <tr>
            <td className="text-left">Hình thức thanh toán</td>
            <td className="text-left hinhthuc-pk">Tại văn phòng</td>
          </tr>
          <tr>
            <td className="text-left">Tình trạng</td>
            <td className="text-left status">Đang đợi xác nhận</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center mt-4">
        <BsCheckCircleFill size={20} />{" "}
        <span className="ml-2 font-signature text-xl my-3">
          Thông tin liên lạc
        </span>
      </div>
      <table className="table-fill">
        <thead></thead>
        <tbody className="table-hover">
          <tr>
            <td className="text-left">Họ tên</td>
            <td className="text-left custumer">thanh tịnh</td>
          </tr>
          <tr>
            <td className="text-left">Địa chỉ</td>
            <td className="text-left city"> Đà nẵng</td>
          </tr>
          <tr>
            <td className="text-left">Email</td>
            <td className="text-left email-custumer">abc@gmail.com</td>
          </tr>
          <tr>
            <td className="text-left">Điện thoại</td>
            <td className="text-left sdt">0368766753</td>
          </tr>
          <tr>
            <td className="text-left">Ghi chú</td>
            <td className="text-left note">Đang đợi xác nhận</td>
          </tr>
          <tr>
            <td className="text-left">Tổng số khách</td>
            <td className="text-left quatity">1</td>
          </tr>
        </tbody>
      </table>
        <div className="font-signature text-3xl font-[500] text-mainbg text-center mt-4 mb-2">Green House - Travel</div>
        <p className="font-signature text-xl font-[500] text-mainbg text-center">
        Kính chú quý khách có một chuyến du lịch thú vị và hấp dẫn
      </p>
    </div>
  );
}

export default DetailsBooking;
