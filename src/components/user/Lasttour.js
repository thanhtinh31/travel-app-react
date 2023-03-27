
import { addDoc, collection, doc, getDocs, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {db} from "../../firebase"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



function Lasttour() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "message"), {
      text: message,
      name: "tinh",
      status:1,
      createdAt: serverTimestamp()
    });
    setMessage("");
  };
  useEffect(() => {
    
    const q = query(
      collection(db, "message"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      let count1=0;
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        if(doc.data().status==1) count1=count1+1;
      });
      setMessages(messages);
      setCount(count1);
      if(count1!=0) toast.success("ban co "+count1);
    });
    return () => unsubscribe;
  }, []);


  const xem = async (event) => {
    setCount(0);
    event.preventDefault();
    // const { uid, displayName, photoURL } = auth.currentUser;
    const userRef = query(collection(db, "message"));
    const findUsers = await getDocs(userRef);
    findUsers.forEach( async (user) => {
    const getUser = doc(db, 'message', user.id);
     await updateDoc(getUser, {
      "status": 2
     });
    });
  };
  return (
    <>
    {messages?.map((message1) => (
           <div key={message1.id}>{message1.id}--{message1.text}--{message1.status}</div>
         ))}
   <form onSubmit={(event) => sendMessage(event)} className="send-message">
   <input

         value={message}
         onChange={(e) => setMessage(e.target.value)}
       />
     <button type="submit"> send</button>
     
   </form>
   <button onClick={xem}> xem</button>
   </>
  );
}

export default Lasttour;