import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import UserLayout from '../../layout/UserLayout'
import BaseUrl from '../../util/BaseUrl';

function BookingPage() {
  const[schedule,setSchedule] =useState({});
  const[tour,setTour] =useState({});
  const [invoice,setInvoice]=useState({});
  const [fullName,setFullName]= useState("");
  const [email,setEmail]= useState("");
  const [phone,setPhone]= useState("");
  const [note,setNote]= useState("");
  var url_string = window.location;
  var url = new URL(url_string);
  var sl = url.searchParams.get("sl");
  var idSchedule=url.searchParams.get("idSchedule");
  const account  = sessionStorage.getItem('user');
  async function getScheduleById() {
    try{        
        const res= await axios.get(BaseUrl+'schedule/getschedule?idSchedule='+idSchedule); 
        setSchedule(res?.data.schedule);
        setTour(res?.data.tour);  
       
        console.log(res?.data);
    }catch(err){alert('Khong co ket noi');}        
  }
  const handSubmit = async(e)=>{
    e.preventDefault();
    let amount=((tour.price)-tour.sale*tour.price)*sl/25000;
    let regObj = {fullName,email,phone,note,people:sl,amount,idSchedule,idAccount:JSON.parse(account).id};
    console.log(regObj);
    try{
      const invoice= await axios.post(BaseUrl+'invoice', regObj); 
         
      console.log(invoice?.data);  
      const pay= await axios.post(BaseUrl+'pay/paypal', regObj);   
      window.location=pay?.data;
      //toast.success("thanh cong")

    }catch(err){
      alert('Khong co ket noi');
                }

  }
  useEffect(() => {
    getScheduleById();   
    setEmail(JSON.parse(account).email)
    setFullName(JSON.parse(account).nameAccount)
    setPhone(JSON.parse(account).phoneNumber)

  }, []);

  return (
    <UserLayout>
        <div>
          {JSON.parse(account).email}
          Tour: {tour.title} -- {tour.price} -- {tour.describle}
          <br/>
          So luong: {sl}
          <br/>
          Lich trinh: {schedule.dayStart} -- {schedule.tourGuide} -- {schedule.phone}
        </div>
        <form>
        Email
        <input
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}>
        </input>
        <br/>
        Name
        <input
        value={fullName}
        onChange={(e)=>{setFullName(e.target.value)}}>
        </input>
        <br/>
        Phone
        <input
        value={phone}
        onChange={(e)=>{setPhone(e.target.value)}}>
        </input>
        <br/>
        Note
        <input
        value={note}
        onChange={(e)=>{setNote(e.target.value)}}>
        </input>
        <br/>
        <button type='submit' onClick={handSubmit}>Booking & Pay</button>
        </form>

    </UserLayout>
  )
}

export default BookingPage