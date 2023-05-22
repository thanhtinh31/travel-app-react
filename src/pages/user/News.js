import React from "react";
import logo1 from "../../assets/logo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function News() {
  const [news, setNews] = useState(1);
  const setActive = (props) => {
    const active = document.querySelector(".activett");
    active.classList.remove("activett");
    const nav = document.querySelector("." + props);
    nav.classList.add("activett");
  };
  return (
    <div className="pt-24">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-maintext font-[700] px-4 uppercase4">Tin Tức</h1>
        <img src={logo1} className="h-12 mr-3" alt="Flowbite Logo" />
      </div>
      <div className="flex justify-around items-center my-6">
        <div
          key={1}
          className={`activett cursor-pointer hover:scale-105 capitalize text-xl font-semibold text-maintext cndl`}
          onClick={() => (setNews(1),setActive("cndl"))}
        >
          Cẩm nang du lịch
        </div>
        <div
          key={2}
          className={` cursor-pointer hover:scale-105 capitalize text-xl font-semibold text-maintext kndl`}
          onClick={() => (setNews(2),setActive("kndl"))}
        >
          {" "}
          Kinh nghiệm du lịch
        </div>
        <div
          key={3}
          className={` cursor-pointer hover:scale-105 capitalize text-xl font-semibold text-maintext ttdl`}
          onClick={() => (setNews(3),setActive("ttdl"))}
        >
          Tin tức du lịch
        </div>
      </div>
      <div>
        {
            news===1?(<div className="cndl">
            <hr className="my-6 border-2 border-gray-600" />
            <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
              <img
                className="w-80 mx-4 rounded-lg"
                src="https://wiki-travel.com.vn/uploads/post/thanh0310-233522113545-trai-nghiem-du-lich-bangkok-00.png"
              />
              <div className="flex flex-col justify-between">
                <Link to="tinchinh">
                  <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                    6 ngày du lịch Thái Lan – Gợi ý lịch trình khám phá Chiang Rai,
                    Chiang Mai, Lampang
                  </h2>
                </Link>
                <span className="text-sm font-[600] text-mainbg mx-3 my-4">
                  Cẩm nang du lịch - 22/05/2023
                </span>
                <p>
                  Nằm ở phía bắc Thái Lan, Chiang Rai, Chiang Mai và Lampang là ba
                  điểm đến hấp dẫn thu hút du khách từ khắp nơi trên thế giới. Với
                  vẻ đẹp thiên nhiên tuyệt vời, kiến trúc độc đáo và nền văn hóa đậm
                  đà bản sắc dân tộc, những thành phố này đều có những trải nghiệm
                  độc đáo riêng. Dưới đây là một gợi ý lịch trình để khám phá Chiang
                  Rai, Chiang Mai và Lampang trong một chuyến đi đáng nhớ.
                </p>
              </div>
            </div>
    
            <hr className="my-6 border-2 border-gray-600" />
            <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
              <img
                className="w-80 mx-4 rounded-lg"
                src="https://wiki-travel.com.vn/uploads/post/camnhi-233722043756-du-lich-thai-lan-6-ngay.jpg"
              />
              <div className="flex flex-col justify-between">
                <Link to="tinchinh">
                  <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                    Những trải nghiệm phải thử khi du lịch Bangkok
                  </h2>
                </Link>
                <span className="text-sm font-[600] text-mainbg mx-3 my-4">
                  Cẩm nang du lịch - 22/05/2023
                </span>
                <p>
                  Vốn từ đâu đã được coi là một điểm du lịch thu hút khách du lịch
                  bậc nhất tại Đông Nam Á, thủ đô Bangkok của mảnh đất này với cảnh
                  sắc tuyệt đẹp cùng với các công trình kiến trúc đặc sắc mỹ lệ hòa
                  quyện cùng nền văn hóa ẩm thực độc đáo phong phú luôn quyến rũ bất
                  kỳ du khách tham quan nào. Du lịch Bangkok nhất định phải thử ngay
                  những trải nghiệm thú vị mà chỉ riêng vùng đất này mới có được.
                </p>
              </div>
            </div>
            <hr className="my-6 border-2 border-gray-600" />
    
            <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
              <img
                className="w-80 mx-4 rounded-lg"
                src="https://wiki-travel.com.vn/uploads/post/camnhi-231722051700-shutterstock_1058843576-truot-tuyet-mua-he-o-uc-nui-buller.jpg"
              />
              <div className="flex flex-col justify-between">
                <Link to="tinchinh">
                  <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                    Vì sao bạn nên một lần trong đời trải nghiệm trượt tuyết ngày hè
                    ở Úc?
                  </h2>
                </Link>
                <span className="text-sm font-[600] text-mainbg mx-3 my-4">
                  Cẩm nang du lịch - 22/05/2023
                </span>
                <p>
                  Hàng năm, cứ vào tháng 6-7, khi khách du lịch khắp nơi trên thế
                  giới đổ xô ra biển để trốn cái nóng gay gắt của mùa hè, thì dân Úc
                  lại rủ nhau lên núi Buller hùng vĩ để... trượt tuyết. Bạn có muốn
                  trải nghiệm trượt tuyết ngày hè không? Hãy cùng tìm hiểu vì sao
                  chúng ta nên ít nhất 1 lần trong đời phải trải nghiệm cho bằng
                  được hoạt động này nhé!
                </p>
              </div>
            </div>
            <hr className="my-6 border-2 border-gray-600" />
          </div>):news===2?(<div className="kndl">
        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/thanh0310-233522113545-trai-nghiem-du-lich-bangkok-00.png"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Kinh nghiệm du lịch Campuchia
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Kinh nghiệm du lịch - 22/05/2023
            </span>
            <p>
              Đừng bao giờ nghĩ Campuchia không có gì để du lịch, bạn sẽ cảm
              thấy bất ngờ khi tới đất nước thành cổ Campuchia đấy. Hãy tham
              quan Angkor Wat, Angkor Thorm và nhiều địa điểm du lịch dọc khắp
              Campuchia, bạn sẽ phải trầm trồ khen ngợi trước vẻ đẹp hoang sơ,
              uy nghiêm mà nhiều bộ phim điện ảnh nổi tiếng đã lựa chọn đất nước
              này cho hoạt cảnh của mình.
            </p>
          </div>
        </div>

        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/camnhi-233722043756-du-lich-thai-lan-6-ngay.jpg"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Kinh nghiệm du lịch Trung Quốc
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Kinh nghiệm du lịch - 22/05/2023
            </span>
            <p>
              Trung Quốc -"chiếc nôi" của văn hóa Châu Á, là sự tổng hợp của
              nhiều quốc gia đã tồn tại và nối tiếp nhau tại lục địa Đông Á cách
              đây ít nhất 3.500 năm, một nền văn minh lâu đời với hệ thống chữ
              viết riêng sử dụng cho đến ngày nay. Lịch sử Trung Quốc đặc trưng
              bởi những chia tách và thống nhất lặp đi lặp lại qua các thời kỳ
              hòa bình xen kẽ chiến tranh trên một lãnh thổ rộng lớn đầy biến
              động từ một vùng đất chính tại Bình nguyên Hoa Bắc và lan ra tận
              các vùng phía Đông, Đông Bắc và Trung Á.
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />

        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/camnhi-231722051700-shutterstock_1058843576-truot-tuyet-mua-he-o-uc-nui-buller.jpg"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Kinh nghiệm du lịch Hồng Kông & Macau
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Kinh nghiệm du lịch - 22/05/2023
            </span>
            <p>
              Hồng Kông (Hong Kong) – nơi giao thoa văn hóa Đông Tây là một
              trong những thành phố du lịch nổi tiếng nhất châu Á với sự phát
              triển đô thị hóa cao, hiện đại và năng động Cùng với Macau, Hồng
              Kông hiện là Đặc khu hành chính của Cộng hòa Nhân dân Trung Hoa
              sau hành trình khá dài bị làm thuộc địa.
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />
      </div>):(<div className="ttdl">
        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://i1-dulich.vnecdn.net/2023/05/22/vj-cabin-crews-1684763786-6561-1684764031.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=U_4VndIbP5510lOTIoc-tQ"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Vietjet ưu đãi vé 0 đồng cho loạt đường bay quốc tế
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Tin tức du lịch - 22/05/2023
            </span>
            <p>
              Vietjet mở bán triệu vé 0 đồng cho toàn mạng bay quốc tế từ ngày
              24-26/5, nhằm chào đón loạt đường bay quốc tế mà hãng sắp khai
              trương hay khai thác lại.
            </p>
          </div>
        </div>

        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://i1-vnexpress.vnecdn.net/2023/05/21/346121568-1356090301638094-182-5020-4707-1684649839.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=uxlorGfEAGYZCxrMYowOoA"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
              Du thuyền năm sao đưa 2.600 khách du lịch đến Phú Quốc</h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Tin tức du lịch - 22/05/2023
            </span>
            <p>
            Du thuyền Costa Serena đưa 2.600 khách, 1.000 thuyền viên cập cảng Phú Quốc, có một ngày tham quan thành phố biển, sáng 21/5. 
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />

        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://i1-dulich.vnecdn.net/2023/05/20/lao-1684560020-1684560058-1796-1684560924.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=lODLgN3sLT8Hx_v-J79uOw"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
              Du lịch ba thành phố ở Lào bằng tàu cao tốc
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Tin tức du lịch - 22/05/2023
            </span>
            <p>
            Nhờ tàu cao tốc, một nam du khách Việt có những trải nghiệm mới mẻ và rút ngắn được nhiều thời gian di chuyển trong nội địa Lào. 
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />
      </div>)
        }
      </div>
      {/* <div className="cndl">
        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/thanh0310-233522113545-trai-nghiem-du-lich-bangkok-00.png"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                6 ngày du lịch Thái Lan – Gợi ý lịch trình khám phá Chiang Rai,
                Chiang Mai, Lampang
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Cẩm nang du lịch - 22/05/2023
            </span>
            <p>
              Nằm ở phía bắc Thái Lan, Chiang Rai, Chiang Mai và Lampang là ba
              điểm đến hấp dẫn thu hút du khách từ khắp nơi trên thế giới. Với
              vẻ đẹp thiên nhiên tuyệt vời, kiến trúc độc đáo và nền văn hóa đậm
              đà bản sắc dân tộc, những thành phố này đều có những trải nghiệm
              độc đáo riêng. Dưới đây là một gợi ý lịch trình để khám phá Chiang
              Rai, Chiang Mai và Lampang trong một chuyến đi đáng nhớ.
            </p>
          </div>
        </div>

        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/camnhi-233722043756-du-lich-thai-lan-6-ngay.jpg"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Những trải nghiệm phải thử khi du lịch Bangkok
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Cẩm nang du lịch - 22/05/2023
            </span>
            <p>
              Vốn từ đâu đã được coi là một điểm du lịch thu hút khách du lịch
              bậc nhất tại Đông Nam Á, thủ đô Bangkok của mảnh đất này với cảnh
              sắc tuyệt đẹp cùng với các công trình kiến trúc đặc sắc mỹ lệ hòa
              quyện cùng nền văn hóa ẩm thực độc đáo phong phú luôn quyến rũ bất
              kỳ du khách tham quan nào. Du lịch Bangkok nhất định phải thử ngay
              những trải nghiệm thú vị mà chỉ riêng vùng đất này mới có được.
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />

        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/camnhi-231722051700-shutterstock_1058843576-truot-tuyet-mua-he-o-uc-nui-buller.jpg"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Vì sao bạn nên một lần trong đời trải nghiệm trượt tuyết ngày hè
                ở Úc?
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Cẩm nang du lịch - 22/05/2023
            </span>
            <p>
              Hàng năm, cứ vào tháng 6-7, khi khách du lịch khắp nơi trên thế
              giới đổ xô ra biển để trốn cái nóng gay gắt của mùa hè, thì dân Úc
              lại rủ nhau lên núi Buller hùng vĩ để... trượt tuyết. Bạn có muốn
              trải nghiệm trượt tuyết ngày hè không? Hãy cùng tìm hiểu vì sao
              chúng ta nên ít nhất 1 lần trong đời phải trải nghiệm cho bằng
              được hoạt động này nhé!
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />
      </div>

      <div className="kndl">
        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/thanh0310-233522113545-trai-nghiem-du-lich-bangkok-00.png"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Kinh nghiệm du lịch Campuchia
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Kinh nghiệm du lịch - 22/05/2023
            </span>
            <p>
              Đừng bao giờ nghĩ Campuchia không có gì để du lịch, bạn sẽ cảm
              thấy bất ngờ khi tới đất nước thành cổ Campuchia đấy. Hãy tham
              quan Angkor Wat, Angkor Thorm và nhiều địa điểm du lịch dọc khắp
              Campuchia, bạn sẽ phải trầm trồ khen ngợi trước vẻ đẹp hoang sơ,
              uy nghiêm mà nhiều bộ phim điện ảnh nổi tiếng đã lựa chọn đất nước
              này cho hoạt cảnh của mình.
            </p>
          </div>
        </div>

        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/camnhi-233722043756-du-lich-thai-lan-6-ngay.jpg"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Kinh nghiệm du lịch Trung Quốc
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Kinh nghiệm du lịch - 22/05/2023
            </span>
            <p>
              Trung Quốc -"chiếc nôi" của văn hóa Châu Á, là sự tổng hợp của
              nhiều quốc gia đã tồn tại và nối tiếp nhau tại lục địa Đông Á cách
              đây ít nhất 3.500 năm, một nền văn minh lâu đời với hệ thống chữ
              viết riêng sử dụng cho đến ngày nay. Lịch sử Trung Quốc đặc trưng
              bởi những chia tách và thống nhất lặp đi lặp lại qua các thời kỳ
              hòa bình xen kẽ chiến tranh trên một lãnh thổ rộng lớn đầy biến
              động từ một vùng đất chính tại Bình nguyên Hoa Bắc và lan ra tận
              các vùng phía Đông, Đông Bắc và Trung Á.
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />

        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://wiki-travel.com.vn/uploads/post/camnhi-231722051700-shutterstock_1058843576-truot-tuyet-mua-he-o-uc-nui-buller.jpg"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Kinh nghiệm du lịch Hồng Kông & Macau
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Kinh nghiệm du lịch - 22/05/2023
            </span>
            <p>
              Hồng Kông (Hong Kong) – nơi giao thoa văn hóa Đông Tây là một
              trong những thành phố du lịch nổi tiếng nhất châu Á với sự phát
              triển đô thị hóa cao, hiện đại và năng động Cùng với Macau, Hồng
              Kông hiện là Đặc khu hành chính của Cộng hòa Nhân dân Trung Hoa
              sau hành trình khá dài bị làm thuộc địa.
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />
      </div>

      <div className="ttdl">
        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://i1-dulich.vnecdn.net/2023/05/22/vj-cabin-crews-1684763786-6561-1684764031.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=U_4VndIbP5510lOTIoc-tQ"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
                Vietjet ưu đãi vé 0 đồng cho loạt đường bay quốc tế
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Tin tức du lịch - 22/05/2023
            </span>
            <p>
              Vietjet mở bán triệu vé 0 đồng cho toàn mạng bay quốc tế từ ngày
              24-26/5, nhằm chào đón loạt đường bay quốc tế mà hãng sắp khai
              trương hay khai thác lại.
            </p>
          </div>
        </div>

        <hr className="my-6 border-2 border-gray-600" />
        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://i1-vnexpress.vnecdn.net/2023/05/21/346121568-1356090301638094-182-5020-4707-1684649839.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=uxlorGfEAGYZCxrMYowOoA"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
              Du thuyền năm sao đưa 2.600 khách du lịch đến Phú Quốc</h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Tin tức du lịch - 22/05/2023
            </span>
            <p>
            Du thuyền Costa Serena đưa 2.600 khách, 1.000 thuyền viên cập cảng Phú Quốc, có một ngày tham quan thành phố biển, sáng 21/5. 
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />

        <div className="flex flex-col md:flex-row items-center md:items-start text-maintext">
          <img
            className="w-80 mx-4 rounded-lg"
            src="https://i1-dulich.vnecdn.net/2023/05/20/lao-1684560020-1684560058-1796-1684560924.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=lODLgN3sLT8Hx_v-J79uOw"
          />
          <div className="flex flex-col justify-between">
            <Link to="tinchinh">
              <h2 className="text-xl lg:text-3xl font-[700] cursor-pointer">
              Du lịch ba thành phố ở Lào bằng tàu cao tốc
              </h2>
            </Link>
            <span className="text-sm font-[600] text-mainbg mx-3 my-4">
              Tin tức du lịch - 22/05/2023
            </span>
            <p>
            Nhờ tàu cao tốc, một nam du khách Việt có những trải nghiệm mới mẻ và rút ngắn được nhiều thời gian di chuyển trong nội địa Lào. 
            </p>
          </div>
        </div>
        <hr className="my-6 border-2 border-gray-600" />
      </div> */}
    </div>
  );
}

export default News;
