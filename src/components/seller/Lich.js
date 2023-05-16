import React from 'react'
import { useState } from 'react'
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
import { useEffect } from 'react';
import { Badge, Spin } from 'antd';
import { Link } from 'react-router-dom';

function Lich(props) {
    const [data,setData] =useState([]);
    const [loading,setLoading]=useState(true);
   
    const getListData =async (value) => {
        setLoading(true)
        const month=(value.month()+1)<10?('0'+(value.month()+1)):(value.month()+1);
        const day=(value.date()<10)?('0'+value.date()):(value.date());
        const data=await axios.get(BaseUrl+'schedule/getlistschedulebydaystart?dayStart='+month+'/'+day+'/'+value.year())
        
        setData(data?.data);
        setLoading(false);
      };
      useEffect(() => {
        getListData(props.date);
      }, [props.date]);
  return (
    <>
    <Spin spinning={loading} >
     {data.map((item) => (
              
              <li key={item.id}>
                <Badge status={item.progress==3?'error':item.progress==2?'success':'processing'}/>
                <Link to={"/detailtour?id="+item.idTour} target='_blank'>{item.tour} - xuất phát {item.addressStart} </Link><br/>
                {item.status==false?<><span style={{color:'red'}}>(Đã khóa)</span></>:<></>}
              </li>
            ))}
            </Spin>
    </>
  )
}

export default Lich