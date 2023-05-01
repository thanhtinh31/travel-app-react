import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";
import { Button, Input, InputNumber } from "antd";
function VerifyPage() {
  const [code, setCode] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const vrf = sessionStorage.getItem("verify");
    if (!vrf) {
      navigate("/login");
    }
  });

  const handleVerify = async () => {
    const reg = JSON.parse(sessionStorage.getItem("verify")).account;
    const codeVerify = JSON.parse(sessionStorage.getItem("verify")).code;
    console.log(codeVerify);
    if (code == codeVerify) {
      const res = await axios.post(BaseUrl + "account", reg);
      alert("Đăng kí thành công");
      //  delete session
      sessionStorage.removeItem("verify");
      navigate("/login");
    } else {
      alert("Không trùng khớp");
    }
  };
  return (
    <div className="flex flex-col max-w-lg bg-slate-300 p-4 mx-auto items-center rounded-md my-10">
      <h2 className="text-maintext font-[600] my-3">Nhập mã để kích hoạt tài khoản</h2>
      <Input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        type="text"
        minLength={6}
      ></Input>
      <button
      onClick={handleVerify}
        type="button"
        className="text-white w-[50%] justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 my-3"
      >Xác nhận</button>
    </div>
  );
}

export default VerifyPage;
