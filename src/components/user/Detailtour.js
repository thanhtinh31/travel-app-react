import React from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsBusFrontFill,
  BsClockFill,
  BsFacebook,
  BsFillCarFrontFill,
  BsInstagram,
  BsPersonFillCheck,
  BsPhoneVibrate,
  BsTicketPerforatedFill,
  BsTwitter,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
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
import { GrSchedule } from "react-icons/gr";
import { AiFillSchedule, AiOutlineFileProtect } from "react-icons/ai";
import { GiKnifeFork, GiRotaryPhone } from "react-icons/gi";

function Detailtour() {
  return (
    <>
    <div className="max-w-screen-lg mx-auto bg-white shadow-lg">
      <h1 className="font-[700] text-xl mx-2 py-4 text-mainbg">
        Tour Hà Giang 4 ngày 3 đêm từ TPHCM | Đồng Văn - Mã Pí Lèng - Dinh Thự
        vua Mèo
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="w-full h-80">
                <img
                  src="https://cdn.pixabay.com/photo/2018/04/28/03/13/vietnam-3356516_960_720.jpg"
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-80">
                <img
                  src="https://motogo.vn/wp-content/uploads/2020/02/dong-van-ha-giang-7.jpg"
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-80">
                <img
                  src="https://image.vietgoing.com/article/12-dia-diem-tham-quan-o-dong-van-khong-di-la-tiec-ca-doi.jpg"
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-mainbg">
            <h2 className="text-maintext font-[600]">Mã Tour: 12345</h2>
            <div className="flex justify-between text-sm my-2">
              <div className="flex items-center">
                <MdLocationOn size={20} />{" "}
                <span className="ml-2">Hồ chí minh</span>
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
            </div>
            <div className="flex items-center">
              <AiFillSchedule size={20} />
              <span className="ml-2 font-[600]">Khởi hành thứ 5 hàng tuần</span>
            </div>

            <hr className="my-3" />

            {/* Dịch vụ kèm theo */}
            <h2 className="text-maintext my-2 font-[600]">Dịch vụ kèm theo</h2>
            <div className="flex justify-between text-xs my-2 font-[500]">
              <div className="flex items-center">
                <AiOutlineFileProtect size={15} />{" "}
                <span className="ml-2">Bảo hiểm</span>
              </div>
              <div className="flex items-center">
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
              </div>
            </div>
            <p className="text-sm font-[500] text-justify">
              Đặt mua tour Hà Giang 4 ngày 3 đêm từ TPHCM trọn gói giá rẻ của
              ThanhTinh Travel quý khách sẽ được khám phá tỉnh Hà Giang nổi
              tiếng công viên địa chất toàn cầu - cao nguyên đá Đông Văn. Trải
              nghiệm nhiều hoạt động thú vị và ý nghĩa trong suốt cuộc hành
              trình
            </p>

            <hr className="my-3" />

            <h2 className="text-maintext my-2 font-[600]">
              Tour có gì hấp dẫn
            </h2>
            <ul className="pl-6 text-sm">
              <li className="list-disc">
                Tận mắt ngắm nhìn cao nguyên đá với phong cảnh hùng vĩ nhất của
                Việt Nam
              </li>
              <li className="list-disc">
                Khám phá những nét đẹp văn hóa của đồng bào dân tộc tại Làng văn
                hóa Lũng Cẩm
              </li>
              <li className="list-disc">
                Check-in những địa điểm du lịch nổi tiếng: Dốc 9 Khoanh, Dốc
                Thẩm Mã...
              </li>
              <li className="list-disc">
                Chinh phục một trong những "Tứ mã đỉnh đèo của Việt nam: Đèo Mã
                Pí Lèng"
              </li>
              <li className="list-disc">
                Đến thăm Cộc cờ Lũng cú - nơi địa đầu của Tổ Quốc
              </li>
              <li className="list-disc">
                Trải nghiệm ẩm thực địa phương độc đáo
              </li>
            </ul>
          </div>
          <hr className="my-3" />

          <p className="italic font-[500] text-maintext">
            Nhanh tay book ngay tour Hà Giang 4 ngày 3 đêm từ TPHCM trọn gói giá
            tốt của ThanhTinh travel qua hotline 1900 3398 thôi nào !
          </p>
        </div>
        <div className="w-full my-3">
          <div className="bg-[#12092e] p-3 h-80 mx-2">
            <div className="text-xl font-[500] text-[#f8d000]">
              5 900 000 VND
            </div>
            <div className="line-through text-md text-[#f8d000]">
              6 900 000 VND
            </div>
            <div className="flex justify-around my-4">
              <label for="select-time" className="text-white">
                Khởi hành
              </label>
              <select name="select-time" className="border-2 text-sm w-[50%]">
                <option value="">Thời gian khởi hành</option>
                <option value="1">01/01/2022</option>
                <option value="2">02/02/2022</option>
                <option value="3">03/03/2022</option>
              </select>
            </div>

            <div className="flex justify-around my-4">
              <label for="select-time" className="text-white">
                Số khách
              </label>
              <input
                className="w-[50%] text-sm px-2"
                type={"number"}
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
              <button className="button">Đặt tour</button>
            </div>
          </div>

          <div className="my-3 mx-2">
            <div className="uppercase font-[600] flex items-center justify-center bg-mainbg text-white h-10">
              Liên hệ với chúng tôi
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
          <div className="flex justify-around text-mainbg">
            <BsFacebook size={25} />
            <BsInstagram size={25} />
            <BsTwitter size={25} />
          </div>
          <hr className="my-3" />
        </div>
      </div>
      <hr className="my-3" />
      <div className="py-6">
        <h2 className="text-maintext m-2 font-[600] text-lg uppercase">
          Bình luận:
        </h2>
        <div className="relative z-0 w-full px-6 pb-8 group">
          <input
            type="text"
            name="cmt"
            id="cmt"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Bình luận của bạn
          </label>
        </div>

        <div className="flex flex-col">
          <div className="flex mx-2 items-center my-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973_960_720.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div className="mx-2 p-2 bg-gray-200 rounded-md shadow-md relative cmm">Trải nghiệm hoàn hảo, dịch vụ tuyệt vời </div>
          </div>

          <div className="flex mx-2 items-center my-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973_960_720.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div className="mx-2 p-2 bg-gray-200 rounded-md shadow-md relative cmm">Chinh phục một trong những "Tứ mã đỉnh đèo của Việt nam: Đèo Mã Pí Lèng" </div>
          </div>

          <div className="flex mx-2 items-center my-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973_960_720.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div className="mx-2 p-2 bg-gray-200 rounded-md shadow-md relative cmm">Trải nghiệm hoàn hảo, dịch vụ tuyệt vời </div>
          </div>
        </div>

        <h2 className="text-maintext mx-2 my-4  mt-10 font-[600] text-lg uppercase">
          Bài viết liên quan:
        </h2>
        <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative w-72 h-48 text-maintext cursor-pointer rounded-md border-[1px] border-gray-500">
            <img src='https://cdn.pixabay.com/photo/2023/03/18/16/08/mountain-7860877_960_720.jpg' className="w-full h-full rounded-md"/>
            <div className="absolute z-10 bottom-0 text-sm bg-[rgba(255,255,255,0.41)] font-[500] p-2">
            Tour Hà Giang 4 ngày 3 đêm từ TPHCM | Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo
            </div>
          </div>

          <div className="relative w-72 h-48 text-maintext cursor-pointer rounded-md border-[1px] border-gray-500">
            <img src='https://cdn.pixabay.com/photo/2023/03/18/16/08/mountain-7860877_960_720.jpg' className="w-full h-full rounded-md"/>
            <div className="absolute z-10 bottom-0 text-sm bg-[rgba(255,255,255,0.41)] font-[500] p-2">
            Tour Hà Giang 4 ngày 3 đêm từ TPHCM | Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo
            </div>
          </div>

          <div className="relative w-72 h-48 text-maintext cursor-pointer rounded-md border-[1px] border-gray-500">
            <img src='https://cdn.pixabay.com/photo/2023/03/18/16/08/mountain-7860877_960_720.jpg' className="w-full h-full rounded-md"/>
            <div className="absolute z-10 bottom-0 text-sm bg-[rgba(255,255,255,0.41)] font-[500] p-2">
            Tour Hà Giang 4 ngày 3 đêm từ TPHCM | Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo
            </div>
          </div>

        </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Detailtour;