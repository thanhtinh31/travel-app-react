import { Badge, Button } from 'antd';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CountNewMessage from '../user/CountNewMessage';
import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebase';

function ListChat(props) {
    const [newmessage,setNewmessage]=useState(0);
  const onclick=(id,name)=>{
    console.log(id)
    props.chon(id,name)
  }
  const setcount=(c)=>{
    setNewmessage(c);
  }
  useEffect(() => {
    //count new message
  }, [props.id])
  const xem=async()=>{
    const qer = query(
      collection(db, 'chat', props.id, 'messages'),
      where("uid","!=",JSON.parse(sessionStorage.getItem('user')).id)
    );
    const q=await getDocs(qer)
    q.forEach((doc) => {updateDoc(doc.ref,{status:"1"})})
  }
  return (<>
   {props.id?<CountNewMessage idRoom={props.id} count={setcount}/>:<></>}
    <Badge count={newmessage}>
    <Button
                  onClick={() => {
                    xem()
                    onclick(props.id,props.name)
                  }}
                >
                  {props.name}
    </Button>
    </Badge>
    </>
  )
}

export default ListChat