import React, { useState } from "react";
import { BsGoogle, BsEyeSlash, BsEye, BsFacebook, BsArrowRightShort } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginSocialFacebook } from 'reactjs-social-login';
import BaseUrl from "../util/BaseUrl";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
function Register() {
    const [showpw, setShowpw] = useState(false);
    // const [id, setId] = useState("")
    const [email, setEmail] = useState("");
    const [nameAccount, setNameAccount] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [typeAccount, setTypeAccount] = useState(1);
    const [status, setStt] = useState(1);
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
      if(isEmpty(phoneNumber)){
        msg.phoneNumber = "Số điện thoại không được bỏ trống"
      }
      if(isEmpty(nameAccount)){
        msg.nameAccount = "Tên người dùng không được bỏ trống"
      }
      if(isEmpty(password)){
        msg.password = "Password không được bỏ trống"
      }
  
      setVadidator(msg)
      if(Object.keys(msg).length>0) return false
      return true
    }
    const handleRegister = async (e) => {
      const isValid = validateAll()
    if(!isValid) return
      e.preventDefault();
      let regObj = { email, phoneNumber , nameAccount, password , status ,typeAccount };
  
      const res = await axios.post(BaseUrl+'account/register',regObj);
      console.log(res?.data);
      if(res?.data.status==="0"){
          toast.error(res?.data.message);
      }else
      {
          sessionStorage.setItem("verify",JSON.stringify(res?.data));
         
          navigate('/verify')
      }
      
    };
    const handleLoginFB=async(response)=>{
        const userfb= {idFacebook:response.data.id,nameAccount:response.data.name,image:response.data.picture.data.url,typeAccount: 1};
        
    
        try{
          const r = await axios.post(BaseUrl+'account/loginFB', userfb);
          console.log(r.data.account);
          sessionStorage.setItem('user',JSON.stringify(r?.data.account));      
          navigate('/')
        }catch(err){
          console.log(err);
    
        }
    
    
      }
  return (
    <div className=" h-[100vh] pt-10">
      <div className="max-w-screen-md bg-[#ddeef8] dark:bg-[#a5d4f0] my-auto mx-auto items-center shadow-lg p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="hidden md:block bg-[url('./assets/login.jpg')] h-[80vh] bg-center bg-cover bg-no-repeat"></div>
          <div className="justify-center mx-auto w-[90%]">
            <h2 className="font-bold text-3xl dark:text-white mb-4">Register</h2>
            <p className="text-[#707070] dark:text-white my-4">
              Welcome to <strong>Blue House Travel</strong>
            </p>
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
                    
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.email}</p>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone number
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.phoneNumber}</p>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={nameAccount}
                    onChange={(e) => setNameAccount(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    User name
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
                    
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    New password
                  </label>
                </div>
                <p className="text-red-500 text-xs mb-4">{validator.password}</p>
                <div className="flex items-center text-sm font-medium text-blue-500 py-2">
                  <BsArrowRightShort size={25}/>
                      <Link to="/login">Log in</Link>
                  </div>
                <button type="button" onClick={handleRegister} className="relative inline-flex w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Create an account
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
                  <span className="px-2">Sign in with Facebook</span>
                </div>
              </button>
              </LoginSocialFacebook >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
