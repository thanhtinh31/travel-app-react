import { Col, Divider, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import TopTourChart from '../../components/admin/TopTourChart'
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';


function ThongKeTourPage() {
    const [tongquat,setTongquat]=useState();
    const [top,setTop]=useState(5);
    async function fetchData(top) {
        try {  
          const res = await axios.get(BaseUrl+'thongke/thongketour')
          setTongquat(res?.data)
        } catch (error) {
          console.error(error);
        }
      }
    useEffect(() => {
        fetchData()
      }, []);
  return (
    <>
    <Divider orientation="left">Tổng quan</Divider>
    <Row>
      <Col span={6} order={1}>
        Tổng số danh mục {tongquat?tongquat.countCategory:0}
      </Col>
      <Col span={6} order={2}>
        Tổng số dịch vụ {tongquat?tongquat.countService:0}
      </Col>
      <Col span={6} order={3}>
        Tổng số tour {tongquat?tongquat.countTour:0}
      </Col>
      <Col span={6} order={4}>
        ...
      </Col>
    </Row>
    <Divider orientation="left">Biểu đồ thống kê</Divider>
    <Row>
      <Select
      value={top}
      onChange={(value)=>{setTop(value)}}
       options={[
        {
          value: 5,
          label: 'Top 5',
        },
        {
          value: 10,
          label: 'Top 10',
        },
      ]}>
        
      </Select>
      <Col flex={3} span={15}>
        <TopTourChart top={top}/>
      </Col>
      <Col flex={2}>3 / 5</Col>
    </Row>
    </>
  )
}

export default ThongKeTourPage