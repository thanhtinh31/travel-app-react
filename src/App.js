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
import Lichsudattour from "./pages/user/Lichsudattour";


function App() {
  const [user,setUser] =useState(0);
  useEffect(() => {
    const account = sessionStorage.getItem('user');
    if(account) {setUser(JSON.parse(account).typeAccount);
    console.log(JSON.parse(account).typeAccount);}
  }, []);
  return (
    <div>
      <ToastContainer></ToastContainer>
      
      <BrowserRouter>
      <Routes>
      <Route path="/create" element={<CreateTourPage/>}/>
      <Route path="/ls" element={<Lichsudattour/>}/>
      
      
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verify" element={<VerifyPage/>}/>
        <Route path="/authorized" element={<AuthorizedPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="weather" element={<Weather/>} />  
          <Route path="home" element={<HomePage/>}/>
          <Route path="detailtour" element={<DetailTourPage />} />
          <Route path="booking" element={<BookingPage/>} />
          <Route path="checkoutsuccess" element={<CheckoutSuccess/>} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="filter" element={<Filtertour/>}/>
          <Route path="history" element={<HistoryBookingPage/>}/>
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<ListCategory />} />
          <Route path="listcategory" element={<ListCategory />} />
          <Route path="listaccount" element={<ListAccount />} />
          <Route path="listaccount" element={<ListCategory />} />
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
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
