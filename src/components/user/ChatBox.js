import { Button, Col, Input, Modal, Row } from 'antd'
import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { db } from '../../firebase';

function ChatBox(props) {
    const [mess,setMess] =useState("");
    const [messages, setMessages] = useState([]);
    const [myState, setState] = useState(props)
    const user=JSON.parse(sessionStorage.getItem('user'))
    const usersCollectionRef = collection(db, 'chat')
    useEffect(() => {
        if(props.roomchat!=null)
               onSnapshot(
                query(
                    collection(db, 'chat', myState.roomchat, 'messages'),
                    orderBy('timestamp', 'asc')
                ),
                (querySnapshot) => {
                    const messages = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setMessages(messages)
                }
            );
            setState(props)
    }, [props]);
    const check= async()=>{
      if(myState.roomchat==null){
        const q = query(
          collection(db, "chat"),
          where("room","==",JSON.parse(sessionStorage.getItem('user')).id)
         );
          const querySnapshot = await getDocs(q)
          if(querySnapshot.size==0)
                { await addDoc(usersCollectionRef, {
                        room:JSON.parse(sessionStorage.getItem('user')).id,
                        name:JSON.parse(sessionStorage.getItem('user')).nameAccount
                    })
                }
          }

    }
    async function sendMessage(roomId, text) {
      
//
        try {
            await addDoc(collection(db, 'chat', roomId, 'messages'), {
                uid: user.id,
                name:user.nameAccount,
                status:"0",
                text: text.trim(),
                timestamp: serverTimestamp(),
            });
        } catch (error) {
            console.error(error);
        }
      

    } 

  return (
    <>
     <div class="max-h-40 min-h-40 overflow-auto">
    {messages?.map((message) =>  {
        if(message.uid==JSON.parse(sessionStorage.getItem('user')).id)
          return (<Row key={message.id}>
            <Col  offset={20}>You: {message.text}</Col>
          </Row>)
          else return( <Row key={message.id}>
            <Col  offset={0}>{message.name}:{message.text}</Col>
          </Row>)
        }    
    )}
    </div>
    <Row>
      <Col span={20}><Input value={mess} width={50} onChange={(e)=>{setMess(e.target.value)}} autoComplete='false' onPressEnter={()=>{sendMessage(myState.roomchat,mess); setMess("")}} ></Input></Col>
      <Col><Button onClick={()=>{sendMessage(myState.roomchat,mess); setMess("")}}>send</Button></Col>
    </Row>
    

    </>
  )
}

export default ChatBox