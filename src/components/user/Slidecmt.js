import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

function Slidecmt() {
  return (
    <div className="shadow-md bg-white p-3 rounded-md">
    <div className="flex items-center">
      <img
        src="https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973_960_720.jpg"
        className="w-16 h-16 rounded-full"
      />
      <div className="mx-2">
        <span className="font-[500] text-xl text-maintext">
          Thanh Tinh
        </span>
        <div className="flex text-yellow-500">
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="comment shadow-lg text-justify text-ellipsis p-2 my-4 text-maintext bg-slate-100 rounded-md">
        Một phát hiện đã tiết lộ rằng nền văn minh Babylon đã thực
        sự rất tiến bộ nói chung và về phương diện toán học nói
        riêng. Mới đây các nhà khảo cổ đã tìm thấy một tấm bảng hình
        tròn bằng đất sét có từ 3.700 năm trước (sớm hơn 1000 năm so
        với ngày sinh của nhà toán học Pythagoras).
      </div>
    </div>
  </div>
  )
}

export default Slidecmt