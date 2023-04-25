import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BaseUrl from '../../util/BaseUrl';
import { type } from '@testing-library/user-event/dist/type';
import { Spin } from 'antd';

function TinhTrangHoaDon(props) {
    const [loading,setLoading]=useState(true);
    const [tour,setTour] = useState();
    const [schedule,setSchedule] = useState();
    const [status,setStatus]=useState("");
    const [type,setType]=useState(props.type)
    let a=new Date()
    a.setDate(a.getDate()+3)
    const fetchData=async()=>{
     try {  
      setLoading(true)
         const sche = await axios.get(BaseUrl+'schedule/getschedule/'+props.id)
         setSchedule(sche?.data)
         const daystart=new Date(sche?.data.dayStart);
         console.log(a+10<daystart)
         if(type=="3") setStatus("Đã hủy"); else
         if(a>daystart){
                if(type=="0"||type=="1") setStatus("Trễ");else
                setStatus("Đã hoàn thành chuyến đi");
                
         }else{
                if(type=="0") setStatus("Chờ xác nhận");else
                if(type=="1") setStatus("Chưa thanh toán");else
                setStatus("Đã thanh toán- Chưa đi");    
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
    <div>{status}</div>
    </Spin>
  )
}

export default TinhTrangHoaDon