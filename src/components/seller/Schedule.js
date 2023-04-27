import { Badge, Button, Col, Dropdown, Modal, Row, Select, Space, Table } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import BaseUrl from '../../util/BaseUrl';
import { useEffect } from 'react';
import { PlusOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import DetailSchedule from './DetailSchedule';
import AddSchedule from './AddSchedule';
import { toast } from 'react-toastify';
import EditSchedule from './EditSchedule';
import DetailPeople from './DetailPeople';


function Schedule(props) {
    const [open,setOpen] =useState(false)
    const [open1,setOpen1] =useState(false)
    const [open2,setOpen2] =useState(false)
    const [schedules,setSchedules]=useState([]);
    const [loading,setLoading] =useState(true);
    const [status,setStaus] =useState("0");
    const [idSchedule,setIdSchedule] =useState();
    const onChange=(e)=>{
      setStaus(e)
      fetchData(e);
    }
    const themmoi=(e)=>{
      setOpen1(true)
    }
    const xem=(e)=>{
      setOpen(true)
      setIdSchedule(e)
    }
    const edit=(e)=>{
      setOpen2(true)
      setIdSchedule(e)
    }
    const themmoithanhcong=()=>{
      props.load();
      fetchData("0");
      toast.success("Thành công")
      setOpen1(false)
      setOpen2(false);
    }
    const deleteHandle= async(id)=>{
      if(window.confirm("Xác nhận xóa")){
      try {  
        const del = await axios.delete(BaseUrl+'schedule/'+id)
        if(del?.data.status=="0")
        toast.error(del?.data.message);
        else{
          fetchData("0")
          toast.success(del?.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }

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
      }, [props.load()]);

        const columns = [
          {
            title: 'Ngày khởi hành',
            dataIndex: 'dayStart',
            key: 'date',
          },
          {
            title: 'Điểm xuất phát',
            dataIndex: 'addressStart',
            key: 'address',
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
            title:'Số lượng (Người)',
            render:(record) => {
              return (
                <>
                 <DetailPeople idSchedule={record.id}/>
                </>
              );
            } 
          }
          ,
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
            title: 'Thống kê',
            key:'10',
            render: (record) => {
              return (
                <Button onClick={()=>{xem(record.id)}} >Xem</Button>
              )}
          },
          {
            title: 'Thao tác',
            key: 'action',
            render: (record) => (
              <>
                  <EditOutlined
                  onClick={()=>{edit(record.id)}}
                style={{ color: "green", marginLeft: 12,fontSize: '20px'}}
                  />
                  <DeleteOutlined
                    onClick={() => {deleteHandle(record.id);
                    }}
                    style={{ color: "red", marginLeft: 12 ,fontSize: '20px'}}
                  />
                </>
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
    /><br/><br/>
    <Button type='primary' onClick={themmoi}><PlusOutlined />Thêm mới</Button>
    </Col>
    <Col span={20}>{schedules[0]?
    <Table columns={columns} dataSource={schedules} pagination={false} loading={loading} />
    :<>Không có dữ liệu</> }
    </Col>
   </Row>
   <br/>
   

    <Modal
        title={"Thêm mới lịch trình"}
        footer={null}
        okText=''
        cancelText='Thoát'
        okType='ghost'
        centered
        open={open1}
        onCancel={() => setOpen1(false)}
        width={800}   
      >  
      <AddSchedule thanhcong={themmoithanhcong} idTour={props.id}/>

      </Modal>

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
      {idSchedule?<DetailSchedule id={idSchedule}/>:<></>}
      </Modal>
      <Modal
        title={"THỐNG KÊ"}
        footer={null}
        okText=''
        cancelText='Thoát'
        okType='ghost'
        centered
        open={open2}
        onCancel={() => setOpen2(false)}
        width={800}   
      >        
      {idSchedule?<EditSchedule id={idSchedule} thanhcong={themmoithanhcong}/>:<></>}
      </Modal>
   
    </>
  )
}

export default Schedule