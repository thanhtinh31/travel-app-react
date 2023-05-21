import React, { useState } from "react";
import { BsGoogle, BsEyeSlash, BsEye, BsFacebook ,BsArrowRightShort} from "react-icons/bs";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginSocialFacebook } from 'reactjs-social-login';
import BaseUrl from "../util/BaseUrl";
import { Spin } from "antd";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isPhone from "validator/lib/isMobilePhone"
import logo1 from "../assets/logo2.png"
function Register() {
    const [showpw, setShowpw] = useState(false);
    const [email, setEmail] = useState("");
    const [nameAccount, setNameAccount] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [typeAccount, setTypeAccount] = useState(1);
    const [status, setStt] = useState(1);
    const [loading,setLoading] =useState(false)
    const [profile, setProfile] = useState(null);
    const [validator, setVadidator] = useState("")
    const showPassword = () => {
      setShowpw(!showpw);
    };
    const navigate = useNavigate();
    const validateAll = ()=>{
      const msg = {}
      if(isEmpty(email)){
        msg.email = "Email không được bỏ trống"
      }else if(!isEmail(email)){
        msg.email = "Nhập sai định dạng Email"
      }
      if(phoneNumber.length<10)
      {
        msg.phoneNumber ="Khoong dung dinh dang";
      }
      if(phoneNumber.charAt(0)!="0")
      {
        msg.phoneNumber ="Khoong dung dinh dang";
      }
      if(isEmpty(phoneNumber)){
        msg.phoneNumber = "Số điện thoại không được bỏ trống"
      }
      if(isEmpty(nameAccount)){
        msg.nameAccount = "Tên người dùng không được bỏ trống"
      }
      if(isEmpty(address)){
        msg.address = "Tên người dùng không được bỏ trống"
      }
      if(isEmpty(password)){
        msg.password = "Password không được bỏ trống"
      }
      if(password.length<6){
        msg.password = "Password tối thiểu 6 kí tự"
      }
      if(isEmpty(newpassword)){
        msg.newpassword = "Nhập lại mật khẩu của bạn"
      }else if(password!=newpassword){
        msg.newpassword = "Bạn nhập sai mật khẩu"
      }

      setVadidator(msg)
      if(Object.keys(msg).length>0) return false
      return true
    }

    const handleRegister = async (e) => {
      e.preventDefault();
      const isValid = validateAll()
    if(!isValid) return;
      
      setLoading(true)
      let regObj = { email:email.toLowerCase(), phoneNumber ,address, nameAccount, password , status ,typeAccount };
      const res = await axios.post(BaseUrl+'account/register',regObj);
      console.log(res?.data);
      if(res?.data.status==="0"){
        setLoading(false)
          toast.error(res?.data.message);
          
      }else
      {
          sessionStorage.setItem("verify",JSON.stringify(res?.data));
          navigate('/verify')
          setLoading(false)
      }
      
    };
    const handleLoginFB=async(response)=>{
        const userfb= {idFacebook:response.data.id,nameAccount:response.data.name,image:response.data.picture.data.url,typeAccount: 1};
        try{
          const r = await axios.post(BaseUrl+'account/loginFB', userfb);
          if(r?.data.status=="0")
          {
            toast.error(r?.data.message)
            setLoading(false)
          }else
          {
          sessionStorage.setItem('user',JSON.stringify(r?.data.account));      
          window.location="/home";
          }
        }catch(err){
          console.log(err);
    
        }
      }
  return (
    <Spin spinning={loading}>
    <div className=" h-[100vh] pt-10">
      <div className="max-w-screen-md bg-[#ddeef8] dark:bg-[#a5d4f0] my-auto mx-auto items-center shadow-lg p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="hidden md:block bg-[url('./assets/login.jpg')] h-[80vh] bg-center bg-cover bg-no-repeat"></div>
          <div className="justify-center mx-auto w-[90%]">
            <h2 className="font-bold text-3xl dark:text-white mb-4 text-center">Đăng ký</h2>
            <div className="flex items-center justify-center ">
            <p className="text-[#707070] dark:text-white my-4 mx-3">
              Chào mừng đến với <strong>Travel App</strong> 
            </p>
            <img  width={"40px"} src={logo1}/>
            </div>
            <div>
              <form onSubmit={handleRegister}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    autoFocus
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.email}</p>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    minLength={10}
                    name="phoneNumber"
                    id="phoneNumber"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Số điện thoại
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.phoneNumber}</p>


                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Địa chỉ
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.address}</p>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={nameAccount}
                    onChange={(e) => setNameAccount(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Họ Tên
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.nameAccount}</p>

                <div className="relative z-0 w-full mb-6 group">
                  <div
                    className="absolute right-1 top-[50%]"
                    onClick={() => showPassword()}
                  >
                    {showpw ? <BsEye /> : <BsEyeSlash />}
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showpw ? "type" : "password"}
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    minLength={6}
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Mật khẩu
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.password}</p>

                <div className="relative z-0 w-full mb-6 group">
                  <div
                    className="absolute right-1 top-[50%]"
                    onClick={() => showPassword()}
                  >
                    {showpw ? <BsEye /> : <BsEyeSlash />}
                  </div>
                  <input
                    value={newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type={showpw ? "type" : "password"}
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    minLength={6}
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Nhập lại mật khẩu
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.newpassword}</p>

                <div className="flex items-center text-sm font-medium text-blue-500 py-2">
                  <BsArrowRightShort size={25}/>
                      <Link to="/login">Đăng nhập</Link>
                  </div>
                <button type="submit" onClick={handleRegister} className="relative inline-flex w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Đăng ký ngay
                  </span>
                </button>
              </form>
              <LoginSocialFacebook appId='988527735837751' 
                fieldsProfile='name,picture'
                onResolve={(response) => {setProfile(response.data);handleLoginFB(response);}} 
                onReject={(error)=>{alert("Login Facebook thất bại!");}}
                >              
              <button
                type="button"
                className="text-white w-full justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <div className="flex items-center"> 
                <BsFacebook/>               
                  <span className="px-2">Đăng nhập bằng Facebook</span>
                </div>
              </button>
              </LoginSocialFacebook >
            </div>
          </div>
        </div>
      </div>
    </div>
    </Spin>
  );
}

export default Register;
