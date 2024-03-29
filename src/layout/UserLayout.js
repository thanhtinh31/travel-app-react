import React, { useEffect, useState } from "react";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar, Badge, Button, FloatButton, Modal } from "antd";
import ChatBox from "../components/user/ChatBox";
import { addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { MessageFilled } from '@ant-design/icons';
import CountNewMessage from "../components/user/CountNewMessage";
import axios from "axios";
import BaseUrl from "../util/BaseUrl";
const UserLayout = ({title = "Title", className, children}) => {
  const [open,setOpen] =useState(false);
  const [roomChat,setRoomChat] =useState();
  const usersCollectionRef = collection(db, 'chat')
  const [newmessage,setNewmessage]=useState(0);
  const navigate =useNavigate();
  const handelkhoitao= ()=>{
        if(sessionStorage.getItem('user')){
          khoitao(sessionStorage.getItem('user'));
          xem()
          setOpen((true))
        }
        else {
          alert("Đăng nhập để Chat");
          navigate("/login")
        }
  }
  const xem=async()=>{
    const qer = query(
      collection(db, 'chat', roomChat, 'messages'),
      where("uid","!=",sessionStorage.getItem('user'))
    );
    const q=await getDocs(qer)
    q.forEach((doc) => {updateDoc(doc.ref,{status:"1"})})
  }

  const setcount=(c)=>{
    setNewmessage(c);
  }
  async function check(){
    if(!roomChat){
      const q = query(
        collection(db, "chat"),
        where("room","==",sessionStorage.getItem('user'))
       );
        const querySnapshot = await getDocs(q)
        if(querySnapshot.size==0)
              { await addDoc(usersCollectionRef, {
                      room:sessionStorage.getItem('user'),
                      name:sessionStorage.getItem('user')
                  })
              }
        }
  }
  const khoitao = async () => {
    check()
    }
    const checkLogin=async()=>{
      if(sessionStorage.getItem('user'))
      try{
          const user= await axios.get(BaseUrl+'account/getAccount/'+sessionStorage.getItem('user'))
      }catch{sessionStorage.removeItem('user');window.location='/home'}
    }
    useEffect(() => {
      checkLogin()
      if(sessionStorage.getItem('user')){
      const qAll = query(
        collection(db, "chat"),
        where("room","==",sessionStorage.getItem('user'))
      );
      onSnapshot(qAll,(querySnapshot) => {querySnapshot.docs.map((doc) => {setRoomChat(doc.id)});})
      }

    }, [roomChat,newmessage]);
  return (
    <>
    <Header/>
    <div className="mx-auto w-10/12 h-max min-h-screen">      
    {/* {children} */}
    <Outlet/>
    </div>
    <Footer/>
    {roomChat?<CountNewMessage idRoom={roomChat} count={setcount}/>:<></>}
    <FloatButton trigger="click"   icon={<MessageFilled />} type="primary" badge={{count:newmessage}}
      onClick={()=>{handelkhoitao()}}/>
    <Modal
      open={open}
      onCancel={()=>{setOpen(false)}}
      title="Box Chat"
      footer={null}
    >
      {roomChat?<ChatBox roomchat={roomChat}/>:<></>}
    </Modal>
    </>  
  );
}

export default UserLayout