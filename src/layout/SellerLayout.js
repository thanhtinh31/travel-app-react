import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/user/Footer";

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { toast } from "react-toastify";
import Sidebar from "../components/seller/Sidebar";
import Header from "../components/seller/Header";
import Banner from "../components/seller/Banner";
import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

const SellerLayout = ({title = "Title", className, children}) => {
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {    
    const account  = sessionStorage.getItem('user');
    if(!account){
    
      navigate('/login')
    }
    const q = query(
      collection(db, "notification"),
      orderBy("createdAt","desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      let count1=0;
      QuerySnapshot.forEach((doc) => {  
        if(doc.data().status==0) {count1=count1+1;}
         messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      setCount(count1);
      if(count1!=0) toast.info("Bạn có "+count1 +" thông báo mới!");
    });
    return () => unsubscribe;
  }, []);
  

  return (
    <div className="flex h-screen overflow-hidden">

    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      {/*  Site header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} notification={messages}/>

      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  
    {children}
    </div>
        </main>
        <Banner />

      </div>
    </div>
  );
}

export default SellerLayout