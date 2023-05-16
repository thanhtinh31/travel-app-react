import { Badge, Calendar, Spin } from 'antd'
import axios from 'axios';
import React from 'react'
import BaseUrl from '../../util/BaseUrl';
import Lich from './Lich';
import { useState } from 'react';

function LichTour() { 
    const [loading,setLoading]=useState(false);
    const cellRender = (current) => {
      console.log(current)
         return <Lich date={current}/>
      };
  return (
    <div>
      <Spin spinning={loading}>
        <Calendar cellRender={cellRender} onChange={(current)=>{setLoading(true);cellRender(current);setLoading(false)}}  />
        </Spin>
    </div>
  )
}

export default LichTour