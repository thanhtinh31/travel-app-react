import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckoutSuccess } from "./pages/user/CheckoutSuccess";
import VerifyPage from "./pages/user/VerifyPage";
import UpLoad from "./components/UpLoad";
import HomePage from "./pages/user/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingPage from "./pages/user/BookingPage";
import IntroducePage from "./pages/user/IntroducePage";
import CreateTourPage from "./pages/seller/CreateTourPage";
import ListTourPage from "./pages/seller/ListTourPage";
import EditTourPage from "./pages/seller/EditTourPage";
import DetailTourPage from "./pages/user/DetailTourPage";
import ListCategory from "./pages/admin/ListCategory";
import AddCategoryPage from "./pages/admin/AddCategoryPage";
import EditCategoryPage from "./pages/admin/EditCategoryPage";
import AddSchedulePage from "./pages/seller/AddSchedulePage";
import ItemTour from "./components/user/ItemTour";
import SearchPage from "./pages/user/SearchPage";
import Test from "./pages/user/Test";
import UserProfile from "./pages/user/UserProfile";
import Lasttour from "./components/user/Lasttour";
import ExchangeCurrency from "./pages/user/ExchangeCurrency";
import PageSide from "./components/admin/PageSide";
import QLTaiKhoan from "./components/admin/QLTaiKhoan";
import HistoryBooking from "./components/user/HistoryBooking";
import HistoryBookingPage from "./pages/user/HistoryBookingPage";
import SchedulePage from "./pages/seller/SchedulePage";
import { useState } from "react";
import { useEffect } from "react";
import { set } from "date-fns";
import UserLayout from "./layout/UserLayout";
import SellerLayout from "./layout/SellerLayout";
import AdminLayout from "./layout/AdminLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AuthorizedPage from "./pages/AuthorizedPage";



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
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verify" element={<VerifyPage/>}/>
        <Route path="/authorized" element={<AuthorizedPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="detailtour" element={<DetailTourPage />} />
          <Route path="booking" element={<BookingPage/>} />
          <Route path="checkoutsuccess" element={<CheckoutSuccess/>} />
          <Route path="profile" element={<UserProfile/>} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<ListCategory />} />
          <Route path="listcategory" element={<ListCategory />} />
          <Route path="listaccount" element={<ListCategory />} />
        </Route>
        <Route path="/seller/" element={<SellerLayout />}>
          <Route index element={<ListTourPage />} />
          <Route path="listtour" element={<ListTourPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
