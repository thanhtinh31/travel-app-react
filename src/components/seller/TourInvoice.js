
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import BaseUrl from '../../util/BaseUrl';

function TourInvoice(props) {
   
   const [tour,setTour] = useState();
   const [schedule,setSchedule] = useState();
   const [link,setlink]=useState("");
   const fetchData=async()=>{
    try {  
        const tour = await axios.get(BaseUrl+'schedule/gettour/'+props.id)
        setTour(tour?.data)
        const sche = await axios.get(BaseUrl+'schedule/getschedule/'+props.id)
        setSchedule(sche?.data)
        setlink('/detailtour?id='+tour?.data.id)
      } catch (error) {
        console.error(error);
      }
   }
   useEffect(() => {
    fetchData();
    
  }, []);
  
  return (
    
    <>
    <Link to={link} target="_blank">Tour: {tour?tour.title:""}</Link>
    <br/>
    Xuất phát ngày: {schedule?schedule.dayStart:""}
    </>
  )
}

export default TourInvoice