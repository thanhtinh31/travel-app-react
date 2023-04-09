import { Badge, Button, Dropdown, Space, Table } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import BaseUrl from '../../util/BaseUrl';
import { useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';

function Schedule(props) {
    const [schedules,setSchedules]=useState([]);
    const [loading,setLoading] =useState(true);
    async function fetchData() {
        try {  
          const sche = await axios.get(BaseUrl+'schedule/'+props.id)
          setSchedules(sche?.data)
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
     
      useEffect(() => {
        fetchData();
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
            title: 'Status',
            key: 'state',
            render: () => <Badge status="success" text="Finished" />,
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
       // const data = axios.get(BaseUrl+"getAllschedule/"+id);
        //console.log(data)
        // return <Table columns={columns} dataSource={data} pagination={false} />;
  return (<>
    <Table columns={columns} dataSource={schedules} pagination={false} loading={loading} />
    <Button type='primary'><PlusOutlined />Thêm mới</Button>
    </>
  )
}

export default Schedule