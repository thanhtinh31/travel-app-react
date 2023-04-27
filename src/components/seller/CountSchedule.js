import { Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BaseUrl from '../../util/BaseUrl';

function CountSchedule(props) {
    const [count,setCount]=useState(0);
    const [loading,setLoading] =useState(true);
    async function fetchData() {
        try {  
          const sche = await axios.get(BaseUrl+'schedule/countactive/'+props.id)
          setCount(sche?.data)
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        fetchData();
      }, [props.id,count]);
    return (
        <Spin spinning={loading}>
    <div>{count==0?"Chưa có lịch":count}</div>
    </Spin>
  )
}

export default CountSchedule