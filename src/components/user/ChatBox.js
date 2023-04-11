import { Button, Col, Input, Modal, Row } from 'antd'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { db } from '../../firebase';

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
     <div class="max-h-40 min-h-40 overflow-auto">
    {messages?.map((message) =>  {
        if(message.uid==JSON.parse(sessionStorage.getItem('user')).id)
          return (<Row>
            <Col  offset={20}>You: {message.text}</Col>
          </Row>)
          else return( <Row>
            <Col  offset={0}>{message.name}:{message.text}</Col>
          </Row>)
        }    
    )}
    </div>
    <Input value={mess} onChange={(e)=>{setMess(e.target.value)}}></Input>
    <Button onClick={()=>{sendMessage(myState.roomchat,mess); setMess("")}}>send</Button>

    </>
  )
}

export default ChatBox