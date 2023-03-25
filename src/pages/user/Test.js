import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

function Test() {
  console.log("aaa");
  const [t,setT] =useState("");
  const [m,setM] =useState("");
  var stompClient = null;
  function connect() {
  var sock = new SockJS('http://localhost:8080/data');
  stompClient = Stomp.over(sock);
  
  stompClient.connect({}, function (frame) {
    //setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/greetings', function (greeting) {
        console.log(JSON.parse(greeting.body).content);
        setM(JSON.parse(greeting.body).content);
       // toast.success(JSON.parse(greeting.body).content);
      });
});
  
}
useEffect(() => {
    connect();
    toast.success(m);
  });

function sendName(e) {
  e.preventDefault();
  stompClient.send("/app/hello", {}, t);
}
 
    return (
        <>
        {m}
        <input placeholder="Message..." value={t} onChange={(e)=>{setT(e.target.value)}}></input>
        <button onClick={sendName}  >
          Send
        </button>
        </>
    );

}

export default Test