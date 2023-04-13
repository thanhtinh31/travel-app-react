import React, { useEffect, useState } from 'react'
import ChatBox from '../../components/user/ChatBox'
import { Button, Col, Row } from 'antd'
import { db } from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Item from 'antd/es/list/Item';
import CountNewMessage from '../../components/user/CountNewMessage';

function ChatBoxPage() {
  const [list,setList] =useState([]);
  const [idRoom,setIdRoom] =useState();
  const idAccount=JSON.parse(sessionStorage.getItem('user')).id
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

  return (
    <div>
    <Row>
        <Col span={6}>
          {list?.map((room) => {
            return (
              <>
                <Button
                  onClick={() => {
                    setIdRoom(room.id);
                    console.log(room.id);
                  }}
                >
                  {room.name}
                </Button>
              </>
            );
          })}
        </Col>
        <Col span={18}>{idRoom ? <ChatBox roomchat={idRoom} /> : <></>}</Col>
      </Row>
    </div>
  );
}

export default ChatBoxPage