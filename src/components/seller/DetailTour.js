import axios from 'axios'
import React, { useState } from 'react'
import BaseUrl from '../../util/BaseUrl'
import { useEffect } from 'react'
import { Spin } from 'antd'
import { MdLocationOn } from 'react-icons/md'
import { HeartFilled } from '@ant-design/icons';
import { green } from '@mui/material/colors'
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
    <div><HeartFilled style={{fontSize:17,color:green}} /> {detail?detail.title:""} <br/>
    <div className='flex'><MdLocationOn size={20} color='red' />{detail?detail.address:""}</div>
    
    </div>
    </Spin>
  )
}

export default DetailTour