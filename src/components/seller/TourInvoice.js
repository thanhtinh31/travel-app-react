
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import BaseUrl from '../../util/BaseUrl';
import { Spin } from 'antd';
import { CalendarOutlined ,SmileOutlined,CarOutlined,ClockCircleOutlined} from '@ant-design/icons';
import CountDown from '../user/CountDown';

function TourInvoice(props) {
   const [loading,setLoading]=useState(true);
   const [tour,setTour] = useState();
   const [schedule,setSchedule] = useState();
   const [link,setlink]=useState("");
   const fetchData=async()=>{
    try {  
        setLoading(true);
        const tour = await axios.get(BaseUrl+'schedule/gettour/'+props.id)
        setTour(tour?.data)
        const sche = await axios.get(BaseUrl+'schedule/getschedule/'+props.id)
        setSchedule(sche?.data)
        setlink('/detailtour?id='+tour?.data.id)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
   }
   useEffect(() => {
    fetchData();
    
  }, [props.id]);
  
  return (
    
    <>
     <Spin spinning={loading}>
    {schedule?
    <>
    <SmileOutlined style={{fontSize:20,color:'yellow'}} /> <Link to={link} target="_blank">{tour?tour.title:""}</Link>
    <br/>
    <CalendarOutlined style={{fontSize:20,color:'green'}} /> Ngày xuất phát: {schedule.dayStart}
    <br/>
    <CarOutlined style={{fontSize:20,color:'red'}}/> Địa điểm xuất phát: {schedule.addressStart}
    {/* <br/>
    <ClockCircleOutlined  style={{fontSize:20}}/><CountDown dayStart={schedule.dayStart} />  */}
    
    </>:<></>}
    </Spin>
    </>
  )
}

export default TourInvoice