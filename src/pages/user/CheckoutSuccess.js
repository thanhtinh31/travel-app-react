import React, { useEffect } from 'react'
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';
import { useState } from 'react';
import { Button, Result, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
export const CheckoutSuccess = () => {
  const [status,setStatus]=useState("thanhcong");
  const [loading,setLoading] =useState(true);
  var url_string = window.location;
  var url = new URL(url_string);
  var status_code = url.searchParams.get("vnp_ResponseCode");
  const navigate = useNavigate();
  const xulythanhcong=async()=>{
    setLoading(true)
    if(status_code==="00"){
    var idPayment =url.searchParams.get("vnp_BankTranNo");
    var bank=url.searchParams.get("vnp_BankCode");
    var id=url.searchParams.get("vnp_TxnRef");
    let regObj={id,bank,idPayment}
    try{
      const res= await axios.put(BaseUrl+'invoice/thanhtoanvnpay',regObj);
      setLoading(false)
      navigate("/bookingsuccess?id="+id)
    }catch(err){alert('Khong co ket noi');}
  }else {console.log("Thanh toán thất bại"); setStatus("thatbai");setLoading(false)}

  }
  useEffect(() => {
    if(sessionStorage.getItem('user'))
    xulythanhcong()
  }, []);
  return (
   
    <>
    <div className="max-w-screen-lg mx-auto bg-white shadow-lg mt-28">
    <Spin spinning={loading}>
     {status?
     <>
     {status==="thanhcong"?
    <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console" onClick={()=>{navigate("/")}}>
        Về trang chủ
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />:
  <Result
    status="error"
    title="Giao dịch bị hủy"
    subTitle="Vui lòng kiểm tra và thanh toán lại. Cảm ơn !."
    extra={[
      <Button type="primary" key="console" onClick={()=>{navigate("/")}}>
        Về trang chủ
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  ></Result>}</>:<></>}
  </Spin>
  </div>
  </>

  )
}
