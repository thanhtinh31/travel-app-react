import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Badge, Button, Dropdown, Modal, Space, Table } from 'antd';
import SellerLayout from '../../layout/SellerLayout';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import BaseUrl from '../../util/BaseUrl';
import Schedule from '../../components/seller/Schedule';
import DetailSchedule from '../../components/seller/DetailSchedule';
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
    const [open,setOpen] =useState(false)
    const [tours,setTours] =useState();
    const [loading,setLoading] =useState(true);
    const [idTour,setIdTour] =useState();
    async function fetchData() {
        try {  
          const tour = await axios.get(BaseUrl+'tour?size=1000')
          setTours(tour?.data.content)
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
        
      }
      const xem=(e)=>{
        setOpen(true)
        setIdTour(e)
      }
     
      useEffect(() => {
        fetchData();
      }, [idTour]);

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
          render: (record) => {
            return (
              <>
               {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
              }).format(record.price)}
              </>
            );
          },
          key: 'price',
        },
        {
          title: 'Giảm giá',
          render: (record) => {
            return (
              <>
            {record.sale*100} %
              </>
            );
          },
          key: 'sale',
        },
        // {
        //   title: 'Hành trình',
        //   key:'10',
        //   render: (record) => {
        //     return (
        //       <Button onClick={()=>{xem(record.id)}} >Xem</Button>
        //     )}
        // },
        // {
        //   title: 'Action',
        //   key: 'operation',
        //   render: () => <a>Publish</a>,
        // },
      ];
  return (
    <>
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
    
    <Modal
        title={"THỐNG KÊ"}
        footer={null}
        okText=''
        cancelText='Thoát'
        okType='ghost'
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={800}   
      >        
      {idTour?<DetailSchedule id={idTour}/>:<></>}
      </Modal>
    </>
  )
}

export default SchedulePage