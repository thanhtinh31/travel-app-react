import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/user/Footer";

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { toast } from "react-toastify";
import Sidebar from "../components/seller/Sidebar";
import Header from "../components/seller/Header";
import Banner from "../components/seller/Banner";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const SellerLayout = ({title = "Title", className, children}) => {
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {    
    const q = query(
      collection(db, "notification"),
      orderBy("createdAt"),
      limit(10)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      let count1=0;
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        if(doc.data().status==0) count1=count1+1;
      });
      setMessages(messages);
      setCount(count1);
      if(count1!=0) toast.success("ban co "+count1);
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
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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