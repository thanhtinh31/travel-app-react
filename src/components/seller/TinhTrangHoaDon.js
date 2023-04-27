import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BaseUrl from '../../util/BaseUrl';
import { Badge, Spin } from 'antd';

function TinhTrangHoaDon(props) {
    const [loading,setLoading]=useState(true);
    const [tour,setTour] = useState();
    const [schedule,setSchedule] = useState();
    const [status,setStatus]=useState(0);
    const [type,setType]=useState(props.type);
    const [hantt,setHantt]=useState();
    let a=new Date()
    let today=new Date()
    a.setDate(a.getDate()+3)
    const fetchData=async()=>{
     try {  
      setLoading(true)
         const sche = await axios.get(BaseUrl+'schedule/getschedule/'+props.id)
         setSchedule(sche?.data)
         const daystart=new Date(sche?.data.dayStart);
         let b= new Date(sche?.data.dayStart);
         b.setDate(b.getDate()-3)
         setHantt(b.getDate()+"/"+(b.getMonth()+1)+"/"+b.getFullYear());
         
         if(type=="3") setStatus(5); else
         if(a>daystart&&daystart<today){
                if(type=="0"||type=="1") setStatus(4);else
                setStatus(3);
                
         }else{
                if(type=="0") setStatus(0);else
                if(type=="1") setStatus(1);else
                if(daystart>today) setStatus(2); else setStatus(3)    
         }
         setLoading(false)
       } catch (error) {
         console.error(error);
       }
    }
    useEffect(() => {
     fetchData();
     
   }, [status,props.id,type]);
  return (
    <Spin spinning={loading}>
    {status==1||status==0||status==4?<>TT trước <span style={{color:'red'}}> {schedule?hantt:""}</span></>:<></>}
    <div>{status==0?<Badge status='processing' text={"Chờ xác nhận"}/>:status==1?<Badge status='warning' text="Chưa thanh toán"/>:status==2?<Badge status='warning' text="Sắp khởi hành"/>:status==3?<Badge status='success' text="Hoàn thành"/>:status==4?<Badge status='default' text="Trễ thanh toán"/>:<Badge status='error' text="Đã hủy"/>}</div>
    </Spin>
  )
}

export default TinhTrangHoaDon