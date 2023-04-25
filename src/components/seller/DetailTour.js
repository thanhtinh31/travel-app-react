import axios from 'axios'
import React, { useState } from 'react'
import BaseUrl from '../../util/BaseUrl'
import { useEffect } from 'react'
import { Spin } from 'antd'
function DetailTour(props) {
    const [loading,setLoading] =useState(true)
    const [detail,setDetail]=useState({})
    async function fetchData() {
        try {  
            setLoading(true)
          const del = await axios.get(BaseUrl+'tour/'+props.idTour)
          setDetail(del?.data)
         setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        fetchData();
      }, [props.idTour]);
  return (
    <Spin spinning={loading}>
    <div>Tour:{detail?detail.title:""} <br/>
         Địa chỉ:{detail?detail.address:""} <br/>
    </div>
    </Spin>
  )
}

export default DetailTour