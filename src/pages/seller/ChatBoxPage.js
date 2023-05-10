import React, { useEffect, useState } from 'react'
import ChatBox from '../../components/user/ChatBox'
import { Button, Col, Row } from 'antd'
import { db } from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Item from 'antd/es/list/Item';
import CountNewMessage from '../../components/user/CountNewMessage';
import ListChat from '../../components/seller/ListChat';

function ChatBoxPage() {
  const [list,setList] =useState([]);
  const [idRoom,setIdRoom] =useState();
  const [name,setName] =useState();
  useEffect(() => {
    const q = query(
        collection(db, "chat")
      );
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let listroom = [];
        QuerySnapshot.forEach((doc) => {
          listroom.push({ ...doc.data(), id: doc.id });
        });
        setList(listroom);
      });
      return () => unsubscribe;

}, [idRoom]);

const chon=(id,name,avt)=>{
  console.log(id)
  setIdRoom(id)
  setName(name)
  

}
  return (
    <div>
    <Row>
        <Col span={6}>
          {list?.map((room) => {
            return (
              <Row key={room.id}>
                {/* <Button
                  onClick={() => {
                    setIdRoom(room.id);
                    setName(room.name)
                  }}
                >
                  {room.name}
                </Button> */}
                <ListChat id={room.id} name={room.name} chon={chon}/>
              </Row>
            );
          })}
        </Col>
        
        <Col span={12}>
          <Row>{name?<>Chat với {name}</>:<>Box chat</>} </Row>
          {idRoom ? <ChatBox roomchat={idRoom}  /> : <></>}
        </Col>
      </Row>
    </div>
  );
}

export default ChatBoxPage