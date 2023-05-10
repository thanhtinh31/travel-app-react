import { Avatar, Badge, Button } from 'antd';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CountNewMessage from '../user/CountNewMessage';
import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';

function ListChat(props) {
    const [newmessage,setNewmessage]=useState(0);
    const [name,setName]=useState("No Name");
    const [avt,setAvt]=useState();
  const onclick=(id,name,avt)=>{
    console.log(id)
    props.chon(id,name,avt)
  }
  const setcount=(c)=>{
    setNewmessage(c);
  }
  const getUser=async()=>{
    try{
      const account = await axios.get(BaseUrl+'account/getAccount/'+props.name); 
      setName(account?.data.nameAccount)
      setAvt(account?.data.image);
    }
    catch{
      toast.error("Lỗi kết nối")
    }
  }
  useEffect(() => {
   getUser();
  }, [props.id])
  const xem=async()=>{
    const qer = query(
      collection(db, 'chat', props.id, 'messages'),
      where("uid","!=",sessionStorage.getItem('user'))
    );
    const q=await getDocs(qer)
    q.forEach((doc) => {updateDoc(doc.ref,{status:"1"})})
  }
  return (<>
   {props.id?<CountNewMessage idRoom={props.id} count={setcount}/>:<></>}
    <Badge count={newmessage}>
    <Button
    style={{border:'none',marginBottom:'17px',boxShadow:'none'}}
                  onClick={() => {
                    xem()
                    onclick(props.id,name,avt)
                  }}
                >
                  <Avatar size={'large'} src={avt}></Avatar>
                  {name}
    </Button>
    </Badge>
    </>
  )
}

export default ListChat