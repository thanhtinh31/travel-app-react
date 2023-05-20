import React from "react";
import logo1 from "../../assets/logo2.png";
import UserLayout from "../../layout/UserLayout";

function IntroducePage() {
  return (
    <div className="mx-auto mt-24 max-w-screen-lg bg-white shadow-lg px-2 py-3">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-maintext uppercase text-center mx-3">
          Giới thiệu về Travel
        </h1>
        <img src={logo1} className="h-12 mr-3" alt="Flowbite Logo" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-mainbg uppercase">
          thông tin chung
        </h2>
        <div className="mx-4 text-sm font-[400] text-maintext">
          <div className="py-1">
            <span>Tên doanh nghiệp: </span>
            <span className="font-[600]">Công ty cổ phần Travel</span>
          </div>
          <div className="py-1">
            <span>Tên doanh nghiệp: </span>
            <span className="font-[600]">Travel Corporation</span>
          </div>
          <div className="py-1">
            <span>Tên doanh nghiệp: </span>
            <span className="font-[600]">Travel corp</span>
          </div>
          <div className="py-1">
            <span className="font-[600]">
              Công ty cổ phần Travel (Travel booking){" "}
            </span>{" "}
            <span>
              đặt trụ sở chính tại TPHCM và chi nhánh ở hai thành phố lớn là Hà
              Nội và Đà Nẵng. Đặc biệt, chúng tôi đã áp dụng công nghệ mới trong
              giao dịch online qua hệ thống website:{" "}
              <span className="font-[600]">travel.com </span> và Tổng đài tư vấn
              24/7: <span className="font-[600]">123456789</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold text-mainbg uppercase">
          Lĩnh vực kinh doanh
        </h2>
        <div className="mx-4 text-sm font-[400] text-maintext">
          <div className="py-1">
            <span className="font-[600]">1. Tổ chức tour du lịch:</span>
            <span className="">
              Công ty Cổ phần Việt Nam Booking chuyên cung cấp các tour du lịch
              đa dạng loại hình như du lịch nghỉ dưỡng, du lịch khám phá – trải
              nghiệm với lịch trình mới lạ hấp dẫn, dịch vụ đi kèm đạt chuẩn
              chất lượng và đặc biệt giá cả vô cùng tiết kiệm. Ngoài ra, chúng
              tôi có thế mạnh tổ chức tour thiết kế riêng – M.I.C.E, team
              building & gala dinner cho các cơ quan đoàn thể, doanh nghiệp, đơn
              vị hành chính sự nghiệp, là cơ hội để gắn kết tập thể, nâng cao
              tinh thần lao động và cống hiến.
            </span>
          </div>
          <div className="py-1">
            <span className="font-[600]">2. Lữ hành:</span>
            <span>
              Là thế mạnh đặc thù của chúng tôi, với phòng bán vé trực tiếp trên
              cả ba miền Bắc – Trung – Nam cùng đội ngũ tư vấn chuyên nghiệp,
              giao vé tận nhà quý khách. Mong muốn hàng đầu của Vietnam Booking
              là đem đến cho khách hàng những tấm vé máy bay giá tốt, hành trình
              bay thuận tiện nhất. Vietnam Booking là một trong số ít những công
              ty trở thành đại lý chính thức của các hãng hàng không nội địa
              như: Vietnam Airlines, Vietjet Air, Jetstar Pacific. Hơn nữa,
              chúng tôi còn đạt được danh hiệu đại lý chuyên nghiệp theo tiêu
              chuẩn của IATA (Hiệp hội Vận tải Hàng không Quốc tế) trong lĩnh
              vực cung cấp vé máy bay của các hãng hàng không quốc tế như
              Singapore Airlines, Korean Air, EVA Air, Qatar Airlines, Thai
              Airways, American Airlines, Air France, Qantas, China Southern
              Airlines, China Airlines, United Airlines, Emirates…
            </span>
          </div>
          <div className="py-1">
            <span className="font-[600]">3. Tư vấn và hỗ trợ Visa</span>
            <span>
              Chúng tôi luôn sẵn sàng tư vấn, hướng dẫn quý khách có nhu cầu xin
              visa trọn gói. Vietnam Booking có bề dày kinh nghiệm và uy tín
              trong lĩnh vực visa du lịch, visa thăm thân nhân và visa công tác
              cho người Việt Nam nhập cảnh vào các nước phát triển của Châu Á,
              châu Âu, Úc, Mỹ… Với tỉ lệ đậu lên đến 98%, thậm chí đối với các
              hồ sơ khó, trường hợp xin visa khẩn.
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold text-mainbg uppercase">
          LỊCH SỬ, QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN
        </h2>
        <div className="mx-4 text-sm font-[400] text-maintext">
          <div className="py-1">
            <span className="font-[600]">01/01/2023: </span>
            <span className="">
              Được đại học Duy Tân cấp Giấy chứng nhận đăng ký doanh nghiệp số
              0308042348, Vietnam Booking thành lập văn phòng đầu tiên, đặt trụ
              sở tại trường Đại học Duy Tân. Trong năm 2023, Travel Booking trên
              cương vị là một đại lý tour du lịch, uy tín đã chiếm trọn lòng tin
              của những khách hàng quen thuộc. Với mục tiêu và phương hướng kinh
              doanh đúng đắn, trong năm này, Vietnam Booking đã dần có chỗ đứng
              và tạo dấu ấn mạnh mẽ.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-semibold text-mainbg uppercase">
          MỤC TIÊU & SỨ MỆNH
        </h2>
        <div className="mx-4 text-sm font-[400] text-maintext">
          <div className="py-1">
            <p className="py-3">
              Lấy niềm tin của khách hàng là phương châm và thước đo chất lượng
              dịch vụ, Vietnam Booking luôn mong muốn thương hiệu của mình được
              gắn với uy tín và chất lượng. Ngày nay, khi thị trường luôn liên
              tục thay đổi, chúng tôi càng xác định rõ ràng mục tiêu và sứ mệnh
              của mình hơn:
            </p>
            <u className="font-[500] py-2">Đối với khách hàng và đối tác:</u>
            <ul className="px-3">
              <li> - Xây dựng uy tín và thực hiện đúng mọi cam kết trước, trong và sau khi tiến hành giao dịch giữa các bên.</li>
              <li> - Chuyên cung cấp, tư vấn dịch vụ chất lượng nhất cho khách hàng với mức giá tốt nhất và phù hợp nhất.</li>
              <li> - Thực hiện nghiệp vụ tư vấn bán hàng một cách nhanh chóng, hiệu quả nhất</li>
            </ul>
            <u className="font-[500] py-2">Đối với xã hội</u>
            <ul className="px-3">
              <li> - Xây dựng văn hóa doanh nghiệp hiệu quả điển hình tại Việt Nam.</li>
              <li> - Đóng góp tích cực vào các hoạt động hướng về cộng đồng, vì lợi ích chung của xã hội.</li>

            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-semibold text-mainbg uppercase">
        TẦM NHÌN, CHIẾN LƯỢC PHÁT TRIỂN
        </h2>
        <div className="mx-4 text-sm font-[400] text-maintext">
          <div className="py-1">
          <ul className="px-3">
              <li> - Mở rộng hệ thống văn phòng tới các thành phố như: Huế, Hải Phòng, Nha Trang,….</li>
              <li> - Luôn cải thiện công nghệ trong thời đại 4.0 để đem đến trải nghiệm dịch vụ tốt nhất cho khách hàng.</li>
              <li> - Nâng cao nghiệp vụ của đội ngũ nhân viên</li>
              <li> - Đơn giản hóa quy trình đặt dịch vụ nhằm giúp khách hàng tiết kiệm tối đa thời gian.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroducePage;
