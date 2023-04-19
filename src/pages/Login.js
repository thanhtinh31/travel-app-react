import React, { useState } from "react";
import { BsEyeSlash, BsEye, BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import BaseUrl from "../util/BaseUrl";
import axios from "axios";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { Spin } from "antd";

function Login() {
  const [loading,setLoading]=useState(false)
  const reCaptCha = () => {
    setActive(true);
  };
  const savePassWord = ()=>{
    console.log("save");
  }
  const [profile, setProfile] = useState(null);
  const [active, setActive] = useState(false);
  const [showpw, setShowpw] = useState(false);
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");

  const navigate = useNavigate();
  const showPassword = () => {
    setShowpw(!showpw);
  };
  const handleLoginFB=async(response)=>{
    const userfb= {idFacebook:response.data.id,nameAccount:response.data.name,image:response.data.picture.data.url,typeAccount: 1};
    try{
      setLoading(true)
      const r = await axios.post(BaseUrl+'account/loginFB', userfb);
      console.log(r.data.account);
      sessionStorage.setItem('user',JSON.stringify(r?.data.account));      
      window.location="/home";
    }catch(err){
      setLoading(false)
      console.log(err);
    }


  }
  const handleLogin =async(e) => {
    setLoading(true)
    e.preventDefault();
    let regObj = { email, password};
    try{
      const res= await axios.post(BaseUrl+'account/login', regObj);  
      setLoading(false)    
      if(res?.data.status==='1') { 
       sessionStorage.setItem('user',JSON.stringify(res?.data.account));
       if(JSON.parse(sessionStorage.getItem('user')).typeAccount<2) navigate("/home"); 
       else if(JSON.parse(sessionStorage.getItem('user')).typeAccount<3) navigate("/seller");
       else navigate('/admin')}
      else toast.error(res?.data.message);

    }catch(err){
      setLoading(false)
      alert('Khong co ket noi');
    }
  };
  return (
    <Spin spinning={loading}>
    <div className="h-[100vh] pt-10">
      <div className="max-w-screen-md bg-[#ddeef8] dark:bg-[#a5d4f0] my-auto mx-auto items-center shadow-lg p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="hidden md:block bg-[url('./assets/login.jpg')] h-[80vh] bg-center bg-cover bg-no-repeat"></div>
          <div className="justify-center mx-auto w-[90%]">
            <h2 className="font-bold dark:text-white text-3xl mb-4">Login</h2>
            <p className="text-[#707070] dark:text-white my-4">
              Welcome to <strong>Blue House Travel</strong>
            </p>
            <div>
              <form onSubmit={handleLogin}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={email}
                    onChange={(e) => getEmail(e.target.value)}
                    type="email"
                    name="floating_email"
                    autoFocus
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <div
                    className="absolute right-1 top-[50%]"
                    onClick={() => showPassword()}
                  >
                    {showpw ? <BsEye /> : <BsEyeSlash />}
                  </div>
                  <input
                    value={password}
                    onChange={(e) => getPassword(e.target.value)}
                    type={showpw ? "type" : "password"}
                    name="floating_text"
                    id="floating_text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Your password
                  </label>
                </div>
                <ReCAPTCHA
                  sitekey="6Lfve_EkAAAAAMI4TLGxpqPqTc9cIa8_9XK-VwVw"
                  onChange={reCaptCha}
                />
                <div>
                  <div className="flex flex-row justify-between my-2">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                      onChange={savePassWord}
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      className="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                      <Link to="/resetpassword">Forget password ?</Link>
                  </div>
                  </div>
                </div>
                <button onClick={handleLogin}
                  disabled={!active}
                  className="relative inline-flex w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
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
    </Spin>
  );
}

export default Login;
