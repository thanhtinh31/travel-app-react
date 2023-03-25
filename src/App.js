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


function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/verify" element={<VerifyPage/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
          <Route path="/introduce" element={<IntroducePage/>}></Route>
          <Route path="/addtour" element={<CreateTourPage/>}></Route>
          <Route path="/listtour" element={<ListTourPage/>}></Route>
          <Route path="/edittour" element={<EditTourPage/>}></Route>
          <Route path="/upload" element={<UpLoad/>}></Route>
          <Route path="/detailtour" element={<DetailTourPage/>}></Route>
          <Route path="/listcategory" element={<ListCategory/>}></Route>
          <Route path="/addcategory" element={<AddCategoryPage/>}></Route>
          <Route path="/editcategory" element={<EditCategoryPage/>}></Route>
          <Route path="/addschedule" element={<AddSchedulePage/>}></Route>
          <Route path="/test" element={<ItemTour/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
          <Route path="/te" element={<Test/>}></Route>
          
          {/* <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/checkoutsuccess" element={<CheckoutSuccess />}></Route>
          <Route path="/verify" element={<VerifyPage/>}></Route>
          <Route path="/upload" element={<UpLoad/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
