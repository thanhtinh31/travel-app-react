import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
function CountNewMessage(props) {
    const [count,setCount] =useState(0);
    useEffect(() => {
        //count new message
        onSnapshot(
          query(
              collection(db, 'chat', props.idRoom, 'messages'),
              where("uid","!=",JSON.parse(sessionStorage.getItem('user')).id)
          ),
          (querySnapshot) => {
            var c=0;
            querySnapshot.docs.map((doc) => {if(doc.data().status=="0") c=c+1;});
            setCount(c);
            console.log(c)
        }
      );
      props.count(count)
      }, [props.count,count])
  return (
    <></>
  )
}

export default CountNewMessage