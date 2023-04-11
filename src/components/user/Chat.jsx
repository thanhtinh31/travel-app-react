// import { addDoc, collection, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
// import React, { useEffect } from 'react'
// import { db } from '../../firebase';
// import { useState } from 'react';
// import { set } from 'date-fns';
// import { json } from 'react-router-dom';
// import { Button, Input } from 'antd';

// function Chat() {
//     const [roomChat,setRoomChat]=useState();
//     const [idAccount,setIdAccount]=useState();
//     const [mess,setMess] =useState("");
//     const [messages, setMessages] = useState([]);
//     useEffect(() => {
//         const account  = sessionStorage.getItem('user');
//              if(!account) {console.log("chua dang nhap");}
//              else{
//                setIdAccount(JSON.parse(account).id);

//                onSnapshot(
//                 query(
//                     collection(db, 'chat', "qJQYaoyUBB4qBsjlNF1g", 'messages'),
//                     orderBy('timestamp', 'asc')
//                 ),
//                 (querySnapshot) => {
//                     const messages = querySnapshot.docs.map((doc) => ({
//                         id: doc.id,
//                         ...doc.data(),
//                     }));
//                     setMessages(messages)
//                 }
//             );

//              }    
//       }, []);
//     const usersCollectionRef = collection(db, 'chat')
//     const khoitao = async (room) => {
//     const q = query(
//         collection(db, "chat"),
//         where("room","==",room)
//     );
//     const qAll = query(
//         collection(db, "chat"),
//         where("room","==",room)
//     );
//    // const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
//             // if(QuerySnapshot.size==0)
//             // {
//             //     const document = addDoc(usersCollectionRef, {
//             //         room:room,
//             //     })
//             //     setRoomChat(document);
//             // }
//             // else{
//                 // QuerySnapshot.forEach((doc) => {
//                 //     if(doc.data())
//                 //     setRoomChat(doc)
//                 //     console.log(doc.id, " => ", doc.data());
//                 // });
//           // }
//      // })
//       const querySnapshot = await getDocs(q)
//       const queryAll=await getDocs(qAll)
//       if(querySnapshot.size==0)
//             {
//                 const document = addDoc(usersCollectionRef, {
//                     room:room,
//                 })
//             }
//       queryAll.forEach((doc) => {
//                     setRoomChat(doc)
//       });
//     }

//     async function sendMessage(roomId, user, text) {
//         console.log(roomId)
//         try {
//             await addDoc(collection(db, 'chat', roomId, 'messages'), {
//                 uid: user,
//                 text: text.trim(),
//                 timestamp: serverTimestamp(),
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     }

//   return (
//     <div>{roomChat?roomChat.id:<></>}
//     <Button onClick={()=>{khoitao(idAccount);console.log("a")}}>Chat</Button>
//     <Input value={mess} onChange={(e)=>{setMess(e.target.value)}}></Input>
//     <Button onClick={()=>{sendMessage(roomChat.id,idAccount,mess)}}>send</Button>
//     {messages?.map((message) => (
//         message.text
// ))}
//     </div>
//   )
// }

// export default Chat


import React from "react";

function Chat() {
    return (
      <body class=" items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">

     
      <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div class="flex w-full mt-2 space-x-3 max-w-xs">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
        
        <div class="bg-gray-300 p-4">
          <input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
        </div>
      </div>
    
    
    </body>
      );
}

export default Chat