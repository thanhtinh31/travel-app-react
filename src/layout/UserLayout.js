import React, { useEffect, useState } from "react";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";
import { Outlet } from "react-router-dom";
import { Button, FloatButton, Modal } from "antd";
import Chat from "../components/user/Chat";
import ChatBox from "../components/user/ChatBox";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const UserLayout = ({title = "Title", className, children}) => {
  const [open,setOpen] =useState(false);
  const [roomChat,setRoomChat] =useState();
  const usersCollectionRef = collection(db, 'chat')
  
  const handelkhoitao=()=>{
        if(sessionStorage.getItem('user')){
          khoitao(JSON.parse(sessionStorage.getItem('user')).id);
          setOpen(true)
        }
        else console.log("dang nhap truoc da")
  }
  const khoitao = async (room) => {
    const q = query(
        collection(db, "chat"),
        where("room","==",room)
    );
    const qAll = query(
        collection(db, "chat"),
        where("room","==",room)
    );
      const querySnapshot = await getDocs(q)
      const queryAll=await getDocs(qAll)
      if(querySnapshot.size==0)
            { const document = addDoc(usersCollectionRef, {
                    room:room,
                    name:JSON.parse(sessionStorage.getItem('user')).nameAccount
                })}
      queryAll.forEach((doc) => {
        setRoomChat(doc)
        console.log("khoi tao thanh cong")
      });
    }

    useEffect(() => {

    }, [roomChat]);

  return (
    <>
    <Header/>
    <div className="pt-44 mx-auto w-10/12 h-max">      
    {/* {children} */}
    <Outlet/>
    </div>
    <Footer/>
    <FloatButton trigger="click"
      type="primary" onClick={()=>{handelkhoitao()}}/>
    <Modal
      open={open}
      onCancel={()=>{setOpen(false)}}
      title="Title"
      footer={null}
    >
      {roomChat?<ChatBox roomchat={roomChat.id}/>:<></>}
    </Modal>
    </>  
  );
}

export default UserLayout