import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
import SellerLayout from '../../layout/SellerLayout';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import BaseUrl from '../../util/BaseUrl';
import Schedule from '../../components/seller/Schedule';
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];
function SchedulePage() {
    const [tours,setTours] =useState();
    const [loading,setLoading] =useState(true);
    async function fetchData() {
        try {  
          const tour = await axios.get(BaseUrl+'tour?size=1000')
          setTours(tour?.data.content)
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
          title: 'Tour',
          dataIndex: 'title',
          key: '1',
          width: '30%',
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'address',
          key: '2',
        },
        {
          title: 'Thới gian',
          dataIndex: 'inteval',
          key: 'inteval',
        },
        {
          title: 'Giá tour',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Giảm giá',
          dataIndex: 'sale',
          key: 'sale',
        },
        {
          title: 'Date',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: 'Action',
          key: 'operation',
          render: () => <a>Publish</a>,
        },
      ];
      

  return (
    
    
    <Table loading={loading}
      columns={columns}
      rowKey={(record)=> record.id}
      expandable={{
        expandedRowRender: (record) => (
          <>
          <Schedule id={record.id}/>
          </>
        ),
      }}
      dataSource={tours}
      size="small"
    />
  )
}

export default SchedulePage