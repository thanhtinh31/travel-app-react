import React from 'react'
import { useState } from 'react';
import DetailTour from '../../components/seller/DetailTour';
import CountDown from '../../components/user/CountDown';
import { Button, Col, Drawer, Input, Row, Select, Table, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { UserOutlined,CalendarOutlined,CarOutlined,MailOutlined,PhoneOutlined } from '@ant-design/icons';

function RequestPage() {
    const [loading,setLoading] =useState(true);
    const [schedule, setSchedules] = useState([]);
    const [loadingstatus,setLoadingStatus]=useState(false);
    const [loai,setLoai] =useState("0");
    const [id,setId]=useState();
    const [open,setOpen]=useState(false);
    const [tourGuide,setTourGuide]=useState("");
    const [phone,setPhone]=useState("");
    const columns = [
      {
        title: 'Thông tin người đặt',
        render: (record) => {
          return (
             <>
             <UserOutlined style={{fontSize:20}} /> {record.fullName}<br/>
             <MailOutlined  style={{fontSize:20}} /> {record.email}<br/>
             <PhoneOutlined style={{fontSize:20}} /> {record.phone}<br/>
             </>
          );},
          width:"20%",
          ellipsis: true,
      },
        {
          title: 'Tour',
          render: (record) => {
            return (
              <>
              <DetailTour idTour={record.idTour}/>
              </>
            )},
            width:"20%",
          ellipsis: true,
        },
        {
            title: 'Xuất phát',
            render: (record) => {
              return (
                <><Row> <Col>
                <CalendarOutlined style={{fontSize:18}} />{"        "+record.dayStart}<br/>
                <CarOutlined style={{fontSize:18}}/>{"       "+record.addressStart}
                </Col>
                <Col push={4}>
                  <CountDown dayStart={record.dayStart}/>
                </Col>
                </Row>
                </>
              )},
              width:"20%"
        },
        {
          title: 'Số lượng người',
          render: (record) => {
            return (
              <>
              {record.people}
              </>
            )},
            width:"7%"
        },
        
        {
          title: 'Trạng thái',
          render: (record) => {
            return (
              <>
             {record.accept==1?"Đã phê duyệt":record==2?"Đã hủy":"Chưa phê duyệt"}
              </>
            )},
            width:"8%"
        },

        {
          title: 'Thao tác',
          render: (record) => {
            return (
                <>
              {record.accept==0?<> <Button onClick={()=>{setId(record.id);setOpen(true)}}>Chấp nhận</Button>
              <Button onClick={()=>{handleCancel(record.id)}}>Hủy</Button></>:<></>}
              {/* {record.accept==1?
              <Button onClick={()=>{changeProgress(record.id,0)}} style={{color:'blueviolet'}}> Mở đặt</Button>:<></>} */}
              {record.accept==2?
              <Button onClick={()=>{deleteHandle(record.id)}} style={{color:'blueviolet'}}> Xóa</Button>:<></>}
             
              </>
            )},
            width:"8%"
        },
        
    ];   
    const changeAccept=async(id)=>{
      if(window.confirm("Xác nhận")){
        let obj={tourGuide,phone}
        try {  
          const accept = await axios.put(BaseUrl+'request/accept/'+id,obj)
          message.success('Thành công !')
          fetchData(loai);

        } catch (error) {
          console.error(error);
        }
      }

    }
    const deleteHandle= async(id)=>{
      if(window.confirm("Xác nhận xóa")){
        try {  
          const accept = await axios.delete(BaseUrl+'request/'+id)
          message.success('Xóa thành công !')
          fetchData(loai);

        } catch (error) {
          console.error(error);
        }
      }
    }
    const handleCancel=async(id)=>{
      if(window.confirm("Xác nhận")){
        try {  
          const accept = await axios.put(BaseUrl+'request/cancel/'+id)
          message.success('Hủy thành công !')
          fetchData(loai);

        } catch (error) {
          console.error(error);
        }
      }

    }
    const handleChange = async (id,status) => {
        let reg={status,id}
        try {  
            const stt= await axios.put(BaseUrl+'schedule/changestatus',reg)
            status==false?
            toast.success("Chốt tour thành công"):toast.success("Mở đặt tour thành công")
        } catch (error) {
            console.error(error);
          }
          fetchData(loai)
      };
    const onChange = async (checked,id) => {
    
      };   
    async function fetchData(loai) {
      try {  
        setLoading(true)
        const account= await axios.get(BaseUrl+'request/accept/'+loai)
        setSchedules(account.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      fetchData(loai);
    }, []);
    
     
    return <>
    <Select
      value={loai}
      onChange={(value)=>{setLoai(value);fetchData(value)}}
       options={[
        {
          value: "0",
          label: 'Yêu cầu mới',
        },
        {
          value: "1",
          label: 'Đã chấp nhận',
        },
        {
          value: "2",
          label: 'Đã hủy',
        },
        
      ]}>
        
      </Select>
    <h1>Danh sách  {loai==="0"?"Yêu cầu mới":loai==="1"?"Đã chấp nhận":"Đã hủy"}</h1>
      <Table rowKey={schedule.idSchedule} columns={columns} dataSource={schedule} loading={loading}/> 
      <Drawer title="Xác nhận tạo tour" placement="right" onClose={()=>{setOpen(false)}} open={open}>
        <p>{id}</p>
        Nhập hướng dẫn viên:
        <Input value={tourGuide} onChange={(e)=>{setTourGuide(e.target.value)}} ></Input>
        <br/>
        Nhập Số điện thoại:
        <Input type='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} ></Input>
        <Button onClick={()=>{changeAccept(id)}} >Tạo lịch trình</Button>
      </Drawer>
    </>
}

export default RequestPage