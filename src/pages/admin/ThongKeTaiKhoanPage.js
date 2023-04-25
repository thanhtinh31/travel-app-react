import React from 'react'
import { useEffect } from 'react';
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
import TopAccountChart from '../../components/admin/TopAccountChart';
import { Col, Divider, Row, Select } from 'antd';
import { useState } from 'react';
import AccountPieChart from '../../components/admin/AccountPieChart';

function ThongKeTaiKhoanPage() {
    const [tongquat,setTongquat]=useState();
    const [top,setTop]=useState(5);
    async function fetchData(top) {
        try {  
          const res = await axios.get(BaseUrl+'thongke/taikhoan')
          setTongquat(res?.data)
        } catch (error) {
          console.error(error);
        }
      }
    useEffect(() => {
        fetchData()
      }, []);
  return (
    <div>
      <Divider orientation="left">Tổng quan</Divider>
    <Row>
      <Col span={6} order={1}>
        Tài khoản Admin {tongquat?tongquat.admin:0}
      </Col>
      <Col span={6} order={2}>
        Tài khoản Seller {tongquat?tongquat.seller:0}
      </Col>
      <Col span={6} order={3}>
        Tài khoản user {tongquat?tongquat.user:0}
      </Col>
      <Col span={6} order={4}>
        Tài khoản bị khóa {tongquat?tongquat.lock:0}
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
        <TopAccountChart top={top}/>
      </Col>
      <Col flex={2} span={7}>
        <AccountPieChart/>
      </Col>
    </Row>
    </div>
  )
}

export default ThongKeTaiKhoanPage