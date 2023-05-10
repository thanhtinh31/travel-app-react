import React from 'react'
import { useEffect } from 'react';
import BaseUrl from '../../util/BaseUrl';
import axios from 'axios';
import TopAccountChart from '../../components/admin/TopAccountChart';
import { Card, Col, Divider, Row, Select, Statistic } from 'antd';
import { useState } from 'react';
import AccountPieChart from '../../components/admin/AccountPieChart';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

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
    <Row gutter={30}>
      <Col span={6} order={1}>
      <Card bordered={false} style={{backgroundColor:'burlywood'}}>
        <Statistic
          title="Tài khoản Admin"
          value={tongquat?tongquat.admin:0}
          precision={0}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="- Account"
        />
      </Card>
         
      </Col>
      <Col span={6} order={2}>
      <Card bordered={false} style={{backgroundColor:'gray'}}>
        <Statistic
          title="Tài khoản Seller"
          value={tongquat?tongquat.seller:0}
          precision={0}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="- Account"
        />
      </Card>
        
      </Col>
      <Col span={6} order={3}>
      <Card bordered={false} style={{backgroundColor:'#E6E6FA'}}>
        <Statistic
          title="Tài khoản user"
          value={tongquat?tongquat.user:0}
          precision={0}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="- Account"
        />
      </Card>
         
      </Col>
      <Col span={6} order={4}>
      <Card bordered={false} style={{backgroundColor:'InfoBackground'}}>
        <Statistic
          title="Tài khoản bị khóa"
          value={tongquat?tongquat.lock:0}
          precision={0}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="- Account"
        />
      </Card>
         
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