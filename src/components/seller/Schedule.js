import { Badge, Button, Col, Dropdown, Row, Select, Space, Table } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import BaseUrl from '../../util/BaseUrl';
import { useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';

function Schedule(props) {
    const [schedules,setSchedules]=useState([]);
    const [loading,setLoading] =useState(true);
    const [status,setStaus] =useState("0");
    const onChange=(e)=>{
      setStaus(e)
      fetchData(e);
    }
    async function fetchData(st) {
        try {  
          const sche = await axios.get(BaseUrl+'schedule/'+st+'/'+props.id)
          setSchedules(sche?.data)
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        fetchData(status);
      }, []);

        const columns = [
          {
            title: 'Ngày khởi hành',
            dataIndex: 'dayStart',
            key: 'date',
          },
          {
            title: 'Hướng dẫn viên',
            dataIndex: 'tourGuide',
            key: 'name',
          },
          {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Trạng thái',
            key: 'state',
            render:(record) => {
              return (
                <>
                 {status=="0"?<Badge status={"success"} text="Chưa bắt đầu" />:<Badge status={"error"} text="Kết thúc" />}
                </>
              );
            } 
          },
          {
            title: 'Upgrade Status',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
              <Space size="middle">
                <a>Pause</a>
                <a>Stop</a>
                
              </Space>
            ),
          },
        ];
  return (<><Row>
    <Col><Select
    
      value={status}
      style={{
        width: 140,
      }}
      onChange={(e)=>{onChange(e)}}
      options={[
        {
          value: '0',
          label: 'Chưa khởi hành',
        },
        {
          value: '1',
          label: 'Đã kết thúc',
        },
      ]}
    /></Col>
    <Col span={20}>{schedules[0]?
    <Table columns={columns} dataSource={schedules} pagination={false} loading={loading} />
    :<>Không có dữ liệu</> }
    </Col>
   </Row>
   <Row>
    <Col push={11}>
    <Button type='primary'><PlusOutlined />Thêm mới</Button>
    </Col>
    </Row>
   
    </>
  )
}

export default Schedule