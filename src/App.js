import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckoutSuccess } from "./pages/user/CheckoutSuccess";
import VerifyPage from "./pages/user/VerifyPage";

import HomePage from "./pages/user/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingPage from "./pages/user/BookingPage";
import IntroducePage from "./pages/user/IntroducePage";
import CreateTourPage from "./pages/seller/CreateTourPage";
import ListTourPage from "./pages/seller/ListTourPage";

import DetailTourPage from "./pages/user/DetailTourPage";
import ListCategory from "./pages/admin/ListCategory";
import ListServices from "./pages/admin/ListServices";
import SearchPage from "./pages/user/SearchPage";



import SchedulePage from "./pages/seller/SchedulePage";
import { useState } from "react";
import { useEffect } from "react";
import UserLayout from "./layout/UserLayout";
import SellerLayout from "./layout/SellerLayout";
import AdminLayout from "./layout/AdminLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AuthorizedPage from "./pages/AuthorizedPage";
import ChatBoxPage from "./pages/seller/ChatBoxPage";
import Filtertour from "./pages/user/Filtertour";
import Profile from "./pages/user/Profile";
import Weather from "./pages/user/Weather";
import ListInvoice from "./pages/seller/ListInvoice";
import ListAccount from "./pages/admin/ListAccount";
import ThongKeTourPage from "./pages/admin/ThongKeTourPage";
import ThongKeTaiKhoanPage from "./pages/admin/ThongKeTaiKhoanPage";
import ThongKeDoanhThuPage from "./pages/admin/ThongKeDoanhThuPage";
import ChotTourPage from "./pages/seller/ChotTourPage";
import HistoryBookingPage from "./pages/user/HistoryBookingPage";
import ForgotPassword from "./pages/ForgotPassword";
import BookingSuccess from "./pages/user/BookingSuccess";
import MyTour from "./components/user/MyTour";
import LichTour from "./components/seller/LichTour";
import RequestPage from "./pages/seller/RequestPage";
import News from "./pages/user/News";
import Tinchinh from "./pages/user/Tinchinh";


function App() {
  const [user,setUser] =useState(0);
  useEffect(() => {
  
  }, []);
  return (
    <div>
      <ToastContainer></ToastContainer>
      
      <BrowserRouter>
      <Routes>
      
      
      <Route path="/test" element={<LichTour/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verify" element={<VerifyPage/>}/>
        <Route path="/forgot" element={<ForgotPassword/>}/>
        <Route path="/authorized" element={<AuthorizedPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/" element={<UserLayout />}>
          
          <Route index element={<HomePage />} />

          <Route path="profile" element={<Profile/>} />
          <Route path="/introduce" element={<IntroducePage/>} />
          <Route path="weather" element={<Weather/>} />  
          <Route path="home" element={<HomePage/>}/>
          <Route path="detailtour" element={<DetailTourPage />} />
          <Route path="booking" element={<BookingPage/>} />
          <Route path="checkoutsuccess" element={<CheckoutSuccess/>} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="filter" element={<Filtertour/>}/>
          <Route path="history" element={<HistoryBookingPage/>}/>
          <Route path="bookingsuccess" element={<BookingSuccess/>}/>
          <Route path="mytour" element={<MyTour/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="news/tinchinh"  element={<Tinchinh/>}/>

        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<ListCategory />} />
          <Route path="category" element={<ListCategory />} />
          <Route path="service" element={<ListServices />} />
          <Route path="account" element={<ListAccount />} />
          
          <Route path="thongketour" element={<ThongKeTourPage />} />
          <Route path="thongketaikhoan" element={<ThongKeTaiKhoanPage />} />
          <Route path="thongkedoanhthu" element={<ThongKeDoanhThuPage />} />
        </Route>
        <Route path="/seller/" element={<SellerLayout />}>
          <Route index element={<ListTourPage />} />
          <Route path="listtour" element={<ListTourPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="chottour" element={<ChotTourPage />} />
          <Route path="chatbox" element={<ChatBoxPage />} />
          <Route path="listinvoice" element={<ListInvoice />} />
          <Route path="request" element={<RequestPage />} />
          <Route path="thongkedoanhthu" element={<ThongKeDoanhThuPage />} />
          <Route path="thongketour" element={<ThongKeTourPage />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
