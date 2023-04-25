import React from 'react'
import { useEffect } from 'react';
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
import TopAccountChart from '../../components/admin/TopAccountChart';
import { Col, DatePicker, Divider, Input, Row, Select } from 'antd';
import { useState } from 'react';
import AccountPieChart from '../../components/admin/AccountPieChart';
import DoanhThuTheoThangChart from '../../components/admin/DoanhThuTheoThangChart';
import DoanhThuTheoNgay from '../../components/admin/DoanhThuTheoNgay';
function ThongKeDoanhThuPage() {
  var today = new Date();
  const [tongquat,setTongquat]=useState();
  const [year,setYear]=useState("2023");
  const month=(today.getMonth()+1)<10?('0'+(today.getMonth()+1)):(today.getMonth()+1);
  const [date,setDate] =useState(month+'/'+today.getDate()+'/'+today.getFullYear());
  async function fetchData(top) {
      try {  
        const res = await axios.get(BaseUrl+'thongke/taikhoan')
        setTongquat(res?.data)
      } catch (error) {
        console.error(error);
      }
    }
    const onChange = (date, dateString) => {
      console.log(dateString)
      setYear(dateString)
    };
    const onChangeDate = (date, dateString) => {
      console.log(dateString)
      setDate(dateString)
    };
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
    
    <Col flex={3} span={15}>
    <DatePicker onChange={onChange} picker="year" />
      <DoanhThuTheoThangChart year={year}/>
    </Col>
    <Col flex={2} span={7}>
    <DatePicker onChange={onChangeDate} format={"MM/DD/YYYY"}/>
      <DoanhThuTheoNgay date={date}/>
    </Col>
  </Row>
  </div>
)
}

export default ThongKeDoanhThuPage