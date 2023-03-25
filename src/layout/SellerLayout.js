import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { toast } from "react-toastify";

const SellerLayout = ({title = "Title", className, children}) => {

  const [m,setM] =useState("");
  const [s,setS] =useState(false);
  var stompClient = null;
  function connect() {
  setS(true);
  var sock = new SockJS('http://localhost:8080/data');
  stompClient = Stomp.over(sock);
  stompClient.connect({}, function (frame) {
    //setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/greetings', function (greeting) {
        console.log(JSON.parse(greeting.body).content);
        setM(JSON.parse(greeting.body).content);
        toast.success(JSON.parse(greeting.body).content);
      });
  });
  
  }
  console.log(s)
  if(s==false){connect()}

  useEffect(()=>{
    const account  = sessionStorage.getItem('user');
    if(!account){
      //Navigate('/home');
    }
    
  })
  return (

    <>{m}
    <Header/>
    <div className="pt-44 mx-auto w-10/12 h-max">
    {children}
    </div>
    <Footer/>
    </>
  );
}

export default SellerLayout