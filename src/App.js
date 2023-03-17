import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckoutSuccess } from "./pages/user/CheckoutSuccess";
import VerifyPage from "./pages/user/VerifyPage";
import UpLoad from "./components/UpLoad";
import HomePage from "./pages/user/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<HomePage />}></Route>
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
