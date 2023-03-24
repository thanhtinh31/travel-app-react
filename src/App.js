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
import Detailtour from "./components/user/Detailtour";
import Lasttour from "./components/user/Lasttour";


function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-400">
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
          <Route path="/lasttour" element={<Lasttour/>}></Route>
          {/* <Route path="/detail" element={<Detailtour/>}></Route> */}
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
