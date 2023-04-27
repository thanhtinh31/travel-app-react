import axios from 'axios'
import React, { useState } from 'react'
import BaseUrl from '../../util/BaseUrl'
import { useEffect } from 'react'
import { Badge, Spin } from 'antd'

function DetailPeople(props) {
    const [loading,setLoading]=useState(true)
    const [detail,setDetail]=useState({})
    async function fetchData(st) {
        setLoading(true)
        try {  
          const del = await axios.get(BaseUrl+'schedule/detailpeople/'+props.idSchedule)
          setDetail(del?.data)
         setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        fetchData();
      }, [props.idSchedule]);
  return (
    <Spin spinning={loading}>
    {detail?
    <div>
     {detail.dachot!=0?<><Badge status={"success"} text={detail.dachot+" Người(Đã thanh toán)"} /> <br/></>:<></>} 
     {detail.chuachot!=0?<><Badge status={"warning"} text={detail.chuachot+" Người(Chưa thanh toán)"} />  <br/></>:<></>}
     {detail.choxacnhan!=0?<><Badge status={"processing"} text={detail.choxacnhan+" Người(Chờ xác nhận)"} /> <br/></>:<></>}
     {detail.dahuy!=0?<><Badge status={"default"} text={detail.dahuy+" Người(Đã hủy)"} /> <br/></>:<></>} 
     {detail.chuachot==0&&detail.dachot==0&&detail.dahuy==0&&detail.choxacnhan==0?<>Chưa có người đặt</>:<></>} 
    </div>:<></>
    }
    </Spin>
  )
}

export default DetailPeople