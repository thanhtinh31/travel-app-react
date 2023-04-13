import { Button, Col, Input, Modal, Row } from 'antd'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { db } from '../../firebase';
import { BsSendFill } from 'react-icons/bs';

function ChatBox(props) {
    const [mess,setMess] =useState("");
    const [messages, setMessages] = useState([]);
    const [myState, setState] = useState(props)
    const user=JSON.parse(sessionStorage.getItem('user'))
    useEffect(() => {
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
    async function sendMessage(roomId, text) {
        console.log(roomId)
        try {
            await addDoc(collection(db, 'chat', roomId, 'messages'), {
                uid: user.id,
                name:user.nameAccount,
                status:0,
                text: text.trim(),
                timestamp: serverTimestamp(),
            });
        } catch (error) {
            console.error(error);
        }
    }   
  return (
    <>
     <div class="max-h-80 overflow-y-auto bg-gradient-to-l from-[#53A6D8] to-[#88CDF6] my-2 rounded-md">
    {messages?.map((message) =>  {
        if(message.uid==JSON.parse(sessionStorage.getItem('user')).id)
          return (<p className='border w-3/5 float-right p-2 rounded-lg m-1 bg-slate-100' key={message.id}>
            {message.text}
            {/* <Col className='w-full' offset={20}>You: {message.text}</Col> */}
          </p>)
          else return(
            
            <p className='border w-3/5 float-right p-2 rounded-lg m-1' key={message.id}>{message.name}:{message.text}</p>
          //   <Row key={message.id}>
          //   <Col offset={0}>{message.name}:{message.text}</Col>
          // </Row>
          )
        }    
    )}
    </div>
    <div className='relative'>
    <Input value={mess} placeholder='Aa...' onChange={(e)=>{setMess(e.target.value)}}></Input>
    <div className='absolute top-[25%] right-2 cursor-pointer text-mainbg' onClick={()=>{sendMessage(myState.roomchat,mess); setMess("")}}>
    <BsSendFill size={20}/>
    </div>
    {/* <Button>send</Button> */}
    </div>
    </>
  )
}

export default ChatBox