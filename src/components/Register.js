import React, { useState } from "react";
import { BsGoogle, BsEyeSlash, BsEye } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Register() {
  const [showpw, setShowpw] = useState(false);
  // const [id, setId] = useState("")
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [stt, setStt] = useState("active");
  const showPassword = () => {
    setShowpw(!showpw);
  };
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    let regObj = { email, phone, username, password, role, stt };
    console.log(regObj);
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regObj),
    })
      .then((res) => {
        toast.success("Resgiter successfully");
        setTimeout(()=>{
          navigate('/login')
        },5000)
      })
      .catch((err) => {
        toast.error("Email đã được tạo bởi tài khoản khác");
      });
  };
  return (
    <div className="bg-white h-[100vh] pt-8">
      <div className="max-w-screen-md bg-[#ddeef8] my-auto mx-auto items-center shadow-lg p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="hidden md:block bg-[url('./assets/login.jpg')] h-[80vh] bg-center bg-cover bg-no-repeat"></div>
          <div className="justify-center mx-auto w-[90%]">
            <h2 className="font-bold text-3xl mb-4">Register</h2>
            <p className="text-[#707070] my-4">
              Welcome to <strong>Blue House Travel</strong>
            </p>
            <div>
              <form onSubmit={handleRegister}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="floating_email"
                    autoFocus
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone number
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="floating_text"
                    id="floating_text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    User name
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
                    onChange={(e) => setPassword(e.target.value)}
                    type={showpw ? "type" : "password"}
                    name="floating_text"
                    id="floating_text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    New password
                  </label>
                </div>
                <button className="relative inline-flex w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Create an account
                  </span>
                </button>
              </form>
              <button
                type="button"
                className="text-white w-full justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <div className="flex items-center">
                  <BsGoogle size={20} />
                  <span className="px-2">Sign in with Google</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
