import { Avatar, Input, message } from 'antd'
import { addDoc, collection, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { db } from '../../firebase';
import { BsSendFill } from 'react-icons/bs';


function ChatBox(props) {
    const [mess,setMess] =useState("");
    const [messages, setMessages] = useState([]);
    const [myState, setState] = useState(props)
    const user=sessionStorage.getItem('user');
    const [avt,setAvt] =useState("");
    const [name,setName]=useState("");
    
    useEffect(() => {
        if(props.roomchat!=null)
               onSnapshot(
                query(
                    collection(db, 'chat', myState.roomchat, 'messages'),
                    orderBy('timestamp', 'asc'),
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
//      
        if(text==null||text==="") message.error('Vui lòng nhập tin nhắn!');
        else
        try {
            await addDoc(collection(db, 'chat', roomId, 'messages'), {
                uid: user,
                name:user,
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
     <div class="max-h-80 overflow-y-auto my-2 rounded-md" style={{border:1}}>
    {messages?.map((message) =>  {
        if(message.uid!=user)
        return (<p className='border w-3/5 float-left p-2 rounded-lg m-1 bg-slate-50' style={{backgroundColor:'#DCDCDC'}} key={message.id}><Avatar/> {message.text}</p>)
      else return(
        <p className='border w-3/5 float-right p-2 rounded-lg m-1' style={{backgroundColor:'#1E90FF'}} key={message.id}>
        {message.text}
        </p>
        )
        }    
    )}
    </div>
    <div className='relative'>
    <Input value={mess} onPressEnter={()=>{sendMessage(myState.roomchat,mess); setMess("")}} placeholder='Aa...' onChange={(e)=>{setMess(e.target.value)}}></Input>
    <div className='absolute top-[25%] right-2 cursor-pointer text-mainbg' onClick={()=>{sendMessage(myState.roomchat,mess); setMess("")}}>
    <BsSendFill size={20}/>
    </div>
    {/* <Button>send</Button> */}
    </div>
    </>
  )
}

export default ChatBox